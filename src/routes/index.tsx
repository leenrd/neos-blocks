import Home from "@/pages/home";
import NotFoundPage from "@/pages/common/not-found";
import Docs from "@/pages/getting-started/docs";
import MainPage from "@/pages/main-page";
import Installation from "@/pages/getting-started/installation";
import Changelog from "@/pages/getting-started/changelog";
import About from "@/pages/getting-started/about";
import Credits from "@/pages/getting-started/credits";
import ComponentPage from "@/pages/components";

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
          {
            path: "changelog",
            element: <Changelog />,
          },
          {
            path: "about",
            element: <About />,
          },
          {
            path: "credits",
            element: <Credits />,
          },
          {
            path: "component/:id",
            element: <ComponentPage />,
          },
        ],
      },
    ],
  },
];
