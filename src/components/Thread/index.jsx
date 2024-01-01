import React from 'react';
import PropTypes from 'prop-types';
import { Stack } from '@chakra-ui/react';
import ThreadItem from './ThreadItem';
import { threadItemShape } from '../../utils/shape';

function Thread({ threads }) {
  return (
    <Stack direction="column" spacing="20px">
      {threads?.map((thread) => (
        <ThreadItem {...thread} key={thread?.id} />
      ))}
    </Stack>
  );
}

Thread.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape(threadItemShape)).isRequired,
};

export default Thread;
