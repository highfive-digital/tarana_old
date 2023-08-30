import { useQuery } from '@tanstack/react-query';
import { type Response } from '~types/components.types';

const useFetch = ({
  queryKey,
  queryFn
}: {
  queryKey: string[];
  queryFn: (param?: any) => Promise<Response>;
}) => {
  const { isError, isLoading, isFetched, refetch, data, isSuccess, isPending } = useQuery({
    queryKey,
    queryFn
  });

  return { isError, isLoading, isFetched, refetch, data, isSuccess, isPending };
};

export default useFetch;
