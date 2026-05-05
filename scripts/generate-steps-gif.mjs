import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { createCanvas, loadImage } from "@napi-rs/canvas";
import gifenc from "gifenc";

const { GIFEncoder, quantize, applyPalette } = gifenc;

const inputPath = process.argv[2];
const outputPath =
  process.argv[3] ??
  path.resolve(process.cwd(), "public", "images", "hero-puzzle-steps.gif");

if (!inputPath) {
  throw new Error(
    "Usage: node scripts/generate-steps-gif.mjs <steps-image.png> [output.gif]",
  );
}

const stepsImage = await loadImage(inputPath);

// The provided storyboard is a 2x3 grid (6 steps).
const cols = 2;
const rows = 3;
const frameWidth = Math.floor(stepsImage.width / cols);
const frameHeight = Math.floor(stepsImage.height / rows);

const canvas = createCanvas(frameWidth, frameHeight);
const ctx = canvas.getContext("2d");

const gif = GIFEncoder();
const fps = 8;
const delay = Math.round(1000 / fps);

for (let i = 0; i < rows * cols; i += 1) {
  const col = i % cols;
  const row = Math.floor(i / cols);
  const sx = col * frameWidth;
  const sy = row * frameHeight;

  ctx.clearRect(0, 0, frameWidth, frameHeight);
  ctx.drawImage(
    stepsImage,
    sx,
    sy,
    frameWidth,
    frameHeight,
    0,
    0,
    frameWidth,
    frameHeight,
  );

  const rgba = ctx.getImageData(0, 0, frameWidth, frameHeight).data;
  const palette = quantize(rgba, 256, { format: "rgb565" });
  const index = applyPalette(rgba, palette, "rgb565");

  gif.writeFrame(index, frameWidth, frameHeight, {
    palette,
    delay,
    repeat: 0,
  });
}

gif.finish();
await mkdir(path.dirname(outputPath), { recursive: true });
await writeFile(outputPath, Buffer.from(gif.bytes()));

console.log(`GIF created: ${outputPath}`);
