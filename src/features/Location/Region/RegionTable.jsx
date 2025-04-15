import TableOperations from "../../../ui/table/TableOperations";
import GenericTable from "../../../ui/table/GenericTable";
import RegionRow from "./RegionRow";
import { useState } from "react";
import Modal from "../../../ui/table/Modal";
import Row from "../../../ui/Row";

export const REGION_HEADS = ["Name", "City", "Actions"];

export const renderRegionRow = (region, index) => (
  <RegionRow region={region} key={index} />
);
const rowsData = [
  {
    name: "John Doe",
    city: "Alexandria",
  },
];

function RegionTable() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <GenericTable
        headers={REGION_HEADS}
        data={rowsData}
        renderRow={renderRegionRow}
        pageSize={20}
        resaultsCount={10}
        isLoading={false}
      />
      {openModal && <Modal onClose={() => setOpenModal(false)}></Modal>}
    </>
  );
}

export default RegionTable;
