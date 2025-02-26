import { PageContainer } from '@/shared';
import { useParams } from 'react-router';
import { useGetPokemon } from '../../api';
import { LoadingPokemonPage } from '../LoadingPokemonPage';

export function ViewPokemonPage() {
  const { id } = useParams<{ id: string }>();

  // TODO: Add a skipToken to useQuery hook
  const { data, isLoading } = useGetPokemon(id ?? '');

  if (isLoading) {
    return <LoadingPokemonPage />;
  }

  return (
    <PageContainer backgroundColor={`pokemon-${data?.types[0].name}`}>{data?.name}</PageContainer>
  );
}
