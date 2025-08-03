import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { router } from "./routes/Router";
import ThemeProvider from "./Context/ThemeProvider";

import { RouterProvider } from "react-router";
import AuthProvider from "./auth/AuthProvider";
// import ParticlesBackground from "./components/ui/ParticleseBg";


// import ThemeProvider from "./Context/ThemeProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
     <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </AuthProvider>
  
     
  
  </React.StrictMode>
);
