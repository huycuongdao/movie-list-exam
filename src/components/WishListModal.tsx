import {
  Stack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Box,
  Center,
  Button,
} from "@chakra-ui/react";
import { RiInboxLine } from "react-icons/ri";
import MovieItem from "./MovieItem";

interface WishListModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WishListModal = (props: WishListModalProps) => {
  const { isOpen, onClose } = props;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bgColor="#f3f3f3">
        <ModalHeader>Wishlist</ModalHeader>
        <ModalCloseButton />
        <ModalBody p="32px">
          {/* ----- Empty UI ----- */}
          <Center py="32px" color="pink.600" flexDirection="column">
            <Box fontSize="x-large" mb="8px">
              <RiInboxLine />
            </Box>
            Find your favorite movies!
            <Button mt="16px" size="md" variant="outline" colorScheme="blackAlpha" onClick={onClose}>
              Close
            </Button>
          </Center>

          {/* ----- Movie List ------ */}
          <Stack>
            {/* <MovieItem movie={{ title: "Some Title", release_date: 2000 }} /> */}
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default WishListModal;
