import LoginForm from "components/LoginForm";
import RegisterForm from "components/RegisterForm";
import { auth } from "firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "scss/Auth.scss";

export default function Auth() {
  const [showRegister, setShowRegister] = useState(false);

  const loginAndRegisterToggle = () => {
    setShowRegister((prev) => !prev);
  };
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/dashboard");
      }
    });
  }, []);

  return (
    <>
      {!showRegister ? (
        <LoginForm toggle={loginAndRegisterToggle} />
      ) : (
        <RegisterForm />
      )}
    </>
  );
}
