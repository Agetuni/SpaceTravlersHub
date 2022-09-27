import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import PropTypes from 'prop-types';

import './Rockets.css';
import { useDispatch } from 'react-redux';
import { reserveRocket } from '../../redux/rockets/rocketsSlice';

const Rocket = (props) => {
  const dispatch = useDispatch();
  const { rocket } = props;
  return (
    <Row className="p-2">

      <Col md="4">
        <img src={rocket.flickr_images[0]} alt={rocket.rocket_name} />
      </Col>

      <Col md="8">

        <p className="rocket-name">
          {' '}
          {rocket.rocket_name}
        </p>

        <p className="rocket-description">
          {rocket.reserved ? <Badge bg="info">Reserved</Badge> : ''}
          {rocket.description}
        </p>

        <Button
          variant={rocket.reserved ? 'outline-primary' : 'primary'}
          size="lg"
          onClick={() => dispatch(reserveRocket(rocket.rocket_id))}
        >
          {rocket.reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
        </Button>

      </Col>

    </Row>
  );
};

Rocket.propTypes = {
  rocket: PropTypes.shape({
    rocket_id: PropTypes.string,
    rocket_name: PropTypes.string,
    description: PropTypes.string,
    reserved: PropTypes.bool,
    flickr_images: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};
export default Rocket;
