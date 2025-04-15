import GenericTable from "../../../ui/table/GenericTable";
import ScannerRow from "./ScannerRow";

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
  return (
    <>
      <GenericTable
        headers={SCANNER_HEADS}
        data={rowsData}
        renderRow={renderScannerRow}
        pageSize={20}
        resaultsCount={10}
        isLoading={false}
      />
    </>
  );
}

export default ScannerTable;
