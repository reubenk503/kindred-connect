import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

const HTML = `
<!-- TopNavBar -->
<header class="w-full sticky top-0 z-50 bg-surface border-b-[3px] border-on-surface">
<nav class="flex justify-between items-center px-grid-margin py-stack-md w-full">
<a class="font-headline-lg text-headline-lg uppercase tracking-tighter text-on-surface hover:text-primary transition-colors duration-200" href="/">Agota Csaszar</a>
<div class="hidden md:flex items-center gap-stack-lg">
<a class="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors duration-200" href="/">Services</a>
<a class="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors duration-200" href="/">Compliance</a>
<a class="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors duration-200" href="/">Process</a>
<a class="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors duration-200" href="/case-studies">Resources</a>
<a class="font-label-caps text-label-caps text-primary border-b-[3px] border-primary pb-1" href="#">About</a>
</div>
<a class="inline-block bg-primary-container text-on-primary-container px-6 py-2 border-[3px] border-on-surface brutalist-shadow brutalist-shadow-active font-label-caps uppercase transition-all" href="/contact">
                Get Started
            </a>
</nav>
</header>
<main class="w-full">
<!-- Hero Section: Identity Anchor -->
<section class="px-grid-margin py-stack-xl border-b-[3px] border-on-surface">
<div class="grid grid-cols-1 md:grid-cols-12 gap-grid-gutter items-end">
<div class="md:col-span-8">
<h1 class="font-display-xl text-display-xl-mobile md:text-display-xl uppercase mb-stack-md">
                        The Architect of <span class="text-primary italic">Compliance</span>
</h1>
<p class="font-subheading text-subheading max-w-2xl text-on-surface-variant">
                        Agota Csaszar doesn't just navigate regulations; she builds the frameworks that make them a competitive advantage.
                    </p>
</div>
<div class="md:col-span-4 flex justify-end">
<div class="w-full aspect-square border-[3px] border-on-surface brutalist-shadow bg-surface-container-highest relative overflow-hidden group">
<img alt="Professional editorial portrait of Agota Csaszar in a structured teal blazer" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbN9pzJLdoz24NYxoe69FiB2f78HDSEwuBQz91bPyiFj2651C8H1v-2q2_4Q8gH-JFfxuKb_e9uER3rNeiA5LWZL3SeuZ-rKxj9R4UbOywq2DidwSJjba3WHlNRU47bBBCrW3GOruzWGtHEIy57DLXqGL1LC_PHdQZQKaJr2T1e_XGNXJ9dsGr_ljtZLH0e6DxDmXcVstx1B8BjZe_LHpZB3Uu5j3W3rO5bgins-fjY64zAFy6Fxqk8xTFmsohg_coyf-G2XpCWwRc"/>
</div>
</div>
</div>
</section>
<!-- Mission & Approach: Asymmetric Grid -->
<section class="px-grid-margin py-stack-xl bg-surface-container-low border-b-[3px] border-on-surface overflow-hidden relative">
<div class="grid grid-cols-1 md:grid-cols-12 gap-grid-gutter relative z-10">
<div class="md:col-span-5 border-r-[3px] border-on-surface pr-grid-gutter">
<span class="bg-secondary-container text-on-secondary-container font-label-caps px-2 py-1 mb-stack-md inline-block">MISSION STATEMENT</span>
<h2 class="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-stack-lg leading-none">
                        Precision. <br/>Provocation. <br/>Protection.
                    </h2>
<p class="font-body-lg text-body-lg text-on-surface mb-stack-md">
                        We exist to dismantle the complexity of global regulatory standards, replacing bureaucratic friction with streamlined operational excellence. 
                    </p>
<p class="font-body-lg text-body-lg text-on-surface">
                        Our approach is "Expertly Disruptive"—we challenge the status quo of compliance to build systems that are not just legal, but resilient.
                    </p>
</div>
<div class="md:col-span-7 flex flex-col justify-between pt-stack-xl md:pt-0">
<div class="grid grid-cols-1 sm:grid-cols-2 gap-grid-gutter">
<div class="p-stack-md border-[3px] border-on-surface bg-white brutalist-shadow">
<span class="material-symbols-outlined text-4xl text-primary mb-stack-sm">architecture</span>
<h3 class="font-subheading text-subheading mb-stack-xs uppercase">Structural Integrity</h3>
<p class="font-body-md text-body-md">We build compliance from the ground up, ensuring every policy is anchored in operational reality.</p>
</div>
<div class="p-stack-md border-[3px] border-on-surface bg-primary-container brutalist-shadow">
<span class="material-symbols-outlined text-4xl text-on-primary-container mb-stack-sm">radar</span>
<h3 class="font-subheading text-subheading mb-stack-xs uppercase">Future Forecasting</h3>
<p class="font-body-md text-body-md">We don't just solve today's mandates; we anticipate the legislative shifts of tomorrow.</p>
</div>
</div>
<div class="mt-stack-xl">
<div class="flex items-center gap-stack-md">
<div class="h-[3px] flex-grow bg-on-surface"></div>
<div class="font-ui-mono text-ui-mono uppercase tracking-widest text-primary font-bold">The Csaszar Protocol</div>
</div>
</div>
</div>
</div>
</section>
<!-- Comparison Table: Firm Positioning -->
<section class="px-grid-margin py-stack-xl">
<h2 class="font-display-xl text-display-xl-mobile md:text-display-xl text-center mb-stack-xl uppercase">Why we <span class="text-secondary italic">Outperform</span></h2>
<div class="overflow-x-auto">
<table class="w-full border-[3px] border-on-surface text-left">
<thead>
<tr class="bg-on-surface text-surface">
<th class="p-stack-md font-label-caps border-r-[3px] border-surface">CRITERIA</th>
<th class="p-stack-md font-label-caps border-r-[3px] border-surface">GENERIC CONSULTANCIES</th>
<th class="p-stack-md font-label-caps bg-primary text-white">THE AGOTA CSASZAR EDGE</th>
</tr>
</thead>
<tbody class="font-body-md">
<tr class="border-b-[3px] border-on-surface">
<td class="p-stack-md font-bold border-r-[3px] border-on-surface bg-surface-container">Expertise Depth</td>
<td class="p-stack-md border-r-[3px] border-on-surface">Generalist juniors with checklists</td>
<td class="p-stack-md bg-primary-container/20">Direct access to Agota's 20+ years of high-stakes experience</td>
</tr>
<tr class="border-b-[3px] border-on-surface">
<td class="p-stack-md font-bold border-r-[3px] border-on-surface bg-surface-container">Methodology</td>
<td class="p-stack-md border-r-[3px] border-on-surface">Reactive, template-based documents</td>
<td class="p-stack-md bg-primary-container/20">Proactive, custom architectural frameworks</td>
</tr>
<tr class="border-b-[3px] border-on-surface">
<td class="p-stack-md font-bold border-r-[3px] border-on-surface bg-surface-container">Speed to Impact</td>
<td class="p-stack-md border-r-[3px] border-on-surface">Long discovery phases, slow delivery</td>
<td class="p-stack-md bg-primary-container/20">Rapid deployment of audited structures</td>
</tr>
<tr>
<td class="p-stack-md font-bold border-r-[3px] border-on-surface bg-surface-container">Focus</td>
<td class="p-stack-md border-r-[3px] border-on-surface">Billable hours over outcomes</td>
<td class="p-stack-md bg-primary-container/20">Risk elimination and business agility</td>
</tr>
</tbody>
</table>
</div>
</section>
<!-- Background & Credentials: Card Matrix -->
<section class="px-grid-margin py-stack-xl bg-on-surface text-surface border-t-[3px] border-on-surface">
<div class="flex flex-col md:flex-row justify-between items-start md:items-end mb-stack-xl">
<div>
<span class="text-primary-fixed font-label-caps tracking-widest uppercase">The Pedigree</span>
<h2 class="font-headline-lg text-headline-lg-mobile md:text-headline-lg">Unmatched Credentials</h2>
</div>
<button class="mt-stack-md md:mt-0 px-8 py-3 border-[3px] border-primary-fixed text-primary-fixed font-label-caps uppercase hover:bg-primary-fixed hover:text-on-primary-fixed transition-all">
                    Download Full CV
                </button>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-grid-gutter">
<div class="border-[3px] border-outline-variant p-stack-lg group hover:border-primary-fixed transition-colors">
<div class="font-display-xl opacity-20 group-hover:opacity-100 transition-opacity mb-stack-sm leading-none">20+</div>
<h3 class="font-subheading text-subheading mb-stack-xs uppercase">Years Experience</h3>
<p class="font-body-md text-surface-variant">Leading complex regulatory transformations for Fortune 500 enterprises across EMEA and North America.</p>
</div>
<div class="border-[3px] border-outline-variant p-stack-lg group hover:border-primary-fixed transition-colors">
<span class="material-symbols-outlined text-5xl text-primary-fixed mb-stack-sm" style="font-variation-settings: 'FILL' 1;">workspace_premium</span>
<h3 class="font-subheading text-subheading mb-stack-xs uppercase">Global Certifications</h3>
<p class="font-body-md text-surface-variant">Dual-certified Lead Auditor for ISO 27001 &amp; 9001, plus specialized AML and GDPR designations.</p>
</div>
<div class="border-[3px] border-outline-variant p-stack-lg group hover:border-primary-fixed transition-colors">
<span class="material-symbols-outlined text-5xl text-primary-fixed mb-stack-sm">history_edu</span>
<h3 class="font-subheading text-subheading mb-stack-xs uppercase">Industry Thought Leader</h3>
<p class="font-body-md text-surface-variant">Frequent keynote speaker at Global Regulatory summits and author of the "Responsive Compliance" framework.</p>
</div>
</div>
</section>
<!-- CTA Section -->
<section class="px-grid-margin py-stack-xl flex flex-col items-center text-center">
<h2 class="font-display-xl text-display-xl-mobile md:text-display-xl uppercase mb-stack-lg">Ready for <span class="text-primary">Precision?</span></h2>
<div class="flex flex-col sm:flex-row gap-stack-md">
<a class="px-12 py-4 bg-primary text-white border-[3px] border-on-surface brutalist-shadow brutalist-shadow-hover active:translate-y-1 transition-all font-label-caps text-lg uppercase inline-block" href="/contact">
                    Book a Consultation
                </a>
<a class="px-12 py-4 bg-white text-on-surface border-[3px] border-on-surface brutalist-shadow brutalist-shadow-hover active:translate-y-1 transition-all font-label-caps text-lg uppercase inline-block" href="/">
                    Our Process
                </a>
</div>
</section>
</main>
<!-- Footer -->
<footer class="w-full bg-surface-container-highest border-t-[3px] border-on-surface">
<div class="grid grid-cols-1 md:grid-cols-12 gap-grid-gutter px-grid-margin py-stack-xl w-full">
<div class="md:col-span-4">
<a class="font-headline-lg text-headline-lg font-black text-on-surface mb-stack-md uppercase hover:text-primary transition-colors inline-block" href="/">Agota Csaszar</a>
<p class="font-body-md text-on-surface-variant max-w-xs">
                    Redefining the standard for modern regulatory excellence through architectural precision.
                </p>
</div>
<div class="md:col-span-2">
<h4 class="font-label-caps text-label-caps mb-stack-md uppercase">Navigation</h4>
<ul class="space-y-stack-sm">
<li><a class="font-body-md text-on-surface-variant hover:text-primary" href="/">Services</a></li>
<li><a class="font-body-md text-on-surface-variant hover:text-primary" href="/">Compliance</a></li>
<li><a class="font-body-md text-on-surface-variant hover:text-primary" href="#">About</a></li>
</ul>
</div>
<div class="md:col-span-2">
<h4 class="font-label-caps text-label-caps mb-stack-md uppercase">Legal</h4>
<ul class="space-y-stack-sm">
<li><a class="font-body-md text-on-surface-variant hover:text-primary" href="#">Sitemap</a></li>
<li><a class="font-body-md text-on-surface-variant hover:text-primary" href="#">Privacy Policy</a></li>
<li><a class="font-body-md text-on-surface-variant hover:text-primary" href="#">Terms of Service</a></li>
</ul>
</div>
<div class="md:col-span-4 flex flex-col items-start md:items-end">
<h4 class="font-label-caps text-label-caps mb-stack-md uppercase">Stay Informed</h4>
<div class="flex w-full max-w-sm">
<input class="flex-grow border-[3px] border-on-surface p-2 font-ui-mono focus:ring-primary focus:border-primary" placeholder="Your corporate email" type="email"/>
<button class="bg-on-surface text-white px-4 border-y-[3px] border-r-[3px] border-on-surface">
<span class="material-symbols-outlined">arrow_forward</span>
</button>
</div>
</div>
</div>
<div class="px-grid-margin py-stack-md border-t-[3px] border-on-surface text-center">
<p class="font-body-md text-on-surface-variant">© 2024 Agota Csaszar Regulatory Services. Precision in Compliance.</p>
</div>
</footer>
<script>
        // Simple scroll interaction for header
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 50) {
                header.classList.add('shadow-lg');
            } else {
                header.classList.remove('shadow-lg');
            }
        });
    </script>
`;

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | Agota Csaszar Regulatory Services" },
      { name: "description", content: "About | Agota Csaszar Regulatory Services" },
      { property: "og:title", content: "About | Agota Csaszar Regulatory Services" },
      { property: "og:description", content: "About | Agota Csaszar Regulatory Services" },
    ],
  }),
  component: Page,
});

function Page() {
  useEffect(() => {
    // @ts-expect-error - tailwind cdn
    if (window.tailwind?.config) return;
  }, []);
  return <div className="bg-background text-on-background font-body-md selection:bg-primary-container selection:text-on-primary-container" dangerouslySetInnerHTML={{ __html: HTML }} />;
}
