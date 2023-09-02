import { Compass, Home, Mail, User } from "react-feather";
import { NavLink } from "react-router-dom";

const SideMenu = () => {
  return (
    <nav className="sidemenu h-full w-[70px] top-0 gap-6 flex flex-col items-center justify-center left-0 fixed bg-white dark:bg-eerie-black-950 transition-all duration-300 ease-linear">
      <NavLink
        to="/"
        className="bg-transparent active:bg-rock-blue-500 dark:active-east-bay-800 text-rock-blue-500 dark:text-pigeon-post-400 active:text-white w-[45px] h-[45px] grid items-center place-items-center rounded-md transition-all duration-300 ease-linear cursor-pointer hover:text-white hover:bg-rock-blue-500 dark:hover:bg-east-bay-800"
      >
        <i className="inline-flex shrink-0 text-center">
          <Home size={22} />
        </i>
      </NavLink>
      <NavLink
        to="/"
        className="bg-transparent active:bg-rock-blue-500 dark:active:bg-east-bay-800 text-rock-blue-500 dark:text-pigeon-post-400 active:text-white w-[45px] h-[45px] grid items-center place-items-center rounded-md transition-all duration-300 ease-linear cursor-pointer hover:text-white hover:bg-rock-blue-500 dark:hover:bg-east-bay-800"
      >
        <i className="inline-flex shrink-0 text-center">
          <User size={22} />
        </i>
      </NavLink>
      <NavLink
        to="/tags"
        className="bg-transparent active:bg-rock-blue-500 dark:active:bg-east-bay-800 text-rock-blue-500 dark:text-pigeon-post-400 active:text-white w-[45px] h-[45px] grid items-center place-items-center rounded-md transition-all duration-300 ease-linear cursor-pointer hover:text-white hover:bg-rock-blue-500 dark:hover:bg-east-bay-800"
      >
        <i className="inline-flex shrink-0 text-center">
          <Compass size={22} />
        </i>
      </NavLink>
      <NavLink
        to="/"
        className="bg-transparent active:bg-rock-blue-500 dark:active:bg-east-bay-800 text-rock-blue-500 dark:text-pigeon-post-400 active:text-white w-[45px] h-[45px] grid items-center place-items-center rounded-md transition-all duration-300 ease-linear cursor-pointer hover:text-white hover:bg-rock-blue-500 dark:hover:bg-east-bay-800"
      >
        <i className="inline-flex shrink-0 text-center">
          <Mail size={22} />
        </i>
      </NavLink>
    </nav>
  );
};

export default SideMenu;
