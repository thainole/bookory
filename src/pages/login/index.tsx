import { useState } from "react";
import { Button, Container, SubPageHeader, Toast } from "../../shared";
import { useLogin } from "./useLogin";
import { useRegister } from "./useRegister";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const emptyForm = {
  full_name: "",
  email: "",
  password: "",
};

const Login = () => {
  const [form, setForm] = useState(emptyForm);
  const [isLogin, setIsLogin] = useState(true);
  const [toast, setToast] = useState("");

  const navigate = useNavigate();
  const { login } = useAuth();
  const { mutate, isPending } = useLogin();
  const { mutate: mutateReg, isPending: isPendingReg } = useRegister();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isPending) return;

    mutate(
      { email: form.email, password: form.password },
      {
        onSuccess: (response) => {
          if (response.success) {
            login(response.user);
            navigate("/perfil");
          } else {
            setToast(response.message);

            setTimeout(() => {
              setToast("");
            }, 2000);
          }
        },

        onError: (error) => {
          setToast(error.message);

          setTimeout(() => {
            setToast("");
          }, 2000);
        },
      },
    );
  };

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isPendingReg) return;

    mutateReg(form, {
      onSuccess: (response) => {
        if (response.success) {
          handleLogin(e);
        } else {
          setToast(response.message);

          setTimeout(() => {
            setToast("");
          }, 2500);
        }
      },
    });
  };

  return (
    <>
      <SubPageHeader title={isLogin ? "Iniciar Sesión" : "Crear Cuenta"} />
      <Container className="mt-10 mb-20 max-w-3xl!">
        <form
          className="flex flex-col gap-5"
          onSubmit={isLogin ? handleLogin : handleRegister}
        >
          {!isLogin && (
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm text-black">
                Nombres y Apellidos <span className="text-primary">*</span>
              </label>
              <input
                id="name"
                required
                value={form.full_name}
                placeholder="Jane Doe"
                readOnly={isPendingReg}
                onChange={(e) =>
                  setForm({ ...form, full_name: e.target.value })
                }
              />
            </div>
          )}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-sm text-black">
              Correo <span className="text-primary">*</span>
            </label>
            <input
              id="email"
              type="email"
              required
              readOnly={isPending || isPendingReg}
              value={form.email}
              placeholder="example@mail.com"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="password" className="text-sm text-black">
              Contraseña <span className="text-primary">*</span>
            </label>
            <input
              id="password"
              type="password"
              required
              readOnly={isPending || isPendingReg}
              placeholder="********"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
          </div>

          {isLogin ? (
            <Button
              showIcon={false}
              text={isPending ? "Iniciando..." : "Iniciar Sesión"}
              type="submit"
            />
          ) : (
            <Button
              showIcon={false}
              text={isPendingReg ? "Registrando..." : "Registrarse"}
              type="submit"
            />
          )}
        </form>

        {isLogin ? (
          <div className="text-text text-sm mt-6">
            ¿No tienes una cuenta?{" "}
            <button
              type="button"
              className="border-none cursor-pointer hover:text-primary transition font-bold"
              onClick={() => setIsLogin(false)}
            >
              Regístrate
            </button>
          </div>
        ) : (
          <div className="text-text text-sm mt-6">
            ¿Ya tienes una cuenta?{" "}
            <button
              type="button"
              className="border-none cursor-pointer hover:text-primary transition font-bold"
              onClick={() => setIsLogin(true)}
            >
              Inicia sesión
            </button>
          </div>
        )}
      </Container>
      {toast && <Toast message={toast} error={true} />}
    </>
  );
};

export default Login;
