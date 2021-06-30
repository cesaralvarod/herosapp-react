import React from "react";

const LoginScreen = ({ history }) => {
  const handleClick = (e) => {
    // history.push("/");
    history.replace("/");
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
