import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerBody,
  DrawerFooter,
  DrawerClose,
} from "./@registry/floating-sidebar";

import {
  RadioCardGroup,
  RadioCardIndicator,
  RadioCardItem,
} from "@/@registry/radio-card-group";

import { useState } from "react";

import { Treeview } from "@/@registry/tree";
import { data } from "@/lib/tree-sample-data";

const TestPage = () => {
  return (
    <section className="min-h-screen flex items-center justify-center"></section>
  );
};

export default TestPage;

//

export const TreeviewUsage = () => {
  const [selected, select] = useState<string | null>(null);
  return (
    <Treeview.Root
      value={selected}
      onChange={select}
      className="w-72 h-full border-[1.5px] border-slate-200 m-4"
    >
      {data.map((node) => (
        <Treeview.Node node={node} key={node.id} />
      ))}
    </Treeview.Root>
  );
};

export const FloatingSBUsage = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="secondary">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent className="sm:max-w-lg">
        <DrawerHeader>
          <DrawerTitle>Account Created Successfully</DrawerTitle>
          <DrawerDescription className="mt-1 text-sm">
            Your account has been created successfully. You can now login to
            your account. For more information, please contact us.
          </DrawerDescription>
        </DrawerHeader>
        <DrawerBody>
          This is they body of the drawer, content goes here.
        </DrawerBody>
        <DrawerFooter className="mt-6">
          <DrawerClose asChild>
            <Button
              className="mt-2 w-full sm:mt-0 sm:w-fit"
              variant="secondary"
            >
              Go back
            </Button>
          </DrawerClose>
          <DrawerClose asChild>
            <Button className="w-full sm:w-fit">Ok, got it!</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export const RadioCardGroupUsage = () => {
  return (
    <RadioCardGroup>
      <RadioCardItem value="1">
        <div className="flex items-start gap-3">
          <RadioCardIndicator className="mt-1" />
          <div>
            <span className="sm:text-sm">Base Performance</span>
            <p className="mt-1 text-xs text-gray-500">1/8 vCPU, 1 GB RAM</p>
          </div>
        </div>
      </RadioCardItem>
      <RadioCardItem value="2">
        <div className="flex items-start gap-3">
          <RadioCardIndicator className="mt-1" />
          <div>
            <span className="sm:text-sm">Advanced Performance</span>
            <p className="mt-1 text-xs text-gray-500">1/4 vCPU, 2 GB RAM</p>
          </div>
        </div>
      </RadioCardItem>
      <RadioCardItem value="3">
        <div className="flex items-start gap-3">
          <RadioCardIndicator className="mt-1" />
          <div>
            <span className="sm:text-sm">Turbo Performance</span>
            <p className="mt-1 text-xs text-gray-500">1/2 vCPU, 4 GB RAM</p>
          </div>
        </div>
      </RadioCardItem>
    </RadioCardGroup>
  );
};
