import { generateStyleToken } from '@/shared/utils';
import './Tag.css';
import { TagProps } from './Tag.type';

export function Tag({
  label,
  children,
  size = 'medium',
  color = 'brand-primary-foreground',
  backgroundColor = 'brand-primary',
  ...props
}: TagProps) {
  return (
    <div
      {...props}
      style={{
        ...props.style,
        color: generateStyleToken('color', color),
        backgroundColor: generateStyleToken('color', backgroundColor),
      }}
      className={['tag', size].join(' ')}
    >
      {label ?? children}
    </div>
  );
}
