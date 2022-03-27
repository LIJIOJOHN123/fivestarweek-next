import React from "react";
import { GoogleLoginButton } from "react-social-login-buttons";
import GoogleLogin from "react-google-login";
import { googleLogin } from "../../store/actions/user/auth";
import { useDispatch, useSelector } from "react-redux";

const GoogleLogins = ({ message }) => {
  const dispatch = useDispatch();
  const responseGoogle = async (response) => {
    const tokenId = response.tokenId;
    const user = { tokenId };
    dispatch(googleLogin(user));
  };

  return (
    <GoogleLogin
      clientId={process.env.GOOGLE_CLIENT_ID}
      autoLoad={false}
      render={(renderProps) => (
        <GoogleLoginButton
          onClick={() => {
            renderProps.onClick();
          }}
          style={{
            background: "black",
            color: "white",
            fontWeight: "bold",
            fontSize: 16,
          }}
          activeStyle={{ background: "gray" }}
          disabled={renderProps.disabled}
        >
          {message}
        </GoogleLoginButton>
      )}
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
    />
  );
};

export default GoogleLogins;
