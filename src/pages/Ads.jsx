import AdsTable from "../features/ads/AdsTable";
import { Container } from "../ui/Container";
import Row from "../ui/Row";

function Ads() {
  return (
    <Container>
      <Row>
        <AdsTable />
      </Row>
    </Container>
  );
}

export default Ads;
