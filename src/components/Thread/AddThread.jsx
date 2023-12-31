import {
  Box,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Textarea
} from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import useInput from '../../hooks/useInput';
import { useDispatch } from 'react-redux';
import { asyncAddThread } from '../../states/threads/action';

function AddThread() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [title, onTitleChange] = useInput('');
  const [body, onBodyChange] = useInput('');
  const [category, onCategoryChange] = useInput('');

  const dispatch = useDispatch();

  const onAddThread = () => {
    dispatch(asyncAddThread({ title, body, category }));
    onClose();
  };

  return (
    <>
      <Box position="fixed" bottom="100px" right="20px">
        <IconButton
          onClick={onOpen}
          borderRadius="99px"
          aria-label=""
          icon={<Icon icon="bx:plus" fontSize="20px" />}
          colorScheme="teal"
        />
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Thread</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                onAddThread();
              }}
            >
              <Stack direction="column" spacing="20px" color="black">
                <FormControl>
                  <FormLabel>Title</FormLabel>
                  <Input
                    type="text"
                    value={title}
                    onChange={onTitleChange}
                    placeholder="Place your title here"
                    required
                    _placeholder="black"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Body</FormLabel>
                  <Textarea
                    type="text"
                    placeholder="Place your body here"
                    value={body}
                    onChange={onBodyChange}
                    required
                    _placeholder="black"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Category</FormLabel>
                  <Input
                    type="text"
                    value={category}
                    onChange={onCategoryChange}
                    placeholder="Place your category here"
                    required
                    _placeholder="black"
                  />
                </FormControl>
                <Button
                  colorScheme="teal"
                  type="submit"
                  alignSelf="end"
                  width="100%"
                >
                  Submit
                </Button>
              </Stack>
            </form>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AddThread;
