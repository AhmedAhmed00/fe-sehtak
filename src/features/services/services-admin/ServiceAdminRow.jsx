import { useNavigate } from "react-router-dom";
import { TableRow } from "../../../ui/table/TableRow";
import { TableCell } from "../../../ui/table/TableCell";
import Actions from "../../../ui/Actions";

function ServiceRow({ service }) {
  const navigate = useNavigate();

  if (!service) return null; //LAAAAAAAAAATER
  const { name, type } = service || {};

  return (
    <TableRow cols={3} role="row">
      <TableCell>{name}</TableCell>

      <TableCell>{type}</TableCell>

      <Actions onDelete={() => {}} onView={() => {}} onUpdate={() => {}} />
    </TableRow>
  );
}

export default ServiceRow;
