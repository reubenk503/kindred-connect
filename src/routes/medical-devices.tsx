import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

const HTML = `<!-- TopNavBar -->

<main class="w-full">
<!-- Hero Section -->
<section class="px-grid-margin py-stack-xl grid grid-cols-1 md:grid-cols-12 gap-grid-gutter border-b-[3px] border-on-surface bg-surface">
<div class="md:col-span-8 flex flex-col justify-center">
<span class="font-label-caps text-label-caps text-secondary-container mb-stack-md px-3 py-1 border-[2px] border-on-surface inline-block w-fit">REGULATORY FRAMEWORK</span>
<h1 class="font-display-xl-mobile md:font-display-xl text-display-xl-mobile md:text-display-xl mb-stack-lg leading-[0.9] uppercase">Medical Devices <br/><span class="text-primary italic">Compliance.</span></h1>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                    Navigating the shift from MDD to MDR and the implementation of UKCA. We provide surgical precision in regulatory strategy, technical documentation, and quality management systems for innovators.
                </p>
<div class="mt-stack-xl flex flex-wrap gap-stack-md">
<a class="bg-primary-container text-on-primary-container px-8 py-4 border-[3px] border-on-surface font-label-caps text-lg rounded-full brutalist-shadow brutalist-active inline-block" href="/contact">BOOK CONSULTATION</a>
<button class="bg-surface text-on-surface px-8 py-4 border-[3px] border-on-surface font-label-caps text-lg rounded-full brutalist-shadow brutalist-active">DOWNLOAD GUIDE</button>
</div>
</div>
<div class="md:col-span-4 relative h-[400px] md:h-auto">
<div class="absolute inset-0 border-[3px] border-on-surface bg-secondary-container z-0"></div>
<img class="absolute -top-4 -left-4 w-full h-full object-cover border-[3px] border-on-surface z-10" data-alt="A professional medical device prototype, possibly a high-tech robotic surgical tool or a sleek diagnostic scanner, shot in a high-contrast editorial style. The lighting is crisp, emphasizing metallic textures and smooth white surfaces. The background is a clean, minimalist laboratory setting with teal and charcoal color accents. The aesthetic is ultra-modern and clinical yet visually striking, reflecting regulatory precision." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSKWrVSmslHwMG4awUINAHVU_-PoYWy_nnahdJ8qlEKM7trPLlzwo3lpLJBuK5JXydk6lmTMwOHU9pU14GJEMfWfWaP4OWWYji3AnlWjvMVB7oaHPE5VgAH31qYJXxjgaxPb_58qdN1VyaAWjrVNAjEruX8FPB6CJAUqQGEBj0Y2C87bqsYMufu1ML1dCqQ6AkObnafgwAIs0bBDBKiexRhU19AAOmE34H62CnLvOzOjtgraX5yAQjtlTysNzCeB5f6FuHr3XxHSfg"/>
</div>
</section>
<!-- Classification Grid -->
<section class="px-grid-margin py-stack-xl bg-surface-container">
<div class="mb-stack-xl text-center md:text-left">
<h2 class="font-headline-lg text-headline-lg uppercase mb-stack-sm">MDR / UKCA Classifications</h2>
<p class="font-body-md text-body-md text-on-surface-variant">The pathway to market depends entirely on your device's risk profile.</p>
</div>
<div class="grid grid-cols-1 md:grid-cols-4 gap-grid-gutter">
<!-- Class I -->
<div class="bg-surface border-[3px] border-on-surface p-stack-lg brutalist-shadow-hover transition-all">
<span class="font-display-xl text-4xl text-primary mb-stack-md block">I</span>
<h3 class="font-subheading text-subheading uppercase mb-stack-sm">Class I (Low Risk)</h3>
<p class="font-body-md text-body-md mb-stack-lg">Non-invasive equipment like wheelchairs, stethoscopes, and bandages. Usually self-declaration.</p>
<div class="pt-stack-md border-t-[3px] border-on-surface">
<span class="font-ui-mono text-ui-mono uppercase text-secondary">Self-Certified</span>
</div>
</div>
<!-- Class IIa -->
<div class="bg-surface border-[3px] border-on-surface p-stack-lg brutalist-shadow-hover transition-all">
<span class="font-display-xl text-4xl text-primary mb-stack-md block">IIa</span>
<h3 class="font-subheading text-subheading uppercase mb-stack-sm">Class IIa (Medium)</h3>
<p class="font-body-md text-body-md mb-stack-lg">Hearing aids, dental filling materials, or surgical clamps. Requires Notified Body intervention.</p>
<div class="pt-stack-md border-t-[3px] border-on-surface">
<span class="font-ui-mono text-ui-mono uppercase text-secondary">Audited Quality</span>
</div>
</div>
<!-- Class IIb -->
<div class="bg-surface border-[3px] border-on-surface p-stack-lg brutalist-shadow-hover transition-all">
<span class="font-display-xl text-4xl text-primary mb-stack-md block">IIb</span>
<h3 class="font-subheading text-subheading uppercase mb-stack-sm">Class IIb (Medium-High)</h3>
<p class="font-body-md text-body-md mb-stack-lg">Infusion pumps, ventilators, or bone plates. Intense scrutiny of technical files.</p>
<div class="pt-stack-md border-t-[3px] border-on-surface">
<span class="font-ui-mono text-ui-mono uppercase text-secondary">Design Dossier</span>
</div>
</div>
<!-- Class III -->
<div class="bg-surface border-[3px] border-on-surface p-stack-lg brutalist-shadow-hover transition-all">
<span class="font-display-xl text-4xl text-primary mb-stack-md block">III</span>
<h3 class="font-subheading text-subheading uppercase mb-stack-sm">Class III (High Risk)</h3>
<p class="font-body-md text-body-md mb-stack-lg">Pacemakers, heart valves, or neurostimulators. Maximum level of regulatory oversight.</p>
<div class="pt-stack-md border-t-[3px] border-on-surface">
<span class="font-ui-mono text-ui-mono uppercase text-secondary">Clinical Trials</span>
</div>
</div>
</div>
</section>
<!-- Process Breakdown -->
<section class="py-stack-xl border-y-[3px] border-on-surface bg-white">
<div class="px-grid-margin grid grid-cols-1 md:grid-cols-12 gap-grid-gutter">
<div class="md:col-span-5">
<h2 class="font-display-xl-mobile md:font-display-xl text-display-xl-mobile md:text-display-xl uppercase sticky top-32">The <span class="text-secondary-container">Pathway</span> To Approval</h2>
</div>
<div class="md:col-span-7 space-y-stack-xl">
<div class="flex gap-stack-lg items-start border-b-[3px] border-on-surface pb-stack-lg">
<div class="bg-primary text-white w-12 h-12 flex-shrink-0 flex items-center justify-center font-bold text-xl border-[3px] border-on-surface">01</div>
<div>
<h4 class="font-subheading text-subheading uppercase mb-2">Classification &amp; Strategy</h4>
<p class="font-body-md text-body-md text-on-surface-variant">We identify the correct regulatory class and define the most efficient route for CE/UKCA marking based on your target markets.</p>
</div>
</div>
<div class="flex gap-stack-lg items-start border-b-[3px] border-on-surface pb-stack-lg">
<div class="bg-primary text-white w-12 h-12 flex-shrink-0 flex items-center justify-center font-bold text-xl border-[3px] border-on-surface">02</div>
<div>
<h4 class="font-subheading text-subheading uppercase mb-2">Quality Management System (ISO 13485)</h4>
<p class="font-body-md text-body-md text-on-surface-variant">Building or auditing your QMS to ensure it meets the rigorous standards of MDR Annex IX and UK MDR 2002.</p>
</div>
</div>
<div class="flex gap-stack-lg items-start border-b-[3px] border-on-surface pb-stack-lg">
<div class="bg-primary text-white w-12 h-12 flex-shrink-0 flex items-center justify-center font-bold text-xl border-[3px] border-on-surface">03</div>
<div>
<h4 class="font-subheading text-subheading uppercase mb-2">Technical Documentation</h4>
<p class="font-body-md text-body-md text-on-surface-variant">Drafting the Technical File or Design Dossier, including Risk Management (ISO 14971) and Clinical Evaluation Reports (CER).</p>
</div>
</div>
<div class="flex gap-stack-lg items-start">
<div class="bg-primary text-white w-12 h-12 flex-shrink-0 flex items-center justify-center font-bold text-xl border-[3px] border-on-surface">04</div>
<div>
<h4 class="font-subheading text-subheading uppercase mb-2">Submission &amp; Notified Body Liaison</h4>
<p class="font-body-md text-body-md text-on-surface-variant">Managing the audit process with Notified Bodies or UK Approved Bodies until the certificate is issued.</p>
</div>
</div>
</div>
</div>
</section>
<!-- FAQ Section -->
<section class="px-grid-margin py-stack-xl bg-surface-container-low">
<h2 class="font-headline-lg text-headline-lg uppercase mb-stack-xl text-center">Frequently Asked Questions</h2>
<div class="max-w-4xl mx-auto space-y-stack-md">
<div class="bg-surface border-[3px] border-on-surface p-6 group cursor-pointer" onclick="this.querySelector('.faq-content').classList.toggle('hidden')">
<div class="flex justify-between items-center">
<h4 class="font-subheading text-subheading uppercase">Can I use my CE mark in the UK indefinitely?</h4>
<span class="material-symbols-outlined group-hover:rotate-180 transition-transform">expand_more</span>
</div>
<div class="faq-content hidden mt-4 pt-4 border-t-[2px] border-on-surface font-body-md text-body-md">
                        Currently, the UK government has extended recognition of CE marks for most medical devices, but long-term transition to UKCA is mandatory for sustained market access. We help you manage this dual-compliance strategy.
                    </div>
</div>
<div class="bg-surface border-[3px] border-on-surface p-6 group cursor-pointer" onclick="this.querySelector('.faq-content').classList.toggle('hidden')">
<div class="flex justify-between items-center">
<h4 class="font-subheading text-subheading uppercase">What is a Person Responsible for Regulatory Compliance (PRRC)?</h4>
<span class="material-symbols-outlined group-hover:rotate-180 transition-transform">expand_more</span>
</div>
<div class="faq-content hidden mt-4 pt-4 border-t-[2px] border-on-surface font-body-md text-body-md">
                        MDR Article 15 requires every manufacturer to have a PRRC with specific qualifications. We provide guidance on selecting, training, or outsourcing this critical role.
                    </div>
</div>
<div class="bg-surface border-[3px] border-on-surface p-6 group cursor-pointer" onclick="this.querySelector('.faq-content').classList.toggle('hidden')">
<div class="flex justify-between items-center">
<h4 class="font-subheading text-subheading uppercase">Does Class I require a Notified Body?</h4>
<span class="material-symbols-outlined group-hover:rotate-180 transition-transform">expand_more</span>
</div>
<div class="faq-content hidden mt-4 pt-4 border-t-[2px] border-on-surface font-body-md text-body-md">
                        Standard Class I devices are self-certified. However, Class I Sterile (Is), Measuring (Im), or Reusable Surgical (Ir) devices DO require Notified Body involvement for the specific aspects of their classification.
                    </div>
</div>
</div>
</section>
<!-- CTA Section -->
<section class="px-grid-margin py-stack-xl bg-on-surface text-surface text-center relative overflow-hidden">
<div class="relative z-10 max-w-4xl mx-auto">
<h2 class="font-display-xl-mobile md:font-display-xl text-display-xl-mobile md:text-display-xl uppercase mb-stack-lg">Ready for the <span class="text-primary-fixed">Audit?</span></h2>
<p class="font-body-lg text-body-lg mb-stack-xl opacity-80">Don't let regulatory hurdles stall your innovation. Get a comprehensive compliance roadmap today.</p>
<div class="inline-block brutalist-shadow">
<a class="bg-secondary-container text-on-surface px-12 py-6 border-[3px] border-surface font-headline-lg text-2xl uppercase hover:bg-primary-container transition-colors inline-block" href="/contact">
                        Book Your Consultation
                    </a>
</div>
</div>
</section>
</main>
<!-- Footer -->

<script>
        // Simple micro-interaction for buttons
        document.querySelectorAll('.brutalist-active').forEach(button => {
            button.addEventListener('mousedown', () => {
                button.style.transform = 'translate(2px, 2px)';
                button.style.boxShadow = '2px 2px 0px 0px #151d1b';
            });
            button.addEventListener('mouseup', () => {
                button.style.transform = '';
                button.style.boxShadow = '';
            });
            button.addEventListener('mouseleave', () => {
                button.style.transform = '';
                button.style.boxShadow = '';
            });
        });
    </script>`;

export const Route = createFileRoute("/medical-devices")({
  head: () => ({
    meta: [
      { title: "Medical Devices Compliance | Agota Csaszar" },
      { name: "description", content: "Medical Devices Compliance | Agota Csaszar" },
      { property: "og:title", content: "Medical Devices Compliance | Agota Csaszar" },
      { property: "og:description", content: "Medical Devices Compliance | Agota Csaszar" },
    ],
  }),
  component: Page,
});

function Page() {
  useEffect(() => {
    // @ts-expect-error - tailwind cdn
    if (window.tailwind?.config) return;
  }, []);
  return <div className="bg-background text-on-surface selection:bg-primary-container selection:text-on-primary-container overflow-x-hidden" dangerouslySetInnerHTML={{ __html: HTML }} />;
}
