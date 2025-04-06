import PhysicalTherapyTable from "../../features/all-users/physical-therapy/PhysicalTherapyTable";
import { Container } from "../../ui/Container";
import Row from "../../ui/Row";

function PhysicalTherapy() {
  return (
    <Container>
      <Row>
        <PhysicalTherapyTable />
      </Row>
    </Container>
  );
}

export default PhysicalTherapy;
