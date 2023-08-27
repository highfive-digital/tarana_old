import { useQuery } from '@tanstack/react-query';

const useFetch = ({
  queryKey,
  queryFn
}: {
  queryKey: string[];
  queryFn: (param?: any) => Promise<unknown>;
}) => {
  const { isError, isLoading, isFetched, refetch, data, isSuccess, isPending } = useQuery({
    queryKey,
    queryFn
  });

  return { isError, isLoading, isFetched, refetch, data, isSuccess, isPending };
};

export default useFetch;
