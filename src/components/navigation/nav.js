import { NavLink } from 'react-router-dom';
import './nav.css';
// import { GiEarthAmerica } from 'react-icons/gi';
import Logo from './planetLogo.png';

const Nav = () => (
  <nav className="Nav_Bar">
    <div className="Nav_Bar_Header">
      {/* <GiEarthAmerica className="NavBarLogo App-logo" /> */}
      <img src={Logo} alt="Planet_Logo" className="NavBarLogo App-logo" />
      <h1 className="Nav_Bar_Title">Space Travelers Hub</h1>
    </div>
    <div className="Nav_Bar_Container">
      <NavLink className="Nav_Bar_Links" to="/Rockets"> Rockets </NavLink>
      <NavLink className="Nav_Bar_Links" to="/missions"> Missions </NavLink>
      <hr className="Nav_Bar_hr" />
      <NavLink className="Nav_Bar_Links" to="/profile"> My Profile </NavLink>
    </div>
  </nav>
);

export default Nav;
