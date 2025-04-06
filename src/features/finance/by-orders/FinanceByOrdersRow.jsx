import { TableRow } from "../../../ui/table/TableRow";
import { TableCell } from "../../../ui/table/TableCell";
import Actions from "../../../ui/Actions";
import { useNavigate } from "react-router-dom";

function FinanceByOrdersRow({ financeByOrder }) {
  const navigate = useNavigate();

  if (!financeByOrder) return null; //LAAAAAAAAAATER
  const { name, type, outstandingBalance, totalBalance } = financeByOrder || {};

  return (
    <TableRow cols={5} role="row">
      <TableCell>{name}</TableCell>
      <TableCell>{type}</TableCell>
      <TableCell style={{ paddingInlineStart: "55px" }}>
        {outstandingBalance}
      </TableCell>
      <TableCell style={{ paddingInlineStart: "55px" }}>
        {totalBalance}
      </TableCell>

      <Actions onDelete={() => {}} onView={() => {}} onUpdate={() => {}} />
    </TableRow>
  );
}

export default FinanceByOrdersRow;
