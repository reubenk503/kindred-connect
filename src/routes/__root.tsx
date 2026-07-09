import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteNav } from "../components/SiteNav";
import { SiteFooter } from "../components/SiteFooter";

const TAILWIND_CONFIG = `
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "surface-dim": "#d3dcd8", "tertiary-fixed-dim": "#e1c639", "on-primary-container": "#007162",
        "secondary-fixed": "#ffdbcf", "primary": "#006b5c", "on-secondary": "#ffffff",
        "on-background": "#151d1b", "on-error-container": "#93000a", "surface-container-high": "#e1eae6",
        "on-tertiary": "#ffffff", "primary-fixed-dim": "#00dfc3", "on-surface-variant": "#3a4a46",
        "outline-variant": "#b9cac5", "on-primary-fixed": "#00201b", "surface-tint": "#006b5c",
        "background": "#f2fcf7", "primary-fixed": "#01fede", "error": "#ba1a1a",
        "inverse-surface": "#293230", "surface-container-highest": "#dbe5e1", "on-primary": "#ffffff",
        "surface": "#f2fcf7", "inverse-on-surface": "#e9f3ef", "on-surface": "#151d1b",
        "surface-container-low": "#ecf6f2", "on-secondary-container": "#6b1f00",
        "surface-container": "#e6f0ec", "on-secondary-fixed-variant": "#822800",
        "secondary-container": "#fe7e4f", "on-error": "#ffffff", "tertiary": "#6e5e00",
        "inverse-primary": "#00dfc3", "outline": "#6a7b76", "on-tertiary-fixed": "#211b00",
        "surface-container-lowest": "#ffffff", "on-primary-fixed-variant": "#005045",
        "primary-container": "#00fede", "secondary-fixed-dim": "#ffb59c", "secondary": "#a43c12",
        "on-secondary-fixed": "#380c00", "tertiary-container": "#ffe253",
        "on-tertiary-container": "#746400", "tertiary-fixed": "#ffe253", "surface-bright": "#f2fcf7",
        "error-container": "#ffdad6", "on-tertiary-fixed-variant": "#534600", "surface-variant": "#dbe5e1"
      },
      borderRadius: { DEFAULT: "0rem", lg: "0rem", xl: "0rem", full: "9999px" },
      spacing: {
        "stack-xs": "4px", "stack-md": "clamp(12px, 2vw, 16px)", "stack-lg": "clamp(20px, 4vw, 32px)",
        "stack-xl": "clamp(40px, 7vw, 64px)", "border-width": "3px",
        "grid-margin": "clamp(16px, 4vw, 40px)", "grid-gutter": "clamp(16px, 3vw, 24px)", "stack-sm": "8px"
      },
      fontFamily: {
        "label-caps": ["Space Grotesk"], "ui-mono": ["Space Grotesk"],
        "body-lg": ["Hanken Grotesk"], "display-xl-mobile": ["Anybody"],
        "body-md": ["Hanken Grotesk"], "subheading": ["Space Grotesk"],
        "headline-lg-mobile": ["Anybody"], "display-xl": ["Anybody"], "headline-lg": ["Anybody"]
      },
      fontSize: {
        "label-caps": ["clamp(11px, 1.7vw, 13px)", { lineHeight: "1.25", letterSpacing: "0", fontWeight: "700" }],
        "ui-mono": ["clamp(12px, 1.8vw, 14px)", { lineHeight: "1.45", fontWeight: "500" }],
        "body-lg": ["clamp(16px, 2vw, 18px)", { lineHeight: "1.55", fontWeight: "400" }],
        "display-xl-mobile": ["clamp(38px, 12vw, 48px)", { lineHeight: "0.98", letterSpacing: "0", fontWeight: "900" }],
        "body-md": ["clamp(15px, 1.8vw, 16px)", { lineHeight: "1.5", fontWeight: "400" }],
        "subheading": ["clamp(18px, 2.5vw, 20px)", { lineHeight: "1.3", letterSpacing: "0", fontWeight: "600" }],
        "headline-lg-mobile": ["clamp(28px, 9vw, 32px)", { lineHeight: "1.08", letterSpacing: "0", fontWeight: "800" }],
        "display-xl": ["clamp(52px, 8vw, 76px)", { lineHeight: "0.98", letterSpacing: "0", fontWeight: "900" }],
        "headline-lg": ["clamp(34px, 5.5vw, 44px)", { lineHeight: "1.08", letterSpacing: "0", fontWeight: "800" }],
        "display-lg-mobile": ["clamp(34px, 10vw, 44px)", { lineHeight: "1", letterSpacing: "0", fontWeight: "900" }],
        "display-lg": ["clamp(44px, 7vw, 64px)", { lineHeight: "1", letterSpacing: "0", fontWeight: "900" }],
        "headline-sm": ["clamp(24px, 6vw, 30px)", { lineHeight: "1.1", letterSpacing: "0", fontWeight: "800" }],
        "headline-md": ["clamp(28px, 5vw, 36px)", { lineHeight: "1.1", letterSpacing: "0", fontWeight: "800" }]
      }
    }
  }
};
`;

