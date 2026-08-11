import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { initRevealAnimations } from "../lib/animations";
import dysonLogo from "../assets/brands/dyson.svg";
import nealsYardLogo from "../assets/brands/neals-yard-remedies.png";
import oriflameLogo from "../assets/brands/oriflame.svg";
import unileverLogo from "../assets/brands/unilever.svg";

const COMPANIES = [
  {
    name: "Oriflame",
    logo: oriflameLogo.url,
    logoClass: "w-full max-w-[210px] h-16",
    domain: "oriflame.com",
    sector: "Beauty & Cosmetics",
    tag: "EU CPR",
    blurb:
      "Regulatory and safety support across a broad skincare and colour cosmetics portfolio, covering ingredient review, Product Information Files and claim substantiation for multi-market launches.",
  },
  {
    name: "Neal's Yard Remedies",
    logo: nealsYardLogo.url,
    logoClass: "w-24 h-24",
    domain: "nealsyardremedies.com",
    sector: "Natural & Organic",
    tag: "UK SCPN",
    blurb:
      "Compliance work on natural and organic formulations, including safety assessment coordination, labelling review and UK/EU notification for new and reformulated products.",
  },
  {
    name: "Dyson",
    logo: dysonLogo.url,
    logoClass: "w-full max-w-[210px] h-16",
    domain: "dyson.com",
    sector: "Technology & Personal Care",
    tag: "Quality Systems",
    blurb:
      "Support on regulatory and quality documentation for consumer products at the intersection of engineering and personal care, with a focus on evidence, traceability and market access.",
  },
  {
    name: "Unilever",
    logo: unileverLogo.url,
    logoClass: "w-24 h-24",
    domain: "unilever.com",
    sector: "Global FMCG",
    tag: "Multi-market",
    blurb:
      "Contributed to large-scale regulatory programmes for household and personal care brands, aligning technical files and labelling with requirements across several territories.",
  },
];

export const Route = createFileRoute("/businesses")({
  head: () => ({
    meta: [
      { title: "Businesses Worked With | Csaszar Regulatory" },
      {
        name: "description",
        content:
          "Brands and businesses Agota has supported with regulatory and quality work, including Oriflame, Neal's Yard Remedies, Dyson and Unilever.",
      },
      { property: "og:title", content: "Businesses Worked With | Csaszar Regulatory" },
      {
        property: "og:description",
        content:
          "Regulatory and quality programmes delivered for global consumer and technology brands.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  useEffect(() => initRevealAnimations(), []);

  return (
    <div className="bg-background text-on-background min-h-screen selection:bg-primary-container selection:text-on-primary-container">
      <main className="w-full">
        <section className="px-grid-margin py-stack-xl border-b-[3px] border-on-surface">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-grid-gutter items-end">
            <div className="md:col-span-8">
              <span className="font-label-caps text-label-caps bg-secondary-container text-on-secondary px-3 py-1 mb-stack-md inline-block">
                EXPERIENCE
              </span>
              <h1 className="reveal font-display-xl text-display-xl-mobile md:text-display-xl uppercase leading-none mb-stack-md">
                Businesses <br />
                Worked With
              </h1>
            </div>
            <div className="md:col-span-4 border-l-[3px] border-on-surface pl-stack-lg pb-stack-sm hidden md:block">
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Agota has supported regulatory, safety and quality programmes for global consumer
                and technology brands operating in the UK and EU.
              </p>
            </div>
          </div>
        </section>

        <section className="px-grid-margin py-stack-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-xl">
            {COMPANIES.map((c) => (
              <div
                key={c.name}
                className="border-[3px] border-on-surface bg-surface-container-lowest brutalist-shadow brutalist-shadow-hover transition-all duration-300"
              >
                <div className="border-b-[3px] border-on-surface bg-white p-stack-lg min-h-[150px] flex items-center justify-center">
                  <img
                    src={c.logo}
                    alt={`${c.name} logo`}
                    className={`${c.logoClass} object-contain`}
                  />
                </div>
                <div className="p-stack-lg">
                  <div className="flex flex-wrap gap-2 mb-stack-md">
                    <span className="font-label-caps text-label-caps bg-on-surface text-surface px-3 py-1 uppercase">
                      {c.sector}
                    </span>
                    <span className="font-label-caps text-label-caps bg-primary text-white px-3 py-1 uppercase">
                      {c.tag}
                    </span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant">{c.blurb}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="px-grid-margin py-stack-xl bg-primary border-t-[3px] border-on-surface">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-stack-lg">
            <h2 className="reveal font-headline-lg text-headline-lg-mobile md:text-headline-lg text-surface uppercase leading-none">
              Want to work together?
            </h2>
            <a
              href="/contact"
              className="bg-surface text-on-surface border-[3px] border-on-surface px-8 py-4 font-label-caps text-label-caps hover:bg-secondary-container hover:text-white transition-all brutalist-shadow self-start"
            >
              BOOK A CONSULTATION
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
