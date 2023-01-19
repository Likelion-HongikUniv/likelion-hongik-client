import React from 'react';
// @ts-ignore
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";

export default function Google() {

  return (
    <GoogleOAuthProvider clientId="589906939224-vnrm4j1rpqq14rtph7cnfummo3accnk0.apps.googleusercontent.com">
      <GoogleLogin
        onSuccess={(credentialResponse:any) => {
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </GoogleOAuthProvider>
  );
}