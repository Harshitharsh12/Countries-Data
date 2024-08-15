// import { useState } from "react";
import Header from "./assets/Components/Header";
// import "./App.css";
import { Outlet } from "react-router-dom";
const App = () => {
  // const [query,setQuery]=useState("")
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
export default App;
