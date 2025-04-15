import { useState } from "react";
import GenericTable from "../../../ui/table/GenericTable";
import TableOperations from "../../../ui/table/TableOperations";
import Modal from "../../../ui/table/Modal";
import Row from "../../../ui/Row";
import ScanCategoryRow from "./ScanCategoriesRow";

export const SCAN_CATEGORIES_HEADS = ["ID", "Name En", "Name Ar", "Actoins"];

export const renderScanCategoryRow = (scanCategory, index) => (
  <ScanCategoryRow scanCategory={scanCategory} key={index} />
);
const rowsData = [];

function ScanCategoriesTable() {
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
        headers={SCAN_CATEGORIES_HEADS}
        data={rowsData}
        renderRow={renderScanCategoryRow}
        pageSize={20}
        resaultsCount={10}
        isLoading={false}
      />
      {openModal && <Modal onClose={() => setOpenModal(false)}></Modal>}
    </>
  );
}

export default ScanCategoriesTable;
