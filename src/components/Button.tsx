import { PropsWithChildren, ButtonHTMLAttributes } from 'react';

interface ButtonProps
  extends PropsWithChildren,
    ButtonHTMLAttributes<HTMLButtonElement> {
  buttonStyle?: 'primary' | 'secondary' | 'success';
  fullWidth?: boolean;
}

export const Button = ({
  children,
  buttonStyle = 'primary',
  fullWidth,
  ...rest
}: ButtonProps) => {
  let style =
    'min-w-[150px] flex justify-center items-center gap-2 p-4 rounded-lg';

  style +=
    buttonStyle === 'primary'
      ? ' text-white text-white bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500'
      : buttonStyle === 'secondary'
      ? ' bg-transparent text-zinc-600'
      : ' text-white text-white bg-gradient-to-tr from-lime-500 via-green-500 to-emerald-500';

  style += fullWidth ? ' w-full' : '';

  style;

  return (
    <button
      {...rest}
      className={style}
    >
      {children}
    </button>
  );
};
