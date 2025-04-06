import { TableRow } from "../../../ui/table/TableRow";
import { TableCell } from "../../../ui/table/TableCell";
import Actions from "../../../ui/Actions";
import { useNavigate } from "react-router-dom";

function RegionRow({ region }) {
  const navigate = useNavigate();

  if (!region) return null; //LAAAAAAAAAATER
  const { name, city } = region || {};

  return (
    <TableRow cols={3} role="row">
      <TableCell>{name}</TableCell>
      <TableCell>{city}</TableCell>

      <Actions onDelete={() => {}} onView={() => {}} onUpdate={() => {}} />
    </TableRow>
  );
}

export default RegionRow;
