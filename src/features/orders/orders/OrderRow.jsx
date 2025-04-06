import { useNavigate } from "react-router-dom";
import { TableRow } from "../../../ui/table/TableRow";
import { TableCell } from "../../../ui/table/TableCell";
import Actions from "../../../ui/Actions";

function RegionRow({ order }) {
  const navigate = useNavigate();

  if (!order) return null; //LAAAAAAAAAATER
  const { name, city, phone, status, branch } = order || {};

  return (
    <TableRow cols={6} role="row">
      <TableCell>{name}</TableCell>
      <TableCell>{city}</TableCell>
      <TableCell>{phone}</TableCell>
      <TableCell>{status}</TableCell>
      <TableCell>{branch}</TableCell>

      <Actions onDelete={() => {}} onView={() => {}} onUpdate={() => {}} />
    </TableRow>
  );
}

export default RegionRow;
