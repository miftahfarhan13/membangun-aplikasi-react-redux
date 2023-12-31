import { useDispatch, useSelector } from 'react-redux';
import AppLayout from '../components/AppLayout';
import { useEffect } from 'react';
import { asyncReceiveLeaderboards } from '../states/leaderboards/action';
import LeaderboardList from '../components/Leaderboard';

function Leaderboard() {
  const { leaderboards = [] } = useSelector((states) => ({
    leaderboards: states.leaderboards
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveLeaderboards());
  }, [dispatch]);

  return (
    <>
      <AppLayout>
        <LeaderboardList leaderboards={leaderboards} />
      </AppLayout>
    </>
  );
}

export default Leaderboard;
