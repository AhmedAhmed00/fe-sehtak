import { useState } from "react";
import GenericTable from "../../ui/table/GenericTable";
import TableOperations from "../../ui/table/TableOperations";
import Modal from "../../ui/table/Modal";
import Row from "../../ui/Row";
import AdRow from "./AdRow";
import { render } from "react-dom";

export const CLIENTS_HEADS = ["Title", "Status", "Actions"];

export const renderAdRow = (ad, index) => <AdRow ad={ad} key={index} />;
const rowsData = [
  {
    title: "Ad 1",
    status: "Active",
  },
  {
    title: "Ad 2",
    status: "Inactive",
  },
];

function AdsTable() {
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
        renderRow={renderAdRow}
        pageSize={20}
        resaultsCount={10}
        isLoading={false}
      />
      {openFilter && <Modal onClose={() => setOpenFilter(false)}></Modal>}
    </>
  );
}

export default AdsTable;
