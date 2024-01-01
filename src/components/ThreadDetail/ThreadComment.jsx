import React from 'react';
import PropTypes from 'prop-types';
import { Card, Divider, Stack, Text } from '@chakra-ui/react';
import CommentItem from './CommentItem';
import EmptyState from '../EmptyState';
import { commentShape } from '../../utils/shape';

function ThreadComment({ comments }) {
  return (
    <>
      <Card p="20px">
        <Stack direction="column" spacing="20px">
          <Text fontWeight="700">
            {`Komentar (${comments?.length})`}
          </Text>
          {comments?.length > 0 ? (
            <>
              <Stack direction="column" spacing="10px" divider={<Divider />}>
                {comments?.map((comment) => (
                  <CommentItem key={comment?.id} {...comment} />
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
  comments: PropTypes.arrayOf(PropTypes.shape(commentShape)).isRequired,
};

export default ThreadComment;
