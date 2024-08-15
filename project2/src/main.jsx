import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ReactDOM from "react-dom/client";
import Home from "./assets/Components/Home";
import Contact from "./assets/Components/Contact";
import Error from "./assets/Components/Error";
import CountryDetails from "./assets/Components/CountryDetails";
import ThemeContext from "./assets/contexts/ThemeContext";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        // path: "/contact",
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/:country",
        element: <CountryDetails />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeContext>
    <RouterProvider router={router} />{" "}
  </ThemeContext>
);
