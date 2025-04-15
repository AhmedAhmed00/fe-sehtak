import { useState } from "react";

import PharmacyRow from "./PharmacyRow";
import ProviderRow from "../providers/ProviderRow";
import Row from "../../../ui/Row";
import TableOperations from "../../../ui/table/TableOperations";
import GenericTable from "../../../ui/table/GenericTable";
import Modal from "../../../ui/table/Modal";

export const PHARMACY_HEADS = [
  "Name",
  "Email",
  "Phone",
  "Title",
  "Specialization",
  "Actions",
];

export const renderPharmacyRow = (pharmacy, index) => (
  <PharmacyRow pharmacy={pharmacy} key={index} />
);
const rowsData = [
  {
    name: "John Doe",
    email: "devahmed@gmail.com",
    phone: "0123456789",
    service: "Service A",
    specialization: "Specialization A",
    title: "Title A",
  },
];

function PharmacyTable() {
  return (
    <>
      <GenericTable
        headers={PHARMACY_HEADS}
        data={rowsData}
        renderRow={renderPharmacyRow}
        pageSize={20}
        resaultsCount={10}
        isLoading={false}
      />
    </>
  );
}

export default PharmacyTable;
