import TableOperations from "../../../ui/table/TableOperations";
import GenericTable from "../../../ui/table/GenericTable";
import FinanceByProvidersRow from "./FinanceByProvidersRow";
import { useState } from "react";
import Modal from "../../../ui/table/Modal";
import Row from "../../../ui/Row";

export const FINANCE_BY_PROVIDERS_HEADS = [
  "Name",
  "Type",
  "Outstanding Balance",
  "Total Balance",
  "Actions",
];

export const renderFinanceByProvider = (financeByProvider, index) => (
  <FinanceByProvidersRow financeByProvider={financeByProvider} key={index} />
);
const rowsData = [
  {
    name: "Provider 1",
    type: "Type A",
    outstandingBalance: "$1000",
    totalBalance: "$5000",
  },
  {
    name: "Provider 2",
    type: "Type B",
    outstandingBalance: "$2000",
    totalBalance: "$7000",
  },
  {
    name: "Provider 3",
    type: "Type C",
    outstandingBalance: "$1500",
    totalBalance: "$6000",
  },
  {
    name: "Provider 4",
    type: "Type D",
    outstandingBalance: "$3000",
    totalBalance: "$8000",
  },
  {
    name: "Provider 5",
    type: "Type E",
    outstandingBalance: "$2500",
    totalBalance: "$9000",
  },
];

function FinanceByProvidersTable() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Row
        type="horizontal"
        gap={"14px"}
        justify="space-between"
        align="center"
      ></Row>

      <GenericTable
        headers={FINANCE_BY_PROVIDERS_HEADS}
        data={rowsData}
        renderRow={renderFinanceByProvider}
        pageSize={20}
        resaultsCount={10}
        isLoading={false}
      />
    </>
  );
}

export default FinanceByProvidersTable;
