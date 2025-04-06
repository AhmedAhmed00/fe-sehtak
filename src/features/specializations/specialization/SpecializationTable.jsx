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
  const [openFilter, setOpenFilter] = useState(false);

  return (
    <>
      <Row
        type="horizontal"
        gap={"14px"}
        justify="space-between"
        align="center"
      >
        <TableOperations setOpenFilter={setOpenFilter} addPath={""} />
      </Row>

      <GenericTable
        headers={SPECIALIZATION_HEADS}
        data={rowsData}
        renderRow={renderSpecializationRow}
        pageSize={20}
        resaultsCount={10}
        isLoading={false}
      />
      {openFilter && <Modal onClose={() => setOpenFilter(false)}></Modal>}
    </>
  );
}

export default SpecializationTable;
