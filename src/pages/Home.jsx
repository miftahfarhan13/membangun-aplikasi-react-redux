import { useDispatch, useSelector } from 'react-redux';
import AppLayout from '../components/AppLayout';
import Thread from '../components/Thread';
import { useEffect } from 'react';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';

function Home() {
  const { threads = [], users = [] } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const threadList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId)
  }));

  return (
    <>
      <AppLayout>
        <Thread threads={threadList} />
      </AppLayout>
    </>
  );
}

export default Home;
