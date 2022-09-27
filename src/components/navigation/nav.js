import { NavLink } from 'react-router-dom';
import './nav.css';

const Nav = () => (
  <nav className="Nav_Bar">
    <h1>Space Travelers Hub</h1>
    <div className="Nav_Bar_Container">
      <NavLink className="Nav_Bar_Links" to="/Rockets">Rockets </NavLink>
      <NavLink className="Nav_Bar_Links" to="/missions">Missions </NavLink>
      <hr className="Nav_Bar_hr" />
      <NavLink className="Nav_Bar_Links" to="/profile">My Profle </NavLink>
    </div>
  </nav>
);

export default Nav;
