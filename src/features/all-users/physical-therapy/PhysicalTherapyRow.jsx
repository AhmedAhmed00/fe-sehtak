import { TableRow } from "../../../ui/table/TableRow";
import { TableCell } from "../../../ui/table/TableCell";
import Actions from "../../../ui/Actions";
import { useNavigate } from "react-router-dom";

function PhysicalTherapyRow({ physicalTherapy }) {
  const navigate = useNavigate();

  if (!physicalTherapy) return null; //LAAAAAAAAAATER
  const { name, email, phone, city } = physicalTherapy || {};

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

export default PhysicalTherapyRow;
