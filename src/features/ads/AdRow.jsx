import { useNavigate } from "react-router-dom";
import { TableRow } from "../../ui/table/TableRow";
import { TableCell } from "../../ui/table/TableCell";
import Actions from "../../ui/Actions";

function AdRow({ ad }) {
  const navigate = useNavigate();

  if (!ad) return null; //LAAAAAAAAAATER
  const { title, status } = ad || {};

  return (
    <TableRow cols={3} role="row">
      <TableCell>{title}</TableCell>
      <TableCell>{status}</TableCell>

      <Actions onDelete={() => {}} onView={() => {}} onUpdate={() => {}} />
    </TableRow>
  );
}

export default AdRow;
