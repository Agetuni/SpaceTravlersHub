import { NavLink } from 'react-router-dom';

const Nav = () => (
  <nav>
    <h1>nav bar</h1>
    <ul>
      <li>
        <NavLink to="/">Rockets </NavLink>
      </li>
      <li>
        <NavLink to="/missions">Missions </NavLink>
      </li>
      <li>
        {' '}
        <NavLink to="/profile">My Profle </NavLink>
      </li>
    </ul>
  </nav>
);
export default Nav;
