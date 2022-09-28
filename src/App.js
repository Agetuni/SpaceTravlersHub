import './App.css';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/navigation/nav';
import Rockets from './components/Rockets/Rockets';
import Missions from './components/missions/missions';
import Profile from './components/profile/Profile';

function App() {
  return (
    <main>
      <Nav />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/Rockets" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </main>
  );
}

export default App;
