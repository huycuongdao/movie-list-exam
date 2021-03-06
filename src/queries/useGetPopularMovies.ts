import { useInfiniteQuery, useQuery } from "react-query";
import { Movie } from "../types/movie";
import { fetcher } from "../utils/fetcher";
import { QUERY_KEYS } from "./queryKeys";

const API_ENDPOINT = "/movie/popular";

interface Response {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

const useGetPopularMovies = () =>
  useInfiniteQuery(
    QUERY_KEYS.GET_POPULAR,
    ({ pageParam = 1 }): Promise<Response> => {
      return fetcher(API_ENDPOINT, `&page=${pageParam}`);
    },
    {
      getNextPageParam: (lastPage) => {
        // check haveNextPage
        if (lastPage?.page > lastPage?.total_pages) return undefined;
        if (lastPage?.total_pages === 1) return undefined;

        return (lastPage?.page || 1) + 1;
      },
    },
  );

export default useGetPopularMovies;
