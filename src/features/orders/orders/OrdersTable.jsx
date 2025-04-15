import OrderRow from "./OrderRow";
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
  <OrderRow order={order} key={index} />
);
const rowsData = [
  {
    name: "John Doe",
    city: "Alexandria",
    phone: "0123456789",
    status: "Pending",
    branch: "Branch A",
  },
  {
    name: "Jane Smith",
    city: "Cairo",
    phone: "0987654321",
    status: "Completed",
    branch: "Branch B",
  },
  {
    name: "Alice Johnson",
    city: "Giza",
    phone: "0112233445",
    status: "In Progress",
    branch: "Branch C",
  },
  {
    name: "Bob Brown",
    city: "Aswan",
    phone: "0778899000",
    status: "Cancelled",
    branch: "Branch D",
  },
  {
    name: "Charlie Green",
    city: "Luxor",
    phone: "0555667788",
    status: "Pending",
    branch: "Branch E",
  },
  {
    name: "Diana Prince",
    city: "Hurghada",
    phone: "0444333222",
    status: "Completed",
    branch: "Branch F",
  },
  {
    name: "Ethan Hunt",
    city: "Sharm El Sheikh",
    phone: "0333222111",
    status: "In Progress",
    branch: "Branch G",
  },
  {
    name: "Fiona Apple",
    city: "Suez",
    phone: "0222111000",
    status: "Cancelled",
    branch: "Branch H",
  },
  {
    name: "George Clooney",
    city: "Port Said",
    phone: "0111222333",
    status: "Pending",
    branch: "Branch I",
  },
];

function OrdersTable() {
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

export default OrdersTable;
