import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.tsx";
import "./index.css";
import BaseRouterProvider from "./shared/providers/RouterProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <App /> */}
    <BaseRouterProvider />
  </React.StrictMode>,
);
