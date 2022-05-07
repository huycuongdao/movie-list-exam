import { useState } from "react";
import { RiFireFill } from "react-icons/ri";
import MovieList from "../components/MovieList";
import useGetPopularMovies from "../queries/useGetPopularMovies";
import { Movie } from "../types/movie";

const PopularMovieList = () => {
  const [page, setPage] = useState<number>(1);

  const { data, status, isFetchingNextPage, fetchNextPage } = useGetPopularMovies();

  const movies: Movie[] = [];

  data?.pages.forEach((page) => {
    movies.push(...page.results);
  });

  return (
    <MovieList
      movies={movies}
      title="Popular movies"
      titleIcon={<RiFireFill />}
      fetchStatus={status}
      onClickLoadMore={fetchNextPage}
      isFetchingNextPage={isFetchingNextPage}
    />
  );
};

export default PopularMovieList;
