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

  // Print all the missions in a Variable
  const listMissions = missionsData.map((missionData) => (
    <Mission key={missionData.id} mission={missionData} />
  ));

  return (
    <table className="table table-bordered border-Secondary container">
      <thead className="thead">
        <tr>
          <th> Mission </th>
          <th> Description </th>
          <th> Status </th>
        </tr>
      </thead>

      {listMissions}

    </table>
  );
};

export default Missions;
