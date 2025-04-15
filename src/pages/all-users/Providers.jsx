import { useForm } from "react-hook-form";
import ProvidersTable from "../../features/all-users/providers/ProvidersTable";
import useFilters from "../../hooks/useFilter";
import useModal from "../../hooks/useModal";
import { Container } from "../../ui/Container";
import Row from "../../ui/Row";
import { OperationsContainer } from "../../ui/OperationsContainer";
import SearchInput from "../../ui/SearchInput";
import TableOperations from "../../ui/table/TableOperations";

function Providers() {
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
          addPath={"/all-users/provider/provider-form"}
          addTitle={"Add Provider"}
        />
      </OperationsContainer>
      <Row>
        <ProvidersTable />
      </Row>
    </Container>
  );
}

export default Providers;
