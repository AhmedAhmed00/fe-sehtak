import styled from "styled-components";
import TableOperations from "../../../ui/table/TableOperations";
import GenericTable from "../../../ui/table/GenericTable";
import { useState } from "react";
import Modal from "../../../ui/table/Modal";
import Row from "../../../ui/Row";

import DoctorRow from "./DoctorRow";
import { OperationsContainer } from "../../../ui/OperationsContainer";
import SearchInput from "../../../ui/SearchInput";
import useModal from "../../../hooks/useModal";
import useFilters from "../../../hooks/useFilter";
import { useForm } from "react-hook-form";

const Div = styled.div`
  display: flex;
  gap: 14px;
  justify-content: space-between;
  align-items: center;
`;

export const DOCTOR_HEADS = [
  "Name",
  "Email",
  "Phone",
  "Title",
  "Specialization",
  "Actions",
];

export const renderDocotrRow = (doctor, index) => (
  <DoctorRow doctor={doctor} key={index} />
);
const rowsData = [
  {
    name: "John Doe",
    email: "devAhmedAhmed",
    phone: "123456789",
    title: "Doctor",
    specialization: "Cardiology",
  },
];

function DoctorTable() {
  const { handleClose, isClosing, setIsClosing, openModal, setOpenModal } =
    useModal();
  const { handleFilter } = useFilters();
  const { handleSubmit, register } = useForm();
  function onSubmit(values) {
    handleClose(false);
    handleFilter(values);
  }
  return (
    <>
      <OperationsContainer>
        <SearchInput />
        <TableOperations
          filterable={false}
          setOpenModal={setOpenModal}
          addPath={"/all-users/doctor/doctor-form"}
          addTitle={"Add Doctor"}
        />
      </OperationsContainer>
      <GenericTable
        headers={DOCTOR_HEADS}
        data={rowsData}
        renderRow={renderDocotrRow}
        pageSize={20}
        resaultsCount={10}
        isLoading={false}
      />
    </>
  );
}

export default DoctorTable;
