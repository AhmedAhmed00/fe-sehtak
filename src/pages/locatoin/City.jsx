import { createPortal } from "react-dom";
import CityTable from "../../features/Location/City/CityTable";
import useModal from "../../hooks/useModal";
import { Container } from "../../ui/Container";
import { OperationsContainer } from "../../ui/OperationsContainer";
import Row from "../../ui/Row";
import SearchInput from "../../ui/SearchInput";
import TableOperations from "../../ui/table/TableOperations";
import FormModal from "../../ui/FormModal";
import CityForm from "./CityForm";

function City() {
  const { handleClose, isClosing, setIsClosing, openModal, setOpenModal } =
    useModal();

  return (
    <Container>
      <OperationsContainer>
        <SearchInput />
        <TableOperations
          setOpenModal={setOpenModal}
          formType="modal"
          addTitle={"Add City"}
        />
      </OperationsContainer>
      <Row>
        <CityTable />
      </Row>
      {openModal &&
        createPortal(
          <FormModal
            isClosing={isClosing}
            setIsClosing={setIsClosing}
            onClose={handleClose}
            handleClose={handleClose}
            form={<CityForm handleClose={handleClose} />}
          />,
          document.body
        )}
    </Container>
  );
}

export default City;
