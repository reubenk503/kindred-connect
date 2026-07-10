import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { initRevealAnimations } from "../lib/animations";

const HTML = `<!-- TopNavBar -->

<main class="min-h-screen">
<!-- Hero Section -->
<section class="grid grid-cols-1 md:grid-cols-12 w-full border-b-[3px] border-on-surface">
<div class="md:col-span-7 p-grid-margin flex flex-col justify-center custom-grid-rule">
<span class="font-label-caps text-label-caps text-secondary uppercase mb-stack-md tracking-widest">Global Standards</span>
<h1 class="reveal font-display-xl-mobile md:font-display-xl text-display-xl-mobile md:text-display-xl text-on-surface mb-stack-lg leading-none">
                    COSMETICS <br/> COMPLIANCE <br/> <span class="text-primary italic">REDEFINED.</span>
</h1>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-stack-xl">
                    Navigating the UK and EU cosmetic regulatory landscape requires more than just checking boxes. It demands a precision-first approach to safety, labeling, and responsible person services.
                </p>
<div class="flex flex-wrap gap-grid-gutter">
<button class="bg-primary-container text-on-primary-fixed font-label-caps text-label-caps px-6 sm:px-8 py-4 sm:py-5 border-[3px] border-on-surface brutalist-shadow-hover brutalist-shadow-active transition-all rounded-full uppercase flex items-center gap-2 max-w-full text-left" onclick="window.location.href='/contact'">
                        Book Consultation
                        <span class="material-symbols-outlined">arrow_forward</span>
</button>
</div>
</div>
<div class="frame-hover reveal md:col-span-5 relative bg-surface-container-highest h-[300px] md:h-[400px]">
</div>
</section>
<!-- Regulation Overview: Bento Grid -->
<section class="py-stack-xl px-grid-margin border-b-[3px] border-on-surface">
<div class="mb-stack-xl">
<h2 class="reveal font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-stack-sm uppercase">Regulatory Overviews</h2>
<div class="w-24 h-[6px] bg-primary-fixed border-[1px] border-on-surface"></div>
</div>
<div class="grid grid-cols-1 md:grid-cols-4 gap-grid-gutter">
<!-- UK/EU Regulation -->
<div class="md:col-span-2 border-[3px] border-on-surface p-stack-lg bg-surface brutalist-shadow">
<div class="flex items-center gap-4 mb-stack-md">
<span class="material-symbols-outlined text-4xl text-primary">gavel</span>
<h3 class="reveal font-subheading text-subheading uppercase">UK/EU Regulation 1223/2009</h3>
</div>
<p class="font-body-md text-body-md mb-stack-md">The gold standard for cosmetic safety. All products placed on the market must have a designated 'Responsible Person' (RP) and a comprehensive Product Information File (PIF).</p>
<ul class="space-y-2 border-t-[3px] border-on-surface pt-stack-md">
<li class="flex items-center gap-2 font-ui-mono text-ui-mono uppercase"><span class="w-2 h-2 bg-secondary rounded-full"></span> Mandatory RP Representation</li>
<li class="flex items-center gap-2 font-ui-mono text-ui-mono uppercase"><span class="w-2 h-2 bg-secondary rounded-full"></span> SCPN/CPNP Notification</li>
<li class="flex items-center gap-2 font-ui-mono text-ui-mono uppercase"><span class="w-2 h-2 bg-secondary rounded-full"></span> Annex Ingredient Restrictions</li>
</ul>
</div>
<!-- CPSR -->
<div class="md:col-span-2 border-[3px] border-on-surface p-stack-lg bg-primary-fixed brutalist-shadow">
<div class="flex items-center gap-4 mb-stack-md">
<span class="material-symbols-outlined text-4xl text-on-primary-fixed">science</span>
<h3 class="reveal font-subheading text-subheading uppercase">CPSR Requirements</h3>
</div>
<p class="font-body-md text-body-md mb-stack-md text-on-primary-fixed">The Cosmetic Product Safety Report is a mandatory document split into two parts: Part A (Safety Info) and Part B (Safety Assessment by a qualified professional).</p>
<div class="grid grid-cols-2 gap-stack-sm">
<div class="bg-surface p-stack-sm border-[2px] border-on-surface font-label-caps text-xs text-center uppercase">Microbiological Testing</div>
<div class="bg-surface p-stack-sm border-[2px] border-on-surface font-label-caps text-xs text-center uppercase">Stability &amp; Compatibility</div>
<div class="bg-surface p-stack-sm border-[2px] border-on-surface font-label-caps text-xs text-center uppercase">Toxicological Profiles</div>
<div class="bg-surface p-stack-sm border-[2px] border-on-surface font-label-caps text-xs text-center uppercase">Exposure Scenarios</div>
</div>
</div>
</div>
</section>
<!-- Process Breakdown -->
<section class="py-stack-xl px-grid-margin bg-surface-container">
<h2 class="reveal font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-stack-xl uppercase text-center">Our Compliance Pipeline</h2>
<div class="grid grid-cols-1 md:grid-cols-3 gap-0 border-[3px] border-on-surface">
<!-- Step 1 -->
<div class="p-stack-xl border-b-[3px] md:border-b-0 md:border-r-[3px] border-on-surface group hover:bg-primary-fixed transition-colors duration-300">
<div class="font-display-xl text-display-xl-mobile opacity-20 group-hover:opacity-100 transition-opacity mb-stack-md">01</div>
<h4 class="font-subheading text-subheading uppercase mb-stack-sm">Dossier Review</h4>
<p class="font-body-md text-body-md">In-depth analysis of formulation data, raw material certificates, and SDS documentation.</p>
</div>
<!-- Step 2 -->
<div class="p-stack-xl border-b-[3px] md:border-b-0 md:border-r-[3px] border-on-surface group hover:bg-primary-fixed transition-colors duration-300">
<div class="font-display-xl text-display-xl-mobile opacity-20 group-hover:opacity-100 transition-opacity mb-stack-md">02</div>
<h4 class="font-subheading text-subheading uppercase mb-stack-sm">Safety Assessment</h4>
<p class="font-body-md text-body-md">Expert toxicological assessment leading to the signing of Part B of your CPSR report.</p>
</div>
<!-- Step 3 -->
<div class="p-stack-xl group hover:bg-primary-fixed transition-colors duration-300">
<div class="font-display-xl text-display-xl-mobile opacity-20 group-hover:opacity-100 transition-opacity mb-stack-md">03</div>
<h4 class="font-subheading text-subheading uppercase mb-stack-sm">Market Launch</h4>
<p class="font-body-md text-body-md">Notification to SCPN (UK) and CPNP (EU) portals and final label compliance sign-off.</p>
</div>
</div>
</section>
<!-- FAQ Section -->
<section class="py-stack-xl px-grid-margin max-w-5xl mx-auto">
<h2 class="reveal font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-stack-xl uppercase border-l-[12px] border-secondary pl-stack-md">Frequency Asked</h2>
<div class="space-y-stack-md">
<details class="group border-[3px] border-on-surface bg-surface open:bg-surface-container-low transition-all">
<summary class="flex justify-between items-center p-stack-lg cursor-pointer list-none">
<span class="font-subheading text-subheading uppercase">Do I need separate reports for UK and EU?</span>
<span class="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<div class="px-stack-lg pb-stack-lg font-body-md text-body-md border-t-[3px] border-on-surface pt-stack-md">
                        Yes. Post-Brexit, the UK requires notification through the SCPN portal and a UK-based Responsible Person, while the EU requires CPNP notification and an EU-based RP. The technical content of the CPSR is similar, but legal entities must be localized.
                    </div>
</details>
<details class="group border-[3px] border-on-surface bg-surface open:bg-surface-container-low transition-all">
<summary class="flex justify-between items-center p-stack-lg cursor-pointer list-none">
<span class="font-subheading text-subheading uppercase">How long does the CPSR process take?</span>
<span class="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<div class="px-stack-lg pb-stack-lg font-body-md text-body-md border-t-[3px] border-on-surface pt-stack-md">
                        Typical timelines range from 2 to 6 weeks, depending on the completeness of your Product Information File and whether additional laboratory testing (e.g., Preservative Efficacy Testing) is required.
                    </div>
</details>
<details class="group border-[3px] border-on-surface bg-surface open:bg-surface-container-low transition-all">
<summary class="flex justify-between items-center p-stack-lg cursor-pointer list-none">
<span class="font-subheading text-subheading uppercase">What happens if my ingredients change?</span>
<span class="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<div class="px-stack-lg pb-stack-lg font-body-md text-body-md border-t-[3px] border-on-surface pt-stack-md">
                        Significant changes to the formulation require a CPSR update and a new notification to the respective portals. Minor administrative changes may only require a PIF amendment.
                    </div>
</details>
</div>
</section>
<!-- Final CTA -->
<section class="py-stack-xl px-grid-margin bg-on-surface text-surface overflow-hidden relative">
<div class="relative z-10 text-center flex flex-col items-center">
<h2 class="reveal font-display-xl-mobile md:font-display-xl text-display-xl-mobile md:text-display-xl mb-stack-lg uppercase leading-none">Ready for <br/> <span class="text-primary-fixed">Compliance?</span></h2>
<p class="font-body-lg text-body-lg mb-stack-xl max-w-2xl opacity-80">
                    Join hundreds of successful brands that trust Agota Csaszar for seamless market entry. Our experts are ready to audit your portfolio.
                </p>
<button class="bg-primary-fixed text-on-primary-fixed font-label-caps text-label-caps px-6 sm:px-12 py-4 sm:py-6 border-[3px] border-surface brutalist-shadow-hover transition-all rounded-full uppercase text-base sm:text-xl max-w-full" onclick="window.location.href='/contact'">
                    Secure Your Consultation
                </button>
</div>
<!-- Decorative Brutalist Elements -->
<div class="absolute top-0 right-0 w-64 h-64 border-l-[3px] border-b-[3px] border-primary-fixed -mr-32 -mt-32 rotate-45 opacity-20"></div>
<div class="absolute bottom-0 left-0 w-48 h-48 bg-secondary -ml-24 -mb-24 rotate-12 opacity-30"></div>
</section>
</main>
<!-- Footer -->

<script>
        // Simple scroll interaction for the header
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 20) {
                header.classList.add('shadow-xl');
            } else {
                header.classList.remove('shadow-xl');
            }
        });

        // Hover effect for steps
        const steps = document.querySelectorAll('.group');
        steps.forEach(step => {
            step.addEventListener('mouseenter', () => {
                // Potential micro-interaction
            });
        });
    </script>`;

export const Route = createFileRoute("/cosmetics")({
  head: () => ({
    meta: [
      { title: "Cosmetics Regulatory Compliance | Agota Csaszar" },
      { name: "description", content: "Cosmetics Regulatory Compliance | Agota Csaszar" },
      { property: "og:title", content: "Cosmetics Regulatory Compliance | Agota Csaszar" },
      { property: "og:description", content: "Cosmetics Regulatory Compliance | Agota Csaszar" },
    ],
  }),
  component: Page,
});

function Page() {
  useEffect(() => {
    const cleanup = initRevealAnimations();
    return cleanup;
  }, []);
  return <div className="bg-background text-on-background font-body-md selection:bg-primary-fixed selection:text-on-primary-fixed" dangerouslySetInnerHTML={{ __html: HTML }} />;
}
