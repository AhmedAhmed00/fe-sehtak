import { useState } from "react";
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";
import Row from "./Row";
import ConfirmDelete from "./ConfirmDelete";
import { createPortal } from "react-dom";

function Actions({ onView, onDelete, onUpdate }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Row justify="start" gap="14px" type="horizontal">
        <FaEdit
          onClick={onUpdate}
          cursor="pointer"
          fontSize="18px"
          title="Edit"
          color="var(--color-yellow-900)"
        />
        <FaEye
          color="var(--color-grey-500)"
          onClick={onView}
          cursor="pointer"
          fontSize="18px"
          title="View"
        />
        <FaTrashAlt
          onClick={openModal}
          cursor="pointer"
          fontSize="18px"
          title="Delete"
          color="var(--color-red-700)"
        />
      </Row>

      {isModalOpen &&
        createPortal(
          <ConfirmDelete
            resource="client"
            onConfirm={onDelete}
            closeModal={closeModal}
          />,
          document.body
        )}
    </>
  );
}

export default Actions;
