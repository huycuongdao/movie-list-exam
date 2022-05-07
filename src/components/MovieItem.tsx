import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import { useState } from "react";
import { RiHeartFill, RiHeartLine } from "react-icons/ri";
import { Movie } from "../types/movie";

interface MovieItemProps {
  movie: Movie;
}

const MovieItem = (props: MovieItemProps) => {
  const [isAddedToWishlist, setIsAddedToWishlist] = useState(false);

  const { movie } = props;
  const { title, release_date, wishlist_added } = movie;

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
        icon={wishlist_added ? <RiHeartFill /> : <RiHeartLine />}
        aria-label="edit"
        _focus={{ outline: "none" }}
        isRound
        onClick={() => setIsAddedToWishlist(!isAddedToWishlist)}
      />
    </Flex>
  );
};

export default MovieItem;