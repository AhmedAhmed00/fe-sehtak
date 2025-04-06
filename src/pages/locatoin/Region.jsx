import RegionTable from "../../features/Location/Region/RegionTable";
import { Container } from "../../ui/Container";
import Row from "../../ui/Row";

function Region() {
  return (
    <Container>
      <Row>
        <RegionTable />
      </Row>
    </Container>
  );
}

export default Region;
