import { PageContainer, Typography } from '@/shared';
import PokeBallImage from '@/shared/assets/images/pokeball.png';
import { useTranslation } from 'react-i18next';
import './LoadingPokemonPage.css';

export function LoadingPokemonPage() {
  const { t } = useTranslation();

  return (
    <PageContainer backgroundColor="brand-primary">
      <div className="loading-page-content">
        <img src={PokeBallImage} />
        <Typography font="display" color="bg-light" fontSize="xl" lineHeight="xl">
          {t('pokemon.searching')}
        </Typography>
      </div>
    </PageContainer>
  );
}
