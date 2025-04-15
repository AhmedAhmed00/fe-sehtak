import { CSVLink } from "react-csv";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../Button";
import ExportButton from "../DropdownWrapper";
import DropdownButton from "../DropdownWrapper";
import { useState } from "react";
import { createPortal } from "react-dom";
import { Overlay } from "../ConfirmDelete";
import { CloseButton, ModalContent } from "../FilterModal";
import { FaPlus, FaTimes } from "react-icons/fa";
import Row from "../Row";
import useExport from "../../hooks/useExport";

const Div = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
  justify-content: center;
`;
export default function TableOperations({
  setOpenModal,
  filterable = true,
  addPath,
  addTitle,
  formType = "form",
  setOpenForm,
}) {
  const navigate = useNavigate();
  const [isOpenExport, setIsOpenExport] = useState(false);
  const [startExport, setStartExport] = useState(false);
  const { data } = useExport("/client/clients/export/", startExport);

  return (
    <Div>
      {/* <Button
        onClick={() => {
          setIsOpenExport((open) => !open);
        }}
        variation="primary"
        size="medium"
      >
        إستيراد
      </Button> */}

      {/* <DropdownButton
        buttonLabel="تصدير"
        options={[
          {
            label: "تصدير إلى Excel",
            value: "Excel",
            handleExport: () => {
              setStartExport(true);
            },
          },
          { label: "تصدير إلى PDF", value: "PDF" },
        ]}
        onSelect={(value) => console.log("Selected:", value)}
        buttonProps={{ variation: "secondary", size: "medium" }}
      /> */}
      {/* {filterable && (
        <Button
          onClick={() => {
            setOpenModal((open) => !open);
          }}
          variation="primary"
        >
          تصفية
        </Button>
      )} */}

      <Button
        size="large"
        onClick={() => {
          if (formType === "modal") setOpenModal((open) => !open);
          else {
            navigate(addPath);
          }
        }}
        variation="primary"
      >
        {addTitle}
      </Button>
      {isOpenExport &&
        createPortal(
          <Overlay
          //  isClosing={isClosing}
          //  onClick={handleClose}
          >
            <ModalContent
              onClick={(e) => e.stopPropagation()}
              // isClosing={isClosing}
            >
              <CloseButton
                onClick={() => {
                  setIsOpenExport(false);
                }}
              >
                <FaTimes />
              </CloseButton>

              <div style={{ width: "100%" }}>
                <Row
                  style={{
                    alignItems: "center",
                    width: "100%",
                    marginTop: "20px",
                  }}
                >
                  <Button style={{ width: "80%" }}>تحميل Tamplate</Button>
                  <Button style={{ width: "80%" }}>تصدير البيانات</Button>
                </Row>
              </div>

              <Row
                style={{
                  justifyContent: "center",
                }}
                margin="25px"
                type="horizontal"
                justify="start"
                gap="15px"
              >
                <Button
                  // onClick={handleClose}
                  size="medium"
                  variation="secondary"
                >
                  إلغاء
                </Button>
                <Button type="submit" size="medium" variation="primary">
                  تصفية
                </Button>
              </Row>
            </ModalContent>
          </Overlay>,
          document.body
        )}
    </Div>
  );
}
