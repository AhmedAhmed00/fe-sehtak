import { TableRow } from "../../../ui/table/TableRow";
import { TableCell } from "../../../ui/table/TableCell";
import Actions from "../../../ui/Actions";
import { useNavigate } from "react-router-dom";

function SubSpecializationRow({ subSpecialization }) {
  const navigate = useNavigate();

  if (!subSpecialization) return null; //LAAAAAAAAAATER
  const { name, specializatoin } = subSpecialization || {};

  return (
    <TableRow cols={3} role="row">
      <TableCell>{name}</TableCell>
      <TableCell>{specializatoin}</TableCell>
      <Actions onDelete={() => {}} onView={() => {}} onUpdate={() => {}} />
    </TableRow>
  );
}

export default SubSpecializationRow;
