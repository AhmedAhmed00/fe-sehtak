import SubSpecializationTable from "../../features/specializations/sub-specialization/SubSpecializationTable";
import { Container } from "../../ui/Container";
import Row from "../../ui/Row";

function SubSpecialization() {
  return (
    <Container>
      <Row>
        <SubSpecializationTable />
      </Row>
    </Container>
  );
}

export default SubSpecialization;
