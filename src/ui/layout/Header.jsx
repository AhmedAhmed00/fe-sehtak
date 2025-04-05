import styled from "styled-components";
import { IoIosNotificationsOutline } from "react-icons/io";
import SearchInput from "../SearchInput";
import Heading from "../Heading";

const StyledHeader = styled.header`
  background-color: rgba(249, 249, 249, 1);
  padding: 1.2rem 4.8rem;
  padding-top: 30px;
  border: 1px solid var(--color-grey-200);
  padding-bottom: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${"" /* box-shadow: 0px 2px 12px 0px #0000001a; */}
`;

const Avatar = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
`;

const Div = styled.div`
  display: flex;
  gap: 10px;
`;

function Header({ title }) {
  return (
    <>
      <StyledHeader>
        <Heading as={"h3"}>{title || <span></span>}</Heading>
      </StyledHeader>
    </>
  );
}

export default Header;
