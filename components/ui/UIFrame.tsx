import Image from "next/image";

type Props = {
  src: string;
  /** rounded panel behind the UI (matches the reference gold/tan cards) */
  panel?: "gold" | "none";
  /** soft glow behind the UI */
  glow?: boolean;
  className?: string;
  /** aspect ratio of the framed area */
  aspect?: string;
  priority?: boolean;
};

/**
 * Frames a product-UI screenshot: optional panel + glow, with a subtle
 * zoom on hover. Used in feature/capability sections across the site.
 */
export function UIFrame({
  src,
  panel = "gold",
  glow = false,
  className = "",
  aspect = "aspect-[4/3]",
  priority = false,
}: Props) {
  return (
    <div className={`group relative ${aspect} w-full ${className}`}>
      {glow && (
        <div className="pointer-events-none absolute inset-6 rounded-full bg-[radial-gradient(circle,rgba(232,177,92,0.45),transparent_70%)] blur-2xl" />
      )}
      <div
        className={`relative h-full w-full overflow-hidden rounded-3xl ${
          panel === "gold" ? "bg-gradient-to-b from-[#E4C486] to-[#CDA45A] dark:from-[#E4C486]/25 dark:to-[#CDA45A]/25" : ""
        }`}
      >
        <Image
          src={src}
          alt=""
          fill
          priority={priority}
          className="object-contain object-center p-4 transition-transform duration-300 ease-out group-hover:scale-[1.05]"
          sizes="(max-width: 768px) 100vw, 560px"
        />
      </div>
    </div>
  );
}
