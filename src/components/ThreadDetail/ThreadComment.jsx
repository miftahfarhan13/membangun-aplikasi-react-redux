import { Card, Divider, Stack, Text } from '@chakra-ui/react';
import { commentShape } from '../../utils/shape';
import PropTypes from 'prop-types';
import CommentItem from './CommentItem';
import EmptyState from '../EmptyState';

function ThreadComment({ comments }) {
  return (
    <>
      <Card p="20px">
        <Stack direction="column" spacing="20px">
          <Text fontWeight="700">Komentar ({comments?.length})</Text>
          {comments?.length > 0 ? (
            <>
              <Stack direction="column" spacing="10px" divider={<Divider />}>
                {comments?.map((comment, index) => (
                  <CommentItem key={index} {...comment} />
                ))}
              </Stack>
            </>
          ) : (
            <>
              <EmptyState text="Belum ada komentar" />
            </>
          )}
        </Stack>
      </Card>
    </>
  );
}

ThreadComment.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape(commentShape)).isRequired
};

export default ThreadComment;
