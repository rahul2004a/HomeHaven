import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import { MantineProvider } from '@mantine/core';
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-84lq4qdikixm2nuq.us.auth0.com"
      clientId="TlU13n3aOtluDxKexUCKOZ6kHdee3WaG"
      authorizationParams={{
        redirect_uri: "http://localhost:5173/"
      }}
      audience="http://localhost:8000"
      scope="openid profile email"
    >


      <App />

    </Auth0Provider>
  </React.StrictMode>
);
