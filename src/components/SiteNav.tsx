import { Link, useRouterState } from "@tanstack/react-router";

const NAV_ITEMS: { to: string; label: string }[] = [
  { to: "/", label: "Home" },
  { to: "/supplements", label: "Supplements" },
  { to: "/cosmetics", label: "Cosmetics" },
  { to: "/medical-devices", label: "Med Devices" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/about", label: "About" },
];

export function SiteNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <nav className="w-full sticky top-0 z-50 bg-surface border-b-[3px] border-on-surface flex flex-wrap justify-between items-center gap-3 px-grid-margin py-stack-md">
      <Link
        to="/"
        className="font-headline-lg text-[18px] sm:text-[20px] xl:text-headline-lg uppercase tracking-normal text-on-surface font-black hover:text-primary transition-colors leading-none"
      >
        Agota Csaszar
      </Link>
      <div className="hidden xl:flex gap-5 items-center">
        {NAV_ITEMS.map((item) => {
          const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
          return (
            <Link
              key={item.to}
              to={item.to}
              className={
                "font-label-caps text-label-caps transition-colors duration-200 " +
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
      <Link
        to="/contact"
        className="bg-primary-container text-on-primary-fixed font-label-caps text-label-caps px-4 sm:px-stack-lg py-stack-sm border-[3px] border-on-surface brutalist-shadow brutalist-active uppercase text-center max-w-[48vw] sm:max-w-none leading-tight"
      >
        Get Started
      </Link>
    </nav>
  );
}
