import ChatBubble from "@/@registry/components/chat-bubble";
import { Textarea } from "@/@registry/components/fancy-textarea";
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
} from "@/@registry/components/floating-sidebar";
import GoogleForm from "@/@registry/components/google-form";
import Loader from "@/@registry/components/loader";
import {
  RadioCardGroup,
  RadioCardItem,
  RadioCardIndicator,
} from "@/@registry/components/radio-card-group";
import { Treeview } from "@/@registry/components/tree";
import { Button } from "@/components/ui/button";
import { data } from "@/lib/tree-sample-data";

const components = [
  {
    id: 1,
    name: "Chat Bubble",
    describe: "A simple chat bubble component.",
    init: "import {ChatBubble} from 'neos-blocks';",
    preview: <ChatBubble />,
  },
  {
    id: 2,
    name: "Fancy Text Area",
    describe: "A simple emoji input form component.",
    init: "import {ChatBubble} from 'neos-blocks';",
    preview: <Textarea placeholder="Example placeholder" />,
  },
  {
    id: 3,
    name: "Radio Card Group",
    describe: "A simple emoji input form component.",
    init: "import {ChatBubble} from 'neos-blocks';",
    preview: (
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
    ),
  },
  {
    id: 4,
    name: "Floating Drawer",
    describe: "A simple emoji input form component.",
    init: "import {ChatBubble} from 'neos-blocks';",
    preview: (
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="secondary">Open Drawer</Button>
        </DrawerTrigger>
        <DrawerContent className="sm:max-w-lg">
          <DrawerHeader>
            <DrawerTitle>Drawer opened Successfully</DrawerTitle>
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
    ),
  },
  {
    id: 5,
    name: "Stepper",
    describe: "A simple emoji input form component.",
    init: "import {ChatBubble} from 'neos-blocks';",
    preview: <></>,
  },
  {
    id: 6,
    name: "Tree",
    describe: "A simple emoji input form component.",
    init: "import {ChatBubble} from 'neos-blocks';",
    preview: (
      <Treeview.Root
        value={""}
        onChange={() => {}}
        className="w-72 h-full border-[1.5px] border-slate-200 m-4"
      >
        {data.map((node) => (
          <Treeview.Node node={node} key={node.id} />
        ))}
      </Treeview.Root>
    ),
  },
  {
    id: 7,
    name: "Loader",
    describe: "A simple emoji input form component.",
    init: "import {ChatBubble} from 'neos-blocks';",
    preview: <Loader />,
  },
  {
    id: 8,
    name: "Google-style Form",
    describe: "A simple emoji input form component.",
    init: "import {ChatBubble} from 'neos-blocks';",
    preview: <GoogleForm />,
  },
];

export default [...components];
