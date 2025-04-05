import { Oval } from "react-loader-spinner";
import styled from "styled-components";

const FullPageSpinnerWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.8); /* Light overlay */
  backdrop-filter: blur(3px);
  z-index: 10000;
`;

function FullPageSpinner() {
  return (
    <FullPageSpinnerWrapper>
      <Oval height={60} width={60} color="#007bff" secondaryColor="#ccc" />
    </FullPageSpinnerWrapper>
  );
}

export default FullPageSpinner;
