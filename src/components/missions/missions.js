import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getMissions } from '../../redux/missions/missionsSlice';
import Mission from './mission';
import './missions.css';

const Missions = () => {
  const dispatch = useDispatch();
  const missionsData = useSelector((store) => store.missions);
  useEffect(() => {
    if (!missionsData.length) {
      dispatch(getMissions());
    }
  });
  return (
    <table>
      <thead>
        <tr>
          <th> mession</th>
          <th> Descriptio</th>
          <th> Status</th>
        </tr>
      </thead>
      <tbody>
        {missionsData.map((missionData) => (
          <Mission key={missionData.id} mission={missionData} />
        ))}
      </tbody>
    </table>
  );
};
export default Missions;
