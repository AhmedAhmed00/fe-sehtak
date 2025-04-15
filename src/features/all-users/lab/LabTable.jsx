import styled from "styled-components";
import TableOperations from "../../../ui/table/TableOperations";
import GenericTable from "../../../ui/table/GenericTable";
import LabRow from "./LabRow";
import { useState } from "react";
import Modal from "../../../ui/table/Modal";

export const LAB_HEADS = ["Name", "Email", "Phone", "City", "Actions"];

export const renderLabRow = (lab, index) => <LabRow lab={lab} key={index} />;
const rowsData = [
  {
    name: "John Doe",
    email: "devAhmedAhmed",
    phone: "123456789",
    city: "Cairo",
  },
];

function HospitalTable() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <GenericTable
        headers={LAB_HEADS}
        data={rowsData}
        renderRow={renderLabRow}
        pageSize={20}
        resaultsCount={10}
        isLoading={false}
      />
    </>
  );
}

export default HospitalTable;
