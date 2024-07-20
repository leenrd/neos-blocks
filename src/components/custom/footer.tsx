import { FC } from "react";

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <footer className="border-t bg-slate-50">
      <div className="mx-auto flex w-full flex-col items-center px-4 py-12 sm:items-start">
        <nav className="px-20 flex w-full flex-col-reverse items-center justify-between space-y-4 space-y-reverse text-xs font-medium text-slate-500 sm:flex-row sm:space-y-0">
          <p>© 2025, Leenard. All Rights Reserved.</p>
          <div>
            <a href="#" className="hover:underline">
              Privacy
            </a>
            <span> · </span>
            <a href="#" className="hover:underline">
              Terms
            </a>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
