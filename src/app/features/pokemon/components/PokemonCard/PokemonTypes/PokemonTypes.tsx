import { Tag } from '@/shared';
import { generateColorTokenByTypeName } from '../../../utils';
import './PokemonTypes.css';
import { PokemonTypesProps } from './PokemonTypes.type';

export function PokemonTypes({ types }: PokemonTypesProps) {
  return (
    <div className="pokemon-types">
      {types.map((type) => (
        <Tag
          label={type.name}
          size="large"
          backgroundColor={generateColorTokenByTypeName(type.name)}
        />
      ))}
    </div>
  );
}
