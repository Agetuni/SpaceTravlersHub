import { NavLink } from 'react-router-dom';
import './nav.css';

const Nav = () => (
  <nav>
    <h1>Space Travelers Hub</h1>
    <NavLink to="/Rockets"> Rockets </NavLink>
    <NavLink to="/missions"> Missions </NavLink>
    <NavLink to="/profile"> My Profle </NavLink>
  </nav>
);
export default Nav;
