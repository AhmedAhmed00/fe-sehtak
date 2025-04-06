import FinanceByProvidersTable from "../../features/finance/by-providers/FinanceByProvidersTable";
import { Container } from "../../ui/Container";
import Row from "../../ui/Row";

function FinanceByProviders() {
  return (
    <Container>
      <Row>
        <FinanceByProvidersTable />
      </Row>
    </Container>
  );
}

export default FinanceByProviders;
