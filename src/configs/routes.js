import SignUp from "../components/Authentication/SignUp";
import Home from "../components/Home/Home";

// General |
const commonRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
];

export { commonRoutes };
