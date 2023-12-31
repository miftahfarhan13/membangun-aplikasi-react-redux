import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AppLayoutDetail from '../components/AppLayoutDetail';
import { asyncReceiveThreadDetail } from '../states/threadDetail/action';
import ThreadDetail from '../components/ThreadDetail';

function DetailThread() {
  const { id } = useParams();

  const { threadDetail = null, authUser } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [dispatch, id]);

  if (!threadDetail) {
    return null;
  }

  return (
    <>
      <AppLayoutDetail title="Detail Thread" backLink="/">
        <ThreadDetail thread={threadDetail} authUser={authUser} />
      </AppLayoutDetail>
    </>
  );
}

export default DetailThread;
