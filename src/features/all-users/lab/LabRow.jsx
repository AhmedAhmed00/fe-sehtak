import { TableRow } from "../../../ui/table/TableRow";
import { TableCell } from "../../../ui/table/TableCell";
import Actions from "../../../ui/Actions";
import { useNavigate } from "react-router-dom";

function LabRow({ lab }) {
  const navigate = useNavigate();

  if (!lab) return null; //LAAAAAAAAAATER
  const { name, email, phone, city } = lab || {};

  return (
    <TableRow cols={5} role="row">
      <TableCell>{name}</TableCell>
      <TableCell>{email}</TableCell>
      <TableCell>{phone}</TableCell>
      <TableCell>{city}</TableCell>

      <Actions onDelete={() => {}} onView={() => {}} onUpdate={() => {}} />
    </TableRow>
  );
}

export default LabRow;
