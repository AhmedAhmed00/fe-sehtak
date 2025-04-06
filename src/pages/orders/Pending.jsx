import PendingOrdersTable from "../../features/orders/pending/PendingOrdersTable";
import { Container } from "../../ui/Container";
import Row from "../../ui/Row";

function Pending() {
  return (
    <Container>
      <Row>
        <PendingOrdersTable />
      </Row>
    </Container>
  );
}

export default Pending;
