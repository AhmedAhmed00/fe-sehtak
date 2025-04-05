import styled from "styled-components";
import Heading from "./Heading";

const StyledLogo = styled.div`
  /* text-align: center; */
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);
  margin-bottom: 44px;
`;

const Img = styled.img``;

function Logo() {
  return (
    <StyledLogo>
      {/* <Heading as={"h3"}>Law System</Heading> */}
      <Img src="/logo.webp" alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
