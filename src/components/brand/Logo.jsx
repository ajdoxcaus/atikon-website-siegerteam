import { COLORS } from '../../styles/globalStyles';

export default function Logo({ bg = 'white' }) {
  const isWhiteBg = bg === 'white';
  const isYellowBg = bg === 'yellow';
  const mainColor = isWhiteBg ? COLORS.orange : COLORS.white;
  const subColor = isWhiteBg || isYellowBg ? COLORS.black : COLORS.white;

  return (
    <div className="flex flex-col justify-center min-h-[100px] select-none">
      <div className="flex flex-col">
        <span className="text-5xl font-extrabold tracking-tighter leading-[0.85]" style={{ color: mainColor }}>
          Atikon
        </span>
        <span className="text-lg font-semibold italic self-end mt-1" style={{ color: subColor }}>
          Alles Marketing
        </span>
      </div>
    </div>
  );
}
