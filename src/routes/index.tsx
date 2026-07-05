import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

const HTML = `<!-- Top Navigation Bar -->

<!-- Hero Section -->
<header class="relative px-grid-margin py-stack-xl lg:py-32 grid grid-cols-1 lg:grid-cols-12 gap-grid-gutter overflow-hidden">
<div class="lg:col-span-8 flex flex-col justify-center z-10">
<span class="font-label-caps text-label-caps text-secondary uppercase mb-stack-md block">Regulatory Excellence</span>
<h1 class="font-display-xl-mobile lg:font-display-xl text-display-xl-mobile lg:text-display-xl text-on-surface mb-stack-lg leading-none">
                PRECISION COMPLIANCE FOR <span class="text-primary italic">SUPPLEMENTS</span>, COSMETICS, AND MEDICAL DEVICES.
            </h1>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-stack-xl">
                Navigating complex frameworks like FSA, EFSA, and MDR with surgical accuracy. We turn regulatory hurdles into market advantages.
            </p>
<div class="flex flex-wrap gap-grid-gutter">
<a class="bg-primary-container text-on-primary-fixed font-label-caps text-label-caps px-10 py-5 border-[3px] border-on-surface brutalist-shadow-hover transition-all duration-200 brutalist-active uppercase text-lg text-center" href="/contact">
                    Book Consultation
                </a>
<a class="bg-surface text-on-surface font-label-caps text-label-caps px-10 py-5 border-[3px] border-on-surface brutalist-shadow transition-all duration-200 brutalist-active uppercase text-lg text-center" href="/">
                    View Frameworks
                </a>
</div>
</div>
<div class="lg:col-span-4 relative hidden lg:flex items-center justify-center">
<!-- Asymmetric visual element -->
<div class="absolute w-full h-[120%] border-[3px] border-on-surface rotate-3 translate-x-12 translate-y-8 bg-secondary-container/10 -z-10"></div>
<div class="w-full aspect-[3/4] border-[3px] border-on-surface bg-surface-container relative z-10 overflow-hidden brutalist-shadow">
<img class="w-full h-full object-cover grayscale contrast-125" data-alt="A striking editorial portrait of a professional woman looking confident and authoritative, high-fashion aesthetic, sharp lines, neutral studio lighting with high contrast shadows. The palette is dominated by cream, charcoal, and a pop of electric teal. Modern neo-brutalist photography style with a 12-column grid overlay." src="/images/hero-portrait.jpg"/>
<div class="absolute bottom-0 left-0 bg-primary-container p-stack-md border-t-[3px] border-r-[3px] border-on-surface">
<span class="font-label-caps text-label-caps text-on-primary-fixed uppercase">EST. 2014</span>
</div>
</div>
</div>
</header>
<!-- Services Pillar: Bento Grid -->
<section class="px-grid-margin py-stack-xl bg-surface-container-low border-t-[3px] border-on-surface">
<div class="flex flex-col lg:flex-row justify-between items-end mb-stack-xl gap-stack-lg">
<div class="max-w-2xl">
<h2 class="font-headline-lg-mobile lg:font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface mb-stack-md uppercase">Core Disciplines</h2>
<p class="font-body-lg text-body-lg text-on-surface-variant">Three pillars of expertise, reinforced by global standards and local regulatory precision.</p>
</div>
<div class="font-ui-mono text-ui-mono text-secondary uppercase bg-surface px-stack-md py-stack-xs border-[3px] border-on-surface">
                Expertise / Services
            </div>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-grid-gutter">
<!-- Supplements -->
<a class="bg-surface border-[3px] border-on-surface p-stack-xl flex flex-col h-full hover:bg-primary-container transition-colors duration-300 group" href="/supplements">
<div class="mb-stack-xl">
<span class="material-symbols-outlined text-5xl mb-stack-md text-on-surface" data-icon="pill">pill</span>
<h3 class="font-headline-lg-mobile text-headline-lg-mobile text-on-surface mb-stack-sm uppercase">Supplements</h3>
<div class="flex flex-wrap gap-2 mb-stack-md">
<span class="bg-on-surface text-surface text-[10px] px-2 py-1 uppercase font-bold">FSA</span>
<span class="bg-on-surface text-surface text-[10px] px-2 py-1 uppercase font-bold">EFSA</span>
</div>
</div>
<p class="font-body-md text-body-md text-on-surface mb-stack-xl flex-grow">
                    Specialized guidance on novel foods, health claims, and labelling for the UK and EU markets. Ensuring formula compliance and safety dossier preparation.
                </p>
<div class="pt-stack-md border-t-[3px] border-on-surface mt-auto">
<div class="font-label-caps text-label-caps uppercase flex items-center group-hover:gap-4 transition-all">
                        Learn More <span class="material-symbols-outlined ml-2" data-icon="arrow_forward">arrow_forward</span>
</div>
</div>
</a>
<!-- Cosmetics -->
<a class="bg-surface border-[3px] border-on-surface p-stack-xl flex flex-col h-full hover:bg-secondary-container transition-colors duration-300 group" href="/cosmetics">
<div class="mb-stack-xl">
<span class="material-symbols-outlined text-5xl mb-stack-md text-on-surface" data-icon="brush">brush</span>
<h3 class="font-headline-lg-mobile text-headline-lg-mobile text-on-surface mb-stack-sm uppercase">Cosmetics</h3>
<div class="flex flex-wrap gap-2 mb-stack-md">
<span class="bg-on-surface text-surface text-[10px] px-2 py-1 uppercase font-bold">CPSR</span>
<span class="bg-on-surface text-surface text-[10px] px-2 py-1 uppercase font-bold">PIF</span>
</div>
</div>
<p class="font-body-md text-body-md text-on-surface mb-stack-xl flex-grow">
                    Full product safety reports (UKCPSR), toxicology assessments, and Responsible Person services to maintain presence in high-standard jurisdictions.
                </p>
<div class="pt-stack-md border-t-[3px] border-on-surface mt-auto">
<div class="font-label-caps text-label-caps uppercase flex items-center group-hover:gap-4 transition-all">
                        Learn More <span class="material-symbols-outlined ml-2" data-icon="arrow_forward">arrow_forward</span>
</div>
</div>
</a>
<!-- Medical Devices -->
<a class="bg-surface border-[3px] border-on-surface p-stack-xl flex flex-col h-full hover:bg-tertiary-container transition-colors duration-300 group" href="/medical-devices">
<div class="mb-stack-xl">
<span class="material-symbols-outlined text-5xl mb-stack-md text-on-surface" data-icon="medical_services">medical_services</span>
<h3 class="font-headline-lg-mobile text-headline-lg-mobile text-on-surface mb-stack-sm uppercase">Med Devices</h3>
<div class="flex flex-wrap gap-2 mb-stack-md">
<span class="bg-on-surface text-surface text-[10px] px-2 py-1 uppercase font-bold">MDR</span>
<span class="bg-on-surface text-surface text-[10px] px-2 py-1 uppercase font-bold">UKCA</span>
</div>
</div>
<p class="font-body-md text-body-md text-on-surface mb-stack-xl flex-grow">
                    Strategic transition to EU MDR/IVDR and UKCA marking. Technical file compilation, clinical evaluation reports, and risk management systems.
                </p>
<div class="pt-stack-md border-t-[3px] border-on-surface mt-auto">
<div class="font-label-caps text-label-caps uppercase flex items-center group-hover:gap-4 transition-all">
                        Learn More <span class="material-symbols-outlined ml-2" data-icon="arrow_forward">arrow_forward</span>
</div>
</div>
</a>
</div>
</section>
<!-- Process Section: Pathway Visualization -->
<section class="px-grid-margin py-stack-xl bg-surface">
<div class="max-w-4xl mb-stack-xl">
<h2 class="font-headline-lg-mobile lg:font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface mb-stack-md uppercase">The Pathway to Approval</h2>
<p class="font-body-lg text-body-lg text-on-surface-variant">A streamlined, risk-averse methodology for global compliance.</p>
</div>
<div class="relative grid grid-cols-1 md:grid-cols-4 border-t-[3px] border-on-surface">
<!-- Step 1 -->
<div class="border-b-[3px] md:border-b-0 md:border-r-[3px] border-on-surface p-stack-lg group relative">
<span class="font-display-xl text-[48px] text-surface-container-highest absolute -top-8 left-4 -z-10 opacity-50">01</span>
<div class="font-label-caps text-label-caps text-secondary mb-4 uppercase">Phase 1</div>
<h4 class="font-subheading text-subheading text-on-surface mb-4 uppercase">Gap Analysis</h4>
<p class="font-body-md text-body-md text-on-surface-variant">A comprehensive audit of current formulations and documentation against target market standards.</p>
</div>
<!-- Step 2 -->
<div class="border-b-[3px] md:border-b-0 md:border-r-[3px] border-on-surface p-stack-lg group relative">
<span class="font-display-xl text-[48px] text-surface-container-highest absolute -top-8 left-4 -z-10 opacity-50">02</span>
<div class="font-label-caps text-label-caps text-secondary mb-4 uppercase">Phase 2</div>
<h4 class="font-subheading text-subheading text-on-surface mb-4 uppercase">Dossier Build</h4>
<p class="font-body-md text-body-md text-on-surface-variant">Meticulous compilation of technical files, safety data, and clinical evidence required for submission.</p>
</div>
<!-- Step 3 -->
<div class="border-b-[3px] md:border-b-0 md:border-r-[3px] border-on-surface p-stack-lg group relative">
<span class="font-display-xl text-[48px] text-surface-container-highest absolute -top-8 left-4 -z-10 opacity-50">03</span>
<div class="font-label-caps text-label-caps text-secondary mb-4 uppercase">Phase 3</div>
<h4 class="font-subheading text-subheading text-on-surface mb-4 uppercase">Submission</h4>
<p class="font-body-md text-body-md text-on-surface-variant">Direct liaison with notified bodies and regulatory authorities to manage technical queries.</p>
</div>
<!-- Step 4 -->
<div class="p-stack-lg group relative">
<span class="font-display-xl text-[48px] text-surface-container-highest absolute -top-8 left-4 -z-10 opacity-50">04</span>
<div class="font-label-caps text-label-caps text-secondary mb-4 uppercase">Phase 4</div>
<h4 class="font-subheading text-subheading text-on-surface mb-4 uppercase">Monitoring</h4>
<p class="font-body-md text-body-md text-on-surface-variant">Post-market surveillance and ongoing compliance maintenance as regulations evolve.</p>
</div>
</div>
</section>
<!-- Credibility Section -->
<section class="grid grid-cols-1 lg:grid-cols-12 border-y-[3px] border-on-surface bg-on-background text-surface">
<div class="lg:col-span-5 p-grid-margin border-b-[3px] lg:border-b-0 lg:border-r-[3px] border-on-surface flex flex-col justify-center">
<h2 class="font-headline-lg-mobile lg:font-headline-lg text-headline-lg-mobile lg:text-headline-lg mb-stack-lg uppercase leading-none">Unrivaled <br/>Pedigree</h2>
<p class="font-body-lg text-body-lg text-surface-dim mb-stack-xl">With over a decade of navigating the world's strictest regulatory bodies, our track record is 100% submission success rate for verified files.</p>
<div class="flex gap-grid-gutter">
<div class="flex flex-col">
<span class="font-display-xl text-[40px] font-black text-primary-container leading-none">12+</span>
<span class="font-label-caps text-label-caps uppercase text-surface-dim">Years Exp</span>
</div>
<div class="flex flex-col">
<span class="font-display-xl text-[40px] font-black text-primary-container leading-none">450+</span>
<span class="font-label-caps text-label-caps uppercase text-surface-dim">Products Approved</span>
</div>
</div>
</div>
<div class="lg:col-span-7 p-grid-margin grid grid-cols-2 md:grid-cols-3 gap-grid-gutter items-center grayscale opacity-70">
<!-- Cert Icons / Logos Placeholder -->
<div class="flex flex-col items-center p-stack-md border-[2px] border-surface/20">
<span class="material-symbols-outlined text-4xl mb-2" data-icon="verified">verified</span>
<span class="text-[10px] font-bold uppercase tracking-widest text-center">EU Certification Body</span>
</div>
<div class="flex flex-col items-center p-stack-md border-[2px] border-surface/20">
<span class="material-symbols-outlined text-4xl mb-2" data-icon="policy">policy</span>
<span class="text-[10px] font-bold uppercase tracking-widest text-center">FSA Registered</span>
</div>
<div class="flex flex-col items-center p-stack-md border-[2px] border-surface/20">
<span class="material-symbols-outlined text-4xl mb-2" data-icon="gavel">gavel</span>
<span class="text-[10px] font-bold uppercase tracking-widest text-center">Legal Compliance</span>
</div>
<div class="flex flex-col items-center p-stack-md border-[2px] border-surface/20">
<span class="material-symbols-outlined text-4xl mb-2" data-icon="shield">shield</span>
<span class="text-[10px] font-bold uppercase tracking-widest text-center">ISO 9001 Expert</span>
</div>
<div class="flex flex-col items-center p-stack-md border-[2px] border-surface/20">
<span class="material-symbols-outlined text-4xl mb-2" data-icon="biotech">biotech</span>
<span class="text-[10px] font-bold uppercase tracking-widest text-center">Lab Audit Accredited</span>
</div>
<div class="flex flex-col items-center p-stack-md border-[2px] border-surface/20">
<span class="material-symbols-outlined text-4xl mb-2" data-icon="public">public</span>
<span class="text-[10px] font-bold uppercase tracking-widest text-center">Global Reach</span>
</div>
</div>
</section>
<!-- Case Studies Section -->
<section class="px-grid-margin py-stack-xl bg-surface">
<h2 class="font-headline-lg-mobile lg:font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface mb-stack-xl uppercase text-center">Market Breakthroughs</h2>
<div class="grid grid-cols-1 lg:grid-cols-2 gap-grid-gutter">
<!-- Case 1 -->
<a class="border-[3px] border-on-surface p-0 flex flex-col md:flex-row brutalist-shadow hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform" href="/case-studies">
<div class="md:w-1/3 border-b-[3px] md:border-b-0 md:border-r-[3px] border-on-surface min-h-[200px]">
<img class="w-full h-full object-cover" data-alt="Close up high-end medical packaging aesthetic, minimalist white box with sophisticated typography and clinical graphics. Soft medical blue lighting, professional pharmaceutical photography style, 8k resolution, clean and sterile look." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqXleZANWLhGi2Jq5Wx9TMJqVyyDQRLIQpP0B1ydj6EC65gLfJ1DguQ3XVDTk93aiQEjksFRQYgYNLBDcTVpWQCSocLHOsMfhRemHWFDBfL9vFdo6mIcIkH9q2fY19HRLNhN9qtyJCfzEpatnXG8eExLJcxjhNnsEH0JRFkhIPcuV28_RnNpA0FfVxGcbSh0om1fWY1J71XLInV1wGKzjTkdG85cE6qLeAHahWebRPZCbrQq0MbGTKRJPhp8adTxdftOQY3FCqUeZ2"/>
</div>
<div class="md:w-2/3 p-stack-lg bg-surface">
<span class="bg-secondary px-2 py-1 text-[10px] text-surface font-bold uppercase mb-4 inline-block">Medical Device</span>
<h4 class="font-subheading text-subheading uppercase mb-2">MDR Transition for Class IIa</h4>
<p class="font-body-md text-body-md text-on-surface-variant mb-stack-md">Successfully navigated the transition for a leading dental implant manufacturer, reducing audit time by 35% through precision file prep.</p>
<div class="font-label-caps text-label-caps text-primary uppercase">Outcome: 100% File Acceptance</div>
</div>
</a>
<!-- Case 2 -->
<a class="border-[3px] border-on-surface p-0 flex flex-col md:flex-row brutalist-shadow hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform" href="/case-studies">
<div class="md:w-1/3 border-b-[3px] md:border-b-0 md:border-r-[3px] border-on-surface min-h-[200px]">
<img class="w-full h-full object-cover" data-alt="Macro photography of luxury skincare cream texture with professional product lighting. Aesthetic of high-end cosmetics, neutral background, sharp focus, 3px charcoal border style, neo-brutalist editorial layout, dramatic highlights." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyjGeArnf2JZtZnczMgXQQLsK27LZ7ADgnn9AwbSeOACxBx8w2_veveyhyq1YHPAErpl3cT2NKuItd0a_KFjQ5ITzKeTZoABK93ktqn1r9ThjoiNu_qv8cODuKa8l8BpYUEp4WnciomhIka2GSDhy7SjkVu0h4Cl5f0uoxVkqHknakRN0tDWhWVeoRvWOXkea__7-bjHxkkBnIpwOgMda2aDmpjj4Rb4ITC0Aj23fhNBv4h0jUIen-vOf9IaAGLMos6UXeJA-rIefO"/>
</div>
<div class="md:w-2/3 p-stack-lg bg-surface">
<span class="bg-primary px-2 py-1 text-[10px] text-surface font-bold uppercase mb-4 inline-block">Skincare Portfolio</span>
<h4 class="font-subheading text-subheading uppercase mb-2">UK/EU Market Expansion</h4>
<p class="font-body-md text-body-md text-on-surface-variant mb-stack-md">Consolidated PiF files for 120 SKUs, managing RP services and CPSR submissions for a rapid multi-territory launch.</p>
<div class="font-label-caps text-label-caps text-primary uppercase">Outcome: Market Launch 3 Months Early</div>
</div>
</a>
</div>
</section>
<!-- Consultation Booking Form -->
<section class="px-grid-margin py-stack-xl bg-surface-container">
<div class="grid grid-cols-1 lg:grid-cols-12 gap-grid-gutter items-start">
<div class="lg:col-span-5">
<h2 class="font-headline-lg-mobile lg:font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface mb-stack-lg uppercase leading-none">Ready for <br/>Compliance?</h2>
<p class="font-body-lg text-body-lg text-on-surface-variant mb-stack-lg">Request an initial consultation to discuss your product roadmap and regulatory requirements.</p>
<div class="space-y-4">
<div class="flex items-center gap-4">
<span class="material-symbols-outlined text-primary" data-icon="mail">mail</span>
<span class="font-ui-mono">strategy@agotacsaszar.com</span>
</div>
<div class="flex items-center gap-4">
<span class="material-symbols-outlined text-primary" data-icon="call">call</span>
<span class="font-ui-mono">+44 (0) 20 7946 0123</span>
</div>
<div class="flex items-center gap-4">
<span class="material-symbols-outlined text-primary" data-icon="location_on">location_on</span>
<span class="font-ui-mono">London | Budapest | Brussels</span>
</div>
</div>
</div>
<div class="lg:col-span-7 bg-surface border-[3px] border-on-surface p-stack-xl brutalist-shadow">
<form class="grid grid-cols-1 md:grid-cols-2 gap-grid-gutter">
<div class="flex flex-col gap-2">
<label class="font-label-caps text-label-caps uppercase text-on-surface">Full Name</label>
<input class="border-[3px] border-on-surface p-stack-md bg-surface font-ui-mono focus:ring-0 focus:bg-primary-container/10 outline-none" placeholder="John Doe" type="text"/>
</div>
<div class="flex flex-col gap-2">
<label class="font-label-caps text-label-caps uppercase text-on-surface">Company</label>
<input class="border-[3px] border-on-surface p-stack-md bg-surface font-ui-mono focus:ring-0 focus:bg-primary-container/10 outline-none" placeholder="Acme Biotech" type="text"/>
</div>
<div class="flex flex-col gap-2">
<label class="font-label-caps text-label-caps uppercase text-on-surface">Email Address</label>
<input class="border-[3px] border-on-surface p-stack-md bg-surface font-ui-mono focus:ring-0 focus:bg-primary-container/10 outline-none" placeholder="john@example.com" type="email"/>
</div>
<div class="flex flex-col gap-2">
<label class="font-label-caps text-label-caps uppercase text-on-surface">Sector</label>
<select class="border-[3px] border-on-surface p-stack-md bg-surface font-ui-mono focus:ring-0 focus:bg-primary-container/10 outline-none">
<option>Food Supplements</option>
<option>Cosmetics</option>
<option>Medical Devices</option>
<option>Other</option>
</select>
</div>
<div class="md:col-span-2 flex flex-col gap-2">
<label class="font-label-caps text-label-caps uppercase text-on-surface">Your Inquiry</label>
<textarea class="border-[3px] border-on-surface p-stack-md bg-surface font-ui-mono focus:ring-0 focus:bg-primary-container/10 outline-none" placeholder="Briefly describe your product and target market..." rows="4"></textarea>
</div>
<div class="md:col-span-2 mt-stack-md">
<button class="w-full bg-on-background text-surface font-label-caps text-label-caps py-stack-md border-[3px] border-on-surface brutalist-active uppercase text-lg hover:bg-primary-container hover:text-on-primary-fixed transition-colors" type="submit">
                            Submit Inquiry
                        </button>
</div>
</form>
</div>
</div>
</section>
<!-- Footer -->

<script>
        // Micro-interactions for buttons
        document.querySelectorAll('button, a').forEach(el => {
            el.addEventListener('mousedown', () => {
                el.classList.add('translate-y-0.5', 'translate-x-0.5');
            });
            el.addEventListener('mouseup', () => {
                el.classList.remove('translate-y-0.5', 'translate-x-0.5');
            });
        });

        // Simple scroll reveal for borders
        const observerOptions = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100');
                    entry.target.classList.remove('opacity-0');
                }
            });
        }, observerOptions);

        document.querySelectorAll('section').forEach(section => {
            section.classList.add('transition-opacity', 'duration-1000');
        });
    </script>`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Agota Csaszar | Regulatory Services" },
      { name: "description", content: "Agota Csaszar | Regulatory Services" },
      { property: "og:title", content: "Agota Csaszar | Regulatory Services" },
      { property: "og:description", content: "Agota Csaszar | Regulatory Services" },
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
