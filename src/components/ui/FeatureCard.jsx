import React from 'react';

export default function FeatureCard({ icon, title, text }) {
  return (
    <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-gray-100 text-center">
      <div className="mb-6 flex justify-center">{React.cloneElement(icon, { size: 48 })}</div>
      <h4 className="text-xl font-extrabold text-violet-900 uppercase mb-4">{title}</h4>
      <p className="text-gray-600 leading-relaxed">{text}</p>
    </div>
  );
}
