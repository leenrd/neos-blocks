import Footer from "@/components/custom/footer";
import Navbar from "@/components/custom/navbar";
import { FC } from "react";
import { Outlet } from "react-router-dom";

const MainPage: FC = () => {
  return (
    <article>
      <Navbar />
      <Outlet />
      <Footer />
    </article>
  );
};

export default MainPage;
