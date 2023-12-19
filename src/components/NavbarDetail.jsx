import { Box, Container, Stack, Text } from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

NavbarDetail.propTypes = {
  title: PropTypes.string.isRequired,
  backLink: PropTypes.string.isRequired
};

function NavbarDetail({ title, backLink }) {
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
                <Link to={backLink}>
                  <Icon icon="bx:left-arrow-alt" fontSize="24px" color="teal" />
                </Link>
                <Text as="h1" fontSize="20px" fontWeight="700" color="black">
                  {title}
                </Text>
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  );
}

export default NavbarDetail;
