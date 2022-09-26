import PropTypes from 'prop-types';
import './Rockets.css';

const Rocket = (props) => {
  const { rocket } = props;
  return (
    <div className="rocket-card">
      <img src={rocket.flickr_images[0]} alt={rocket.rocket_name} />
      <h2>{rocket.rocket_name}</h2>
      <p>{rocket.description}</p>
    </div>
  );
};
Rocket.propTypes = {
  rocket: PropTypes.shape({
    rocket_name: PropTypes.string,
    description: PropTypes.string,
    flickr_images: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};
export default Rocket;
