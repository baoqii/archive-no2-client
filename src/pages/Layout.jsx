import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Layout = () => {
  return (
    <>
      <main className="relative mx-auto my-[50px] w-[calc(250px+570px+100px)]">
        <Sidebar />
        <Outlet />
      </main>
      {/* {Footer} */}
    </>
  );
};

export default Layout;
