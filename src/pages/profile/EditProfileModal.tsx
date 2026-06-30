import { Button, CloseButton } from "../../shared";
import type { Profile, ProfileUpdate } from "../../types";

interface Props {
  open: boolean;
  form: ProfileUpdate;
  setForm: (form: ProfileUpdate) => void;
  onClose: () => void;
  onSave: (form: ProfileUpdate) => void;
}

const EditProfileModal = ({ open, form, setForm, onClose, onSave }: Props) => {
  if (!open) return null;

  return (
    <div className="base-modal-wrapper">
      <div className="base-modal w-90 sm:w-100 md:w-150 flex flex-col gap-3 p-5 pt-6 sm:p-7.5 sm:pt-10">
        <CloseButton onClick={onClose} />

        <h2 className="mb-3 md:mb-6 text-center md:text-3xl">Editar perfil</h2>

        <form className="flex flex-col gap-3.5">
          {/* Nombre */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm text-text" htmlFor="name">
              Nombre <span className="text-primary">*</span>
            </label>
            <input
              id="name"
              value={form.full_name}
              onChange={(e) => setForm({ ...form, full_name: e.target.value })}
            />
          </div>

          <div className="flex gap-4">
            {/* Edad */}
            <div className="flex flex-col gap-1.5 w-1/2">
              <label className="text-sm text-text" htmlFor="age">
                Edad
              </label>
              <input
                id="age"
                type="number"
                min="14"
                max="110"
                placeholder="35"
                value={form.age ?? ""}
                onChange={(e) =>
                  setForm({ ...form, age: Number(e.target.value) })
                }
              />
            </div>

            {/* Teléfono */}
            <div className="flex flex-col gap-1.5 w-1/2">
              <label className="text-sm text-text" htmlFor="phone">
                Teléfono
              </label>
              <input
                id="phone"
                value={form.phone ?? ""}
                placeholder="999 999 999"
                onChange={(e) =>
                  setForm({
                    ...form,
                    phone: e.target.value.replace(/\D/g, ""),
                  })
                }
              />
            </div>
          </div>

          <div className="flex gap-4">
            {/* País */}
            <div className="flex flex-col gap-1.5  w-1/2">
              <label className="text-sm text-text" htmlFor="country">
                País
              </label>
              <input
                id="country"
                value={form.country ?? ""}
                placeholder="Perú"
                onChange={(e) => setForm({ ...form, country: e.target.value })}
              />
            </div>

            {/* Género */}
            <div className="flex flex-col gap-1.5 w-1/2">
              <label className="text-sm text-text" htmlFor="gender">
                Género
              </label>
              <select
                id="gender"
                value={form.gender ?? ""}
                onChange={(e) =>
                  setForm({
                    ...form,
                    gender: e.target.value as Profile["gender"],
                  })
                }
              >
                <option value="">Selecciona</option>
                <option value="male">Hombre</option>
                <option value="female">Mujer</option>
              </select>
            </div>
          </div>

          {/* Bio */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm text-text" htmlFor="bio">
              Bio
            </label>
            <textarea
              id="bio"
              className="min-h-26.25"
              value={form.bio ?? ""}
              placeholder="Escribe algo sobre ti..."
              onChange={(e) => setForm({ ...form, bio: e.target.value })}
            />
          </div>
        </form>

        <div className="flex gap-2 mt-3 justify-end">
          <Button
            onClick={() => onSave(form)}
            text="Guardar"
            showIcon={false}
          />
          <Button
            onClick={onClose}
            text="Cancelar"
            showIcon={false}
            isInverse
          />
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;
