import React from "react";
import { Link } from "react-router-dom";
import useForm from "../../hooks/useForm";
import validator from "validator";
import { useDispatch, useSelector } from "react-redux";
import { RemoveError, setError } from "../../actions/ui";
import { startRegisterWithEmailPasswordName } from "../../actions/auth";

const RegisterScreen = () => {
  const dispatch = useDispatch();
  const { msgError, loading } = useSelector((state) => state.ui);

  const [formValues, handleInputChange] = useForm({
    name: "Luis",
    email: "luis@gmail.com",
    password: "123456",
    confirm_password: "123456",
  });

  const { name, email, password, confirm_password } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      dispatch(startRegisterWithEmailPasswordName(email, password, name));
    }
  };

  const isFormValid = () => {
    if (name.trim().length === 0) {
      dispatch(setError("Name is required"));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError("Email is not valid"));
      return false;
    } else if (password !== confirm_password || password.length < 5) {
      dispatch(
        setError(
          "Password should be at least 6 characters and match each other"
        )
      );
      return false;
    }
    dispatch(RemoveError());
    return true;
  };

  return (
    <>
      <h3 className="auth__title">Register</h3>
      <form onSubmit={handleRegister} className="animate__animated animate__fadeIn animate__faster">
        {msgError && (
          <div className="auth__alert-error">
            <p>{msgError}</p>
          </div>
        )}
        <input
          type="text"
          className="auth__input"
          placeholder="Name"
          name="name"
          value={name}
          onChange={handleInputChange}
          autoComplete="off"
        />
        <input
          type="text"
          className="auth__input"
          placeholder="Email"
          name="email"
          value={email}
          onChange={handleInputChange}
          autoComplete="off"
        />
        <input
          type="password"
          className="auth__input"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleInputChange}
        />
        <input
          type="password"
          className="auth__input"
          placeholder="Confirm Password"
          name="confirm_password"
          value={confirm_password}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="btn btn-primary btn-block mb-5"
          disabled={loading}
        >
          Register
        </button>

        <Link to="/auth/login" className="link">
          Already registered?
        </Link>
      </form>
    </>
  );
};

export default RegisterScreen;
