import { Button, CloseButton, RatingStars } from "../../shared";
import type { OpinionForm } from "../../types";

interface Props {
  open: boolean;
  form: OpinionForm;
  setForm: (form: OpinionForm) => void;
  onClose: () => void;
  onSave: (form: OpinionForm) => void;
  userName: string;
}

const OpinionModal = ({
  open,
  form,
  setForm,
  onClose,
  onSave,
  userName,
}: Props) => {
  if (!open) return null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <div className="base-modal-wrapper">
      <div className="base-modal w-90 sm:w-100 md:w-150 flex flex-col gap-3">
        <CloseButton onClick={onClose} />
        <h2 className="mb-3 md:mb-6 text-center md:text-3xl">
          ¡Tu opinión importa!
        </h2>

        <form className="flex flex-col gap-3.5" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="opinion-author" className="text-sm text-text">
              Autor <span className="text-primary">*</span>
            </label>
            <input id="opinion-author" readOnly value={userName} />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="opinion-title" className="text-sm text-text">
              Título <span className="text-primary">*</span>
            </label>
            <input
              id="opinion-title"
              value={form.title}
              required
              onChange={(e) => setForm({ ...form, title: e.target.value })}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="opinion-text" className="text-sm text-text">
              Opinión <span className="text-primary">*</span>
            </label>
            <textarea
              id="opinion-text"
              value={form.opinion}
              required
              className="min-h-26.25"
              onChange={(e) => setForm({ ...form, opinion: e.target.value })}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="opinion-rating" className="text-sm text-text">
              Total estrellas <span className="text-primary">*</span>
            </label>
            <div>
              <input
                id="opinion-rating"
                type="number"
                min="1"
                max="5"
                required
                value={form.rating}
                className="mr-1.5"
                onChange={(e) =>
                  setForm({ ...form, rating: Number(e.target.value) })
                }
              />
              <RatingStars rating={form.rating} />
            </div>
          </div>
          <div className="flex gap-2 justify-end">
            <Button type="submit" text="Guardar" showIcon={false}></Button>
            <Button
              onClick={onClose}
              text="Cancelar"
              showIcon={false}
              isInverse
            ></Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OpinionModal;
