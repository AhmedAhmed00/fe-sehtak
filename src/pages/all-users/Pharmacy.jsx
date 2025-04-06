import PharmacyTable from "../../features/all-users/pharmacy/PharmacyTable";
import { Container } from "../../ui/Container";
import Row from "../../ui/Row";

function Pharmacy() {
  return (
    <Container>
      <Row>
        <PharmacyTable />
      </Row>
    </Container>
  );
}

export default Pharmacy;
