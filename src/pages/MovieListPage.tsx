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
  InputRightElement,
} from "@chakra-ui/react";
import { useCallback, useRef, useState } from "react";
import { RiArrowUpLine, RiCloseFill, RiHeartLine, RiSearchLine } from "react-icons/ri";
import { MOVIE_LIST_CLASSNAME } from "../components/MovieList";
import WishListModal from "../features/WishListModal";
import PopularMovieList from "../features/PopularMovieList";
import SearchResultList from "../features/SearchResultList";
import { withWishlistContext } from "../context/wishlist.context";

let SEARCH_TIMEOUT: number | null = null;
const SEARCH_DEBOUNCE_TIME = 500;

const MovieListPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [searchText, setSearchText] = useState<string>();
  const searchRef = useRef<HTMLInputElement>(null);

  const handleSearchTextChange = useCallback((e) => {
    if (SEARCH_TIMEOUT !== null) clearTimeout(SEARCH_TIMEOUT);

    SEARCH_TIMEOUT = setTimeout(() => {
      setSearchText(e.target.value);
    }, SEARCH_DEBOUNCE_TIME);
  }, []);

  const handleClearSearch = useCallback(() => {
    setSearchText("");
    if (searchRef.current) {
      searchRef.current.value = "";
    }
  }, []);

  const isSearching = !!searchText;

  return (
    <Box bgColor="#f3f3f3" h="100vh">
      <Flex w="full" h="full" px="32px" pt="64px" direction="column">
        <Flex w="full" mb="32px" justify="space-between" align="center">
          <Heading fontSize="24px">Movies</Heading>
          <Button size="md" colorScheme="pink" leftIcon={<RiHeartLine />} onClick={onOpen}>
            Wishlist
          </Button>
        </Flex>

        {/* SEARCH BOX */}
        <InputGroup mb="16px">
          <InputLeftElement pointerEvents="none" color="gray.500" children={<RiSearchLine />} />
          <Input
            ref={searchRef}
            onChange={handleSearchTextChange}
            type="tel"
            placeholder="Search Movies"
            bg="white"
          />
          <InputRightElement width="4.5rem">
            <IconButton
              onClick={handleClearSearch}
              aria-label="Clear Search"
              icon={<RiCloseFill />}
              size="sm"
            />
          </InputRightElement>
        </InputGroup>

        {/* ----- Movie List (Popular movies) ------ */}
        {!isSearching && <PopularMovieList />}

        {/* ----- Search Result UI ------ */}
        {isSearching && <SearchResultList searchText={searchText} />}
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
          const movieListDiv = document.querySelector(`.${MOVIE_LIST_CLASSNAME}`);
          if (movieListDiv) movieListDiv.scrollTop = 0;
        }}
      />
    </Box>
  );
};

export default withWishlistContext(MovieListPage);
