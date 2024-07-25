const Installation = () => {
  return (
    <section className="p-1">
      <article className="space-y-10">
        <header className="space-y-4">
          <h1 className="leading-4 font-bold text-2xl">Installation</h1>
          <p>How to install dependencies and structure your app.</p>
        </header>

        <section className="space-y-4">
          <h2 className="leading-4 font-bold text-xl">Initiation</h2>
          <p>Run the cli init with the following command:</p>
          <pre className="bg-slate-100 px-4 py-1 rounded-lg max-w-fit">
            <code>npm i neos-blocks</code>
          </pre>
          <br />
          <p>The paste this style import in your main.jsx/tsx:</p>
          <pre className="bg-slate-100 px-4 py-1 rounded-lg max-w-fit">
            <code>import 'neos-blocks/dist/style.css'</code>
          </pre>
        </section>

        <section className="space-y-4">
          <h2 className="leading-4 font-bold text-xl">Usage</h2>
          <p>Use the components in your app:</p>
          <pre className="bg-slate-100 px-4 py-1 rounded-lg max-w-fit">
            <code>{`import { Button } from 'neos-blocks';

export default function Home() {
return (
    <div>
    <Button>Click me</Button>
    </div>
)
}
            `}</code>
          </pre>
        </section>
      </article>
    </section>
  );
};

export default Installation;
