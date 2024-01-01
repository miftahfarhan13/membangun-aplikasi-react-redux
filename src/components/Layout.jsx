import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Outlet, ScrollRestoration } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <ChakraProvider>
        <Outlet />
        <ScrollRestoration />
      </ChakraProvider>
    </div>
  );
}

export default Layout;
