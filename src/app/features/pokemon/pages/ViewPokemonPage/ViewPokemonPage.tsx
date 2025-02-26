import { PageContainer } from '@/shared';
import { useParams } from 'react-router';
import { useGetPokemon } from '../../api';
import { PokemonCard } from '../../components';
import { generateColorTokenByTypeName } from '../../utils';
import { LoadingPokemonPage } from '../LoadingPokemonPage';

export function ViewPokemonPage() {
  const { id } = useParams<{ id: string }>();

  // TODO: Add a skipToken to useQuery hook
  const { data, isLoading } = useGetPokemon(id ?? '');

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
