import { TableRow } from "../../../ui/table/TableRow";
import { TableCell } from "../../../ui/table/TableCell";
import Actions from "../../../ui/Actions";
import { useNavigate } from "react-router-dom";
import useModal from "../../../hooks/useModal";
import { createPortal } from "react-dom";
import FormModal from "../../../ui/FormModal";
import CityForm from "../../../pages/locatoin/CityForm";

function CityRow({ city }) {
  const navigate = useNavigate();
  const { handleClose, isClosing, setIsClosing, openModal, setOpenModal } =
    useModal();

  if (!city) return null; //LAAAAAAAAAATER
  const { name } = city || {};

  return (
    <>
      <TableRow cols={2} role="row">
        <TableCell>{name}</TableCell>

        <Actions
          onDelete={() => {}}
          onView={() => {}}
          onUpdate={() => {
            setOpenModal(true);
          }}
        />
      </TableRow>

      {openModal &&
        createPortal(
          <FormModal
            isClosing={isClosing}
            setIsClosing={setIsClosing}
            onClose={handleClose}
            handleClose={handleClose}
            form={<CityForm handleClose={handleClose} />}
          />,
          document.body
        )}
    </>
  );
}

export default CityRow;
