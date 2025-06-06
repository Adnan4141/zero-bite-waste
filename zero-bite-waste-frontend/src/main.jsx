import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes.jsx";
import { UserProvider } from "./api/contextApi/ContextAPi.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
    <div className="max-w-screen-xl mx-auto">
      <RouterProvider router={router} />
    </div>
    </UserProvider>
  </StrictMode>
);
