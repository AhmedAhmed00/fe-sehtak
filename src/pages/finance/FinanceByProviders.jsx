import FinanceByProvidersTable from "../../features/finance/by-providers/FinanceByProvidersTable";
import { Container } from "../../ui/Container";
import Row from "../../ui/Row";
import SearchInput from "../../ui/SearchInput";

function FinanceByProviders() {
  return (
    <Container>
      <Row
        type="horizontal"
        gap={"14px"}
        justify="space-between"
        align="center"
      >
        <SearchInput />
      </Row>
      <Row>
        <FinanceByProvidersTable />
      </Row>
    </Container>
  );
}

export default FinanceByProviders;
