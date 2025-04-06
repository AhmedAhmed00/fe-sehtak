import OrdersTable from "../../features/orders/orders/OrdersTable";
import { Container } from "../../ui/Container";
import Row from "../../ui/Row";

function Orders() {
  return (
    <Container>
      <Row>
        <OrdersTable />
      </Row>
    </Container>
  );
}

export default Orders;
