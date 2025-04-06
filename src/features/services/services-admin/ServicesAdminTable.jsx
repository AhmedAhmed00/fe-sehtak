import ServiceRow from "./ServiceAdminRow";
import { useState } from "react";
import GenericTable from "../../../ui/table/GenericTable";
import TableOperations from "../../../ui/table/TableOperations";
import Modal from "../../../ui/table/Modal";
import Row from "../../../ui/Row";

export const SERVICES_HEADS = ["Service Name", "Type", "Actoins"];

export const renderServiceRow = (service, index) => (
  <ServiceRow service={service} key={index} />
);
const rowsData = [
  {
    name: "Service 1",
    type: "Type A",
  },
  {
    name: "Service 2",
    type: "Type B",
  },
  {
    name: "Service 3",
    type: "Type C",
  },
  {
    name: "Service 4",
    type: "Type D",
  },
  {
    name: "Service 5",
    type: "Type E",
  },
];

function ServicesTable() {
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
        headers={SERVICES_HEADS}
        data={rowsData}
        renderRow={renderServiceRow}
        pageSize={20}
        resaultsCount={10}
        isLoading={false}
      />
      {openFilter && <Modal onClose={() => setOpenFilter(false)}></Modal>}
    </>
  );
}

export default ServicesTable;
