import React from 'react';
import { Avatar, Card, Stack, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import { leaderboardItemShape } from '../../utils/shape';

function LeaderboardItem({ user, score, index }) {
  return (
    <Card p="20px">
      <Stack
        direction="row"
        alignItems="center"
        spacing="10px"
        justifyContent="space-between"
      >
        <Stack direction="row" alignItems="center" spacing="10px">
          <Avatar src={user.avatar} size="sm" mt="4px" />
          <Text fontSize="14px" fontWeight="500">
            {user.name}
          </Text>
          {index === 0 && <Icon icon="bx:medal" color="gold" fontSize="30px" />}
        </Stack>
        <Text>{score}</Text>
      </Stack>
    </Card>
  );
}

LeaderboardItem.propTypes = {
  ...leaderboardItemShape,
  index: PropTypes.number.isRequired,
};

export default LeaderboardItem;
