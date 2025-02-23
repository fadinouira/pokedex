import './Input.css';
import { InputProps } from './Input.type';

export function Input({ state = 'default', inputSize = 'medium', ...props }: InputProps) {
  return <input {...props} className={[state, inputSize].join(' ')} />;
}
