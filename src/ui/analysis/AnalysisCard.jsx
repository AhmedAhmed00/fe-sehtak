import styled from "styled-components";
import Heading from "../Heading";
import Row from "../Row";

const AnalysisCardStyles = styled(Row)`
  background-color: white;
  align-items: start;
  width: 25%;
  justify-content: center;
  width: 100%;
  padding: 10px;
  border: 1px solid #f5f5f5;
  border-radius: 6px;
`;

const Number = styled.p`
  font-size: 26px;
  font-weight: 500;
`;

export default function AnalysisCard({ title, number }) {
  return (
    <AnalysisCardStyles gap="8px" type="vertical">
      <Heading style={{ color: "#888888" }} as={"h4"}>
        {title}
      </Heading>
      <Number>{number}</Number>
    </AnalysisCardStyles>
  );
}
