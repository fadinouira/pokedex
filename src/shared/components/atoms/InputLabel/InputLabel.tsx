import { generateStyleToken } from '@/shared/utils';
import './InputLabel.css';
import { InputLabelProps } from './InputLabel.type';

export function InputLabel({ label, children, color = 'text-label', ...props }: InputLabelProps) {
  return (
    <label
      style={{
        ...props.style,
        color: generateStyleToken('color', color),
      }}
      {...props}
    >
      {label ?? children}
    </label>
  );
}
