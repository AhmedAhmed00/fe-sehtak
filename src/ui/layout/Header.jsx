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
`;

export const Avatar = styled.img`
  width: 58px;
  height: 58px;
  object-fit: cover;
  border-radius: 50%;
`;

const AfterGreater = styled.div`
  color: var(--color-primary);
`;

function Header({ title }) {
  let newTitle = [];

  function formatTitle(title) {
    // We will store if the next parts should be primary color or not
    let afterGreater = false;

    title.forEach((text, i) => {
      if (text === ">") {
        // Once we encounter ">", the next texts should be primary
        afterGreater = true;
      }

      if (afterGreater) {
        newTitle.push({ text: text, color: "var(--color-primary)" });
      } else {
        newTitle.push({ text: text, color: "var(--color-grey-600)" });
      }
    });
  }

  if (title) {
    const splitTitle = title.split(" ");
    formatTitle(splitTitle);
  }

  console.log(newTitle);

  return (
    <StyledHeader>
      <Heading as="h3">
        {newTitle.length > 0 ? (
          newTitle.map((item, i) => (
            <span key={i} style={{ color: item.color }}>
              {item.text}{" "}
            </span>
          ))
        ) : (
          <span>{title}</span>
        )}
      </Heading>
    </StyledHeader>
  );
}

export default Header;
