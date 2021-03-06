import React, { useContext } from "react";
import { useMemo } from "react";
import { RiFireFill } from "react-icons/ri";
import MovieList from "../components/MovieList";
import { ChapterEditorPageContext } from "../context/wishlist.context";
import useGetPopularMovies from "../queries/useGetPopularMovies";
import { Movie } from "../types/movie";

const PopularMovieList = React.memo(() => {
  const { data, status, isFetchingNextPage, hasNextPage, fetchNextPage } = useGetPopularMovies();

  const { wishlist, updateWishlist } = useContext(ChapterEditorPageContext);

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
      hasNextPage={hasNextPage}
      wishlist={wishlist}
      updateWishlist={updateWishlist}
    />
  );
});

export default PopularMovieList;
