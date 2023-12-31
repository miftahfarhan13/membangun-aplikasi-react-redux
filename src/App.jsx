import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Leaderboard from './pages/Leaderboard';
import Account from './pages/Account';
import Loading from './components/Loading';
import DetailThread from './pages/DetailThread';
import Register from './pages/Register';
import { useDispatch, useSelector } from 'react-redux';
import { asyncPreloadProcess } from './states/isPreload/action';
import { useEffect } from 'react';

function App() {
  const { isPreload = false } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  if (isPreload) {
    return null;
  }

  return (
    <>
      <Loading />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/thread/:id" element={<DetailThread />} />
          <Route path="/leaderboards" element={<Leaderboard />} />
          <Route path="/account" element={<Account />} />
          <Route path="/account/register" element={<Register />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