const BRUTALIST_CSS = `
.brutalist-shadow { box-shadow: 5px 5px 0px 0px #151d1b; }
.brutalist-shadow-hover:hover { transform: translate(-3px, -3px); box-shadow: 8px 8px 0px 0px #151d1b; }
.brutalist-active:active { transform: translate(2px, 2px); box-shadow: 2px 2px 0px 0px #151d1b; }
.brutalist-button-hover:hover { transform: translate(-3px, -3px); }
.material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; font-family: 'Material Symbols Outlined'; }
.active-tab { background-color: #01fede; color: #00201b; box-shadow: 2px 2px 0px 0px #151d1b; transform: translate(2px, 2px); }
select { appearance: none; background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='3' stroke-linecap='square' stroke-linejoin='arcs'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e"); background-repeat: no-repeat; background-position: right 1rem center; background-size: 1.5em; }
::-webkit-scrollbar { width: 12px; }
::-webkit-scrollbar-track { background: #f2fcf7; }
::-webkit-scrollbar-thumb { background: #151d1b; border: 3px solid #f2fcf7; }
body { font-family: 'Hanken Grotesk', sans-serif; }
img { max-width: 100%; }
a, button { overflow-wrap: anywhere; }
th, td { vertical-align: top; }
@media (max-width: 767px) {
  .brutalist-shadow { box-shadow: 3px 3px 0px 0px #151d1b; }
  .brutalist-shadow-hover:hover, .brutalist-button-hover:hover { transform: none; }
  .material-symbols-outlined { font-size: 1.25em; line-height: 1; }
}
`;

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold">404</h1>
        <p className="mt-2 text-sm">Page not found.</p>
        <Link to="/" className="mt-6 inline-block underline">Go home</Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">This page didn't load</h1>
        <button onClick={() => { router.invalidate(); reset(); }} className="mt-4 border-2 border-black px-4 py-2">Try again</button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Agota Csaszar | Regulatory Services" },
      { name: "description", content: "Precision regulatory compliance for supplements, cosmetics, and medical devices." },
      { property: "og:title", content: "Agota Csaszar | Regulatory Services" },
      { property: "og:description", content: "Precision regulatory compliance for supplements, cosmetics, and medical devices." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Anybody:wght@100..900&family=Hanken+Grotesk:wght@100..900&family=Space+Grotesk:wght@100..900&display=swap" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries" />
        <script dangerouslySetInnerHTML={{ __html: TAILWIND_CONFIG }} />
        <style dangerouslySetInnerHTML={{ __html: BRUTALIST_CSS }} />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <SiteNav />
      <Outlet />
      <SiteFooter />
    </QueryClientProvider>
  );
}
