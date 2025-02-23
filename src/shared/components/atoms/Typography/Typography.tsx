import { generateStyleToken } from '@/shared/utils';
import { useMemo } from 'react';
import { TypographyProps } from './Typography.type';

function Typography({
  component = 'div',
  label,
  children,
  className,
  color,
  font,
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
  style,
  ...props
}: TypographyProps) {
  const Tag = useMemo(() => component || 'div', [component]);

  return (
    <Tag
      className={className}
      style={{
        ...style,
        color: color ? generateStyleToken('color', color) : undefined,
        fontFamily: font ? generateStyleToken('font', font) : undefined,
        fontSize: fontSize ? generateStyleToken('font-size', fontSize) : undefined,
        fontWeight: fontWeight ? generateStyleToken('font-weight', fontWeight) : undefined,
        lineHeight: lineHeight ? generateStyleToken('line-height', lineHeight) : undefined,
        letterSpacing: letterSpacing
          ? generateStyleToken('letter-spacing', letterSpacing)
          : undefined,
      }}
      {...props}
    >
      {label ?? children}
    </Tag>
  );
}

export default Typography;
