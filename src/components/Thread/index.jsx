import PropTypes from 'prop-types';
import ThreadItem from './ThreadItem';
import { Stack } from '@chakra-ui/react';
import { threadItemShape } from '../../utils/shape';

function Thread({ threads }) {
  return (
    <Stack direction="column" spacing="20px">
      {threads?.map((thread, index) => (
        <ThreadItem {...thread} key={index} />
      ))}
    </Stack>
  );
}

Thread.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape(threadItemShape)).isRequired
};

export default Thread;
