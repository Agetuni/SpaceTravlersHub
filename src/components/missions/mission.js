import PropTypes from 'prop-types';
// import { useDispatch } from 'react-redux';
import './missions.css';

const Mission = (props) => {
  const { mission, id } = props;
  // const dispatch = useDispatch();

  return (
    <tr className="One_mission_Item">
      <td className="Table_missions_name">{mission.mission_name}</td>
      <td className="Table_missions_description">{mission.description}</td>
      <td className="Table_missions_status">True</td>
      <td className="Table_missions_buttons">
        <button id={id} type="button">Join Mission</button>
        <button type="button" className="display_none">Leave Mission</button>
      </td>
    </tr>
  );
};

// onClick={() => dispatch(handleBtnMission(id))}

// Default props
Mission.defaultProps = {
  id: '',
};

Mission.propTypes = {
  mission: PropTypes.shape({
    mission_id: PropTypes.string,
    mission_name: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  id: PropTypes.string,
};

export default Mission;
