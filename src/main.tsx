import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import FaviconUrl from "./assets/s_favicon.png";

// Ensure the favicon uses the new icon (bundled asset-safe)
const ensureFavicon = (href: string) => {
  const existing = document.querySelector("link[rel='icon']") as HTMLLinkElement | null;
  const linkEl = existing ?? document.createElement("link");
  linkEl.rel = "icon";
  linkEl.type = "image/png";
  linkEl.href = href;
  if (!existing) document.head.appendChild(linkEl);
};

ensureFavicon(FaviconUrl);

createRoot(document.getElementById("root")!).render(<App />);
