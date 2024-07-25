import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const About = () => {
  return (
    <section className="p-1">
      <article className="space-y-10">
        <header className="space-y-4">
          <h1 className="leading-4 font-bold text-2xl">Introduction</h1>
          <p>Beautifully designed components.</p>
        </header>

        <section className="space-y-4">
          <h2 className="leading-4 font-bold text-xl">What's new here?</h2>
          <p>
            Neos is a beautifully designed React component library that's built
            on top of shadcn-ui. It expanded the default shadcn-ui components
            and added new ones from different sources as well as my personal
            work, it also includes molecules (atomic design) to make it easier
            to build your own components.
          </p>
        </section>

        <section className="space-y-4">
          <h1 className="leading-4 font-bold text-xl">FAQ's</h1>
          <Accordion type="multiple">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Where are the sources/credits of components?
              </AccordionTrigger>
              <AccordionContent>It's in the credit page.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it only for react?</AccordionTrigger>
              <AccordionContent>Yes. It for now.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it open-source ?</AccordionTrigger>
              <AccordionContent>Yes.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </article>
    </section>
  );
};

export default About;
