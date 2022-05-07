import { useInfiniteQuery, useQuery } from "react-query";
import { Movie } from "../types/movie";
import { fetcher } from "../utils/fetcher";
import { QUERY_KEYS } from "./queryKeys";

const API_ENDPOINT = "/search/movie";

interface Response {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

const useGetSearchResults = ({ searchText }: { searchText?: string }) =>
  useInfiniteQuery(
    [QUERY_KEYS.SEARCH_MOVE, searchText],
    ({ pageParam = 1 }): Promise<Response> => {
      return fetcher(API_ENDPOINT, `&page=${pageParam}&query=${encodeURIComponent(searchText || "")}`);
    },
    {
      getNextPageParam: (lastPage) => {
        // check haveNextPage
        if (lastPage?.page > lastPage?.total_pages) return undefined;
        if (lastPage?.total_pages === 1) return undefined;

        return (lastPage?.page || 1) + 1;
      },
      enabled: !!searchText,
    },
  );

export default useGetSearchResults;
