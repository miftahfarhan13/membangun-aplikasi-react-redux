import React from 'react';
import { Avatar, Flex, Stack, Text } from '@chakra-ui/react';
import moment from 'moment';
import { commentShape } from '../../utils/shape';

function CommentItem({ content, createdAt, owner }) {
  return (
    <>
      <Stack direction="row" alignItems="start" spacing="10px">
        <Avatar src={owner?.avatar} size="xs" mt="4px" />
        <Stack direction="column" alignItems="start" spacing="10px" w="100%">
          <Stack direction="column" spacing="4px" w="100%">
            <Flex direction="row" justifyContent="space-between">
              <Text fontSize="14px" fontWeight="500">
                {owner?.name}
              </Text>
              <Text fontSize="12px" color="grey">
                {moment(createdAt).fromNow()}
              </Text>
            </Flex>
            <Text
              fontSize="14px"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}

CommentItem.propTypes = {
  ...commentShape,
};

export default CommentItem;
