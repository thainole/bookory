import { useState } from "react";
import {
  SubPageHeader,
  Container,
  LoadingSection,
  ErrorSection,
  RatingStars,
  Button,
  Icon,
  Toast,
} from "../../shared/components";
import { useOpinions } from "./useOpinions";
import type { Opinion, OpinionForm, OpinionToUpdate } from "../../types";
import OpinionModal from "./OpinionModal";
import { formatDate } from "../../utils/functions";
import { faPencil, faPlus } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import DeleteOpinionModal from "./DeleteOpinionModal";
import { useAuth } from "../../context/AuthContext";

const AllOpinions = () => {
  const {
    data,
    loading,
    error,
    createMutation,
    updateMutation,
    deleteMutation,
  } = useOpinions();
  const { user } = useAuth();

  const emptyForm: OpinionForm = {
    user_id: user?.user_id as number,
    title: "",
    opinion: "",
    rating: 5,
  };

  const [form, setForm] = useState<OpinionForm>(emptyForm);
  const [open, setOpen] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [currentOpinionId, setCurrentOpinionId] = useState<number | null>(null);
  const [toast, setToast] = useState("");

  const handleSave = (formData: OpinionForm) => {
    if (currentOpinionId !== null) {
      const payload: OpinionToUpdate = {
        ...formData,
        opinion_id: currentOpinionId,
      };

      updateMutation.mutate(payload);
      toastMessage("La opinión fue actualizada");
    } else {
      createMutation.mutate(formData);
      toastMessage("La opinión fue creada correctamente");
    }

    setOpen(false);
    setCurrentOpinionId(null);
    setForm(emptyForm);
  };

  const handleEdit = (op: Opinion) => {
    setForm({
      title: op.title,
      opinion: op.opinion,
      rating: op.rating,
    });

    setCurrentOpinionId(op.opinion_id);
    setOpen(true);
  };

  const handleCreate = () => {
    setForm(emptyForm);
    setCurrentOpinionId(null);
    setOpen(true);
  };

  const handleDelete = () => {
    if (currentOpinionId !== null) {
      deleteMutation.mutate(currentOpinionId);
      setCurrentOpinionId(null);
      setOpenDeleteModal(false);
      toastMessage("La opinión fue eliminada correctamente");
    }
  };

  const toastMessage = (msg: string) => {
    setToast(msg);

    setTimeout(() => {
      setToast("");
    }, 2500);
  };

  return (
    <>
      <SubPageHeader title="Opiniones" />

      {loading ? (
        <LoadingSection />
      ) : error ? (
        <ErrorSection error={error} />
      ) : (
        <Container className="mt-7.5 mb-10">
          <div className="flex justify-end">
            <Button
              text="Agregar opinión"
              onClick={handleCreate}
              icon={faPlus}
            ></Button>
          </div>

          {data.length > 0 ? (
            <table className="w-full text-sm text-left border-none mt-6 mb-20">
              <thead className="text-xs uppercase">
                <tr>
                  <th className="md:px-4 md:py-3.5 hidden md:table-cell"></th>
                  <th className="sm:px-4 sm:py-3.5 hidden sm:table-cell">
                    Autor
                  </th>
                  <th className="px-3 py-2 sm:px-4 sm:py-3.5">Título</th>
                  <th className="px-3 py-2 sm:px-4 sm:py-3.5">Opinión</th>
                  <th className="sm:px-4 sm:py-3.5 hidden sm:table-cell sm:min-w-30">
                    Rating
                  </th>
                  <th className="sm:px-4 sm:py-3.5 hidden md:table-cell">
                    Fecha
                  </th>
                  <th className="px-3 py-2 sm:px-4 sm:py-3.5"></th>
                </tr>
              </thead>

              <tbody>
                {data.map((op: Opinion) => (
                  <tr key={op.opinion_id} className="border-t border-border">
                    <td className="md:px-4 md:py-3.5 hidden md:table-cell">
                      {op.opinion_id}
                    </td>
                    <td className="sm:px-4 sm:py-3.5 hidden sm:table-cell">
                      {op.author}
                    </td>
                    <td className="px-3 py-2 sm:px-4 sm:py-3.5">{op.title}</td>
                    <td className="px-3 py-2 sm:px-4 sm:py-3.5">
                      {op.opinion}
                    </td>
                    <td className="sm:px-4 sm:py-3.5 hidden sm:table-cell">
                      {op.rating} <RatingStars rating={op.rating} />
                    </td>

                    <td className="sm:px-4 sm:py-3.5 hidden md:table-cell">
                      {formatDate(op.created_at)}
                    </td>

                    <td className="px-3 py-2 sm:px-4 sm:py-3.5 flex gap-4 group">
                      {op.user_id === user?.user_id && (
                        <>
                          <button
                            title="Editar"
                            className="opacity-100 md:opacity-0 md:invisible group-hover:opacity-100 group-hover:visible transition hover:cursor-pointer hover:text-primary-hover"
                            onClick={() => handleEdit(op)}
                          >
                            <Icon icon={faPencil} />
                          </button>

                          <button
                            title="Eliminar"
                            className="opacity-100 md:opacity-0 md:invisible group-hover:opacity-100 group-hover:visible transition hover:cursor-pointer hover:text-primary-hover"
                            onClick={() => {
                              setCurrentOpinionId(op.opinion_id);
                              setOpenDeleteModal(true);
                            }}
                          >
                            <Icon icon={faTrashCan} />
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="mt-6 mb-20 font-semibold">
              Aún no tenemos opiniones, ¡sé el primero en crear la tuya!
            </p>
          )}

          {toast && <Toast message={toast} />}

          <OpinionModal
            open={open}
            form={form}
            setForm={setForm}
            onClose={() => setOpen(false)}
            onSave={handleSave}
            userName={user?.full_name as string}
          />

          <DeleteOpinionModal
            open={openDeleteModal}
            onClose={() => setOpenDeleteModal(false)}
            onConfirm={handleDelete}
          />
        </Container>
      )}
    </>
  );
};

export default AllOpinions;
