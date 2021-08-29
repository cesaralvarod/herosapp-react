import React, { useContext } from "react";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";

const LoginScreen = ({ history }) => {
  const { dispatch } = useContext(AuthContext);

  const lastPath = localStorage.getItem("lastPath") || "/";

  const handleClick = () => {
    dispatch({
      type: types.login,
      payload: {
        name: "Cesar",
      },
    });

    history.replace(lastPath);
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <hr />
      <button className="btn btn-primary" onClick={handleClick}>
        Login
      </button>
    </div>
  );
};

export default LoginScreen;
