import type { ReactNode } from "react";

/**
 * A solid mockup phone frame: dark bezel, rounded corners, top notch, and a
 * plain white screen behind the content. The child (usually a product UI
 * screenshot) fills the screen width and sits inside the frame.
 */
export function PhoneFrame({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative mx-auto w-full ${className}`}>
      {/* Bezel */}
      <div className="rounded-[2.75rem] bg-espresso p-2.5 shadow-2xl ring-1 ring-black/10 dark:ring-white/10">
        {/* Screen */}
        <div className="relative overflow-hidden rounded-[2.25rem] bg-white">
          {/* Notch / speaker */}
          <div className="pointer-events-none absolute left-1/2 top-2.5 z-10 h-5 w-1/3 -translate-x-1/2 rounded-full bg-espresso" />
          {children}
        </div>
      </div>
    </div>
  );
}
