"use client";

import {
  Toast,
  ToastDescription,
  ToastDismiss,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "./toast";
import { useToast } from "./use-toast";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="flex flex-col gap-1 pr-6">
              {title && <ToastTitle className="text-sm uppercase tracking-[0.4em] text-[#00eaff]">{title}</ToastTitle>}
              {description && (
                <ToastDescription className="text-base text-white/80">
                  {description}
                </ToastDescription>
              )}
            </div>
            {action}
            <ToastDismiss />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}


