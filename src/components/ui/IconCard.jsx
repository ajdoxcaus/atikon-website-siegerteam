import React from 'react';

export default function IconCard({ icon, title, text }) {
  return (
    <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
      <div className="text-orange-600 mb-4">{React.cloneElement(icon, { size: 32 })}</div>
      <h4 className="text-lg font-extrabold text-violet-900 uppercase mb-2">{title}</h4>
      <p className="text-sm text-gray-500">{text}</p>
    </div>
  );
}
