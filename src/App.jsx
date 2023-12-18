import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Leaderboard from './pages/Leaderboard';
import Account from './pages/Account';
import Loading from './components/Loading';

function App() {
  return (
    <>
      <Loading />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/leaderboards" element={<Leaderboard />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
