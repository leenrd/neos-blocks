import { cn } from "@/lib/utils";
import { FC } from "react";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";
import { Link } from "react-router-dom";

interface SidebarProps {
  className?: string;
}

const Sidebar: FC<SidebarProps> = ({ className }) => {
  return (
    <div className={cn("pb-12 border-r h-screen", className)}>
      <div className="space-y-4 py-4">
        <ScrollArea className="h-full">
          <div className="px-4 py-2">
            <Link to={"/"} className="flex items-start">
              <h2 className="mb-2 pl-3 text-lg font-semibold tracking-tight">
                Getting Started
              </h2>
            </Link>
            <div className="space-y-1">
              <Button
                variant="link"
                size={"sm"}
                className="w-full justify-start"
              >
                Installation
              </Button>
              <Button
                variant="link"
                size={"sm"}
                className="w-full justify-start"
              >
                Changelogs
              </Button>
              <Button
                variant="link"
                size={"sm"}
                className="w-full justify-start"
              >
                About
              </Button>
            </div>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default Sidebar;
