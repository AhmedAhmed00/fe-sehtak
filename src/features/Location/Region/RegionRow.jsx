import { TableRow } from "../../../ui/table/TableRow";
import { TableCell } from "../../../ui/table/TableCell";
import Actions from "../../../ui/Actions";
import { useNavigate } from "react-router-dom";
import useModal from "../../../hooks/useModal";
import { createPortal } from "react-dom";
import FormModal from "../../../ui/FormModal";
import RegionForm from "../../../pages/locatoin/RegionForm";

function RegionRow({ region }) {
  const navigate = useNavigate();
  const { handleClose, isClosing, setIsClosing, openModal, setOpenModal } =
    useModal();

  if (!region) return null; //LAAAAAAAAAATER
  const { name, city } = region || {};

  return (
    <>
      <TableRow cols={3} role="row">
        <TableCell>{name}</TableCell>
        <TableCell>{city}</TableCell>

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
            form={<RegionForm handleClose={handleClose} />}
          />,
          document.body
        )}
    </>
  );
}

export default RegionRow;
