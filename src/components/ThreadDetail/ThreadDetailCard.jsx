import { Avatar, Badge, Card, Flex, Stack, Text } from '@chakra-ui/react';
import { threadDetailShape } from '../../utils/shape';
import moment from 'moment';

function ThreadDetailCard({ title, body, category, createdAt, owner }) {
  return (
    <>
      <Card p="20px">
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
    </>
  );
}

ThreadDetailCard.propTypes = {
  ...threadDetailShape
};

export default ThreadDetailCard;
