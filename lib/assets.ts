// Static export + GitHub Pages basePath aren't applied automatically to
// public/ paths referenced by next/image, <video>, etc. — prefix manually.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function asset(path: string) {
  return `${basePath}${path}`;
}
