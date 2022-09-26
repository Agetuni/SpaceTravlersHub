import PropTypes from 'prop-types';

const Mission = (props) => {
  const { mission } = props;
  return (
    <tr>
      <td>{mission.mission_name}</td>
      <td>{mission.description}</td>
      <td>true</td>
    </tr>
  );
};
Mission.propTypes = {
  mission: PropTypes.shape({
    mission_id: PropTypes.string,
    mission_name: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};
export default Mission;
