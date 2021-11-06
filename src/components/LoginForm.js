import { Link } from "react-router-dom";
import styles from "scss/LoginForm.module.scss";
import { useFormik } from "formik";

export default function LoginForm() {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
  });
  return (
    <div className={styles.loginForm}>
      <h2>Log in</h2>
      <Link to="/dashboard">To Dashboard</Link>
      <hr />
    </div>
  );
}
