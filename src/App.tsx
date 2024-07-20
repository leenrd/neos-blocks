import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "@/routes";

const r = createBrowserRouter(routes);

const App = () => {
  return (
    <main className="font-geist">
      <RouterProvider router={r} />
    </main>
  );
};

export default App;
