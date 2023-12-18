import { Avatar, Badge, Card, Flex, Stack, Text } from '@chakra-ui/react';
import moment from 'moment';
import { threadItemShape } from '../../utils/shape';

function ThreadItem({ title, body, category, createdAt, user }) {
  return (
    <Card p="20px">
      <Stack direction="row" alignItems="start" spacing="10px">
        <Avatar src={user.avatar} size="xs" mt="4px" />
        <Stack direction="column" alignItems="start" spacing="10px" w="100%">
          <Stack direction="column" spacing="4px" w="100%">
            <Flex direction="row" justifyContent="space-between">
              <Text fontSize="14px" fontWeight="500">
                {user.name}
              </Text>
              <Text fontSize="12px" color="grey">
                {moment(createdAt).fromNow()}
              </Text>
            </Flex>
            <Text color="teal" fontWeight="700" fontSize="18px">
              {title}
            </Text>
            <Text
              fontSize="14px"
              dangerouslySetInnerHTML={{ __html: body }}
            ></Text>
          </Stack>
          <Badge>#{category}</Badge>
        </Stack>
      </Stack>
    </Card>
  );
}

ThreadItem.propTypes = {
  ...threadItemShape
};

export default ThreadItem;
