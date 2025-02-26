import { useNavigate } from 'react-router';
import { SearchCard, SearchFormType } from '../../components';
import Background from '@/shared/assets/images/pokemon-background.png';
import './SearchPokemonPage.css';

export function SearchPokemonPage() {
  const navigate = useNavigate();

  const handleSearch = (data: SearchFormType) => {
    navigate(data.pokemonIdentifier);
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
