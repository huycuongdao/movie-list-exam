import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import { useState } from "react";
import { RiHeartFill, RiHeartLine } from "react-icons/ri";
import { Movie } from "../types/movie";

interface MovieItemProps {
  movie: Movie;
  isAddedToWishlist: boolean;
  updateWishlist: (movie: Movie) => void;
}

const MovieItem = (props: MovieItemProps) => {
  const { movie, isAddedToWishlist, updateWishlist } = props;
  const { title, release_date } = movie;

  return (
    <Flex
      w="full"
      px="24px"
      py="16px"
      bgColor="white"
      borderRadius="md"
      justify="space-between"
      align="center"
      boxShadow="sm"
    >
      <Box>
        <Text fontWeight="semibold" isTruncated>
          {title}
        </Text>
        <Text color="gray.400" fontSize="xs" isTruncated>
          {release_date}
        </Text>
      </Box>
      <IconButton
        variant="ghost"
        colorScheme="pink"
        icon={isAddedToWishlist ? <RiHeartFill /> : <RiHeartLine />}
        aria-label="edit"
        _focus={{ outline: "none" }}
        isRound
        onClick={() => updateWishlist(movie)}
      />
    </Flex>
  );
};

export default MovieItem;
