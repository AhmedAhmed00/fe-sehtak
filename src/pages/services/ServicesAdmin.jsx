import ServicesTable from "../../features/services/services-admin/ServicesAdminTable";
import { Container } from "../../ui/Container";
import Row from "../../ui/Row";

function ServicesAdmin() {
  return (
    <Container>
      <Row>
        <ServicesTable />
      </Row>
    </Container>
  );
}

export default ServicesAdmin;
