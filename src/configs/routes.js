import SignUp from "../components/Authentication/SignUp";
import LoginForm from "../components/Authentication/LoginForm";
import Home from "../components/Home/Home";
import AddDonut from "../components/AddPost/AddDonut";

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
];

export { commonRoutes };
