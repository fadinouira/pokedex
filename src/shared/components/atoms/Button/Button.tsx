import './Button.css';
import { ButtonProps } from './Button.type';

export function Button({
  label,
  children,
  variant = 'primary',
  size = 'medium',
  ...props
}: ButtonProps) {
  return (
    <button type="button" className={['button', variant, size].join(' ')} {...props}>
      {label ?? children}
    </button>
  );
}
