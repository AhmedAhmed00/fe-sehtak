import { useNavigate } from "react-router-dom";
import { TableRow } from "../../../ui/table/TableRow";
import { TableCell } from "../../../ui/table/TableCell";
import Actions from "../../../ui/Actions";

function ProviderRow({ provider }) {
  const navigate = useNavigate();

  if (!provider) return null; //LAAAAAAAAAATER
  const { name, phone, email, branch } = provider || {};

  return (
    <TableRow cols={5} role="row">
      <TableCell>{name}</TableCell>
      <TableCell>{phone}</TableCell>
      <TableCell>{email}</TableCell>
      <TableCell>{branch}</TableCell>
      <Actions onDelete={() => {}} onView={() => {}} onUpdate={() => {}} />
    </TableRow>
  );
}

export default ProviderRow;
