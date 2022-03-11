import SignUp from "../components/Authentication/SignUp";
import LoginForm from "../components/Authentication/LoginForm";
import Home from "../components/Home/Home";
import AddDonut from "../components/AddPost/AddDonut";
import Donuts from "../components/Donuts/Donuts";
import SinglePage from "../components/Donuts/SinglePage";
import Liked from "../components/Liked/Liked";
import Popular from "../components/Popular";

// General |
const commonRoutes = [
  {
    path: "/login",
    element: <LoginForm />,
  },
  {
    path: "/liked",
    element: <Liked />,
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
    path: "/donuts/:id/:title",
    element: <SinglePage />,
  },
  {
    path: "/popular-donuts",
    element: <Popular />,
  },
];

export { commonRoutes };
