import { PageContainer } from '@/shared';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';
import { useGetPokemon } from '../../api';
import { PokemonCard } from '../../components';
import { generateColorTokenByTypeName } from '../../utils';
import { LoadingPokemonPage } from '../LoadingPokemonPage';

export function ViewPokemonPage() {
  const { id } = useParams<{ id: string }>();
  const { i18n } = useTranslation();

  const options = useMemo(
    () => ({
      identifier: id ?? '',
      lng: i18n.language,
    }),
    [id, i18n.language],
  );

  // TODO: Add a skipToken to useQuery hook
  const { data, isLoading } = useGetPokemon(options);

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
  // TODO: Add error handling here
  return <></>;
}
