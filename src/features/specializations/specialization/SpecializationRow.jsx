import { TableRow } from "../../../ui/table/TableRow";
import { TableCell } from "../../../ui/table/TableCell";
import Actions from "../../../ui/Actions";
import { useNavigate } from "react-router-dom";
import useModal from "../../../hooks/useModal";
import FormModal from "../../../ui/FormModal";
import SpecializationForm from "../../../pages/specializations/SpecializationForm";
import { createPortal } from "react-dom";

function SpecializationRow({ specialization }) {
  const navigate = useNavigate();
  const {
    handleClose,
    isClosing,
    onClose,
    openModal,
    setIsClosing,
    setOpenModal,
  } = useModal();

  if (!specialization) return null; //LAAAAAAAAAATER
  const { name } = specialization || {};

  return (
    <TableRow cols={2} role="row">
      <TableCell>{name}</TableCell>

      <Actions
        onDelete={() => {}}
        onView={() => {}}
        onUpdate={() => {
          setOpenModal(true);
        }}
      />
      {openModal &&
        createPortal(
          <FormModal
            isClosing={isClosing}
            setIsClosing={setIsClosing}
            onClose={handleClose}
            handleClose={handleClose}
            form={<SpecializationForm handleClose={handleClose} />}
          />,
          document.body
        )}
    </TableRow>
  );
}

export default SpecializationRow;
