import styled from "styled-components";
import TableOperations from "../../../ui/table/TableOperations";
import GenericTable from "../../../ui/table/GenericTable";
import SpecializationRow from "./SpecializationRow";
import { useState } from "react";
import Modal from "../../../ui/table/Modal";
import Row from "../../../ui/Row";

export const SPECIALIZATION_HEADS = ["Name", "Actions"];

export const renderSpecializationRow = (specialization, index) => (
  <SpecializationRow specialization={specialization} key={index} />
);
const rowsData = [
  {
    name: "John Doe",
  },
];

function SpecializationTable() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <GenericTable
        headers={SPECIALIZATION_HEADS}
        data={rowsData}
        renderRow={renderSpecializationRow}
        pageSize={20}
        resaultsCount={10}
        isLoading={false}
      />
      {openModal && <Modal onClose={() => setOpenModal(false)}></Modal>}
    </>
  );
}

export default SpecializationTable;
