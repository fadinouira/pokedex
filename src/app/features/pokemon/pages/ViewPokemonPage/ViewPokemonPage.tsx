import { PageContainer } from '@/shared';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';
import { useGetPokemon } from '../../api';
import { PokemonCard } from '../../components';
import { generateColorTokenByTypeName } from '../../utils';
import { LoadingPokemonPage } from '../LoadingPokemonPage';

export function ViewPokemonPage() {
  const { id } = useParams<{ id: string }>();
  const { i18n } = useTranslation();

  // TODO: Add a skipToken to useQuery hook
  const { data, isLoading } = useGetPokemon({
    identifier: id ?? '',
    lng: i18n.language,
  });

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
