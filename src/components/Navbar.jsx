import { Box, Container, Stack, Text } from '@chakra-ui/react';
import { Icon } from '@iconify/react';

function Navbar() {
  return (
    <>
      <Box
        boxShadow="md"
        py="20px"
        bgColor="white"
        position="fixed"
        w="100%"
        top="0"
        zIndex={2}
      >
        <Container maxW="container.sm">
          <Stack direction="column" spacing="20px">
            <Stack direction="row" justifyContent="space-between">
              <Stack direction="row" alignItems="center" spacing="10px">
                <Icon icon="bxl:twitter" fontSize="24px" color="teal" />
                <Text as="h1" fontSize="20px" fontWeight="700" color="black">
                  Threeds
                </Text>
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  );
}

export default Navbar;
