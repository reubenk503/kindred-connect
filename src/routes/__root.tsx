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
        "stack-xs": "4px", "stack-md": "16px", "stack-lg": "32px", "stack-xl": "64px",
        "border-width": "3px", "grid-margin": "40px", "grid-gutter": "24px", "stack-sm": "8px"
      },
      fontFamily: {
        "label-caps": ["Space Grotesk"], "ui-mono": ["Space Grotesk"],
        "body-lg": ["Hanken Grotesk"], "display-xl-mobile": ["Anybody"],
        "body-md": ["Hanken Grotesk"], "subheading": ["Space Grotesk"],
        "headline-lg-mobile": ["Anybody"], "display-xl": ["Anybody"], "headline-lg": ["Anybody"]
      },
      fontSize: {
        "label-caps": ["14px", { lineHeight: "16px", letterSpacing: "0.1em", fontWeight: "700" }],
        "ui-mono": ["14px", { lineHeight: "20px", fontWeight: "500" }],
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        "display-xl-mobile": ["48px", { lineHeight: "44px", letterSpacing: "-0.03em", fontWeight: "900" }],
        "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "subheading": ["20px", { lineHeight: "28px", letterSpacing: "0.02em", fontWeight: "600" }],
        "headline-lg-mobile": ["32px", { lineHeight: "36px", letterSpacing: "-0.02em", fontWeight: "800" }],
        "display-xl": ["84px", { lineHeight: "80px", letterSpacing: "-0.04em", fontWeight: "900" }],
        "headline-lg": ["48px", { lineHeight: "52px", letterSpacing: "-0.02em", fontWeight: "800" }]
      }
    }
  }
};
`;

const BRUTALIST_CSS = `
.brutalist-shadow { box-shadow: 6px 6px 0px 0px #151d1b; }
.brutalist-shadow-hover:hover { transform: translate(-4px, -4px); box-shadow: 10px 10px 0px 0px #151d1b; }
.brutalist-active:active { transform: translate(2px, 2px); box-shadow: 2px 2px 0px 0px #151d1b; }
.brutalist-button-hover:hover { transform: translate(-4px, -4px); }
.material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; font-family: 'Material Symbols Outlined'; }
.active-tab { background-color: #01fede; color: #00201b; box-shadow: 2px 2px 0px 0px #151d1b; transform: translate(2px, 2px); }
select { appearance: none; background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='3' stroke-linecap='square' stroke-linejoin='arcs'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e"); background-repeat: no-repeat; background-position: right 1rem center; background-size: 1.5em; }
::-webkit-scrollbar { width: 12px; }
::-webkit-scrollbar-track { background: #f2fcf7; }
::-webkit-scrollbar-thumb { background: #151d1b; border: 3px solid #f2fcf7; }
body { font-family: 'Hanken Grotesk', sans-serif; }
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
    scripts: [
      { children: TAILWIND_CONFIG },
      { src: "https://cdn.tailwindcss.com?plugins=forms,container-queries" },
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
        <script dangerouslySetInnerHTML={{ __html: TAILWIND_CONFIG }} />
        <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries" />
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
      <Outlet />
    </QueryClientProvider>
  );
}
