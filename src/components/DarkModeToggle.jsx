import { useState } from "react";
import { Sun, Moon } from "react-feather";

function DarkModeToggle({ isDarkMode, onToggle }) {
  const [isOn, setIsOn] = useState(isDarkMode);

  const toggle = () => {
    setIsOn(!isOn);
    onToggle(!isOn);
  };

  const handleClick = () => {
    toggle();
  };

  const iconTranslation = isOn
    ? "translate-x-6 bg-tundora-700"
    : "translate-x-0 bg-white";

  return (
    <div
      role="checkbox"
      aria-checked={isOn ? "true" : "false"}
      tabIndex={0}
      onClick={handleClick}
      className={`cursor-pointer w-11 h-6 m-6 mr-0 mb-0 ml-auto  border-tundora-700 hover:border-rock-blue-200 rounded-full relative px-1.5 flex items-center ${
        isOn ? " bg-rock-blue-50" : " justify-end bg-tundora-700"
      }`}
    >
      <div
        className={`w-4 h-4 p-1 rounded-full absolute transform transition-transform duration-700 ease-out left-0.5 ${iconTranslation}`}
      />
      {isOn ? (
        <Sun size={24} className="h-4 w-4 text-rock-blue-700"></Sun>
      ) : (
        <Moon size={24} className="h-4 w-4 text-rock-blue-200"></Moon>
      )}
    </div>
  );
}

export default DarkModeToggle;