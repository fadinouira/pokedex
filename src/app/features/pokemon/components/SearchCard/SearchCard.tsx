import { Card } from '@/shared';
import PokeBallImage from '@/shared/assets/images/pokeball.png';
import { SearchForm } from '../SearchForm';
import './SearchCard.css';
import { SearchCardProps } from './SearchCard.type';

export function SearchCard({ isLoading, onSubmit }: SearchCardProps) {
  return (
    <Card>
      <div className="pokeball-container">
        <img src={PokeBallImage} className="pokeball" />
      </div>
      <SearchForm isLoading={isLoading} onSubmit={onSubmit} />
    </Card>
  );
}
