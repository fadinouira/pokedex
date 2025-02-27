import { useEffect, useState } from 'react';
import { CustomError } from '../types';

export function useQuery<QueryResponseType, QueryParamsType>(
  params: QueryParamsType,
  queryFn: (params: QueryParamsType) => Promise<QueryResponseType>,
) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [data, setData] = useState<QueryResponseType>();
  const [error, setError] = useState<CustomError>();

  useEffect(() => {
    onFetchQuery();
  }, [params]);

  const onFetchQuery = async () => {
    try {
      setIsFetching(true);
      const newData = await queryFn(params);
      setData(newData);
    } catch (e) {
      setError(e as CustomError);
    } finally {
      setIsLoading(false);
      setIsFetching(false);
    }
  };

  return {
    data,
    isLoading,
    isFetching,
    error,
  };
}
