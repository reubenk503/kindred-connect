import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { initRevealAnimations } from "../lib/animations";

const HTML = `<!-- TopNavBar -->

<main class="w-full">
<!-- Hero Section -->
<section class="px-grid-margin py-stack-xl border-b-[3px] border-on-surface">
<div class="grid grid-cols-1 md:grid-cols-12 gap-grid-gutter items-end">
<div class="md:col-span-8">
<span class="font-label-caps text-label-caps bg-secondary-container text-on-secondary px-3 py-1 mb-stack-md inline-block">PORTFOLIO</span>
<h1 class="reveal font-display-xl text-display-xl-mobile md:text-display-xl uppercase leading-none mb-stack-md">
                    Precision <br/>In Action
                </h1>
</div>
<div class="md:col-span-4 border-l-[3px] border-on-surface pl-stack-lg pb-stack-sm hidden md:block">
<p class="font-body-lg text-body-lg text-on-surface-variant">
                    Our work spans the most stringent regulatory environments. From MedTech giants to boutique skincare innovations, we solve the compliance puzzles that stall progress.
                </p>
</div>
</div>
</section>
<!-- Case Studies Grid -->
<section class="px-grid-margin py-stack-xl">
<div class="grid grid-cols-1 md:grid-cols-2 gap-stack-xl">
<!-- Case Study 1 -->
<div class="group border-[3px] border-on-surface bg-surface-container-lowest transition-all duration-300 brutalist-shadow brutalist-shadow-hover">
<div class="frame-hover reveal relative overflow-hidden border-b-[3px] border-on-surface aspect-[16/9]">
<div class="absolute top-3 left-3 right-3 flex flex-wrap gap-2">
<span class="font-label-caps text-label-caps bg-on-surface text-surface px-3 py-1 uppercase">MedTech</span>
<span class="font-label-caps text-label-caps bg-primary text-white px-3 py-1 uppercase">EU MDR</span>
</div>
</div>
<div class="p-stack-lg">
<h2 class="reveal font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase mb-stack-md">MDR Transition Strategy</h2>
<div class="space-y-4">
<div class="border-l-[3px] border-primary-container pl-4">
<p class="font-label-caps text-label-caps text-secondary mb-1">CHALLENGE</p>
<p class="font-body-md text-body-md text-on-surface-variant">A legacy Class IIb manufacturer faced market exclusion due to incomplete technical documentation for the new Medical Device Regulation.</p>
</div>
<div class="border-l-[3px] border-secondary-container pl-4">
<p class="font-label-caps text-label-caps text-secondary mb-1">OUTCOME</p>
<p class="font-body-md text-body-md text-on-surface-variant">100% technical file remediation achieved in 8 months. Notified Body clearance secured without major non-conformities.</p>
</div>
</div>
<a class="mt-stack-lg inline-flex items-center font-label-caps text-label-caps text-on-surface hover:text-primary transition-colors" href="#">
                        VIEW FULL CASE <span class="material-symbols-outlined ml-2">arrow_right_alt</span>
</a>
</div>
</div>
<!-- Case Study 2 -->
<div class="group border-[3px] border-on-surface bg-surface-container-lowest transition-all duration-300 brutalist-shadow brutalist-shadow-hover">
<div class="frame-hover reveal relative overflow-hidden border-b-[3px] border-on-surface aspect-[16/9]">
<div class="absolute top-3 left-3 right-3 flex flex-wrap gap-2">
<span class="font-label-caps text-label-caps bg-on-surface text-surface px-3 py-1 uppercase">Cosmetics</span>
<span class="font-label-caps text-label-caps bg-primary text-white px-3 py-1 uppercase">Expansion</span>
</div>
</div>
<div class="p-stack-lg">
<h2 class="reveal font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase mb-stack-md">Skincare Expansion</h2>
<div class="space-y-4">
<div class="border-l-[3px] border-primary-container pl-4">
<p class="font-label-caps text-label-caps text-secondary mb-1">CHALLENGE</p>
<p class="font-body-md text-body-md text-on-surface-variant">Rapid scaling of a boutique US brand into the UK and EU markets required full ingredient audit and Responsible Person registration.</p>
</div>
<div class="border-l-[3px] border-secondary-container pl-4">
<p class="font-label-caps text-label-caps text-secondary mb-1">OUTCOME</p>
<p class="font-body-md text-body-md text-on-surface-variant">Successful SCPN notification for 42 SKUs. Automated compliance tracking system implemented for future product launches.</p>
</div>
</div>
<a class="mt-stack-lg inline-flex items-center font-label-caps text-label-caps text-on-surface hover:text-primary transition-colors" href="#">
                        VIEW FULL CASE <span class="material-symbols-outlined ml-2">arrow_right_alt</span>
</a>
</div>
</div>
<!-- Case Study 3 -->
<div class="group border-[3px] border-on-surface bg-surface-container-lowest transition-all duration-300 brutalist-shadow brutalist-shadow-hover">
<div class="frame-hover reveal relative overflow-hidden border-b-[3px] border-on-surface aspect-[16/9]">
<div class="absolute top-3 left-3 right-3 flex flex-wrap gap-2">
<span class="font-label-caps text-label-caps bg-on-surface text-surface px-3 py-1 uppercase">Digital Health</span>
<span class="font-label-caps text-label-caps bg-primary text-white px-3 py-1 uppercase">AI Software</span>
</div>
</div>
<div class="p-stack-lg">
<h2 class="reveal font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase mb-stack-md">Software as a Medical Device</h2>
<div class="space-y-4">
<div class="border-l-[3px] border-primary-container pl-4">
<p class="font-label-caps text-label-caps text-secondary mb-1">CHALLENGE</p>
<p class="font-body-md text-body-md text-on-surface-variant">Validation of an AI-driven radiological imaging tool for SaMD (Software as a Medical Device) classification under UKCA guidelines.</p>
</div>
<div class="border-l-[3px] border-secondary-container pl-4">
<p class="font-label-caps text-label-caps text-secondary mb-1">OUTCOME</p>
<p class="font-body-md text-body-md text-on-surface-variant">Risk management file restructured for AI specificity. Successful submission to MHRA with accelerated approval track.</p>
</div>
</div>
<a class="mt-stack-lg inline-flex items-center font-label-caps text-label-caps text-on-surface hover:text-primary transition-colors" href="#">
                        VIEW FULL CASE <span class="material-symbols-outlined ml-2">arrow_right_alt</span>
</a>
</div>
</div>
<!-- Case Study 4 - CTA card -->
<div class="group border-[3px] border-on-surface bg-primary transition-all duration-300 brutalist-shadow hover:translate-x-1 hover:translate-y-1">
<div class="p-stack-xl flex flex-col justify-center h-full">
<span class="material-symbols-outlined text-surface text-6xl mb-stack-md" style="font-variation-settings: 'FILL' 1;">analytics</span>
<h2 class="reveal font-headline-lg text-headline-lg text-surface uppercase mb-stack-md">Want to be our next success story?</h2>
<p class="font-body-lg text-body-lg text-surface-container mb-stack-lg">
                        We provide fixed-fee compliance audits that identify your risks before regulators do. Start your project today.
                    </p>
<a class="bg-surface text-on-surface border-[3px] border-on-surface px-6 sm:px-8 py-4 font-label-caps text-label-caps self-start hover:bg-secondary-container hover:text-white transition-all brutalist-shadow inline-block max-w-full" href="/contact">
                        BOOK A CONSULTATION
                    </a>
</div>
</div>
</div>
</section>
<!-- CTA Rule Section -->
<section class="border-t-[3px] border-on-surface flex overflow-hidden whitespace-nowrap py-stack-sm bg-primary-container">
<div class="animate-marquee flex gap-8 items-center">
<span class="font-display-xl text-4xl uppercase opacity-20">Regulatory Compliance</span>
<span class="material-symbols-outlined text-on-primary-container">circle</span>
<span class="font-display-xl text-4xl uppercase opacity-20">Precision Engineering</span>
<span class="material-symbols-outlined text-primary">circle</span>
<span class="font-display-xl text-4xl uppercase opacity-20">Global Market Access</span>
<span class="material-symbols-outlined text-primary">circle</span>
<span class="font-display-xl text-4xl uppercase opacity-20">Risk Mitigation</span>
<span class="material-symbols-outlined text-primary">circle</span>
<span class="font-display-xl text-4xl uppercase opacity-20">Regulatory Compliance</span>
<span class="material-symbols-outlined text-primary">circle</span>
<span class="font-display-xl text-4xl uppercase opacity-20">Precision Engineering</span>
<span class="material-symbols-outlined text-primary">circle</span>
</div>
</section>
</main>
<!-- Footer -->

<style>
    @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
    }
    .animate-marquee {
        display: flex;
        width: fit-content;
        animation: marquee 30s linear infinite;
    }
</style>`;

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies | Agota Csaszar Regulatory Services" },
      { name: "description", content: "Case Studies | Agota Csaszar Regulatory Services" },
      { property: "og:title", content: "Case Studies | Agota Csaszar Regulatory Services" },
      { property: "og:description", content: "Case Studies | Agota Csaszar Regulatory Services" },
    ],
  }),
  component: Page,
});

function Page() {
  useEffect(() => {
    const cleanup = initRevealAnimations();
    return cleanup;
  }, []);
  return <div className="bg-background text-on-background min-h-screen selection:bg-primary-container selection:text-on-primary-container" dangerouslySetInnerHTML={{ __html: HTML }} />;
}
