import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getMissions } from '../../redux/missions/missionsSlice';
import Mission from './mission';
import './missions.css';

const Missions = () => {
  const dispatch = useDispatch();
  const missionsData = useSelector((store) => store.missions);

  // Get books from the API at the beginning
  useEffect(() => {
    if (!missionsData.length) {
      dispatch(getMissions());
    }
  });

  return (
    <table className="Table_body_missions">
      <thead>
        <tr className="Table_body_missions_head">
          <th> Mission </th>
          <th> Description </th>
          <th> Status </th>
        </tr>
      </thead>
      <tbody>
        {missionsData?.map((missionData) => (
          <Mission key={missionData.id} id={missionData.id} mission={missionData} />
        ))}
      </tbody>
    </table>
  );
};
export default Missions;
