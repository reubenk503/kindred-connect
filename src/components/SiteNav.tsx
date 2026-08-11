import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const NAV_ITEMS: { to: string; label: string }[] = [
  { to: "/", label: "Home" },
  { to: "/supplements", label: "Supplements" },
  { to: "/cosmetics", label: "Cosmetics" },
  { to: "/medical-devices", label: "Med Devices" },
  { to: "/businesses", label: "Businesses" },
  { to: "/about", label: "About" },
];

export function SiteNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (to: string) =>
    to === "/" ? pathname === "/" : pathname.startsWith(to);

  return (
    <nav className="w-full sticky top-0 z-50 bg-surface border-b-[3px] border-on-surface px-grid-margin py-stack-md">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 lg:flex lg:justify-between">
        <Link
          to="/"
          className="font-headline-lg text-[18px] sm:text-[20px] xl:text-headline-lg uppercase tracking-normal text-on-surface font-black hover:text-primary transition-colors leading-none truncate"
        >
          Agota Csaszar
        </Link>

        <div className="hidden lg:flex flex-wrap items-center gap-x-4 gap-y-2">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={
                "font-label-caps text-label-caps shrink-0 transition-colors duration-200 " +
                (isActive(item.to)
                  ? "text-primary border-b-[3px] border-primary pb-1"
                  : "text-on-surface hover:text-primary")
              }
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <Link
            to="/contact"
            className="hidden sm:inline-block bg-primary-container text-on-primary-fixed font-label-caps text-label-caps px-4 sm:px-stack-lg py-stack-sm border-[3px] border-on-surface brutalist-shadow brutalist-active uppercase text-center leading-tight"
          >
            Get Started
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden border-[3px] border-on-surface bg-surface-container-low px-3 py-2 font-label-caps text-label-caps uppercase text-on-surface"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden mt-stack-md border-[3px] border-on-surface bg-surface-container-lowest">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={
                "block px-4 py-3 border-b-[3px] border-on-surface font-label-caps text-label-caps uppercase " +
                (isActive(item.to)
                  ? "bg-primary text-white"
                  : "text-on-surface hover:bg-surface-container")
              }
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="block px-4 py-3 bg-primary-container text-on-primary-fixed font-label-caps text-label-caps uppercase text-center"
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}
