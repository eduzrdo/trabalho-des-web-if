import { PropsWithChildren } from 'react';

interface ButtonProps extends PropsWithChildren {}

export const Button = ({ children }: ButtonProps) => {
  return (
    <button className="min-w-[150px] flex justify-center items-center gap-2 p-4 rounded-lg text-white bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500">
      {children}
    </button>
  );
};
