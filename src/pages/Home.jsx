import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppLayout from '../components/AppLayout';
import Thread from '../components/Thread';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';
import AddThread from '../components/Thread/AddThread';
import { getAuthUser, getThreadsState, getUsersState } from '../states';

function Home() {
  const threads = useSelector((state) => getThreadsState(state));
  const users = useSelector((state) => getUsersState(state));
  const authUser = useSelector((state) => getAuthUser(state));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const threadList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user?.id === thread?.ownerId),
  }));

  return (
    <>
      <AppLayout>
        <Thread threads={threadList} />
        {authUser !== null && <AddThread />}
      </AppLayout>
    </>
  );
}

export default Home;
