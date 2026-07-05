import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

const HTML = `
<!-- TopNavBar -->
<header class="w-full sticky top-0 z-50 bg-surface border-b-[3px] border-on-surface flex justify-between items-center px-grid-margin py-stack-md">
<a class="font-headline-lg text-headline-lg uppercase tracking-tighter text-on-surface hover:text-primary transition-colors" href="/">
        Agota Csaszar
    </a>
<nav class="hidden md:flex items-center space-x-8">
<a class="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors duration-200" href="/">Services</a>
<a class="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors duration-200" href="/">Compliance</a>
<a class="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors duration-200" href="/">Process</a>
<a class="font-label-caps text-label-caps text-primary border-b-[3px] border-primary pb-1 transition-colors duration-200" href="#">Resources</a>
<a class="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors duration-200" href="/about">About</a>
</nav>
<a class="bg-primary-container border-[3px] border-on-surface px-6 py-2 rounded-full font-label-caps text-label-caps hover:translate-y-0.5 transition-transform active:scale-95 brutalist-shadow inline-block" href="/contact">
        Get Started
    </a>
</header>
<main class="w-full">
<!-- Hero Section -->
<section class="px-grid-margin py-stack-xl border-b-[3px] border-on-surface">
<div class="grid grid-cols-1 md:grid-cols-12 gap-grid-gutter items-end">
<div class="md:col-span-8">
<span class="font-label-caps text-label-caps bg-secondary-container text-on-secondary px-3 py-1 mb-stack-md inline-block">PORTFOLIO</span>
<h1 class="font-display-xl text-display-xl-mobile md:text-display-xl uppercase leading-none mb-stack-md">
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
<div class="relative overflow-hidden border-b-[3px] border-on-surface aspect-[16/9]">
<img class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="A professional medical technology environment with high-contrast laboratory equipment and clean teal accents. The scene is shot in a high-key architectural style, featuring sharp shadows and a minimalist aesthetic typical of neo-brutalist design. Medical professionals in crisp white lab coats are blurred in the background, emphasizing a high-tech surgical laser in the foreground under bright, cool-toned clinical lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6R1NTrTKsajsDYHDVOX5Xvn-84br_eWUMOmiNtvCRNfSoLw2dJ8PEaOcbEVJX1qKemkr_JR8cXVpkfHIcCyV1uTynShXT2qdNyxzBGDCYryYmn_EMCmMPv9HWSzKEMqkFScAUocDr0BTXa3LFzil3StUi5LQEd-mBB2AhBAqRh9VRyFbT2X94XjYgxeJjckxq61L11lRE_ioxiCXT03oBEuLxX4-Axvx9CU5_F3t4aXsJkXxGK7FlVc0BmE25_WedaK2XAZDybRkb"/>
<div class="absolute top-4 left-4 flex gap-2">
<span class="font-label-caps text-label-caps bg-on-surface text-surface px-3 py-1 uppercase">MedTech</span>
<span class="font-label-caps text-label-caps bg-primary text-white px-3 py-1 uppercase">EU MDR</span>
</div>
</div>
<div class="p-stack-lg">
<h2 class="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase mb-stack-md">MDR Transition Strategy</h2>
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
<div class="relative overflow-hidden border-b-[3px] border-on-surface aspect-[16/9]">
<img class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="Close-up artistic shot of premium skincare bottles with vibrant coral and cream branding. The lighting is harsh and direct, creating deep, dramatic shadows against a solid charcoal background. The composition is geometric and asymmetric, echoing an editorial high-fashion layout. Droplets of serum are visible on the glass, reflecting the intense primary teal light sources used for accentuation." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqQuxQQlp-WiE-bgRM-Hds7HqWURXQku4N2my_vjJTtEWjeHHv9a86n6hoRbYvkogUTtKI96FLUMheh8odpTs6NFBPa5C7htec4_rM1SclA5Jduxksrn_jnu7we9YeG3STu4jJ41R2eJ642byjPt8W7kIbdp8lsCkFbuDTYlj-6oIyOZcdYGblQcYTTvEnGzl30oTr8IKTncZTRPVy9WU-Bme0QeQ-2pf6IwKIA_TFnlH5dzMy72ta1doZNrzOlPY7Q-n6ZcqBAt97"/>
<div class="absolute top-4 left-4 flex gap-2">
<span class="font-label-caps text-label-caps bg-on-surface text-surface px-3 py-1 uppercase">Cosmetics</span>
<span class="font-label-caps text-label-caps bg-primary text-white px-3 py-1 uppercase">Expansion</span>
</div>
</div>
<div class="p-stack-lg">
<h2 class="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase mb-stack-md">Skincare Expansion</h2>
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
<div class="relative overflow-hidden border-b-[3px] border-on-surface aspect-[16/9]">
<img class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="A futuristic digital data dashboard displayed on a series of vertical monitors in a dark, high-contrast control room. The UI elements on the screens are neon teal and coral red against black backgrounds. The room features industrial textures like brushed metal and exposed concrete. Sharp, direct lighting illuminates the keyboards and interfaces, creating a mood of intense focus and technological precision." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4DWG2ROguqdFA4QdraLM_ab-mIApmBRwBhVa8jrIIUXqDbxjct5VfDWg74L7yhqPRnEbzi8t8WUbdIuVvbRwI6TFurwGrJ9Fo9CVNLQGyKRnkcKp5Dml0kIy-0PW3MdLCCLpBgApkmChgrQ2oal6fUOm3fL0wbxKghJbtw1hPLU3teVFFC-M5_3ed8h_U4EJ_Z8VYwUmk9Fz3aTsnpwNcEcojGwqN_L7etIUX54TNtmFceTgPgw0Xdqnr_Se6bz6nMxNEoxVY8RXW"/>
<div class="absolute top-4 left-4 flex gap-2">
<span class="font-label-caps text-label-caps bg-on-surface text-surface px-3 py-1 uppercase">Digital Health</span>
<span class="font-label-caps text-label-caps bg-primary text-white px-3 py-1 uppercase">AI Software</span>
</div>
</div>
<div class="p-stack-lg">
<h2 class="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase mb-stack-md">AI Diagnostic Audit</h2>
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
<h2 class="font-headline-lg text-headline-lg text-surface uppercase mb-stack-md">Want to be our next success story?</h2>
<p class="font-body-lg text-body-lg text-surface-container mb-stack-lg">
                        We provide fixed-fee compliance audits that identify your risks before regulators do. Start your project today.
                    </p>
<a class="bg-surface text-on-surface border-[3px] border-on-surface px-8 py-4 font-label-caps text-label-caps self-start hover:bg-secondary-container hover:text-white transition-all brutalist-shadow inline-block" href="/contact">
                        BOOK A CONSULTATION
                    </a>
</div>
</div>
</div>
</section>
<!-- CTA Rule Section -->
<section class="border-t-[3px] border-on-surface flex overflow-hidden whitespace-nowrap py-stack-sm bg-surface">
<div class="animate-marquee flex gap-8 items-center">
<span class="font-display-xl text-4xl uppercase opacity-20">Regulatory Compliance</span>
<span class="material-symbols-outlined text-primary">circle</span>
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
<footer class="w-full border-t-[3px] border-on-surface bg-surface-container-highest grid grid-cols-1 md:grid-cols-12 gap-grid-gutter px-grid-margin py-stack-xl">
<div class="md:col-span-6">
<a class="font-headline-lg text-headline-lg font-black text-on-surface mb-stack-md uppercase block hover:text-primary transition-colors" href="/">Agota Csaszar</a>
<p class="font-body-md text-body-md text-on-surface-variant max-w-md">
            Bridging the gap between innovation and legislation. We empower creators to navigate the world's most complex regulatory frameworks with confidence.
        </p>
</div>
<div class="md:col-span-3">
<h3 class="font-label-caps text-label-caps text-on-surface mb-stack-md uppercase">Resources</h3>
<ul class="space-y-2">
<li><a class="font-body-md text-body-md text-on-surface-variant hover:bg-primary hover:text-on-primary px-1 transition-all inline-block" href="#">Sitemap</a></li>
<li><a class="font-body-md text-body-md text-on-surface-variant hover:bg-primary hover:text-on-primary px-1 transition-all inline-block" href="#">Privacy Policy</a></li>
<li><a class="font-body-md text-body-md text-on-surface-variant hover:bg-primary hover:text-on-primary px-1 transition-all inline-block" href="#">Regulatory Standards</a></li>
<li><a class="font-body-md text-body-md text-on-surface-variant hover:bg-primary hover:text-on-primary px-1 transition-all inline-block" href="#">Terms of Service</a></li>
</ul>
</div>
<div class="md:col-span-3">
<h3 class="font-label-caps text-label-caps text-on-surface mb-stack-md uppercase">Navigation</h3>
<ul class="space-y-2">
<li><a class="font-body-md text-body-md text-on-surface-variant hover:bg-primary hover:text-on-primary px-1 transition-all inline-block" href="/">Services</a></li>
<li><a class="font-body-md text-body-md text-on-surface-variant hover:bg-primary hover:text-on-primary px-1 transition-all inline-block" href="/">Compliance</a></li>
<li><a class="font-body-md text-body-md text-on-surface-variant hover:bg-primary hover:text-on-primary px-1 transition-all inline-block" href="/about">About</a></li>
<li><a class="font-body-md text-body-md text-on-surface-variant hover:bg-primary hover:text-on-primary px-1 transition-all inline-block" href="/contact">Book Consultation</a></li>
</ul>
</div>
<div class="md:col-span-12 mt-stack-xl pt-stack-md border-t-[3px] border-on-surface flex flex-col md:flex-row justify-between items-center gap-4">
<p class="font-body-md text-body-md text-on-surface-variant">© 2024 Agota Csaszar Regulatory Services. Precision in Compliance.</p>
<div class="flex gap-4">
<span class="font-label-caps text-label-caps text-secondary">ISO 9001 CERTIFIED</span>
<span class="font-label-caps text-label-caps text-secondary">GDPR COMPLIANT</span>
</div>
</div>
</footer>
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
</style>
`;

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
    // @ts-expect-error - tailwind cdn
    if (window.tailwind?.config) return;
  }, []);
  return <div className="bg-background text-on-background min-h-screen selection:bg-primary-container selection:text-on-primary-container" dangerouslySetInnerHTML={{ __html: HTML }} />;
}
