import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="w-full bg-surface-container-highest border-t-[3px] border-on-surface px-grid-margin py-stack-xl">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-grid-gutter">
        <div className="md:col-span-5">
          <Link
            to="/"
            className="font-headline-lg text-headline-lg uppercase tracking-normal text-on-surface font-black block mb-stack-md leading-none"
          >
            Agota Csaszar
          </Link>
          <p className="font-body-md text-on-surface-variant max-w-md">
            Precision regulatory compliance for supplements, cosmetics, and
            medical devices across the UK and EU.
          </p>
        </div>

        <div className="md:col-span-3">
          <h4 className="font-label-caps text-label-caps mb-stack-md uppercase">
            Services
          </h4>
          <ul className="space-y-stack-sm">
            <li>
              <Link
                to="/supplements"
                className="font-body-md text-on-surface-variant hover:text-primary"
              >
                Supplements
              </Link>
            </li>
            <li>
              <Link
                to="/cosmetics"
                className="font-body-md text-on-surface-variant hover:text-primary"
              >
                Cosmetics
              </Link>
            </li>
            <li>
              <Link
                to="/medical-devices"
                className="font-body-md text-on-surface-variant hover:text-primary"
              >
                Medical Devices
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="font-label-caps text-label-caps mb-stack-md uppercase">
            Company
          </h4>
          <ul className="space-y-stack-sm">
            <li>
              <Link
                to="/about"
                className="font-body-md text-on-surface-variant hover:text-primary"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/case-studies"
                className="font-body-md text-on-surface-variant hover:text-primary"
              >
                Case Studies
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="font-body-md text-on-surface-variant hover:text-primary"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="font-label-caps text-label-caps mb-stack-md uppercase">
            Contact
          </h4>
          <p className="font-body-md text-on-surface-variant">
            agotacsreg@gmail.com
          </p>
          <p className="font-body-md text-on-surface-variant mt-stack-sm">
            07925 684072
          </p>
        </div>
      </div>
      <div className="mt-stack-xl pt-stack-md border-t-[3px] border-on-surface flex flex-col gap-2 sm:flex-row sm:justify-between font-ui-mono text-ui-mono text-on-surface-variant uppercase">
        <span>© {new Date().getFullYear()} Agota Csaszar</span>
        <span>Regulatory Excellence · Est. 2014</span>
      </div>
    </footer>
  );
}
