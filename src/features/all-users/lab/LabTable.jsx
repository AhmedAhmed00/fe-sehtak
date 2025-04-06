import styled from "styled-components";
import TableOperations from "../../../ui/table/TableOperations";
import GenericTable from "../../../ui/table/GenericTable";
import LabRow from "./LabRow";
import { useState } from "react";
import Modal from "../../../ui/table/Modal";

const Div = styled.div`
  display: flex;
  gap: 14px;
  justify-content: space-between;
  align-items: center;
`;

export const LAB_HEADS = ["Name", "Email", "Phone", "City", "Actions"];

export const renderLabRow = (lab, index) => <LabRow lab={lab} key={index} />;
const rowsData = [
  {
    name: "John Doe",
    email: "devAhmedAhmed",
    phone: "123456789",
    city: "Cairo",
  },
];

function HospitalTable() {
  const [openFilter, setOpenFilter] = useState(false);

  return (
    <>
      <Div>
        <TableOperations
          setOpenFilter={setOpenFilter}
          addPath={"/hearings/hearing-form"}
        />
      </Div>

      <GenericTable
        headers={LAB_HEADS}
        data={rowsData}
        renderRow={renderLabRow}
        pageSize={20}
        resaultsCount={10}
        isLoading={false}
      />
      {openFilter && <Modal onClose={() => setOpenFilter(false)}></Modal>}
    </>
  );
}

export default HospitalTable;
