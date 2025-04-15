import PendingOrderRow from "./PendingOrderRow";
import { useState } from "react";
import GenericTable from "../../../ui/table/GenericTable";
import TableOperations from "../../../ui/table/TableOperations";
import Modal from "../../../ui/table/Modal";
import Row from "../../../ui/Row";

export const ORDER_HAEDS = [
  "Name",
  "Service",
  "Phone",
  "Status",
  "Branch",
  "Actions",
];

export const renderOrderRow = (order, index) => (
  <PendingOrderRow order={order} key={index} />
);
const rowsData = [];

function PendingOrdersTable() {
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
        headers={ORDER_HAEDS}
        data={rowsData}
        renderRow={renderOrderRow}
        pageSize={20}
        resaultsCount={10}
        isLoading={false}
      />
      {openModal && <Modal onClose={() => setOpenModal(false)}></Modal>}
    </>
  );
}

export default PendingOrdersTable;
