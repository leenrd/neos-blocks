import Home from "@/pages/home";
import NotFoundPage from "@/pages/common/not-found";

export default [
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFoundPage />,
  },
];
