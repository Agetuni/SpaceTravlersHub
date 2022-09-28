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
        <td className="h6">{mission.mission_name}</td>
        <td className="col-9">{mission.description}</td>

        <td className="align-middle ">
          {mission.reserved ? <Badge bg="info">Active Member</Badge> : <Badge bg="secondary">NOT A MEMBER</Badge>}
        </td>
        <td className="align-middle col-1">

          <Button
            variant={mission.reserved ? 'outline-danger mx-0 p-0' : 'outline-secondary mx-1 p-0'}
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
