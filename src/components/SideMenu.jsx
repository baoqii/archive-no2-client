import { useState, useEffect, useContext } from "react";
import { Compass, Home, Mail, User } from "react-feather";
import { NavLink } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { ThemeContext } from "../contexts/ThemeContext";

const SideMenu = () => {
  const { isDarkMode } = useContext(ThemeContext);

  const [tooltipVariant, setTooltipVariant] = useState(
    isDarkMode ? "light" : "dark"
  );

  useEffect(() => {
    setTooltipVariant(isDarkMode ? "light" : "dark");
  }, [isDarkMode]);

  return (
    <nav
      className="sidemenu z-30 w-screen h-[70px] overflow-auto flex 
     xl:h-full xl:w-[70px] top-0 gap-6 xl:flex-col items-center justify-center left-0 fixed bg-white dark:bg-eerie-black-950 transition-all duration-300 ease-linear"
    >
      <NavLink
        to="/"
        className="bg-transparent active:bg-rock-blue-500 dark:active-east-bay-800 text-rock-blue-500 dark:text-pigeon-post-400 active:text-white w-[45px] h-[45px] grid items-center place-items-center rounded-md transition-all duration-300 ease-linear cursor-pointer hover:text-white hover:bg-rock-blue-500 dark:hover:bg-east-bay-800"
        data-tooltip-id="tt-home"
        data-tooltip-content="HOME"
        data-tooltip-place="right"
        data-tooltip-variant={tooltipVariant}
      >
        <i className="inline-flex shrink-0 text-center">
          <Home size={22} />
        </i>
      </NavLink>
      <Tooltip
        id="tt-home"
        noArrow
        style={{
          borderRadius: "6px",
          letterSpacing: "0.1em",
          padding: "4px 12px",
          fontSize: "12px",
        }}
      />
      <NavLink
        to="/about"
        className="bg-transparent active:bg-rock-blue-500 dark:active:bg-east-bay-800 text-rock-blue-500 dark:text-pigeon-post-400 active:text-white w-[45px] h-[45px] grid items-center place-items-center rounded-md transition-all duration-300 ease-linear cursor-pointer hover:text-white hover:bg-rock-blue-500 dark:hover:bg-east-bay-800"
        data-tooltip-id="tt-about"
        data-tooltip-content="ABOUT"
        data-tooltip-place="right"
        data-tooltip-variant={tooltipVariant}
      >
        <i className="inline-flex shrink-0 text-center">
          <User size={22} />
        </i>
      </NavLink>
      <Tooltip
        id="tt-about"
        noArrow
        style={{
          borderRadius: "6px",
          letterSpacing: "0.1em",
          padding: "4px 12px",
          fontSize: "12px",
        }}
      />
      <NavLink
        to="/tags"
        className="bg-transparent active:bg-rock-blue-500 dark:active:bg-east-bay-800 text-rock-blue-500 dark:text-pigeon-post-400 active:text-white w-[45px] h-[45px] grid items-center place-items-center rounded-md transition-all duration-300 ease-linear cursor-pointer hover:text-white hover:bg-rock-blue-500 dark:hover:bg-east-bay-800"
        data-tooltip-id="tt-navigate"
        data-tooltip-content="NAVIGATE"
        data-tooltip-place="right"
        data-tooltip-variant={tooltipVariant}
      >
        <i className="inline-flex shrink-0 text-center">
          <Compass size={22} />
        </i>
      </NavLink>
      <Tooltip
        id="tt-navigate"
        noArrow
        style={{
          borderRadius: "6px",
          letterSpacing: "0.1em",
          padding: "4px 12px",
          fontSize: "12px",
        }}
      />
      <NavLink
        to="/newsletter"
        className="bg-transparent active:bg-rock-blue-500 dark:active:bg-east-bay-800 text-rock-blue-500 dark:text-pigeon-post-400 active:text-white w-[45px] h-[45px] grid items-center place-items-center rounded-md transition-all duration-300 ease-linear cursor-pointer hover:text-white hover:bg-rock-blue-500 dark:hover:bg-east-bay-800"
        data-tooltip-id="tt-newsletter"
        data-tooltip-content="NEWSLETTER"
        data-tooltip-place="right"
        data-tooltip-variant={tooltipVariant}
      >
        <i className="inline-flex shrink-0 text-center">
          <Mail size={22} />
        </i>
      </NavLink>
      <Tooltip
        id="tt-newsletter"
        noArrow
        style={{
          borderRadius: "6px",
          letterSpacing: "0.1em",
          padding: "4px 12px",
          fontSize: "12px",
        }}
      />
    </nav>
  );
};

export default SideMenu;
