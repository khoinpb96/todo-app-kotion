import { auth } from "firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((err) => {
        console.error(err.code);
      });
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <h2>REGISTER</h2>
      <label htmlFor="email">
        <input
          type="text"
          name="email"
          id="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <span>Email</span>
      </label>
      <label htmlFor="password">
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <span>Password</span>
      </label>
      <button type="submit">Continue</button>
    </form>
  );
}
