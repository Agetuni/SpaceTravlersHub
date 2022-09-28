import { useDispatch, useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import { useEffect } from 'react';
import { getRockets } from '../../redux/rockets/rocketsSlice';
import Rocket from './Rocket';

const Rockets = () => {
  const dispatch = useDispatch();
  const rocketsData = useSelector((state) => state.rockets);
  useEffect(() => {
    if (!rocketsData.length) {
      dispatch(getRockets());
    }
  });
  return (
    <Container>
      {rocketsData.map((rocketData) => (
        <Rocket key={rocketData.id} rocket={rocketData} />
      ))}
    </Container>
  );
};
export default Rockets;
