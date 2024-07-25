import Sidebar from "@/components/custom/sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FC } from "react";
import { Outlet } from "react-router-dom";

interface DocsProps {
  // Props Here
}

const Docs: FC<DocsProps> = () => {
  return (
    <>
      <article className="grid grid-cols-6">
        <Sidebar className="col-span-1" />
        <section className="col-span-5">
          <ScrollArea className="h-screen p-10">
            <Outlet />
          </ScrollArea>
        </section>
      </article>
    </>
  );
};

export default Docs;
