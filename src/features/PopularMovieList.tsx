import React from "react";
import { useMemo, useState } from "react";
import { RiFireFill } from "react-icons/ri";
import MovieList from "../components/MovieList";
import useGetPopularMovies from "../queries/useGetPopularMovies";
import { Movie } from "../types/movie";

const PopularMovieList = React.memo(() => {
  const { data, status, isFetchingNextPage, fetchNextPage } = useGetPopularMovies();

  const movies = useMemo(() => {
    const _movies: Movie[] = [];

    data?.pages.forEach((page) => {
      _movies.push(...page.results);
    });

    return _movies;
  }, [data]);

  return (
    <MovieList
      movies={movies || []}
      title="Popular movies"
      titleIcon={<RiFireFill />}
      fetchStatus={status}
      onClickLoadMore={fetchNextPage}
      isFetchingNextPage={isFetchingNextPage}
    />
  );
});

export default PopularMovieList;
