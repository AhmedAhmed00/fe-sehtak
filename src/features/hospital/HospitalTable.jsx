import styled from "styled-components";
import Heading from "../../ui/Heading";
import TableOperations from "../../ui/table/TableOperations";
import GenericTable from "../../ui/table/GenericTable";
import HospitalRow from "./HospitalRow";
import { useState } from "react";
import Modal from "../../ui/table/Modal";
import Row from "../../ui/Row";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Checkbox from "../../ui/Checkbox";

const Div = styled.div`
  display: flex;
  gap: 14px;
  justify-content: space-between;
  align-items: center;
`;

export const HOSPITAL_HEADS = ["Name", "Email", "Phone", "Actions"];

export const renderHospital = (hospital, index) => (
  <HospitalRow hospital={hospital} key={index} />
);

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
        headers={HOSPITAL_HEADS}
        data={[]}
        renderRow={renderHospital}
        pageSize={20}
        resaultsCount={10}
        isLoading={false}
      />
      {openFilter && (
        <Modal onClose={() => setOpenFilter(false)}>
          <Row oriantation="vertical">
            <FormRow label={"رقم القضية"}>
              <Input />
            </FormRow>
            <FormRow label={"تاريخ الجلسة"}>
              <Input />
            </FormRow>
            <Row justify="start" gap="14px" type="horizontal">
              <Checkbox>مقررة</Checkbox>
              <Checkbox>مؤجلة</Checkbox>
              <Checkbox>تم تنفيذها</Checkbox>
            </Row>
          </Row>
        </Modal>
      )}
    </>
  );
}

export default HospitalTable;
