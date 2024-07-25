// Tremor Raw Textarea [v0.0.1]

import React, { useRef } from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }: TextareaProps) => {
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);
    return (
      <div className="border-gray-200 px-4 pt-4 mb-2 sm:mb-0 w-full">
        <div className="relative flex-1 overflow-hidden rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-black">
          <textarea
            ref={textareaRef}
            rows={3}
            className={cn(
              "px-2 block w-full resize-none border-0 bg-transparent text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:py-1.5 sm:text-sm sm:leading-6 outline-none",
              className
            )}
            {...props}
          />
          <div
            onClick={() => textareaRef.current?.focus()}
            className="py-2"
            aria-hidden="true"
          >
            <div className="py-px">
              <div className="h-9" />
            </div>
          </div>
          <div className="absolute right-0 bottom-0 flex justify-between py-2 pl-3 pr-2">
            <div className="flex-shrink-0">
              <Button>Post</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea, type TextareaProps };
