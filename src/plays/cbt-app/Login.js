import React from "react";
import GoogleLogin from "react-google-login";

const Login = (setLoggedIn) => {
  const success = () => {
    setLoggedIn(true);
    console.log("success");
  };

  const failed = () => {
    console.log("failed");
  };
  return (
    <>
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        onSuccess={success}
        onFailure={failed}
      />
    </>
  );
};

export default Login;
