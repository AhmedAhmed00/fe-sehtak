import LabCategoryRow from "./LabCategoryRow";
import { useState } from "react";
import GenericTable from "../../../ui/table/GenericTable";
import TableOperations from "../../../ui/table/TableOperations";
import Modal from "../../../ui/table/Modal";
import Row from "../../../ui/Row";

export const LAB_CATEGORIES_HEADS = [
  "Name",
  "Email",
  "Phone",
  "City",
  "Type",
  "Actoins",
];

export const renderLabCategoryRow = (labCategory, index) => (
  <LabCategoryRow labCategory={labCategory} key={index} />
);
const rowsData = [
  {
    name: "Lab 1",
    email: "devtest@gmail.com",
    phone: "01000000000",
    type: "Lab",
    city: "Cairo",
  },

  {
    name: "Lab 2",
    email: "deeeev@gmail.com ",
    phone: "01000000000",
    type: "Lab",
    city: "Cairo",
  },
];

function LabCategoriesTable() {
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
        headers={LAB_CATEGORIES_HEADS}
        data={rowsData}
        renderRow={renderLabCategoryRow}
        pageSize={20}
        resaultsCount={10}
        isLoading={false}
      />
      {openModal && <Modal onClose={() => setOpenModal(false)}></Modal>}
    </>
  );
}

export default LabCategoriesTable;
