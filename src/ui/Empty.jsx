import styled from "styled-components";

const StyledEmpty = styled.div`
  min-height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  font-weight: 500;
`;

const StyledImg = styled.img.attrs({
  src: "/Empty.jpg", 
  alt: "Empty State", 
})`
  width: 250px; 
  height: auto;
`;

function Empty({ resource }) {
  return (
    <StyledEmpty>
      <StyledImg />
    </StyledEmpty>
  );
}

export default Empty;
