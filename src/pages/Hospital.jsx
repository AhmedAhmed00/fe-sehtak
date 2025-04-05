import HospitalTable from "../features/hospital/HospitalTable";
import { Container } from "../ui/Container";
import Row from "../ui/Row";

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
