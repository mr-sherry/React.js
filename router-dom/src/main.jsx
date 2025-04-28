import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "../pages/Home/Home.jsx";
import About from "../pages/About/About.jsx";
import Buyesim from "../pages/Buyesim/Buyesim.jsx";
import Register from "../pages/Register/Register.jsx";
import Login from "../pages/Login/Login.jsx";
import User from "../pages/User/User.jsx";
import Profile from "../pages/Profile/Profile.jsx";
import UserContextProvider from "./Context/UserContextProvider.jsx";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="buyesim" element={<Buyesim />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="user" element={<User />} />
      {/* <Route path="profile/:username" element={<Profile />} /> */}
      <Route path="profile" element={<Profile />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(


  <UserContextProvider>
    <RouterProvider router={router} />

  </UserContextProvider>

);
