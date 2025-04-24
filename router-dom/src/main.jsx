import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Buyesim from "../pages/Buyesim.jsx";
import Register from "../pages/Register.jsx";
import Login from "../pages/Login.jsx";
import User from "../pages/User.jsx";
import Details from "../pages/Details.jsx";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "buy-esim",
//         element: <Buyesim />,
//       },
//       {
//         path: "register",
//         element: <Register />,
//       },
//       {
//         path: "login",
//         element: <Login />,
//       },
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="user/:username" element={<Details />} />
      <Route path="user" element={<User />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
  // <App />
);
