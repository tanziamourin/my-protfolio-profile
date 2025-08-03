// MainRoutes.jsx
import { createBrowserRouter } from "react-router";


// import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import DashboardLayout from "../layout/DashboardLayout";
import DashboardHome from "../dashboard/admin/DashboardHome";
;
import ProjectUpload from "../dashboard/admin/ProjectUpload";
import Unauthorized from "../dashboard/admin/Unauthorized"
import MainLayout from "../layout/MainLayout";
import AdminMessages from "../dashboard/admin/AdminMessages";
import PrivateRoute from "./PrivateRoute";
import Login from "../pages/Login";
import LearnMoreAboutMe from "../pages/LearnMoreAboutMe";

 export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home></Home>
      },{
        path:"/learn-more-about-me", element:<LearnMoreAboutMe></LearnMoreAboutMe>
      },
      {
        path :"/login", element : <Login></Login>
      },
       { path: "/unauthorized", element: <Unauthorized /> }
    ],
  },
 {
  path: "/dashboard",
  element: (
    <PrivateRoute>
      <DashboardLayout />
    </PrivateRoute>
  ),
  children: [
    {
      index: true,
      element: <DashboardHome />,
    },
    {
      path: "contact-messages",
      element: <AdminMessages />,
    },
    {
      path: "project-upload",
      element: <ProjectUpload />,
    },
  ],
},

]);


