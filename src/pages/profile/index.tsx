import { Fragment, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import {
  Button,
  Container,
  ErrorSection,
  Icon,
  LoadingSection,
} from "../../shared";
import { useProfile } from "./useProfile";
import type { ProfileUpdate } from "../../types/profile.interface";
import { faArrowRight, faPencil } from "@fortawesome/free-solid-svg-icons";
import EditProfileModal from "./EditProfileModal";
import avatarImg from "/images/avatar.png";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user } = useAuth();
  const {
    data: profile,
    loading,
    error,
    updateMutation,
    refetch,
  } = useProfile(user?.user_id as number);
  const [openProfileModal, setOpenProfileModal] = useState(false);

  const [profileForm, setProfileForm] = useState<ProfileUpdate>({
    user_id: 0,
    full_name: "",
    age: undefined,
    phone: "",
    country: "",
    gender: undefined,
    bio: "",
  });

  const handleEditProfile = () => {
    setProfileForm(profile as ProfileUpdate);
    setOpenProfileModal(true);
  };

  const handleSaveProfile = async () => {
    updateMutation.mutate(profileForm);
    setOpenProfileModal(false);
    refetch();
  };

  const info = [
    ["Email", profile?.email],
    [
      "Género",
      profile?.gender === "female"
        ? "Mujer"
        : profile?.gender === "male"
          ? "Hombre"
          : undefined,
    ],
    ["Edad", profile?.age],
    ["Teléfono", profile?.phone],
    ["País", profile?.country],
    ["Bio", profile?.bio],
  ];

  const infoRows = [];

  for (let i = 0; i < info.length; i += 2) {
    infoRows.push(info.slice(i, i + 2));
  }

  return (
    <>
      <div className="flex uppercase gap-4 max-w-7xl mx-auto px-4 md:px-7.5 pt-7.5">
        <Link
          to="/"
          className="text-xs text-lighter hover:text-accent cursor-pointer font-semibold"
        >
          Inicio
        </Link>
        <Icon icon={faArrowRight} className="ml-1 text-xs text-lighter" />
        <span className="text-xs text-primary">Perfil</span>
      </div>
      {loading || !user?.user_id ? (
        <LoadingSection />
      ) : error ? (
        <ErrorSection error={error} />
      ) : (
        <Container className="mt-7.5 mb-15">
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="flex flex-1 items-center gap-5">
              <img
                src={avatarImg}
                alt="Avatar"
                className="w-30 sm:w-40 rounded-full"
              />
              <div>
                <span>Mi perfil</span>
                <h1 className="sm:pt-4">{profile?.full_name}</h1>
              </div>
            </div>
            <div className="flex md:justify-end mt-6 md:mt-0">
              <Button
                text="Editar perfil"
                onClick={() => handleEditProfile()}
                icon={faPencil}
              />
            </div>
          </div>

          <div className="w-full sm:1/2 p-7.5 mt-10 border-border border rounded-xl h-fit">
            <h2 className="md:text-3xl mb-7">Mis datos</h2>
            <table className="w-full border-collapse">
              <tbody className="md:hidden">
                {info.map(([label, value]) => (
                  <tr
                    key={label}
                    className="border-b border-border last:border-b-0"
                  >
                    <th className="py-3.5 pr-4 text-left font-semibold text-[13px] w-1/3">
                      {label}
                    </th>
                    <td className="py-3.5 text-[13px]">{value ?? "-"}</td>
                  </tr>
                ))}
              </tbody>
              <tbody className="hidden md:table-row-group">
                {infoRows.map((row, index) => (
                  <tr
                    key={index}
                    className="border-b border-border last:border-b-0"
                  >
                    {row.map(([label, value]) => (
                      <Fragment key={label}>
                        <th className="py-3.5 pr-4 text-left font-semibold text-[13px]">
                          {label}
                        </th>
                        <td className="py-3.5 pr-8 text-[13px]">
                          {value ?? "-"}
                        </td>
                      </Fragment>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      )}
      <EditProfileModal
        open={openProfileModal}
        form={profileForm}
        setForm={setProfileForm}
        onClose={() => setOpenProfileModal(false)}
        onSave={handleSaveProfile}
      />
    </>
  );
};

export default Profile;
