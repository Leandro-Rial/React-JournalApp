import React from "react";
import { Link } from "react-router-dom";

const RegisterScreen = () => {
  return (
    <>
      <h3 className="auth__title">Register</h3>
      <form action="">
        <input
          type="text"
          placeholder="Name"
          name="Name"
          className="auth__input"
          autoComplete="off"
        />
        <input
          type="text"
          placeholder="Email"
          name="email"
          className="auth__input"
          autoComplete="off"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="auth__input"
        />
        <input
          type="password"
          name="confirm_password"
          placeholder="Confirm Password"
          className="auth__input"
        />
        <button type="submit" className="btn btn-primary btn-block mb-5">
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
