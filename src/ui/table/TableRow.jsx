import styled from "styled-components";
import Actions from "../Actions";

export const TableRowStyles = styled.div`
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.cols}, 1fr)`};
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.6rem 2.4rem;
  border-bottom: 1px solid var(--color-grey-100);
  font-size: 1.4rem;
  color: var(--color-grey-700);

  &:nth-child(even) {
    background-color: var(--color-grey-50);
  }
`;

export function TableRow({ cols, children }) {
  return <TableRowStyles cols={cols}>{children}</TableRowStyles>;
}
