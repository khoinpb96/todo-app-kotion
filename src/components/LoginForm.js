import { signInWithEmailAndPassword } from "@firebase/auth";
import { auth } from "firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";

export default function LoginForm({ toggle }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [invalidState, setInvalidState] = useState("");

  const handleInvalidLogin = (err) => {
    switch (err) {
      case "auth/wrong-password":
        setInvalidState("Wrong password, please try again");
        break;
      case "auth/invalid-email":
        setInvalidState("Invalid email, please try again");
        break;
      case "auth/user-not-found":
        setInvalidState("Wrong email, please try again");
        break;
      case "auth/too-many-requests":
        setInvalidState("Too many requests, please try again later");
        break;
      default:
        console.log("???");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((err) => {
        handleInvalidLogin(err.code);
      });
  };
  const provider = new GoogleAuthProvider();

  const handleGoogleRegister = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>Log In</h2>
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

      {invalidState && <p className="invalid-message">{invalidState}</p>}
      <button type="submit">Continue</button>

      <div className="line">
        <hr />
        <span>OR LOGIN WITH</span>
      </div>

      <div className="register-methods">
        <i className="fab fa-google" onClick={handleGoogleRegister} />
        <i className="fab fa-facebook-f" />
        <i className="fab fa-github" />
      </div>

      <div className="line">
        <hr />
        <span>OR</span>
      </div>

      <button className="register-cta" onClick={toggle}>
        Create an account
      </button>
    </form>
  );
}
