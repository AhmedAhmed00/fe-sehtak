import TableOperations from "../../../ui/table/TableOperations";
import GenericTable from "../../../ui/table/GenericTable";
import FinanceByOrdersRow from "./FinanceByOrdersRow";
import { useState } from "react";
import Modal from "../../../ui/table/Modal";
import Row from "../../../ui/Row";
import { Avatar } from "../../../ui/layout/Header";

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

function FinanceByOrdersTable() {
  return (
    <>
      <TotalIncome />
      <GenericTable
        headers={FINANCE_BY_ORDERS_HEADS}
        data={rowsData}
        renderRow={renderFinanceByOrder}
        pageSize={20}
        resaultsCount={10}
        isLoading={false}
      />
    </>
  );
}

export default FinanceByOrdersTable;

function TotalIncome() {
  return (
    <>
      <Row
        style={{
          backgroundColor: "var(--color-grey-100)",
          padding: "25px",
          borderRadius: "10px",
          border: "1px solid var(--color-grey-300)",
        }}
        type="horizontal"
        justify="start"
        gap="20px"
      >
        <Avatar src="/profile-placeholder.png" />
        <Row gap="4px">
          <h2
            style={{
              fontSize: "20px",
            }}
          >
            Total Income
          </h2>
          <p
            style={{
              fontSize: "15px",
            }}
          >
            Offering a comprehensive range of medical services
          </p>
        </Row>
      </Row>
    </>
  );
}
