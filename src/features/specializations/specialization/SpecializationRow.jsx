import { TableRow } from "../../../ui/table/TableRow";
import { TableCell } from "../../../ui/table/TableCell";
import Actions from "../../../ui/Actions";
import { useNavigate } from "react-router-dom";

function SpecializationRow({ specialization }) {
  const navigate = useNavigate();

  if (!specialization) return null; //LAAAAAAAAAATER
  const { name } = specialization || {};

  return (
    <TableRow cols={2} role="row">
      <TableCell>{name}</TableCell>

      <Actions onDelete={() => {}} onView={() => {}} onUpdate={() => {}} />
    </TableRow>
  );
}

export default SpecializationRow;
