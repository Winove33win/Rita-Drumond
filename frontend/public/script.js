const allowedAssets = new Set([
  "Rita-drumond (2).jpg",
  "Rita-drumond (3).jpg",
  "Rita-drumond (4).jpg",
  "Rita-drumond (5).jpg",
  "Rita-drumond (6).jpg",
  "Rita drumond.png",
  "rita drumond (6).png",
  "rita drumond (7).png",
  "rita drumond (8).png",
]);

let animationObserver;
const parallaxLayers = new Set();
let parallaxBound = false;

function guardAssets() {
  const images = document.querySelectorAll("img[data-asset]");
  images.forEach((img) => {
    const src = img.getAttribute("src") || "";
    const fileName = src.split("/").pop() || "";
    if (!allowedAssets.has(fileName)) {
      console.warn("ASSET FORA DO REPO DETECTADO");
    }
  });
}

function setupAnimationObserver() {
  const elements = document.querySelectorAll("[data-animate]");
  if (!animationObserver) {
    animationObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            animationObserver.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.2,
      }
    );
  }

  elements.forEach((element) => {
    const delay = Number(element.getAttribute("data-animate-delay")) || 0;
    element.style.setProperty("--rita-delay", `${delay}ms`);
    if (!element.classList.contains("is-visible")) {
      animationObserver.observe(element);
    }
  });
}

function collectParallaxLayers() {
  parallaxLayers.clear();
  document.querySelectorAll("[data-parallax-layer]").forEach((layer) => {
    parallaxLayers.add(layer);
  });
}

function updateParallax() {
  parallaxLayers.forEach((layer) => {
    const speed = Number(layer.getAttribute("data-parallax-speed")) || 0.15;
    const rect = layer.getBoundingClientRect();
    const offset = rect.top * speed * -0.35;
    layer.style.setProperty("--parallax-offset", `${offset.toFixed(2)}px`);
  });
}

function bindParallaxListeners() {
  if (parallaxBound) return;
  const handleScroll = () => {
    window.requestAnimationFrame(updateParallax);
  };
  window.addEventListener("scroll", handleScroll, { passive: true });
  window.addEventListener("resize", () => window.requestAnimationFrame(updateParallax));
  parallaxBound = true;
}

function initExperience() {
  guardAssets();
  setupAnimationObserver();
  collectParallaxLayers();
  bindParallaxListeners();
  window.requestAnimationFrame(updateParallax);
}

const boot = () => {
  initExperience();
};

if (document.readyState === "complete" || document.readyState === "interactive") {
  window.setTimeout(boot, 0);
} else {
  document.addEventListener("DOMContentLoaded", boot);
}

document.addEventListener("rita:hydrate", () => {
  initExperience();
});
