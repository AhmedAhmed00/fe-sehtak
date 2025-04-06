import ProvidersTable from "../../features/all-users/clients/ProvidersTable";
import { Container } from "../../ui/Container";
import Row from "../../ui/Row";

function Providers() {
  return (
    <Container>
      <Row>
        <ProvidersTable />
      </Row>
    </Container>
  );
}

export default Providers;
