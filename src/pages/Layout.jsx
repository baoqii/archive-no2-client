import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import SideMenu from "../components/SideMenu";
import ScrollToTopButton from "../components/ScrollToTopButton";
import { Footer } from "../components/Footer";

const Layout = () => {
  return (
    <>
      <main className="container relative mx-auto mt-[50px] mb-4 w-[calc(300px+700px+100px)]">
        <Sidebar />
        <SideMenu />
        <ScrollToTopButton />
        <Outlet />
        <Footer />
      </main>
    </>
  );
};

export default Layout;
