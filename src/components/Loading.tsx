import { Spinner } from 'phosphor-react';

interface LoadingProps {
  size?: 'small' | 'normal' | 'large' | 'extraLarge';
}

export const Loading = ({ size = 'normal' }: LoadingProps) => {
  const sizes = {
    small: 'text-xl',
    normal: 'text-2xl',
    large: 'text-3xl',
    extraLarge: 'text-4xl',
  };

  return (
    <Spinner
      className={`${sizes[size]} text-purple-500`}
      weight="bold"
    >
      <animateTransform
        attributeName="transform"
        attributeType="XML"
        type="rotate"
        dur="2s"
        from="0 0 0"
        to="360 0 0"
        repeatCount="indefinite"
      ></animateTransform>
    </Spinner>
  );
};
