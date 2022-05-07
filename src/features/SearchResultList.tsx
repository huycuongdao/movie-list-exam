import React from "react";
import { useMemo } from "react";
import { RiFileList3Line } from "react-icons/ri";
import MovieList from "../components/MovieList";
import useGetSearchResults from "../queries/useGetSearchResults";
import { Movie } from "../types/movie";

interface SearchResultListProps {
  searchText?: string;
}

const SearchResultList = React.memo((props: SearchResultListProps) => {
  const { searchText } = props;

  const { data, status, isFetchingNextPage, hasNextPage, fetchNextPage } = useGetSearchResults({
    searchText,
  });

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
      title="Search result"
      titleIcon={<RiFileList3Line />}
      fetchStatus={status}
      onClickLoadMore={fetchNextPage}
      isFetchingNextPage={isFetchingNextPage}
      emptyListText="No matched result."
      hasNextPage={hasNextPage}
    />
  );
});

export default SearchResultList;
