import React from "react";
import GoogleLogin from "react-google-login";

const Login = () => {
  return (
    <>
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        onSuccess={() => console.log("Success")}
        onFailure={() => console.log("Failed")}
      />
    </>
  );
};

export default Login;
