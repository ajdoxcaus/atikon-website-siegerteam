import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { createCanvas, loadImage } from "@napi-rs/canvas";
import gifenc from "gifenc";

const { GIFEncoder, applyPalette, quantize } = gifenc;

const inputPath = process.argv[2];
const outputPath =
  process.argv[3] ??
  path.resolve(process.cwd(), "public", "images", "dashboard-puzzle-animated.gif");

if (!inputPath) {
  throw new Error(
    "Missing input image path. Usage: node scripts/generate-dashboard-puzzle-gif.mjs <input.png> [output.gif]",
  );
}

function drawPuzzlePath(ctx, x, y, size) {
  const r = size * 0.16;
  const inset = size * 0.38;
  const outset = size * 0.62;
  const bump = size * 0.12;
  const endX = x + size;
  const endY = y + size;

  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + inset, y);
  ctx.bezierCurveTo(x + inset, y, x + inset + bump, y - bump, x + size * 0.5, y - bump);
  ctx.bezierCurveTo(x + outset - bump, y - bump, x + outset, y, x + outset, y);
  ctx.lineTo(endX, y);
  ctx.lineTo(endX, y + inset);
  ctx.bezierCurveTo(endX, y + inset, endX + bump, y + inset + bump, endX + bump, y + size * 0.5);
  ctx.bezierCurveTo(endX + bump, y + outset - bump, endX, y + outset, endX, y + outset);
  ctx.lineTo(endX, endY);
  ctx.lineTo(x + outset, endY);
  ctx.bezierCurveTo(
    x + outset,
    endY,
    x + outset - bump,
    endY + bump,
    x + size * 0.5,
    endY + bump,
  );
  ctx.bezierCurveTo(x + inset + bump, endY + bump, x + inset, endY, x + inset, endY);
  ctx.lineTo(x, endY);
  ctx.lineTo(x, y + outset);
  ctx.bezierCurveTo(x, y + outset, x - bump, y + outset - bump, x - bump, y + size * 0.5);
  ctx.bezierCurveTo(x - bump, y + inset + bump, x, y + inset, x, y + inset);
  ctx.closePath();

  ctx.lineJoin = "round";
  ctx.lineCap = "round";
  ctx.miterLimit = r;
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

const image = await loadImage(inputPath);
const width = image.width;
const height = image.height;
const canvas = createCanvas(width, height);
const ctx = canvas.getContext("2d");

const tile = Math.max(120, Math.round(width / 12));
const cols = Math.ceil(width / tile) + 3;
const rows = Math.ceil(height / tile) + 3;
const totalFrames = 40;
const fps = 16;
const gif = GIFEncoder();

for (let i = 0; i < totalFrames; i += 1) {
  const t = i / (totalFrames - 1);
  const wave = Math.sin(t * Math.PI * 2);
  const shimmer = (Math.sin(t * Math.PI * 2 - 0.7) + 1) * 0.5;

  ctx.clearRect(0, 0, width, height);
  ctx.drawImage(image, 0, 0, width, height);

  for (let row = -1; row < rows; row += 1) {
    for (let col = -1; col < cols; col += 1) {
      const phase = row * 0.35 + col * 0.25;
      const pulse = 0.9 + 0.08 * Math.sin(t * Math.PI * 2 + phase);
      const size = Math.round(tile * pulse);
      const x = Math.round(col * tile - tile * 0.5);
      const y = Math.round(row * tile - tile * 0.5);
      const hue = (row + col) % 2 === 0 ? 266 : 20;
      const fillAlpha = 0.02 + 0.03 * ((Math.sin(t * Math.PI * 2 + phase) + 1) * 0.5);
      const strokeAlpha = lerp(0.2, 0.45, shimmer);

      ctx.save();
      ctx.shadowBlur = Math.round(width * 0.004);
      ctx.shadowColor = `hsla(${hue}, 100%, 70%, 0.18)`;
      drawPuzzlePath(ctx, x, y, size);
      ctx.fillStyle = `hsla(${hue}, 100%, 55%, ${fillAlpha})`;
      ctx.fill();
      ctx.lineWidth = Math.max(1.2, Math.round(size * 0.01));
      ctx.strokeStyle = `hsla(${hue}, 95%, 78%, ${strokeAlpha * (0.9 + 0.1 * wave)})`;
      ctx.stroke();
      ctx.restore();
    }
  }

  const frame = ctx.getImageData(0, 0, width, height).data;
  const palette = quantize(frame, 256, { format: "rgb565" });
  const index = applyPalette(frame, palette, "rgb565");
  gif.writeFrame(index, width, height, {
    palette,
    delay: Math.round(1000 / fps),
    repeat: 0,
  });
}

gif.finish();
await mkdir(path.dirname(outputPath), { recursive: true });
await writeFile(outputPath, Buffer.from(gif.bytes()));

console.log(`GIF created: ${outputPath}`);
