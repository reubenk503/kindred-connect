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

const BRUTALIST_CSS = `
.brutalist-shadow { box-shadow: 5px 5px 0px 0px #151d1b; }
.brutalist-shadow-hover:hover { transform: translate(-3px, -3px); box-shadow: 8px 8px 0px 0px #151d1b; }
.brutalist-active:active, .brutalist-shadow-active:active { transform: translate(2px, 2px); box-shadow: 2px 2px 0px 0px #151d1b; }
.brutalist-button-hover:hover { transform: translate(-3px, -3px); }
.material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; font-family: 'Material Symbols Outlined'; }
.active-tab { background-color: #6FBF73; color: #0F2411; box-shadow: 2px 2px 0px 0px #151d1b; transform: translate(2px, 2px); }
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
