import { useParams } from "react-router-dom";
import NotFoundPage from "../common/not-found";
import registry from "@/lib/registry";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";

const ComponentPage = () => {
  const { id } = useParams();

  const component = registry.find((item) => item.id.toString() === id);

  if (!id || !component) {
    return <NotFoundPage />;
  }

  return (
    <section className="p-1">
      <article className="space-y-10">
        <header className="space-y-4">
          <h1 className="leading-4 font-bold text-2xl">{component.name}</h1>
          <p>{component.describe}</p>
        </header>

        <Separator />

        <section className="space-y-4">
          <h2 className="leading-4 font-semibold text-xl">Preview</h2>
          <Card>
            <CardHeader>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-4">
          <h2 className="leading-4 font-semibold text-xl">Usage</h2>
          <Card>
            <pre className="bg-slate-100 px-4 py-1 rounded-lg">
              <code>{`import { Button } from 'neos-blocks';

export default function Home() {
  return (
      <div>
        <Button>Click me</Button>
      </div>
  )
}`}</code>
            </pre>
          </Card>
        </section>
      </article>
    </section>
  );
};

export default ComponentPage;
