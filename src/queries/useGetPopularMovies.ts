import { useInfiniteQuery, useQuery } from "react-query";
import { Movie } from "../types/movie";
import { fetcher } from "../utils/fetcher";

const API_ENDPOINT = "/movie/popular";

interface Response {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

const useGetPopularMovies = () =>
  useInfiniteQuery(
    "popular-movies",
    ({ pageParam = 1 }): Promise<Response> => {
      return fetcher(API_ENDPOINT, `&page=${pageParam}`);
    },
    {
      getNextPageParam: (lastPage) => {
        return (lastPage?.page || 1) + 1;
      },
    },
  );

export default useGetPopularMovies;
