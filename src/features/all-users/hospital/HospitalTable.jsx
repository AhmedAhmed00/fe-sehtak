import styled from "styled-components";
import Heading from "../../../ui/Heading";
import TableOperations from "../../../ui/table/TableOperations";
import GenericTable from "../../../ui/table/GenericTable";
import HospitalRow from "./HospitalRow";
import { useState } from "react";
import Modal from "../../../ui/table/Modal";

export const HOSPITAL_HEADS = ["Name", "Email", "Phone", "Actions"];

export const renderHospital = (hospital, index) => (
  <HospitalRow hospital={hospital} key={index} />
);
const rowsData = [
  {
    name: "John Doe",
    email: "devAhmedAhmed",
    phone: "123456789",
  },
];

function HospitalTable() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <GenericTable
        headers={HOSPITAL_HEADS}
        data={rowsData}
        renderRow={renderHospital}
        pageSize={20}
        resaultsCount={10}
        isLoading={false}
      />
      {openModal && <Modal onClose={() => setOpenModal(false)}></Modal>}
    </>
  );
}

export default HospitalTable;
