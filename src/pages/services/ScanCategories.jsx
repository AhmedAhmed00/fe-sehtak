import ScanCategoriesTable from "../../features/services/scan-categories/ScanCategoriesTable";
import { Container } from "../../ui/Container";
import Row from "../../ui/Row";

function ScanCategories() {
  return (
    <Container>
      <Row>
        <ScanCategoriesTable />
      </Row>
    </Container>
  );
}

export default ScanCategories;
