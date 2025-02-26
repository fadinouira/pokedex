import { RouterPaths } from '@/app/config';
import Background from '@/shared/assets/images/pokemon-background.png';
import { useNavigate } from 'react-router';
import { SearchCard, SearchFormType } from '../../components';
import './SearchPokemonPage.css';

export function SearchPokemonPage() {
  const navigate = useNavigate();

  const handleSearch = (data: SearchFormType) => {
    const searchedPokemonPath = RouterPaths.PokemonPaths.pokemonViewPath(data.pokemonIdentifier);
    navigate(searchedPokemonPath);
  };

  return (
    <div
      className="search-pokemon-page"
      style={{
        backgroundImage: `url(${Background})`,
      }}
    >
      <div className="search-pokemon-card-container">
        <SearchCard onSubmit={handleSearch} />;
      </div>
    </div>
  );
}
