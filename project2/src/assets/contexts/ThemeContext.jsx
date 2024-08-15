import { createContext, useState } from "react";
export const isDarkM=createContext()

const ThemeContext = (props) => {
    const[isDark,setIsDark]=useState(false)
    const isDarkMode=()=>{
        setIsDark(!isDark)
    }
  return (
    <div>
      <isDarkM.Provider value={{isDark,isDarkMode}}>
        {props.children}
      </isDarkM.Provider>
    </div>
  )
}

export default ThemeContext
