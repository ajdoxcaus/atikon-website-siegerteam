import { COLORS } from '../../styles/globalStyles';

export default function Claim({ align = 'left', bgContext = 'white' }) {
  const color = bgContext === 'white' || bgContext === 'violet' ? COLORS.orange : COLORS.violet;

  return (
    <div className={`font-extrabold text-5xl md:text-7xl leading-[1.0] uppercase ${align === 'right' ? 'text-right' : 'text-left'}`} style={{ color }}>
      ERFOLG
      <br />
      BEGINNT
      <br />
      IM KOPF!
    </div>
  );
}
