import { useContext, useState } from "react";
import { isDarkM } from "../contexts/ThemeContext";
const Header = () => {
  // const[isDark,setIsDark]=useState(JSON.parse(localStorage.getItem('isDarkMode')))
  const isDark = useContext(isDarkM);
  return (
    <>
      <header className="header-container">
        <div className="header-content">
          <h2 className="title">
            <a href="/">Where in the world?</a>
          </h2>
          <p
            className="theme-changer"
            onClick={() => {
              document.getElementsByTagName("body")[0].classList.toggle("dark");
              isDark.isDarkMode();
              // setIsDark(!isDark)
              // localStorage.setItem('isDarkMode',!isDark)
            }}
          >
            <i
              className={isDark.isDark ? "fa-solid fa-sun" : "fa-solid fa-moon"}
            />
            &nbsp;&nbsp;{isDark.isDark ? "Light Mode" : "Dark Mode"}
          </p>
        </div>
      </header>
    </>
  );
};

export default Header;
