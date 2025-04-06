import SpecializationTable from "../../features/specializations/specialization/SpecializationTable";
import { Container } from "../../ui/Container";
import Row from "../../ui/Row";

function Specialization() {
  return (
    <Container>
      <Row>
        <SpecializationTable />
      </Row>
    </Container>
  );
}

export default Specialization;
