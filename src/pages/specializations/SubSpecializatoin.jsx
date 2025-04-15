import { createPortal } from "react-dom";
import SubSpecializationTable from "../../features/specializations/sub-specialization/SubSpecializationTable";
import useModal from "../../hooks/useModal";
import { Container } from "../../ui/Container";
import { OperationsContainer } from "../../ui/OperationsContainer";
import Row from "../../ui/Row";
import SearchInput from "../../ui/SearchInput";
import TableOperations from "../../ui/table/TableOperations";
import FormModal from "../../ui/FormModal";
import SpecializationForm from "./SpecializationForm";
import SubSpecializatoinForm from "./SubSpecializatoinForm";

function SubSpecialization() {
  const { handleClose, isClosing, setIsClosing, openModal, setOpenModal } =
    useModal();

  return (
    <Container>
      <OperationsContainer>
        <SearchInput />
        <TableOperations
          setOpenModal={setOpenModal}
          formType="modal"
          addTitle={"Add Sub-Specialization"}
        />
      </OperationsContainer>

      <Row>
        <SubSpecializationTable />
      </Row>
      {openModal &&
        createPortal(
          <FormModal
            isClosing={isClosing}
            setIsClosing={setIsClosing}
            onClose={handleClose}
            handleClose={handleClose}
            form={<SubSpecializatoinForm handleClose={handleClose} />}
          />,
          document.body
        )}
    </Container>
  );
}

export default SubSpecialization;
