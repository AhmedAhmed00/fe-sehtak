import styled from "styled-components";
import TableOperations from "../../../ui/table/TableOperations";
import GenericTable from "../../../ui/table/GenericTable";
import { useState } from "react";
import Modal from "../../../ui/table/Modal";
import Row from "../../../ui/Row";

import DoctorRow from "./DoctorRow";

const Div = styled.div`
  display: flex;
  gap: 14px;
  justify-content: space-between;
  align-items: center;
`;

export const DOCTOR_HEADS = [
  "Name",
  "Email",
  "Phone",
  "Title",
  "Specialization",
  "Actions",
];

export const renderDocotrRow = (doctor, index) => (
  <DoctorRow doctor={doctor} key={index} />
);
const rowsData = [
  {
    name: "John Doe",
    email: "devAhmedAhmed",
    phone: "123456789",
    title: "Doctor",
    specialization: "Cardiology",
  },
];

function DoctorTable() {
  const [openFilter, setOpenFilter] = useState(false);

  return (
    <>
      <Div>
        <TableOperations setOpenFilter={setOpenFilter} addPath={"/"} />
      </Div>

      <GenericTable
        headers={DOCTOR_HEADS}
        data={rowsData}
        renderRow={renderDocotrRow}
        pageSize={20}
        resaultsCount={10}
        isLoading={false}
      />
      {openFilter && (
        <Modal onClose={() => setOpenFilter(false)}>
          <Row oriantation="vertical"></Row>
        </Modal>
      )}
    </>
  );
}

export default DoctorTable;
