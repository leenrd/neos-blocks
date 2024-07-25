import { cn } from "@/lib/utils";
import { FC } from "react";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";
import { Link } from "react-router-dom";
import registry from "@/lib/registry";

interface SidebarProps {
  className?: string;
}

const Sidebar: FC<SidebarProps> = ({ className }) => {
  return (
    <div className={cn("pb-12 border-r h-screen", className)}>
      <div className="space-y-4 py-4">
        <ScrollArea className="h-full">
          <section className="">
            <div className="px-4 py-2">
              <h2 className="mb-2 pl-3 text-lg font-semibold tracking-tight">
                Getting Started
              </h2>
              <div className="space-y-1">
                <Link to={"/docs"}>
                  <Button
                    variant="link"
                    size={"sm"}
                    className="w-full justify-start"
                  >
                    Installation
                  </Button>
                </Link>
                <Link to={"changelog"}>
                  <Button
                    variant="link"
                    size={"sm"}
                    className="w-full justify-start"
                  >
                    Changelogs
                  </Button>
                </Link>
                <Link to={"about"}>
                  <Button
                    variant="link"
                    size={"sm"}
                    className="w-full justify-start"
                  >
                    About
                  </Button>
                </Link>
                <Link to={"credits"}>
                  <Button
                    variant="link"
                    size={"sm"}
                    className="w-full justify-start"
                  >
                    Credits
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* Components */}
          <section>
            <div className="px-4 py-2">
              <h2 className="mb-2 pl-3 text-lg font-semibold tracking-tight">
                Components
              </h2>

              <div className="space-y-1">
                {registry.map((item) => (
                  <Link to={`component/${item.id}`}>
                    <Button
                      variant="link"
                      size={"sm"}
                      className="w-full justify-start"
                    >
                      {item.name}
                    </Button>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </ScrollArea>
      </div>
    </div>
  );
};

export default Sidebar;
