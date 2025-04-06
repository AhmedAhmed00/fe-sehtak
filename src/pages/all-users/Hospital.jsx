import HospitalTable from "../../features/all-users/hospital/HospitalTable";
import { Container } from "../../ui/Container";
import Row from "../../ui/Row";

function Hospital() {
  return (
    <Container>
      <Row>
        <HospitalTable />
      </Row>
    </Container>
  );
}

export default Hospital;
