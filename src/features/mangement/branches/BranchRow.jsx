import { TableRow } from "../../../ui/table/TableRow";
import { TableCell } from "../../../ui/table/TableCell";
import Actions from "../../../ui/Actions";
import { useNavigate } from "react-router-dom";

function BranchRow({ brnach }) {
  const navigate = useNavigate();

  if (!brnach) return null; //LAAAAAAAAAATER
  const { name } = brnach || {};

  return (
    <TableRow cols={2} role="row">
      <TableCell>{name}</TableCell>

      <Actions onDelete={() => {}} onView={() => {}} onUpdate={() => {}} />
    </TableRow>
  );
}

export default BranchRow;
