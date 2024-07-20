import { FC } from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

interface NavbarProps {
  // Define props here
}

const Navbar: FC<NavbarProps> = () => {
  return (
    <header className="w-full border-b border-slate-100 bg-white/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
        <Link to={"/"} className="flex items-center">
          <h1 className=" tracking-tighter">Neos UI</h1>
        </Link>
        <div className="hidden md:inline-flex">
          <Link
            to={"/docs"}
            className="inline-flex items-center justify-center whitespace-nowrap  text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3"
          >
            Docs
          </Link>
          <Link
            to={"/docs"}
            className="inline-flex items-center justify-center whitespace-nowrap  text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3"
          >
            Components
          </Link>
          <Link
            to={"/"}
            className="inline-flex items-center justify-center whitespace-nowrap  text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3"
          >
            Changelog
          </Link>
          <Link
            to={"/"}
            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3"
          >
            About
          </Link>
        </div>
        <div className="hidden items-center gap-1 md:flex">
          <Link
            to={"/"}
            className="inline-flex items-center justify-center whitespace-nowrap  text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3"
          >
            Get Started
          </Link>
        </div>
        <Button className="inline-flex p-1.5 md:hidden">
          <span className="sr-only">Open Menu</span>
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
