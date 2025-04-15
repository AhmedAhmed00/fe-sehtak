import { createPortal } from "react-dom";
import RegionTable from "../../features/Location/Region/RegionTable";
import useModal from "../../hooks/useModal";
import { Container } from "../../ui/Container";
import FormModal from "../../ui/FormModal";
import { OperationsContainer } from "../../ui/OperationsContainer";
import Row from "../../ui/Row";
import SearchInput from "../../ui/SearchInput";
import TableOperations from "../../ui/table/TableOperations";
import CityForm from "./CityForm";
import RegionForm from "./RegionForm";

function Region() {
  const { handleClose, isClosing, setIsClosing, openModal, setOpenModal } =
    useModal();
  return (
    <Container>
      <OperationsContainer>
        <SearchInput />
        <TableOperations
          setOpenModal={setOpenModal}
          formType="modal"
          addTitle={"Add Region"}
        />
      </OperationsContainer>
      <Row>
        <RegionTable />
      </Row>
      {openModal &&
        createPortal(
          <FormModal
            isClosing={isClosing}
            setIsClosing={setIsClosing}
            onClose={handleClose}
            handleClose={handleClose}
            form={<RegionForm handleClose={handleClose} />}
          />,
          document.body
        )}
    </Container>
  );
}

export default Region;
