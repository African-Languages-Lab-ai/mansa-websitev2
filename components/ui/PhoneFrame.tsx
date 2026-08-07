import type { ReactNode } from "react";

/**
 * A solid mockup phone frame: dark bezel, rounded corners, and a plain white
 * screen behind the content. The child (usually a product UI screenshot)
 * fills the screen width and sits inside the frame. No notch/speaker capsule
 * — it sat on top of the screenshot content and covered it.
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
          {children}
        </div>
      </div>
    </div>
  );
}
