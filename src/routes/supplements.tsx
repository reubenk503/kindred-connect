import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

const HTML = `<!-- TopNavBar -->

<main>
<!-- Hero Section -->
<section class="px-grid-margin py-stack-xl grid grid-cols-1 md:grid-cols-12 gap-grid-gutter items-center">
<div class="md:col-span-7">
<div class="inline-block bg-secondary-container text-on-secondary-container px-4 py-1 border-[3px] border-on-surface mb-stack-md font-label-caps text-label-caps">
                    REGULATORY PRECISION
                </div>
<h1 class="font-display-xl-mobile md:font-display-xl text-display-xl-mobile md:text-display-xl mb-stack-lg">
                    Supplement <br/> <span class="text-primary italic">Compliance.</span>
</h1>
<p class="font-body-lg text-body-lg max-w-xl mb-stack-xl">
                    Navigating the high-stakes landscape of food supplements requires more than general legal advice. We provide surgical precision in FSA/EFSA frameworks, health claims, and market entry strategies.
                </p>
<div class="flex flex-wrap gap-grid-gutter">
<a class="bg-primary-container text-on-primary-container px-8 py-4 border-[3px] border-on-surface font-label-caps text-label-caps brutalist-shadow brutalist-button-hover transition-transform duration-200 flex items-center gap-2" href="/contact">
                        BOOK CONSULTATION <span class="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
</a>
<a class="bg-surface text-on-surface px-8 py-4 border-[3px] border-on-surface font-label-caps text-label-caps brutalist-shadow brutalist-button-hover transition-transform duration-200 inline-block" href="/">
                        OUR PROCESS
                    </a>
</div>
</div>
<div class="md:col-span-5 relative h-96 md:h-[500px]">
<div class="absolute inset-0 border-[3px] border-on-surface bg-secondary-fixed overflow-hidden brutalist-shadow">
<img alt="Supplements packaging mockup" class="w-full h-full object-cover grayscale mix-blend-multiply opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdAseSVG8Nj5lpVZA_-2Pv0rM4ye0LrC6-YV6ernHHn66Lpe0YKqdppQuDXTG2Gfwh5aya5YwmB3Gvd3b9NRDeS-JreHkECkjhGYdv91T7r3VAH7y6li_v36a3UobFiAKdW9Plr_gVfjNL5lb2uyb3tZ5x88Tyqk4jW1BeNixIFfSEYQicWm5b-SVzVeEbpr0TR-wbTq9jUWzQpPH6rpeUHRFu1pJstWpMI-dXRUlHTsGDT-hSYlChuFzcNfZZKuzh4-BsHgT2ILEC"/>
</div>
</div>
</section>
<div class="asymmetric-divider"></div>
<!-- Frameworks Bento Grid -->
<section class="px-grid-margin py-stack-xl bg-surface-container-low">
<h2 class="font-headline-lg text-headline-lg mb-stack-xl">The Frameworks.</h2>
<div class="grid grid-cols-1 md:grid-cols-3 gap-grid-gutter">
<!-- FSA/EFSA -->
<div class="md:col-span-2 border-[3px] border-on-surface p-stack-lg bg-white brutalist-shadow flex flex-col justify-between">
<div>
<div class="flex justify-between items-start mb-stack-lg">
<span class="material-symbols-outlined text-4xl text-primary" data-icon="gavel">gavel</span>
<span class="font-ui-mono text-ui-mono uppercase bg-surface-container-highest px-2 py-1 border-[2px] border-on-surface">UK &amp; EU Standards</span>
</div>
<h3 class="font-headline-lg text-headline-lg mb-stack-md">FSA &amp; EFSA Navigation</h3>
<p class="font-body-md text-body-md mb-stack-lg">Strategic guidance through the Food Standards Agency and European Food Safety Authority requirements. We ensure your formulations meet strictly enforced jurisdictional mandates without compromising your brand vision.</p>
</div>
<div class="grid grid-cols-2 gap-stack-md pt-stack-md border-t-[3px] border-on-surface">
<div>
<p class="font-label-caps text-label-caps text-primary">01</p>
<p class="font-body-md text-body-md font-bold">Safety Assessments</p>
</div>
<div>
<p class="font-label-caps text-label-caps text-primary">02</p>
<p class="font-body-md text-body-md font-bold">Dossier Preparation</p>
</div>
</div>
</div>
<!-- Novel Foods -->
<div class="border-[3px] border-on-surface p-stack-lg bg-tertiary-container brutalist-shadow">
<span class="material-symbols-outlined text-4xl mb-stack-md" data-icon="biotech">biotech</span>
<h3 class="font-subheading text-subheading mb-stack-md uppercase">Novel Food Applications</h3>
<p class="font-body-md text-body-md">Entering the market with CBD, Vitamin K2, or synthetic botanicals? We manage the entire application lifecycle for non-traditional food sources.</p>
</div>
<!-- Labeling Laws -->
<div class="border-[3px] border-on-surface p-stack-lg bg-white brutalist-shadow">
<span class="material-symbols-outlined text-4xl mb-stack-md text-secondary" data-icon="label">label</span>
<h3 class="font-subheading text-subheading mb-stack-md uppercase">Labeling Laws</h3>
<p class="font-body-md text-body-md">From font sizes to allergen declarations, we audit your packaging to prevent costly recalls and regulatory friction.</p>
</div>
<!-- Health Claims -->
<div class="md:col-span-2 border-[3px] border-on-surface p-stack-lg bg-primary-container brutalist-shadow">
<div class="flex flex-col md:flex-row gap-grid-gutter h-full">
<div class="flex-1">
<h3 class="font-headline-lg text-headline-lg mb-stack-md">Health Claims</h3>
<p class="font-body-md text-body-md">What you say matters as much as what's inside. We validate structure/function claims to keep your marketing legally bulletproof.</p>
</div>
<div class="flex-1 bg-on-surface p-stack-md flex items-center justify-center">
<ul class="space-y-stack-sm w-full">
<li class="text-white font-ui-mono border-b border-outline-variant pb-1 flex justify-between">
<span>VALIDATED</span>
<span class="material-symbols-outlined text-primary-fixed" data-icon="check_circle">check_circle</span>
</li>
<li class="text-white font-ui-mono border-b border-outline-variant pb-1 flex justify-between">
<span>SUBSTANTIATED</span>
<span class="material-symbols-outlined text-primary-fixed" data-icon="check_circle">check_circle</span>
</li>
<li class="text-white font-ui-mono pb-1 flex justify-between">
<span>NON-MEDICAL</span>
<span class="material-symbols-outlined text-primary-fixed" data-icon="check_circle">check_circle</span>
</li>
</ul>
</div>
</div>
</div>
</div>
</section>
<div class="asymmetric-divider"></div>
<!-- Process Breakdown -->
<section class="px-grid-margin py-stack-xl overflow-hidden">
<div class="flex flex-col md:flex-row gap-grid-gutter">
<div class="md:w-1/3">
<h2 class="font-display-xl-mobile md:font-headline-lg text-display-xl-mobile md:text-headline-lg sticky top-32">The <br/>Supplement <br/><span class="text-secondary">Protocol.</span></h2>
</div>
<div class="md:w-2/3 space-y-stack-xl">
<div class="group relative pl-stack-lg border-l-[3px] border-on-surface pb-stack-lg">
<div class="absolute -left-[14px] top-0 w-6 h-6 bg-primary border-[3px] border-on-surface"></div>
<h4 class="font-label-caps text-label-caps text-primary mb-stack-sm">STAGE 01</h4>
<h3 class="font-headline-lg text-headline-lg mb-stack-md">Audit &amp; Gap Analysis</h3>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">We dissect your current formulation and marketing collateral to identify high-risk areas and immediate compliance requirements.</p>
</div>
<div class="group relative pl-stack-lg border-l-[3px] border-on-surface pb-stack-lg">
<div class="absolute -left-[14px] top-0 w-6 h-6 bg-secondary-container border-[3px] border-on-surface"></div>
<h4 class="font-label-caps text-label-caps text-secondary mb-stack-sm">STAGE 02</h4>
<h3 class="font-headline-lg text-headline-lg mb-stack-md">Dossier Engineering</h3>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">Assembly of technical data, stability testing results, and toxicological assessments into a submission-ready package for regulatory bodies.</p>
</div>
<div class="group relative pl-stack-lg border-l-[3px] border-on-surface">
<div class="absolute -left-[14px] top-0 w-6 h-6 bg-tertiary-container border-[3px] border-on-surface"></div>
<h4 class="font-label-caps text-label-caps text-tertiary mb-stack-sm">STAGE 03</h4>
<h3 class="font-headline-lg text-headline-lg mb-stack-md">Market Entry Release</h3>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">Final label verification, claims substantiation, and ongoing monitoring setup to ensure compliance remains static during scale.</p>
</div>
</div>
</div>
</section>
<div class="asymmetric-divider"></div>
<!-- Other Services Redirection (Internal Cross-links) -->
<section class="px-grid-margin py-stack-xl bg-surface-container">
<div class="flex flex-col md:flex-row justify-between items-center gap-grid-gutter">
<div class="max-w-xl">
<h2 class="font-headline-lg text-headline-lg mb-stack-md">Our Other Specialized Pillars.</h2>
<p class="font-body-md text-body-md text-on-surface-variant">We bring the same level of surgical precision to the cosmetics and medical device industries.</p>
</div>
<div class="flex flex-wrap gap-stack-md">
<a class="bg-surface border-[3px] border-on-surface px-6 py-4 font-label-caps text-label-caps brutalist-shadow brutalist-button-hover transition-all flex items-center gap-2 uppercase" href="/cosmetics">
<span class="material-symbols-outlined text-secondary" data-icon="brush">brush</span> Cosmetics
                    </a>
<a class="bg-surface border-[3px] border-on-surface px-6 py-4 font-label-caps text-label-caps brutalist-shadow brutalist-button-hover transition-all flex items-center gap-2 uppercase" href="/medical-devices">
<span class="material-symbols-outlined text-primary" data-icon="medical_services">medical_services</span> Med Devices
                    </a>
</div>
</div>
</section>
<div class="asymmetric-divider"></div>
<!-- FAQ Section -->
<section class="px-grid-margin py-stack-xl grid grid-cols-1 md:grid-cols-12 gap-grid-gutter">
<div class="md:col-span-4">
<h2 class="font-headline-sm md:font-headline-md text-headline-sm md:text-headline-md mb-stack-md leading-tight whitespace-nowrap">Clarifications.</h2>
<p class="font-body-md text-body-md text-on-surface-variant mb-stack-lg">Common points of friction in the supplement regulatory journey.</p>
<div class="bg-surface-container-highest p-stack-md border-[3px] border-on-surface brutalist-shadow">
<p class="font-ui-mono text-ui-mono">Last Updated: October 2024</p>
</div>
</div>
<div class="md:col-span-8 space-y-4">
<details class="group border-[3px] border-on-surface p-stack-md bg-white cursor-pointer transition-all duration-200 hover:bg-primary-container">
<summary class="list-none font-subheading text-subheading flex justify-between items-center">
                        How long does a Novel Food application take?
                        <span class="material-symbols-outlined transition-transform group-open:rotate-180" data-icon="expand_more">expand_more</span>
</summary>
<div class="mt-stack-md font-body-md text-body-md border-t-[3px] border-on-surface pt-stack-md">
                        Standard timelines range from 12 to 24 months depending on the complexity of the safety data and current EFSA/FSA backlogs. Strategic planning is essential.
                    </div>
</details>
<details class="group border-[3px] border-on-surface p-stack-md bg-white cursor-pointer transition-all duration-200 hover:bg-primary-container">
<summary class="list-none font-subheading text-subheading flex justify-between items-center">
                        Is CBD compliance different in the UK vs EU?
                        <span class="material-symbols-outlined transition-transform group-open:rotate-180" data-icon="expand_more">expand_more</span>
</summary>
<div class="mt-stack-md font-body-md text-body-md border-t-[3px] border-on-surface pt-stack-md">
                        Yes. Post-Brexit, the UK's FSA operates a specific "Public List" system for CBD, while the EU follows the EFSA Novel Food authorization process. We manage both.
                    </div>
</details>
<details class="group border-[3px] border-on-surface p-stack-md bg-white cursor-pointer transition-all duration-200 hover:bg-primary-container">
<summary class="list-none font-subheading text-subheading flex justify-between items-center">
                        What are 'proprietary blends' and are they legal?
                        <span class="material-symbols-outlined transition-transform group-open:rotate-180" data-icon="expand_more">expand_more</span>
</summary>
<div class="mt-stack-md font-body-md text-body-md border-t-[3px] border-on-surface pt-stack-md">
                        Proprietary blends are legal but must still disclose ingredients in descending order of weight. Hiding dosage of active ingredients often invites regulatory scrutiny.
                    </div>
</details>
</div>
</section>
<!-- CTA Section -->
<section class="px-grid-margin py-stack-xl">
<div class="bg-on-surface text-surface p-stack-xl border-[3px] border-on-surface brutalist-shadow relative overflow-hidden">
<div class="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-grid-gutter items-center">
<div>
<h2 class="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg mb-stack-md leading-tight">Ready for <span class="text-primary-fixed italic">Approval?</span></h2>
<p class="font-body-lg text-body-lg mb-stack-xl opacity-80">Stop guessing. Get a definitive regulatory roadmap for your supplement brand.</p>
<a class="bg-primary-container text-on-primary-container px-10 py-5 border-[3px] border-on-surface font-label-caps text-label-caps brutalist-shadow brutalist-button-hover transition-transform duration-200 inline-flex items-center gap-3" href="/contact">
                            BOOK STRATEGY CALL <span class="material-symbols-outlined" data-icon="calendar_today">calendar_today</span>
</a>
</div>
<div class="hidden md:block min-w-0">
<div class="border-[3px] border-primary-fixed bg-surface/10 backdrop-blur-sm p-stack-lg">
<div class="font-ui-mono text-primary-fixed mb-2 flex items-center gap-2">
<span class="w-2 h-2 rounded-full bg-primary-fixed animate-pulse"></span> SYSTEM STATUS: OPTIMIZED
                            </div>
<div class="font-body-md text-surface/70 space-y-2">
<p>&gt; Analyzing formulation safety dossiers...</p>
<p>&gt; Cross-referencing EFSA Article 13.1 database...</p>
<p>&gt; Labeling audit: 98% Compliance Readiness...</p>
<p class="text-primary-fixed font-bold">&gt; STATUS: READY FOR MARKET ENTRY</p>
</div>
</div>
</div>
</div>
<!-- Atmospheric background element -->
<div class="absolute -bottom-20 -right-20 w-80 h-80 rounded-full border-[3px] border-primary/20"></div>
</div>
</section>
</main>
<!-- Footer -->

<script>
        // Micro-interactions
        document.querySelectorAll('details').forEach((el) => {
            el.addEventListener('toggle', (e) => {
                if (el.open) {
                    el.classList.add('bg-primary-container');
                } else {
                    el.classList.remove('bg-primary-container');
                }
            });
        });
    </script>`;

export const Route = createFileRoute("/supplements")({
  head: () => ({
    meta: [
      { title: "Supplement Regulatory Compliance | Agota Csaszar" },
      { name: "description", content: "Supplement Regulatory Compliance | Agota Csaszar" },
      { property: "og:title", content: "Supplement Regulatory Compliance | Agota Csaszar" },
      { property: "og:description", content: "Supplement Regulatory Compliance | Agota Csaszar" },
    ],
  }),
  component: Page,
});

function Page() {
  useEffect(() => {
    // @ts-expect-error - tailwind cdn
    if (window.tailwind?.config) return;
  }, []);
  return <div className="bg-surface text-on-surface font-body-md overflow-x-hidden" dangerouslySetInnerHTML={{ __html: HTML }} />;
}
