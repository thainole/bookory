import { Button } from "../../shared";

interface Props {
  open: boolean;
  onConfirm: () => void;
  onClose: () => void;
}
const DeleteOpinionModal = ({ open, onConfirm, onClose }: Props) => {
  if (!open) return null;

  return (
    <div className="base-modal-wrapper">
      <div className="base-modal w-90 sm:w-116 flex flex-col gap-3 justify-center">
        <h2 className="mb-3 sm:mb-4 text-center md:text-3xl">
          Eliminar opinión
        </h2>
        <p className="text-center">
          ¿Estás seguro que deseas eliminar tu opinión? Esta acción no se puede
          deshacer.
        </p>
        <div className="flex gap-3 mt-3 justify-center">
          <Button
            onClick={onConfirm}
            text="Confirmar"
            showIcon={false}
          ></Button>
          <Button
            onClick={onClose}
            text="Cancelar"
            showIcon={false}
            isInverse
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default DeleteOpinionModal;
