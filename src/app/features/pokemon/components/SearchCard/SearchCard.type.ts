import { SearchFormType } from '../SearchForm';

export interface SearchCardProps {
  isLoading?: boolean;
  onSubmit: (data: SearchFormType) => void;
}
