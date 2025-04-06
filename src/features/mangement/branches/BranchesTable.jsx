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
        headers={BRANCHES_HEADS}
        data={rowsData}
        renderRow={renderBranchRow}
        pageSize={20}
        resaultsCount={10}
        isLoading={false}
      />
      {openFilter && <Modal onClose={() => setOpenFilter(false)}></Modal>}
    </>
  );
}

export default BranchesTable;
