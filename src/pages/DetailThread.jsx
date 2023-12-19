import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import AppLayoutDetail from '../components/AppLayoutDetail';
import { asyncReceiveThreadDetail } from '../states/threadDetail/action';
import { useParams } from 'react-router-dom';
import ThreadDetail from '../components/ThreadDetail';

function DetailThread() {
  const { threadDetail } = useSelector((states) => states);

  const params = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(params.id));
  }, [dispatch]);

  return (
    <>
      <AppLayoutDetail title="Detail Thread" backLink="/">
        <ThreadDetail thread={threadDetail} />
      </AppLayoutDetail>
    </>
  );
}

export default DetailThread;
