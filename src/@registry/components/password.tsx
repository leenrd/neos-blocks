import { forwardRef, useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input, InputProps } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const PasswordInput = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    const disabled =
      props.value === "" || props.value === undefined || props.disabled;

    return (
      <div className="relative">
        <Input
          type={showPassword ? "text" : "password"}
          className={cn("hide-password-toggle pr-10", className)}
          ref={ref}
          {...props}
        />
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent cursor-pointer"
          onClick={() => setShowPassword((prev) => !prev)}
          disabled={disabled}
        >
          {showPassword && !disabled ? (
            <EyeIcon className="h-4 w-4" aria-hidden="true" />
          ) : (
            <EyeOffIcon className="h-4 w-4" aria-hidden="true" />
          )}
          <span className="sr-only">
            {showPassword ? "Hide password" : "Show password"}
          </span>
        </Button>

        {/* hides browsers password toggles */}
        <style>{`
					.hide-password-toggle::-ms-reveal,
					.hide-password-toggle::-ms-clear {
						visibility: hidden;
						pointer-events: none;
						display: none;
					}
				`}</style>
      </div>
    );
  }
);
PasswordInput.displayName = "PasswordInput";

export { PasswordInput };

// With form implementation

// import { EyeOffIcon, EyeIcon } from "lucide-react";
// import { useFormContext } from "react-hook-form";
// import { Box } from "@/components/ui/box";
// import {
//   FormField,
//   FormItem,
//   FormControl,
//   FormMessage,
//   FormDescription,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { createElement, useState } from "react";

// type PasswordFieldProps = {
//   name?: string;
//   placeholder?: string;
//   description?: string | JSX.Element;
// };

// export function PasswordField({
//   name = "password",
//   placeholder = "Enter password",
//   description,
// }: PasswordFieldProps) {
//   const { control, getFieldState } = useFormContext();
//   const [passwordVisibility, setPasswordVisibility] = useState(false);

//   return (
//     <FormField
//       control={control}
//       name={name}
//       render={({ field }) => (
//         <FormItem>
//           <FormControl>
//             <Box className="relative">
//               <Input
//                 {...field}
//                 type={passwordVisibility ? "text" : "password"}
//                 autoComplete="on"
//                 placeholder={placeholder}
//                 className={`pr-12 ${
//                   getFieldState(name).error && "text-destructive"
//                 }`}
//               />
//               <Box
//                 className="absolute inset-y-0 right-0 flex cursor-pointer items-center p-3 text-muted-foreground"
//                 onClick={() => setPasswordVisibility(!passwordVisibility)}
//               >
//                 {createElement(passwordVisibility ? EyeOffIcon : EyeIcon, {
//                   className: "h-6 w-6",
//                 })}
//               </Box>
//             </Box>
//           </FormControl>
//           <FormMessage />
//           {description && <FormDescription>{description}</FormDescription>}
//         </FormItem>
//       )}
//     />
//   );
// }
