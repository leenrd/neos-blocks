import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { EllipsisVertical } from "lucide-react";

const ChatBubble = () => {
  return (
    <div className="flex items-start gap-2.5">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <div className="flex flex-col gap-1 w-full max-w-[320px]">
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <span className="text-sm font-semibold text-gray-900 dark:text-white">
            Bonnie Green
          </span>
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
            11:46
          </span>
        </div>

        <section className="flex items-center justify-center gap-2">
          <article className="flex flex-col leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
            <p className="text-sm font-normal text-gray-900 dark:text-white">
              {" "}
              That's awesome. I think our users will really appreciate the
              improvements.
            </p>
          </article>
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>
                <EllipsisVertical />
              </MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Copy</MenubarItem>
                <MenubarItem>Report</MenubarItem>
                <MenubarItem>Delete</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </section>

        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
          Delivered
        </span>
      </div>
    </div>
  );
};

export default ChatBubble;
