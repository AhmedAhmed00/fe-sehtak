import styled from "styled-components";
import { IoSearchOutline } from "react-icons/io5";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  display: inline-block;
`;

export const SearchInputStyle = styled.input.attrs({
  placeholder: "What are you looking for...?",
})`
  border-radius: 8px;
  border: 1px solid var(--color-grey-700);
  outline: none;
  padding: 4px 30px 4px 38px;
  height: 42px;
  width: 100%;
  font-size: 14px;
`;

const Icon = styled.span`
  position: absolute;
  top: 56%;
  left: 12px;
  transform: translateY(-50%);
  font-size: 2rem;
  color: var(--color-grey-700);
  pointer-events: none;
`;

export default function SearchInput() {
  return (
    <Wrapper>
      <Icon>
        <IoSearchOutline />
      </Icon>
      <SearchInputStyle />
    </Wrapper>
  );
}
