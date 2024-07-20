import { Announcement } from "@/components/custom/home-tag";
import { FC } from "react";
import {
  PageHeader,
  PageHeaderHeading,
  PageHeaderDescription,
  PageActions,
} from "@/components/custom/home-header";

interface HomeProps {
  // Define props here
}

const Home: FC<HomeProps> = () => {
  return (
    <article>
      <PageHeader>
        <img alt="pic" src="./deck-gallery-man.gif" className="w-72 mb-4" />
        <PageHeaderHeading className="max-w-xl">
          TailwindCSS and shadcn/ui UI Kit for React
        </PageHeaderHeading>
        <PageHeaderDescription>
          A simple component library for React with complete cli implementation
        </PageHeaderDescription>
        <PageActions>
          <Announcement />
        </PageActions>
      </PageHeader>
    </article>
  );
};

export default Home;
