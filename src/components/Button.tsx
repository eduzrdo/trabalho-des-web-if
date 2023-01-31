import { PropsWithChildren, ButtonHTMLAttributes } from 'react';

interface ButtonProps
  extends PropsWithChildren,
    ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <button {...rest} className="min-w-[150px] flex justify-center items-center gap-2 p-4 rounded-lg text-white bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500">
      {children}
    </button>
  );
};
