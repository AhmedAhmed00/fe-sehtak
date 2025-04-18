import TableOperations from "../../../ui/table/TableOperations";
import GenericTable from "../../../ui/table/GenericTable";
import CityRow from "./CityRow";
import { useState } from "react";
import Modal from "../../../ui/table/Modal";
import Row from "../../../ui/Row";

export const CITY_HEADS = ["Name", "Actions"];

export const renderCityRow = (city, index) => (
  <CityRow city={city} key={index} />
);
const rowsData = [
  {
    name: "John Doe",
  },
];

function CityTable() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <GenericTable
        headers={CITY_HEADS}
        data={rowsData}
        renderRow={renderCityRow}
        pageSize={20}
        resaultsCount={10}
        isLoading={false}
      />
    </>
  );
}

export default CityTable;
