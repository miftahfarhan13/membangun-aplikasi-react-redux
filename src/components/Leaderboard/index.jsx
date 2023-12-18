import PropTypes from 'prop-types';
import { Stack } from '@chakra-ui/react';
import { leaderboardItemShape } from '../../utils/shape';
import LeaderboardItem from './LeaderboardItem';

function LeaderboardList({ leaderboards }) {
  return (
    <Stack direction="column" spacing="20px">
      {leaderboards?.map((thread, index) => (
        <LeaderboardItem {...thread} key={index} index={index} />
      ))}
    </Stack>
  );
}

LeaderboardList.propTypes = {
  leaderboards: PropTypes.arrayOf(PropTypes.shape(leaderboardItemShape))
    .isRequired
};

export default LeaderboardList;
