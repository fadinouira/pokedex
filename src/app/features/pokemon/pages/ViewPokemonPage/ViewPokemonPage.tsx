import { StatusCodesEnum } from '@/app/config';
import { PageContainer, Typography } from '@/shared';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';
import { useGetPokemon } from '../../api';
import { PokemonCard } from '../../components';
import { generateColorTokenByTypeName } from '../../utils';
import { LoadingPokemonPage } from '../LoadingPokemonPage';
import { PokemonNotFoundPage } from '../PokemonNotFoundPage';

export function ViewPokemonPage() {
  const { id } = useParams<{ id: string }>();
  const { i18n, t } = useTranslation();

  const options = useMemo(
    () => ({
      identifier: id ?? '',
      lng: i18n.language,
    }),
    [id, i18n.language],
  );

  const { data, isLoading, error } = useGetPokemon(options);

  if (isLoading) {
    return <LoadingPokemonPage />;
  }

  if (data) {
    return (
      <PageContainer backgroundColor={generateColorTokenByTypeName(data.types[0].name)}>
        <PokemonCard pokemon={data} />
      </PageContainer>
    );
  }

  if (error?.status === StatusCodesEnum.NOT_FOUND) {
    return <PokemonNotFoundPage />;
  }

  return (
    <PageContainer backgroundColor={'brand-primary'}>
      <Typography fontSize="2xl" color="bg-default" font="display" centerText>
        {t('common.swh')}
      </Typography>
    </PageContainer>
  );
}
