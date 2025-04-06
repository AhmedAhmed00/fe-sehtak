import ScannerTable from "../../features/all-users/scanner/ScannerTable";
import { Container } from "../../ui/Container";
import Row from "../../ui/Row";

function Scanner() {
  return (
    <Container>
      <Row>
        <ScannerTable />
      </Row>
    </Container>
  );
}

export default Scanner;
