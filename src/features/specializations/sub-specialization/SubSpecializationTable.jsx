import TableOperations from "../../../ui/table/TableOperations";
import GenericTable from "../../../ui/table/GenericTable";
import SubSpecializationRow from "./SubSpecializationRow";
import { useState } from "react";
import Modal from "../../../ui/table/Modal";
import Row from "../../../ui/Row";

export const SUB_SPECIALIZATION_HEADS = ["Name", "Specializatoin", "Actions"];

export const renderSubSpecializationRow = (specialization, index) => (
  <SubSpecializationRow subSpecialization={specialization} key={index} />
);
const rowsData = [
  {
    name: "John Doe",
    specializatoin: "Surgery",
  },
];

function SubSpecializationTable() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Row
        type="horizontal"
        gap={"14px"}
        justify="space-between"
        align="center"
      >
        <TableOperations setOpenModal={setOpenModal} addPath={""} />
      </Row>

      <GenericTable
        headers={SUB_SPECIALIZATION_HEADS}
        data={rowsData}
        renderRow={renderSubSpecializationRow}
        pageSize={20}
        resaultsCount={10}
        isLoading={false}
      />
      {openModal && <Modal onClose={() => setOpenModal(false)}></Modal>}
    </>
  );
}

export default SubSpecializationTable;
