import { Button, Input, Typography } from '@/shared';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { SearchFormProps, SearchFormType } from './SearchForm.type';

import { generateRandomPokemonId } from '../../utils';
import './SearchForm.css';

export function SearchForm({ isLoading, onSubmit }: SearchFormProps) {
  const { register, handleSubmit, setValue } = useForm<SearchFormType>();
  const { t } = useTranslation();

  const submitHandler: SubmitHandler<SearchFormType> = (data) => {
    onSubmit(data);
  };

  const onRandom = (): void => {
    const randomId = generateRandomPokemonId();
    setValue('pokemonIdentifier', randomId.toString());
  };

  return (
    <form className="search-form-container" onSubmit={handleSubmit(submitHandler)}>
      <Typography
        className="search-form-label"
        font="secondary"
        fontSize="sm"
        lineHeight="sm"
        fontWeight="bold"
        color="text-label"
      >
        {t('pokemon.name_or_id')}
      </Typography>
      <Input
        {...register('pokemonIdentifier', { required: true })}
        disabled={isLoading}
        inputSize={'large'}
      />

      <div className="search-form-actions">
        <Button label={t('common.search')} type="submit" disabled={isLoading} />
        <Button label={t('common.random')} onClick={onRandom} disabled={isLoading} />
      </div>
    </form>
  );
}
