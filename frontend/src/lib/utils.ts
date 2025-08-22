import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function normalizeImageUrl(image: string, width = 600, height = 400) {
  if (!image) return ""
  if (image.startsWith("http")) return image
  return `https://images.unsplash.com/${image}?w=${width}&h=${height}&fit=crop`
}
