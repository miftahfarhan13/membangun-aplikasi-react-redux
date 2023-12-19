import { Card, Center, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';

function EmptyState({ text }) {
  return (
    <Card p="20px">
      <Center color="grey">
        <Stack direction="column" spacing="10px" alignItems="center">
          <Image src="/no-data.svg" height="120px" />
          <Text>{text}</Text>
        </Stack>
      </Center>
    </Card>
  );
}

export default EmptyState;
