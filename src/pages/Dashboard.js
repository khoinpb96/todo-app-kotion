import { auth } from "firebase";
import { signOut } from "firebase/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    !auth.currentUser && navigate("/");
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <h2>Dashboard</h2>
      <p>Hello, </p>
      <button onClick={handleSignOut}>Log Out</button>
    </>
  );
}
