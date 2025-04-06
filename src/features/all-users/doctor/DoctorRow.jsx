import { TableRow } from "../../../ui/table/TableRow";
import { TableCell } from "../../../ui/table/TableCell";
import Actions from "../../../ui/Actions";
import { useNavigate } from "react-router-dom";

function DoctorRow({ doctor }) {
  const navigate = useNavigate();

  if (!doctor) return null; //LAAAAAAAAAATER
  const { name, email, phone, title, specialization } = doctor || {};

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

export default DoctorRow;
