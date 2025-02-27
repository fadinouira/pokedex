export type SearchFormType = {
  pokemonIdentifier: string;
};

export interface SearchFormProps {
  isLoading?: boolean;
  onSubmit: (data: SearchFormType) => void;
}
