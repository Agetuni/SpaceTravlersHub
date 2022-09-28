import { useSelector } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import './profile.css';

const Profile = () => {
  const rocketsData = useSelector((state) => state.rockets);
  const reservedRockets = rocketsData.filter((rocket) => rocket.reserved);

  const missionsData = useSelector((state) => state.missions);
  const joinedMissions = missionsData.filter((mission) => mission.reserved);

  return (
    <Container>
      <Row>

        <Col>
          <p className="title">My Missions</p>
          <Table>
            <thead>
              {joinedMissions.map((mission) => (
                <tr key={mission.mission_id}>
                  <th className="reserved">
                    {mission.mission_name}
                  </th>
                </tr>
              ))}
            </thead>
          </Table>
        </Col>

        <Col>
          <p className="title">My Rockets</p>
          <Table striped bordered hover>
            <thead>
              {reservedRockets.map((rocket) => (
                <tr key={rocket.rocket_id}>
                  <th className="reserved">
                    {rocket.rocket_name}
                  </th>
                </tr>
              ))}
            </thead>
          </Table>
        </Col>

      </Row>
    </Container>
  );
};
export default Profile;
