export default function Badge({ text }) {
  return (
    <span className="bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-extrabold uppercase tracking-widest">
      {text}
    </span>
  );
}
