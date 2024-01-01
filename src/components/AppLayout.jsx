import React from 'react';
import { Box, Container, Stack } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import BottomNavigation from './BottomNavigation';

function AppLayout({ children }) {
  return (
    <Box backgroundColor="white">
      <Navbar />
      <Container maxW="container.sm" paddingY="20px" h="100vh">
        <Stack direction="column" spacing="20px" pt="70px" pb="100px">
          {children}
        </Stack>
      </Container>
      <BottomNavigation />
    </Box>
  );
}

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
