import Header from "./assets/Components/Header";
import { Outlet } from "react-router-dom";
const App = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
export default App;
