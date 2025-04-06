import { useState } from "react";

import ProviderRow from "./ProviderRow";
import Row from "../../../ui/Row";
import TableOperations from "../../../ui/table/TableOperations";
import GenericTable from "../../../ui/table/GenericTable";
import Modal from "../../../ui/table/Modal";

export const Providers_HEADS = ["Name", "Phone", "Email", "Service", "Actions"];

export const renderProviderRow = (provider, index) => (
  <ProviderRow provider={provider} key={index} />
);
const rowsData = [
  {
    name: "John Doe",
    phone: "0123456789",
    email: "devahmed@gmail.com",
    branch: "Branch A",
    service: "Service A",
  },
  {
    name: "Jane Smith",
    phone: "0987654321",
    email: "mohamed@yahoo.com",
    branch: "Branch B",
    service: "Service B",
  },
];

function ProvidersTable() {
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
        headers={Providers_HEADS}
        data={rowsData}
        renderRow={renderProviderRow}
        pageSize={20}
        resaultsCount={10}
        isLoading={false}
      />
      {openFilter && <Modal onClose={() => setOpenFilter(false)}></Modal>}
    </>
  );
}

export default ProvidersTable;
