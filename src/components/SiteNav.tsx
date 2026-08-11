import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";

const NAV_ITEMS: { to: string; label: string }[] = [
  { to: "/", label: "Home" },
  { to: "/supplements", label: "Supplements" },
  { to: "/cosmetics", label: "Cosmetics" },
  { to: "/medical-devices", label: "Devices" },
  { to: "/businesses", label: "Businesses" },
  { to: "/about", label: "About" },
];

export function SiteNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full sticky top-0 z-50 bg-surface border-b-[3px] border-on-surface">
      <div className="px-grid-margin py-stack-sm flex items-center justify-between gap-4">
        {/* Brand */}
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="flex flex-col leading-none shrink-0"
        >
          <span className="font-headline-lg text-[19px] sm:text-[22px] uppercase tracking-tight text-on-surface font-black hover:text-primary transition-colors">
            Csaszar
          </span>
          <span className="font-label-caps text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-on-surface-variant">
            Regulatory
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-x-6 gap-y-2 flex-wrap justify-center">
          {NAV_ITEMS.map((item) => {
            const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={
                  "font-label-caps text-label-caps shrink-0 transition-colors duration-200 " +
                  (active
                    ? "text-primary border-b-[3px] border-primary pb-1"
                    : "text-on-surface hover:text-primary")
                }
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* CTA (desktop) */}
        <Link
          to="/contact"
          className="hidden sm:inline-flex bg-primary-container text-on-primary-fixed font-label-caps text-label-caps px-4 py-stack-sm border-[3px] border-on-surface brutalist-shadow brutalist-active uppercase text-center leading-tight shrink-0"
        >
          Get Started
        </Link>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="md:hidden flex items-center justify-center w-10 h-10 border-[3px] border-on-surface bg-surface text-on-surface brutalist-active"
        >
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'wght' 700" }}>
            {open ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t-[3px] border-on-surface bg-surface px-grid-margin py-stack-md flex flex-col gap-1">
          {NAV_ITEMS.map((item) => {
            const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={
                  "font-label-caps text-label-caps py-2 border-b-[3px] border-on-surface/10 transition-colors " +
                  (active ? "text-primary" : "text-on-surface hover:text-primary")
                }
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 bg-primary-container text-on-primary-fixed font-label-caps text-label-caps px-4 py-stack-sm border-[3px] border-on-surface brutalist-shadow brutalist-active uppercase text-center"
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}
