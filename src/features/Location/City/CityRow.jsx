import { TableRow } from "../../../ui/table/TableRow";
import { TableCell } from "../../../ui/table/TableCell";
import Actions from "../../../ui/Actions";
import { useNavigate } from "react-router-dom";

function CityRow({ city }) {
  const navigate = useNavigate();

  if (!city) return null; //LAAAAAAAAAATER
  const { name } = city || {};

  return (
    <TableRow cols={2} role="row">
      <TableCell>{name}</TableCell>

      <Actions onDelete={() => {}} onView={() => {}} onUpdate={() => {}} />
    </TableRow>
  );
}

export default CityRow;
