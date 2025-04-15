import FinanceByOrdersTable from "../../features/finance/by-orders/FinanceByOrdersTable";
import FinanceByProvidersTable from "../../features/finance/by-providers/FinanceByProvidersTable";
import { Container } from "../../ui/Container";
import Row from "../../ui/Row";
import SearchInput from "../../ui/SearchInput";

function FinanceByOrders() {
  return (
    <Container>
      <Row>
        <SearchInput />
        <FinanceByOrdersTable />
      </Row>
    </Container>
  );
}

export default FinanceByOrders;
