import TableOperations from "../../../ui/table/TableOperations";
import GenericTable from "../../../ui/table/GenericTable";
import FinanceByOrdersRow from "./FinanceByOrdersRow";
import { useState } from "react";
import Modal from "../../../ui/table/Modal";
import Row from "../../../ui/Row";

export const FINANCE_BY_ORDERS_HEADS = [
  "Patient Name",
  "Provider Name	",
  "Service",
  "Phone",
  "Branch",
  "Status",
  "Actions",
];

export const renderFinanceByOrder = (financeByOrder, index) => (
  <FinanceByOrdersRow financeByOrder={financeByOrder} key={index} />
);
const rowsData = [
  {
    name: "John Doe",
    providerName: "Provider A",
    service: "Service A",
    phone: "0123456789",
    branch: "Branch A",
    status: "Pending",
  },
  {
    name: "Jane Smith",
    providerName: "Provider B",
    service: "Service B",
    phone: "0987654321",
    branch: "Branch B",
    status: "Completed",
  },
  {
    name: "Alice Johnson",
    providerName: "Provider C",
    service: "Service C",
    phone: "0112233445",
    branch: "Branch C",
    status: "In Progress",
  },
  {
    name: "Bob Brown",
    providerName: "Provider D",
    service: "Service D",
    phone: "0778899000",
    branch: "Branch D",
    status: "Cancelled",
  },
  {
    name: "Charlie Green",
    providerName: "Provider E",
    service: "Service E",
    phone: "0555667788",
    branch: "Branch E",
    status: "Pending",
  },
  {
    name: "Diana Prince",
    providerName: "Provider F",
    service: "Service F",
    phone: "0444333222",
    branch: "Branch F",
    status: "Completed",
  },
  {
    name: "Bruce Wayne",
    providerName: "Provider G",
    service: "Service G",
    phone: "0333222111",
    branch: "Branch G",
    status: "In Progress",
  },
  {
    name: "Clark Kent",
    providerName: "Provider H",
    service: "Service H",
    phone: "0222111222",
    branch: "Branch H",
    status: "Cancelled",
  },
];

function FinanceByProvidersTable() {
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
        headers={FINANCE_BY_ORDERS_HEADS}
        data={rowsData}
        renderRow={renderFinanceByOrder}
        pageSize={20}
        resaultsCount={10}
        isLoading={false}
      />
      {openFilter && <Modal onClose={() => setOpenFilter(false)}></Modal>}
    </>
  );
}

export default FinanceByProvidersTable;
