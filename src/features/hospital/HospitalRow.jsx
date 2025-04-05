import { TableRow } from "../../ui/table/TableRow";
import { TableCell } from "../../ui/table/TableCell";
import Actions from "../../ui/Actions";
import { useNavigate } from "react-router-dom";

function HospitalRow({ hospital }) {
  const navigate = useNavigate();

  if (!hospital) return null; //LAAAAAAAAAATER
  const {} = hospital || {};

  return (
    <TableRow cols={7} role="row">
      <TableCell>{""}</TableCell>

      <Actions onDelete={() => {}} onView={() => {}} onUpdate={() => {}} />
    </TableRow>
  );
}

export default HospitalRow;
