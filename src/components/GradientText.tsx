import { PropsWithChildren } from 'react';

export const GradientText = ({ children }: PropsWithChildren) => {
  return (
    <span className="bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
      {children}
    </span>
  );
};
