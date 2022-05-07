import { Flex, Stack, Button, Center, Box, Text, IconButton, Spinner } from "@chakra-ui/react";
import { ReactNode, useState } from "react";
import { RiAlertLine, RiFireFill, RiHeartFill, RiHeartLine, RiInboxLine } from "react-icons/ri";
import { QueryStatus } from "react-query";
import { Movie } from "../types/movie";
import MovieItem from "./MovieItem";

interface MovieListProps {
  title: ReactNode;
  titleIcon: ReactNode;
  movies: Movie[];
  onClickLoadMore: () => void;
  fetchStatus: QueryStatus;
  isFetchingNextPage: boolean;
  emptyListText?: string;
}

const MovieList = (props: MovieListProps) => {
  const {
    //
    title,
    titleIcon,
    movies,
    emptyListText = "No data.",
    fetchStatus,
    onClickLoadMore,
    isFetchingNextPage,
  } = props;

  const hasTitles = movies.length > 0 && fetchStatus === "success";
  const emptyTitles = movies.length === 0 && fetchStatus === "success";

  return (
    <>
      <Flex fontWeight="600" color="pink.600" mb="8px" align="center" gap="4px">
        {titleIcon}
        {title}
      </Flex>

      {emptyTitles && (
        <Center py="32px" color="pink.600" flexDirection="column">
          <Box fontSize="x-large" mb="8px">
            <RiInboxLine />
          </Box>
          {emptyListText}
        </Center>
      )}

      {/* ----- Movie List ------ */}
      {hasTitles && (
        <Stack w="full" minH="0" pb="32px" flex={1} overflowY="auto" spacing="8px">
          {movies.map((movie) => {
            return <MovieItem movie={movie} key={movie.id} />;
          })}

          {/* ----- Load More Button UI (Bonus) ------ */}
          {!isFetchingNextPage && (
            <Center>
              <Button
                variant="ghost"
                size="md"
                colorScheme="blackAlpha"
                onClick={onClickLoadMore}
                isLoading={false} // set true while loading data
                loadingText="Loading"
              >
                Load More
              </Button>
            </Center>
          )}

          {isFetchingNextPage && (
            <Center py="32px">
              <Spinner color="pink.600" />
            </Center>
          )}
        </Stack>
      )}

      {/* ----- Loading UI ----- */}
      {fetchStatus === "loading" && (
        <Center py="32px">
          <Spinner color="pink.600" />
        </Center>
      )}

      {/* ----- Error UI ----- */}
      {fetchStatus === "error" && (
        <Center py="32px" color="pink.600" flexDirection="column">
          <Box fontSize="x-large" mb="8px">
            <RiAlertLine />
          </Box>
          <Box>Something went wrong.</Box>
          <Box>Please try again.</Box>
        </Center>
      )}
    </>
  );
};

export default MovieList;
