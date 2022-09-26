import PropTypes from 'prop-types';

const Rocket = (props) => {
  const { rocket } = props;
  return (
    <div className="">
      <h2>
        {' '}
        {rocket.rocket_name}
      </h2>
    </div>
  );
};
Rocket.propTypes = {
  rocket: PropTypes.shape({
    rocket_name: PropTypes.string,
  }).isRequired,
};
export default Rocket;
