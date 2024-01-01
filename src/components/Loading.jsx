import { Box } from '@chakra-ui/react';
import React from 'react';
import LoadingBar from 'react-redux-loading-bar';

function Loading() {
  return (
    <Box w="100%" position="fixed" top={0} zIndex={200}>
      <LoadingBar progressIncrease={1} showFastActions updateTime={100} />
    </Box>
  );
}

export default Loading;
