import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";

import Login from "../pages/Login";
import Unauthorized from "../dashboard/admin/Unauthorized";
import DashboardLayout from "../layout/DashboardLayout";
import DashboardHome from "../dashboard/admin/DashboardHome";
import ProjectUpload from "../dashboard/admin/ProjectUpload";
import AdminMessages from "../dashboard/admin/AdminMessages";
import PrivateRoute from "./PrivateRoute";
import Projects from "../components/Projects";
import SkillsAndJourney from "../pages/SkillsAndJourney";
import ContactSection from "../pages/ContactSection";
import ProjectDetails from "../pages/ProjectDetails";
import UploadedAllProjects from "../dashboard/admin/UploadedAllProjects";
import About from "../components/About";
import ProfessionalTrainings from "../components/ProfessionalTrainings";
import FAQ from "../components/FAQ";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About></About> },
      {
        path: "skills-and-journey",
        element: <SkillsAndJourney></SkillsAndJourney>,
      },
      {
        path: "education",
        element: <ProfessionalTrainings></ProfessionalTrainings>,
      },
      { path: "projects", element: <Projects></Projects> },
      { path: "projects/:id", element: <ProjectDetails></ProjectDetails> },
      { path: "faq", element: <FAQ></FAQ> },
      { path: "contact", element: <ContactSection></ContactSection> },
      { path: "login", element: <Login /> },
      { path: "unauthorized", element: <Unauthorized /> },
    ],
  },
  {
    path: "/dashboard",
    element: <PrivateRoute />,
    children: [
      {
        path: "",
        element: <DashboardLayout />,
        children: [
          { index: true, element: <DashboardHome /> },
          { path: "contact-messages", element: <AdminMessages /> },
          { path: "project-upload", element: <ProjectUpload /> },
          { path: "upload-all-projects", element: <UploadedAllProjects /> },
        ],
      },
    ],
  },
]);
