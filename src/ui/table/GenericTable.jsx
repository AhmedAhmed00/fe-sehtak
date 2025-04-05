import Empty from "../Empty";
import Pagination from "../Pagination";
import Spinner from "../Spinner";
import { Footer, Table } from "./Table";
import { TableHead } from "./TableHead";
import { TableHeader } from "./TableHeader";

export default function GenericTable({
  data,
  headers,
  renderRow,
  pageSize,
  resaultsCount,
  isNotPaginated,
  isLoading
}) {



  return (
    <Table role="table">
      <TableHeader cols={headers.length} role="row">
        {headers.map((head) => (
          <TableHead key={head}>{head}</TableHead>
        ))}
      </TableHeader>

   {data?.length === 0 && <Empty/>}

      {isLoading ? <Spinner />  :    data?.map(renderRow)    }
  
      {isNotPaginated ? (
        ""
      ) : (
        <Footer>
          <Pagination pageSize={pageSize} resaultsCount={resaultsCount} />
        </Footer>
      )}
    </Table>
  );
}
