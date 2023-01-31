import { AnchorHTMLAttributes } from 'react';

interface MenuItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  label: string;
}

export const MenuItem = ({ label, ...rest }: MenuItemProps) => {
  return (
    <li className="flex items-center gap-2">
      <a
        className="px-2 py-4"
        {...rest}
      >
        {label}
      </a>
    </li>
  );
};
