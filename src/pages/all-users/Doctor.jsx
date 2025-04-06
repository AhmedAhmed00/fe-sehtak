import DoctorTable from "../../features/all-users/doctor/DoctorTable";
import { Container } from "../../ui/Container";
import Row from "../../ui/Row";

function Doctor() {
  return (
    <Container>
      <Row>
        <DoctorTable />
      </Row>
    </Container>
  );
}

export default Doctor;
