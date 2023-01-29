import { ReactNode } from 'react';

interface HowItWorkProps {
  icon: ReactNode;
  title: string;
  description: string;
  color: 'bg-pink-500' | 'bg-purple-500' | 'bg-indigo-500';
}

export const HowItWorks = ({
  icon,
  title,
  description,
  color,
}: HowItWorkProps) => {
  const rgba = {
    'bg-pink-500': 'rgba(236,72,153,0.5)',
    'bg-purple-500': 'rgba(168,85,247,0.5)',
    'bg-indigo-500': 'rgba(99,102,241,0.5)',
  };

  const shadow = `shadow-[0_16px_14px_${rgba[color]}]`;

  console.log(shadow);

  // shadow-[0_10px_10px_rgba(168,85,247,0.5)]

  return (
    <div className={`flex flex-1 flex-col items-center px-20 text-center`}>
      <div className={`p-5 rounded-xl ${color} ${shadow}`}>{icon}</div>
      <h2 className="text-zinc-900 text-xl font-semibold mt-10">{title}</h2>
      <p className="text-sm mt-3">{description}</p>
    </div>
  );
};
