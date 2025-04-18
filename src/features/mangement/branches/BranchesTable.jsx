import TableOperations from "../../../ui/table/TableOperations";
import GenericTable from "../../../ui/table/GenericTable";
import BranchRow from "./BranchRow";
import { useState } from "react";
import Modal from "../../../ui/table/Modal";
import Row from "../../../ui/Row";

export const BRANCHES_HEADS = ["Name", "Actions"];

export const renderBranchRow = (branch, index) => (
  <BranchRow branch={branch} key={index} />
);
const rowsData = [
  {
    name: "John Doe",
  },
];

function BranchesTable() {
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
        headers={BRANCHES_HEADS}
        data={rowsData}
        renderRow={renderBranchRow}
        pageSize={20}
        resaultsCount={10}
        isLoading={false}
      />
      {openModal && <Modal onClose={() => setOpenModal(false)}></Modal>}
    </>
  );
}

export default BranchesTable;
