/* eslint-disable max-len */
/* eslint-disable no-undef */
import PropTypes from 'prop-types';
import './missions.css';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { joinMission } from '../../redux/missions/missionsSlice';

const Mission = (props) => {
  const dispatch = useDispatch();
  const { mission } = props;

  return (
    <tbody className="Container_missions">
      <tr>
        <td>{mission.mission_name}</td>
        <td>{mission.description}</td>

        <td>
          {mission.reserved ? <Badge bg="secondary">NOT A MEMBER</Badge> : <Badge bg="info">Active Member</Badge>}
        </td>
        <td>

          <Button
            variant={mission.reserved ? 'outline-primary' : 'primary'}
            size="sm"
            onClick={() => dispatch(joinMission(mission.mission_id))}
          >
            {mission.reserved ? 'Leave Mission' : 'Join Mission'}
          </Button>

        </td>

      </tr>
    </tbody>
  );
};

Mission.propTypes = {
  mission: PropTypes.shape({
    mission_id: PropTypes.string,
    mission_name: PropTypes.string,
    description: PropTypes.string,
    reserved: PropTypes.string,
  }).isRequired,
};
export default Mission;
