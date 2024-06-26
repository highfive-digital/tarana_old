import { useQuery } from '@tanstack/react-query';
import { type Response } from '~types/components.types';

const useFetch = ({
  queryKey,
  queryFn,
  shouldFetchOnLoad = true
}: {
  queryKey: string[];
  queryFn: (param?: any) => Promise<Response>;
  shouldFetchOnLoad?: boolean;
}) => {
  const { isError, isLoading, isFetched, refetch, data, isSuccess, isPending, status } = useQuery({
    queryKey,
    queryFn,
    enabled: shouldFetchOnLoad
  });

  return { isError, isLoading, isFetched, refetch, data, isSuccess, isPending, status };
};

export default useFetch;
