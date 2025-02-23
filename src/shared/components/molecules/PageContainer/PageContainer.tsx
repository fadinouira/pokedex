import useSmartGoBack from '@/shared/hooks/useSmartGoBack';
import { generateStyleToken } from '@/shared/utils';
import { ArrowButton } from '../../atoms';
import './PageContainer.css';
import { PageContainerProps } from './PageContainer.type';

export function PageContainer({
  children,
  backgroundColor = 'bg-default',
  showBackButton = true,
}: PageContainerProps) {
  const { handleGoBack } = useSmartGoBack();

  return (
    <div
      className={['page-container'].join(' ')}
      style={{
        backgroundColor: generateStyleToken('color', backgroundColor),
      }}
    >
      {showBackButton && <ArrowButton onClick={handleGoBack} className="page-container-button" />}
      <div className={['page-container-content'].join(' ')}>{children}</div>
    </div>
  );
}
