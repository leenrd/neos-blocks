import Home from "@/pages/home";
import NotFoundPage from "@/pages/common/not-found";
import Docs from "@/pages/docs";
import MainPage from "@/pages/main-page";
import Installation from "@/pages/installation";

export default [
  {
    path: "/",
    element: <MainPage />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/docs",
        element: <Docs />,
        errorElement: <NotFoundPage />,
        children: [
          {
            index: true,
            element: <Installation />,
          },
        ],
      },
    ],
  },
];
