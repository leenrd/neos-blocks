import { Separator } from "@/components/ui/separator";

const Changelog = () => {
  return (
    <section className="p-1">
      <article className="space-y-10">
        <header className="space-y-4">
          <h1 className="leading-4 font-bold text-2xl">Changelog</h1>
          <p>Logs of project releases.</p>
        </header>

        <section className="space-y-4">
          <h2 className="leading-4 font-bold text-xl">
            July 2024 - Beta release
          </h2>
          <Separator />
          <p>Neos ui is now deployed 👉🦖</p>
        </section>
      </article>
    </section>
  );
};

export default Changelog;
