import { useRoutes, BrowserRouter } from "react-router-dom";
import { Home } from "../Home";
import { Navbar } from "../../Components";
import "./App.css";

const AppRoutes = () => {
  let routes = useRoutes([{ path: "/", element: <Home /> }]);

  return routes;
};

export function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
    </BrowserRouter>
  );
}
