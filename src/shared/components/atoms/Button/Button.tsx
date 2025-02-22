import './Button.css';
import { ButtonProps } from './Button.type';

export function Button({ label, children, ...props }: ButtonProps) {
  return (
    <button type="button" {...props}>
      {label ?? children}
    </button>
  );
}
