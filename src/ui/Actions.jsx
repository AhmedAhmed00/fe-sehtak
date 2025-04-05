import { useState } from "react";
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";
import Row from "./Row";
import ConfirmDelete from "./ConfirmDelete";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";

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
          fontSize="15px"
          title="Edit"
        />
        <FaEye onClick={onView} cursor="pointer" fontSize="15px" title="View" />
        <FaTrashAlt
          onClick={openModal}
          cursor="pointer"
          fontSize="15px"
          title="Delete"
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
