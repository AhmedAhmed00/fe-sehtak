import LabCategoriesTable from "../../features/services/lab-categories/LabCategoriesTable";
import { Container } from "../../ui/Container";
import Row from "../../ui/Row";

function LabCategories() {
  return (
    <Container>
      <Row>
        <LabCategoriesTable />
      </Row>
    </Container>
  );
}

export default LabCategories;
