import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import SideMenu from "../components/SideMenu";

const Layout = () => {
  return (
    <>
      <main className="container relative mx-auto my-[50px] w-[calc(300px+700px+100px)]">
        <SideMenu />
        <Sidebar />
        <Outlet />
      </main>
      {/* {Footer} */}
    </>
  );
};

export default Layout;
