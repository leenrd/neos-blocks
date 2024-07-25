import { Link as LinkIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Credits = () => {
  return (
    <section className="p-1">
      <article className="space-y-10">
        <header className="space-y-4">
          <h1 className="leading-4 font-bold text-2xl">Credits</h1>
          <p>You can visit the sources of some of the components.</p>
        </header>
      </article>

      <section className="space-y-4 mt-5">
        {sources.map((source) => (
          <Link to={source.link}>
            <div className=" flex items-center justify-between cursor-pointer space-x-4 rounded-md border p-4 hover:bg-slate-50">
              <span className="text-sm font-semibold">{source.name}</span>
              <LinkIcon className="size-4" />
            </div>
          </Link>
        ))}
      </section>
    </section>
  );
};

export default Credits;

const sources = [
  {
    name: "shadcn-ui",
    link: "https://ui.shadcn.com/",
  },
];
