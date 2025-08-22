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
