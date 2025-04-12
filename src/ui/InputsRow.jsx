import styled from "styled-components";

export const InputsRow = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.dir ? props.dir : "row")};
  margin-bottom: 12px;
  gap: 25px;
  justify-content: space-between;
  width: 100%;
`;
