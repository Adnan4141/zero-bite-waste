import React from "react";
import { BrowserRouter as RouterProvider } from "react-router-dom";
// Import Font Awesome (consider using CDN in `index.html` for performance)
import "@fortawesome/fontawesome-free/css/all.min.css";
import { router } from "./Routes/Routes";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
     
    </div>
  );
}

export default App;
