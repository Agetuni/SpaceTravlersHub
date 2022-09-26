import logo from './logo.svg';
import './App.css';
import Nav from './components/navigation/nav';
import { Route, Routes } from 'react-router-dom';
import Rockets from './components/Rockets/Rockets';
import Missions from './components/missions/missions';
import Profile from './components/profile/Profile';

function App() {
  return (
    <main>
      <Nav/>
      <Routes>
        <Route path='/' element= {<Rockets/>} />
        <Route path='/missions' element={<Missions/>} />
        <Route path='/profile' element ={<Profile/>} />
      </Routes>
    </main>
  );
}

export default App;
