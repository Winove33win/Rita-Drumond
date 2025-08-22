export type Metric = { label: string; value: string; description?: string } | string;

export interface CaseItem {
  slug: string;
  title: string;
  client: string;
  date: string;
  coverImage: string;
  excerpt: string;
  challenge: string;
  solution: string;
  results: string;
  gallery: string[];
  tags: string[];
  metrics: Metric[];
}

export const safeArray = <T>(value: T[] | string | null | undefined): T[] => {
  if (Array.isArray(value)) return value;
  if (typeof value === "string" && value.length > 0) {
    try {
      const parsed = JSON.parse(value);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }
  return [];
};

/**
 * Removes Unsplash transformation prefixes from a URL. The backend previously
 * prepended `https://images.unsplash.com/` with sizing parameters to absolute
 * image URLs. This helper detects that pattern and returns the original image
 * URL so the browser can load it without violating the site's CSP.
 */
export const normalizeImageUrl = (
  url: string | null | undefined,
): string => {
  if (!url) return "";
  const UNSPLASH = "https://images.unsplash.com/";
  let clean = url.trim();
  if (clean.startsWith(UNSPLASH)) {
    const rest = clean.slice(UNSPLASH.length);
    if (rest.startsWith("http://") || rest.startsWith("https://")) {
      clean = rest;
      try {
        const parsed = new URL(clean);
        clean = `${parsed.origin}${parsed.pathname}`;
      } catch {
        clean = clean.split("?")[0];
      }
    }
  }
  return clean;
};

export const parseCase = (data: Record<string, unknown>): CaseItem => ({
  ...(data as Omit<CaseItem, "tags" | "gallery" | "metrics" | "coverImage">),
  coverImage: normalizeImageUrl(
    (data as Record<string, unknown>).coverImage as string | null | undefined,
  ),
  tags: safeArray<string>(
    data.tags as string[] | string | null | undefined,
  ),
  gallery: safeArray<string>(
    data.gallery as string[] | string | null | undefined,
  ).map(normalizeImageUrl),
  metrics: safeArray<Metric>(
    data.metrics as Metric[] | string | null | undefined,
  ),
});

export const parseCaseArray = (
  arr: Array<Record<string, unknown>>,
): CaseItem[] => arr.map(parseCase);

