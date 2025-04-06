import { TableRow } from "../../../ui/table/TableRow";
import { TableCell } from "../../../ui/table/TableCell";
import Actions from "../../../ui/Actions";
import { useNavigate } from "react-router-dom";

function ScannerRow({ scanner }) {
  const navigate = useNavigate();

  if (!scanner) return null; //LAAAAAAAAAATER
  const { name, email, phone } = scanner || {};

  return (
    <TableRow cols={4} role="row">
      <TableCell>{name}</TableCell>
      <TableCell>{email}</TableCell>
      <TableCell>{phone}</TableCell>

      <Actions onDelete={() => {}} onView={() => {}} onUpdate={() => {}} />
    </TableRow>
  );
}

export default ScannerRow;
