import React from "react";
import { cn } from "../../utils/cn";

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      'border rounded-md px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500',
      className
    )}
    {...props}
  />
));
Textarea.displayName = "Textarea";
