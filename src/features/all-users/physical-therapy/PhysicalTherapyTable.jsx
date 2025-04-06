import styled from "styled-components";
import TableOperations from "../../../ui/table/TableOperations";
import GenericTable from "../../../ui/table/GenericTable";
import { useState } from "react";
import Modal from "../../../ui/table/Modal";
import PhysicalTherapyRow from "./PhysicalTherapyRow";

const Div = styled.div`
  display: flex;
  gap: 14px;
  justify-content: space-between;
  align-items: center;
`;

export const PHYSICAL_THERAPY_HEADS = [
  "Name",
  "Email",
  "Phone",
  "City",
  "Actions",
];

export const renderPhysicalTherapyRow = (physicalTherapy, index) => (
  <PhysicalTherapyRow physicalTherapy={physicalTherapy} key={index} />
);
const rowsData = [
  {
    name: "John Doe",
    email: "devAhmedAhmed",
    phone: "123456789",
    city: "Cairo",
  },
];

function PhysicalTherapyTable() {
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
        headers={PHYSICAL_THERAPY_HEADS}
        data={rowsData}
        renderRow={renderPhysicalTherapyRow}
        pageSize={20}
        resaultsCount={10}
        isLoading={false}
      />
      {openFilter && <Modal onClose={() => setOpenFilter(false)}></Modal>}
    </>
  );
}

export default PhysicalTherapyTable;
