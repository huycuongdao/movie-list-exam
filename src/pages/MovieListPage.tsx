import {
  Box,
  Flex,
  Heading,
  Button,
  useDisclosure,
  IconButton,
  InputGroup,
  InputLeftElement,
  Input,
} from "@chakra-ui/react";
import {
  RiArrowUpLine,
  RiFileList3Line,
  RiFireFill,
  RiHeartLine,
  RiSearchLine,
} from "react-icons/ri";
import MovieList from "../components/MovieList";
import WishListModal from "../components/WishListModal";
import PopularMovieList from "../features/PopularMovieList";

const MovieListPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bgColor="#f3f3f3" h="100vh">
      <Flex w="full" h="full" px="32px" pt="64px" direction="column">
        <Flex w="full" mb="32px" justify="space-between" align="center">
          <Heading fontSize="24px">Movies</Heading>
          <Button size="md" colorScheme="pink" leftIcon={<RiHeartLine />} onClick={onOpen}>
            Wishlist
          </Button>
        </Flex>
        <InputGroup mb="16px">
          <InputLeftElement pointerEvents="none" color="gray.500" children={<RiSearchLine />} />
          <Input type="tel" placeholder="Search Movies" bg="white" />
        </InputGroup>

        {/* ----- Movie List (Popular movies) ------ */}
        <PopularMovieList />

        {/* ----- Search Result UI ------ */}
        {/* <MovieList
          movies={[]}
          title="Search Result"
          titleIcon={<RiFileList3Line />}
          emptyListText="No Matched result."
        /> */}

      </Flex>

      <WishListModal isOpen={isOpen} onClose={onClose} />

      {/* ----- GO to Top Button UI (Bonus)  ------ */}
      <IconButton
        pos="absolute"
        right="16px"
        bottom="24px"
        colorScheme="pink"
        icon={<RiArrowUpLine />}
        aria-label="edit"
        _focus={{ outline: "none" }}
        isRound
        onClick={() => {
          // TODO: Go to top
        }}
      />
    </Box>
  );
};

export default MovieListPage;
