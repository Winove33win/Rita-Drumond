import { useEffect } from "react";

interface SEOOptions {
  title: string;
  description: string;
  canonical?: string;
  noindex?: boolean;
  jsonLd?: Record<string, unknown>;
}

export function useSEO({ title, description, canonical, noindex, jsonLd }: SEOOptions) {
  useEffect(() => {
    if (title) document.title = title;

    if (description) {
      let meta = document.querySelector<HTMLMetaElement>("meta[name='description']");
      if (!meta) {
        meta = document.createElement("meta");
        meta.name = "description";
        document.head.appendChild(meta);
      }
      meta.content = description;
    }

    let link = document.querySelector<HTMLLinkElement>("link[rel='canonical']");
    if (canonical) {
      if (!link) {
        link = document.createElement("link");
        link.rel = "canonical";
        document.head.appendChild(link);
      }
      link.href = canonical;
    } else if (link) {
      document.head.removeChild(link);
    }

    let robots = document.querySelector<HTMLMetaElement>("meta[name='robots'][data-seo]");
    if (noindex) {
      if (!robots) {
        robots = document.createElement("meta");
        robots.name = "robots";
        robots.setAttribute("data-seo", "true");
        document.head.appendChild(robots);
      }
      robots.content = "noindex";
    } else if (robots) {
      document.head.removeChild(robots);
    }

    let script = document.querySelector<HTMLScriptElement>("script[data-seo-jsonld]");
    if (jsonLd) {
      if (!script) {
        script = document.createElement("script");
        script.type = "application/ld+json";
        script.setAttribute("data-seo-jsonld", "true");
        document.head.appendChild(script);
      }
      script.text = JSON.stringify(jsonLd);
    } else if (script) {
      document.head.removeChild(script);
    }
  }, [title, description, canonical, noindex, jsonLd]);
}

