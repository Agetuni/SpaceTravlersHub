import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
    <div className="Rockets">
      {rocketsData.map((rocketData) => (
        <Rocket key={rocketData.id} rocket={rocketData} />
      ))}
    </div>
  );
};
export default Rockets;
