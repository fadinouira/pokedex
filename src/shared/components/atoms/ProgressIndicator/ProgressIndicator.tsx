import { generateStyleToken } from '@/shared/utils';
import { CSSProperties, useMemo } from 'react';
import './ProgressIndicator.css';
import { ProgressIndicatorProps } from './ProgressIndicator.type';

export function ProgressIndicator({
  value,
  max = 100,
  color = 'brand-primary',
  className = '',
}: ProgressIndicatorProps) {
  const safeValue = useMemo(() => Math.max(0, Math.min(value, max)), [value, max]);
  const progressPercent = useMemo(() => (safeValue / max) * 100, [safeValue, max]);

  return (
    <div
      className={['progress-indicator', className].join(' ')}
      style={
        {
          '--current-width': `${progressPercent}%`,
        } as CSSProperties
      }
      data-testid="progress-indicator"
    >
      <div className="progress-indicator__track">
        <div
          className="progress-indicator__fill"
          style={{
            backgroundColor: generateStyleToken('color', color),
          }}
          data-testid="progress-indicator-fill"
        />
      </div>
    </div>
  );
}
