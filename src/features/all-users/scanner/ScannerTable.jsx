import styled from "styled-components";
import TableOperations from "../../../ui/table/TableOperations";
import GenericTable from "../../../ui/table/GenericTable";
import ScannerRow from "./ScannerRow";
import { useState } from "react";
import Modal from "../../../ui/table/Modal";

const Div = styled.div`
  display: flex;
  gap: 14px;
  justify-content: space-between;
  align-items: center;
`;

export const SCANNER_HEADS = ["Name", "Email", "Phone", "Actions"];

export const renderScannerRow = (scanner, index) => (
  <ScannerRow scanner={scanner} key={index} />
);
const rowsData = [
  {
    name: "John Doe",
    email: "devAhmedAhmed",
    phone: "123456789",
  },
];

function ScannerTable() {
  const [openFilter, setOpenFilter] = useState(false);

  return (
    <>
      <Div>
        <TableOperations
          setOpenFilter={setOpenFilter}
          addPath={"/hearings/hearing-form"}
        />
      </Div>

      <GenericTable
        headers={SCANNER_HEADS}
        data={rowsData}
        renderRow={renderScannerRow}
        pageSize={20}
        resaultsCount={10}
        isLoading={false}
      />
      {openFilter && <Modal onClose={() => setOpenFilter(false)}></Modal>}
    </>
  );
}

export default ScannerTable;
