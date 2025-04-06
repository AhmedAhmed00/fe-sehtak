import { Outlet, useLocation } from "react-router-dom";
import { Container } from "../../ui/Container";
import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import { Avatar } from "../../ui/layout/Header";

function Mangement() {
  const { pathname } = useLocation();

  const name = pathname.split("/").slice(-1)[0];

  return (
    <Container>
      <Row
        style={{
          backgroundColor: "var(--color-grey-100)",
          padding: "25px",
          borderRadius: "10px",
        }}
        type="horizontal"
        justify="start"
        gap="20px"
      >
        <Avatar src="/profile-placeholder.png" />
        <Row gap="4px">
          <h2>User Name</h2>
          <p
            style={{
              fontSize: "18px",
            }}
          >
            Offering a comprehensive range of medical services
          </p>
        </Row>
      </Row>

      <Heading
        style={{
          margin: "20px 0",
        }}
        color="primary"
        as="h2"
      >
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </Heading>

      <Row>
        <Outlet />
      </Row>
    </Container>
  );
}

export default Mangement;
