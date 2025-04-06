import { TableRow } from "../../../ui/table/TableRow";
import { TableCell } from "../../../ui/table/TableCell";
import Actions from "../../../ui/Actions";
import { useNavigate } from "react-router-dom";

function PharmacyRow({ pharmacy }) {
  const navigate = useNavigate();

  if (!pharmacy) return null; //LAAAAAAAAAATER
  const { name, email, title, phone, specialization } = pharmacy || {};

  return (
    <TableRow cols={6} role="row">
      <TableCell>{name}</TableCell>
      <TableCell>{email}</TableCell>
      <TableCell>{phone}</TableCell>
      <TableCell>{title}</TableCell>
      <TableCell>{specialization}</TableCell>
      <Actions onDelete={() => {}} onView={() => {}} onUpdate={() => {}} />
    </TableRow>
  );
}

export default PharmacyRow;
