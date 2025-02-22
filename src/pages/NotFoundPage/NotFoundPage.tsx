import { useTranslation } from 'react-i18next';

export function NotFoundPage() {
  const { t } = useTranslation();

  return <h1>{t('common.not_found')}</h1>;
}
