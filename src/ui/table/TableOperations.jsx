import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../Button";
import SearchInput from "../SearchInput";
import { IoAdd, IoFilter } from "react-icons/io5";
import Row from "../Row";

const OperationsContainer = styled.div`
  display: grid;
  grid-template-columns: 80% 19%;

  width: 100%;
  justify-content: space-between;
`;

const ButtonsGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 14px;
`;

export default function TableOperations({ setOpenFilter, addPath }) {
  const navigate = useNavigate();

  return (
    <OperationsContainer>
      <SearchInput />

      <ButtonsGroup>
        <Button
          onClick={() => setOpenFilter((open) => !open)}
          variation="primary"
          size="large"
        >
          <Row gap="12px" type="horizontal">
            <p>Filters</p>
            <IoFilter fontSize={18} fontWeight={500} />
          </Row>
        </Button>
        <Button
          onClick={() => navigate(addPath)}
          variation="primary"
          size="large"
        >
          <Row gap="12px" type="horizontal">
            <p>Add </p>
            <IoAdd fontSize={22} fontWeight={500} />
          </Row>
        </Button>
      </ButtonsGroup>
    </OperationsContainer>
  );
}
