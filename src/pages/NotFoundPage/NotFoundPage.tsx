import { PageContainer, Typography } from '@/shared';
import NotFoundImage from '@/shared/assets/images/not-found.png';
import { useTranslation } from 'react-i18next';
import './NotFoundPage.css';

export function NotFoundPage() {
  const { t } = useTranslation();

  return (
    <PageContainer backgroundColor="brand-primary">
      <div className="page-content">
        <Typography font="display" color="bg-light" fontSize="5xl" lineHeight="5xl">
          {t('pokemon.not_found')}
        </Typography>
        <img src={NotFoundImage} />
      </div>
    </PageContainer>
  );
}
