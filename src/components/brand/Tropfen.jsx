import { COLORS } from '../../styles/globalStyles';

export default function Tropfen({ children, bg = 'violet', rotate = 0, className = '', onClick }) {
  const finalBg = bg === 'violet' ? COLORS.violet : bg === 'orange' ? COLORS.orange : COLORS.yellow;
  const textColor = bg === 'violet' ? COLORS.orange : COLORS.violet;

  return (
    <div
      onClick={onClick}
      className={`relative flex items-center justify-center overflow-hidden transition-all duration-300 shadow-sm ${onClick ? 'cursor-pointer hover:scale-105 active:scale-95' : ''} ${className}`}
      style={{
        backgroundColor: finalBg,
        color: textColor,
        borderRadius: '50% 50% 0 50%',
        transform: `rotate(${rotate}deg)`,
      }}
    >
      <div style={{ transform: `rotate(-${rotate}deg)` }} className="text-center w-full h-full flex items-center justify-center p-4">
        {children}
      </div>
    </div>
  );
}
