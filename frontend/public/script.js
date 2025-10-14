const ALLOWLIST = [
  "./imgs/Clientes.jpg",
  "./imgs/Depoimentos 2.jpg",
  "./imgs/Rita drumond.png",
  "./imgs/Rita-drumond.jpg",
  "./imgs/Rita-drumond (2).jpg",
  "./imgs/Rita-drumond (3).jpg",
  "./imgs/Rita-drumond (4).jpg",
  "./imgs/Rita-drumond (5).jpg",
  "./imgs/Rita-drumond (6).jpg",
  "./imgs/Rita-drumond (7).jpg",
  "./imgs/Rita-drumond (8).jpg",
  "./imgs/clientes (2).png",
  "./imgs/clientes (3).png",
  "./imgs/clientes (4).png",
  "./imgs/clientes (5).png",
  "./imgs/clientes (6).png",
  "./imgs/clientes (7).png",
  "./imgs/clientes (8).png",
  "./imgs/clientes (9).png",
  "./imgs/rita drumond (6).png",
  "./imgs/rita drumond (7).png",
  "./imgs/rita drumond (8).png",
];

const ALLOWED = new Set(ALLOWLIST);

ALLOWLIST.forEach((path) => {
  if (path.startsWith("./")) {
    ALLOWED.add(path.replace("./", "/"));
    ALLOWED.add(path.slice(1));
  }
});

const toKey = (value) => {
  if (!value) return "";
  let cleaned = value.trim();
  cleaned = cleaned.replace(/url\(|\)|"|'/g, "");
  cleaned = cleaned.split("?")[0].split("#")[0];
  if (!cleaned) return "";
  cleaned = cleaned.replace(window.location.origin, "");
  if (cleaned.startsWith("/")) {
    cleaned = `.${cleaned}`;
  } else if (!cleaned.startsWith(".")) {
    cleaned = cleaned.startsWith("imgs/") ? `./${cleaned}` : cleaned;
  }
  return cleaned;
};

const inspectImage = (img) => {
  if (!(img instanceof HTMLImageElement)) return;
  const src = img.getAttribute("src");
  if (!src) return;
  const key = toKey(src);
  if (!ALLOWED.has(key)) {
    console.warn("[guard] imagem fora da allowlist removida:", src, img);
    img.removeAttribute("src");
    img.dataset.imageBlocked = "true";
  }
};

const inspectBackground = (element) => {
  if (!(element instanceof HTMLElement)) return;
  const bg = window.getComputedStyle(element).backgroundImage;
  if (!bg || bg === "none") return;
  const matches = Array.from(bg.matchAll(/url\(([^)]+)\)/g));
  if (!matches.length) return;
  let blocked = false;
  matches.forEach((match) => {
    const key = toKey(match[1]);
    if (key && !ALLOWED.has(key)) {
      blocked = true;
      console.warn("[guard] background fora da allowlist removido:", match[1], element);
    }
  });
  if (blocked) {
    element.style.setProperty("background-image", "none", "important");
    element.dataset.backgroundBlocked = "true";
  }
};

const scanTree = (root) => {
  if (!(root instanceof HTMLElement) && !(root instanceof Document)) return;
  const scope = root instanceof Document ? root.body : root;
  if (!scope) return;
  scope.querySelectorAll("img").forEach((img) => inspectImage(img));
  scope.querySelectorAll("*").forEach((el) => {
    inspectBackground(el);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  scanTree(document);

  const observer = new MutationObserver((records) => {
    records.forEach((record) => {
      record.addedNodes.forEach((node) => {
        if (node instanceof HTMLElement) {
          inspectImage(node);
          inspectBackground(node);
          scanTree(node);
        }
      });
      if (record.type === "attributes" && record.target instanceof HTMLElement) {
        if (record.target instanceof HTMLImageElement && record.attributeName === "src") {
          inspectImage(record.target);
        } else if (record.attributeName === "style" || record.attributeName === "class") {
          inspectBackground(record.target);
        }
      }
    });
  });

  observer.observe(document.body, {
    attributes: true,
    childList: true,
    subtree: true,
    attributeFilter: ["src", "style", "class"],
  });
});
