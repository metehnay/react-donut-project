import SignUp from "../components/Authentication/SignUp";
import LoginForm from "../components/Authentication/LoginForm";
import Home from "../components/Home/Home";
import AddDonut from "../components/AddPost/AddDonut";
import Donuts from "../components/Donuts/Donuts";
import SinglePage from "../components/Donuts/SinglePage";

// General |
const commonRoutes = [
  {
    path: "/login",
    element: <LoginForm />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/addDonut",
    element: <AddDonut />,
  },
  {
    path: "/donuts/:title",
    element: <SinglePage />,
  },
];

export { commonRoutes };
