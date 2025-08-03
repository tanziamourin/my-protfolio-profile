import Navbar from "../components/Shared/Navbar";
import Footer from "../components/Shared/Footer";
import { Outlet } from "react-router-dom";

import GlowingBackgroundWrapper from "../components/ui/GlowingBackgroundWrapper";
import ScrollToTopButton from "../components/Shared/ScrollToTopButton";
import ThemeToggle from "../components/Shared/ThemeToggle";

const MainLayout = () => {
  return (
    <div className=" ">
      <Navbar />
      <GlowingBackgroundWrapper>
        <main className="min-h-[80vh] ">
          <Outlet />
        </main>
        <ScrollToTopButton></ScrollToTopButton>
        <ThemeToggle></ThemeToggle>

        <Footer />
      </GlowingBackgroundWrapper>
    </div>
  );
};

export default MainLayout;
