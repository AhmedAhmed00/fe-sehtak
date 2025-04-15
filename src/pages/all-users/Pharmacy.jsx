import { useForm } from "react-hook-form";
import PharmacyTable from "../../features/all-users/pharmacy/PharmacyTable";
import useFilters from "../../hooks/useFilter";
import useModal from "../../hooks/useModal";
import { Container } from "../../ui/Container";
import { OperationsContainer } from "../../ui/OperationsContainer";
import Row from "../../ui/Row";
import SearchInput from "../../ui/SearchInput";
import TableOperations from "../../ui/table/TableOperations";

function Pharmacy() {
  const { handleClose, isClosing, setIsClosing, openModal, setOpenModal } =
    useModal();
  const { handleFilter } = useFilters();
  const { handleSubmit, register } = useForm();
  function onSubmit(values) {
    handleClose(false);
    handleFilter(values);
  }
  return (
    <Container>
      <OperationsContainer>
        <SearchInput />
        <TableOperations
          filterable={false}
          setOpenModal={setOpenModal}
          addPath={"/all-users/pharmacy/pharmacy-form"}
          addTitle={"Add Pharmacy"}
        />
      </OperationsContainer>
      <Row>
        <PharmacyTable />
      </Row>
    </Container>
  );
}

export default Pharmacy;
