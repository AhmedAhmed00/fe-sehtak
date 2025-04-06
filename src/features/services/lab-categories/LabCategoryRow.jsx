import { useNavigate } from "react-router-dom";
import { TableRow } from "../../../ui/table/TableRow";
import { TableCell } from "../../../ui/table/TableCell";
import Actions from "../../../ui/Actions";

function LabCategoryRow({ labCategory }) {
  const navigate = useNavigate();

  if (!labCategory) return null; //LAAAAAAAAAATER
  const { name, email, phone, city, type } = labCategory || {};

  return (
    <TableRow cols={6} role="row">
      <TableCell>{name}</TableCell>
      <TableCell>{email}</TableCell>
      <TableCell>{phone}</TableCell>
      <TableCell>{city}</TableCell>
      <TableCell>{type}</TableCell>
      <Actions onDelete={() => {}} onView={() => {}} onUpdate={() => {}} />
    </TableRow>
  );
}

export default LabCategoryRow;
