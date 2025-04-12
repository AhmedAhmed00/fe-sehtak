import { useForm } from "react-hook-form";
import HospitalTable from "../../features/all-users/hospital/HospitalTable";
import { Container } from "../../ui/Container";
import { OperationsContainer } from "../../ui/OperationsContainer";
import Row from "../../ui/Row";
import TableOperations from "../../ui/table/TableOperations";
import useFilters from "../../hooks/useFilter";
import useFilterModal from "../../hooks/useModal";
import FilterModal from "../../ui/FilterModal";
import Form from "../../ui/Form";
import FilterButtons from "../../ui/FilterButtons";
import { createPortal } from "react-dom";
import SearchInput from "../../ui/SearchInput";

function Hospital() {
  const { handleClose, isClosing, setIsClosing, openFilter, setOpenFilter } =
    useFilterModal();
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
          setOpenFilter={setOpenFilter}
          addPath={"/all-users/hospital/hospital-form"}
          addTitle={"Add Hospital"}
        />
      </OperationsContainer>
      <Row>
        <HospitalTable />
      </Row>
      {openFilter &&
        createPortal(
          <FilterModal
            handleFilter={handleFilter}
            isClosing={isClosing}
            setIsClosing={setIsClosing}
            onClose={handleClose}
            handleClose={handleClose}
          >
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Row></Row>

              <FilterButtons handleClose={handleClose} />
            </Form>
          </FilterModal>,
          document.body
        )}
    </Container>
  );
}

export default Hospital;
