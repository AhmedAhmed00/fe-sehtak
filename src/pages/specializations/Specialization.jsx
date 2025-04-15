import { useForm } from "react-hook-form";
import SpecializationTable from "../../features/specializations/specialization/SpecializationTable";
import useFilters from "../../hooks/useFilter";
import useModal from "../../hooks/useModal";
import { Container } from "../../ui/Container";
import { OperationsContainer } from "../../ui/OperationsContainer";
import Row from "../../ui/Row";
import SearchInput from "../../ui/SearchInput";
import TableOperations from "../../ui/table/TableOperations";
import { createPortal } from "react-dom";
import FormModal from "../../ui/FormModal";
import FilterButtons from "../../ui/FilterButtons";
import FilterModal from "../../ui/FilterModal";
import Form from "../../ui/Form";
import SpecializationForm from "./SpecializationForm";

function Specialization() {
  const { handleClose, isClosing, setIsClosing, openModal, setOpenModal } =
    useModal();

  return (
    <Container>
      <OperationsContainer>
        <SearchInput />
        <TableOperations
          setOpenModal={setOpenModal}
          formType="modal"
          addTitle={"Add specialization"}
        />
      </OperationsContainer>
      <Row>
        <SpecializationTable />
      </Row>
      {openModal &&
        createPortal(
          <FormModal
            isClosing={isClosing}
            setIsClosing={setIsClosing}
            onClose={handleClose}
            handleClose={handleClose}
            form={<SpecializationForm handleClose={handleClose} />}
          />,
          document.body
        )}
    </Container>
  );
}

export default Specialization;
