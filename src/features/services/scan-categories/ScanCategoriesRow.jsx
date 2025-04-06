import { useNavigate } from "react-router-dom";
import { TableRow } from "../../../ui/table/TableRow";
import { TableCell } from "../../../ui/table/TableCell";
import Actions from "../../../ui/Actions";

function ScanCategoryRow({ scanCategory }) {
  const navigate = useNavigate();
  if (!scanCategory) return null; //LAAAAAAAAAATER
  const { id, nameEn, nameAr } = scanCategory || {};

  return (
    <TableRow cols={6} role="row">
      <TableCell>{id}</TableCell>
      <TableCell>{nameEn}</TableCell>
      <TableCell>{nameAr}</TableCell>
      <Actions onDelete={() => {}} onView={() => {}} onUpdate={() => {}} />
    </TableRow>
  );
}

export default ScanCategoryRow;
