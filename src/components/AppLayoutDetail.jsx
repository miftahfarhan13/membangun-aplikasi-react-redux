import React from 'react';
import { Box, Container, Stack } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import NavbarDetail from './NavbarDetail';

function AppLayoutDetail({ title, backLink, children }) {
  return (
    <Box backgroundColor="white">
      <NavbarDetail title={title} backLink={backLink} />
      <Container maxW="container.sm" paddingY="20px" h="100vh">
        <Stack direction="column" spacing="20px" pt="70px" pb="100px">
          {children}
        </Stack>
      </Container>
    </Box>
  );
}

AppLayoutDetail.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  backLink: PropTypes.string.isRequired,
};

export default AppLayoutDetail;
