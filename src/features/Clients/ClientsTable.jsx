import { useState } from "react";
import GenericTable from "../../ui/table/GenericTable";
import TableOperations from "../../ui/table/TableOperations";
import Modal from "../../ui/table/Modal";
import Row from "../../ui/Row";
import ClientRow from "./ClientsRow";
import { se } from "date-fns/locale";

export const CLIENTS_HEADS = ["Name", "Phone", "Email", "Service", "Actions"];

export const renderClientRow = (client, index) => (
  <ClientRow client={client} key={index} />
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

function ClientsTable() {
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
        headers={CLIENTS_HEADS}
        data={rowsData}
        renderRow={renderClientRow}
        pageSize={20}
        resaultsCount={10}
        isLoading={false}
      />
      {openFilter && <Modal onClose={() => setOpenFilter(false)}></Modal>}
    </>
  );
}

export default ClientsTable;
