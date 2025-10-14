const ASSETS = new Set([
  "/imgs/Rita-drumond (2).jpg",
  "/imgs/Rita-drumond (3).jpg",
  "/imgs/Rita-drumond (4).jpg",
  "/imgs/Rita-drumond (5).jpg",
  "/imgs/Rita-drumond (6).jpg",
  "/imgs/Rita drumond.png",
  "/imgs/rita drumond (6).png",
  "/imgs/rita drumond (7).png",
  "/imgs/rita drumond (8).png",
  "imgs/Rita-drumond (2).jpg",
  "imgs/Rita-drumond (3).jpg",
  "imgs/Rita-drumond (4).jpg",
  "imgs/Rita-drumond (5).jpg",
  "imgs/Rita-drumond (6).jpg",
  "imgs/Rita drumond.png",
  "imgs/rita drumond (6).png",
  "imgs/rita drumond (7).png",
  "imgs/rita drumond (8).png",
]);

function guardAssets() {
  document.querySelectorAll("img").forEach((img) => {
    const src = img.getAttribute("src") || "";
    if (!src) return;
    const normalized = src.startsWith("/") ? src : `/${src}`;
    const fileName = src.split("/").pop();
    if (!ASSETS.has(src) && !ASSETS.has(normalized) && !ASSETS.has(fileName || "")) {
      console.warn("ASSET FORA DO REPO", src);
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  guardAssets();
});
