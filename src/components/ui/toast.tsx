"use client";

import * as React from "react";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const ToastProvider = ToastPrimitives.Provider;

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      "fixed bottom-4 right-4 z-[100]",
      "flex max-h-screen w-full max-w-sm flex-col gap-2",
      "p-4 outline-none",
      className,
    )}
    {...props}
  />
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;

const toastVariants =
  "glass-panel glow-border pointer-events-auto relative w-full rounded-2xl border border-white/10 p-4 shadow-lg transition-all data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:translate-x-full";

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Root ref={ref} className={cn(toastVariants, className)} {...props} />
));
Toast.displayName = ToastPrimitives.Root.displayName;

const ToastAction = ToastPrimitives.Action;
const ToastClose = ToastPrimitives.Close;
const ToastTitle = ToastPrimitives.Title;
const ToastDescription = ToastPrimitives.Description;

const ToastDismiss = () => (
  <ToastClose className="absolute right-3 top-3 text-white/60 hover:text-white">
    <X className="size-4" />
  </ToastClose>
);

export {
  Toast,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastDismiss,
  ToastProvider,
  ToastTitle,
  ToastViewport,
};


