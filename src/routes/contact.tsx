import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

const HTML = `<!-- TopNavBar -->

<main class="w-full">
<!-- Hero Section -->
<section class="px-grid-margin py-stack-xl border-b-[3px] border-on-surface bg-surface-container-low">
<div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-grid-gutter items-end">
<div class="md:col-span-8">
<h1 class="font-display-xl text-display-xl-mobile md:text-display-xl uppercase leading-none mb-stack-lg">
                    Let's Talk <br/><span class="text-primary">Compliance</span>.
                </h1>
<p class="font-body-lg text-body-lg max-w-2xl">
                    High-stakes regulatory navigation requires more than just a consultant. It requires a partner. Reach out to secure your operational integrity.
                </p>
</div>
<div class="md:col-span-4 flex md:justify-end">
<div class="p-6 border-[3px] border-on-surface bg-tertiary-container brutalist-shadow">
<span class="font-label-caps text-label-caps block mb-2">RESPONSE TIME</span>
<span class="font-headline-lg text-3xl font-black">&lt; 12 HOURS</span>
</div>
</div>
</div>
</section>
<!-- Main Content Area: Asymmetric Grid -->
<section class="px-grid-margin py-stack-xl max-w-7xl mx-auto">
<div class="grid grid-cols-1 lg:grid-cols-12 gap-16">
<!-- Left Column: Contact Form -->
<div class="lg:col-span-7">
<h2 class="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-12 border-b-[3px] border-on-surface pb-4">Direct Inquiry</h2>
<form class="space-y-8" onsubmit="event.preventDefault(); alert('Message sent successfully!');">
<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
<div class="flex flex-col gap-2">
<label class="font-label-caps text-label-caps uppercase">Full Name</label>
<input class="bg-surface-container-highest border-[3px] border-on-surface p-4 font-ui-mono focus:outline-none focus:bg-primary-fixed focus:ring-0 placeholder:text-outline" placeholder="John Doe" required="" type="text"/>
</div>
<div class="flex flex-col gap-2">
<label class="font-label-caps text-label-caps uppercase">Email Address</label>
<input class="bg-surface-container-highest border-[3px] border-on-surface p-4 font-ui-mono focus:outline-none focus:bg-primary-fixed focus:ring-0 placeholder:text-outline" placeholder="john@company.com" required="" type="email"/>
</div>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
<div class="flex flex-col gap-2">
<label class="font-label-caps text-label-caps uppercase">Company</label>
<input class="bg-surface-container-highest border-[3px] border-on-surface p-4 font-ui-mono focus:outline-none focus:bg-primary-fixed focus:ring-0 placeholder:text-outline" placeholder="Acme Corp" type="text"/>
</div>
<div class="flex flex-col gap-2">
<label class="font-label-caps text-label-caps uppercase">Service Required</label>
<select class="bg-surface-container-highest border-[3px] border-on-surface p-4 font-ui-mono focus:outline-none focus:bg-primary-fixed focus:ring-0">
<option>Market Entry Strategy</option>
<option>Licensing Support</option>
<option>EU Regulatory Audit</option>
<option>Ongoing Compliance</option>
</select>
</div>
</div>
<div class="flex flex-col gap-2">
<label class="font-label-caps text-label-caps uppercase">Message</label>
<textarea class="bg-surface-container-highest border-[3px] border-on-surface p-4 font-ui-mono focus:outline-none focus:bg-primary-fixed focus:ring-0 placeholder:text-outline" placeholder="Describe your regulatory challenge..." required="" rows="6"></textarea>
</div>
<button class="w-full md:w-auto bg-primary-container border-[3px] border-on-surface px-12 py-5 font-headline-lg text-2xl brutalist-shadow brutalist-button-hover transition-transform active:translate-y-1" type="submit">
                        SEND DISPATCH
                    </button>
</form>
</div>
<!-- Right Column: Booking & Direct Info -->
<div class="lg:col-span-5 space-y-16">
<!-- Booking Component -->
<div class="border-[3px] border-on-surface bg-surface-container-highest brutalist-shadow p-1">
<div class="bg-on-surface text-surface p-4 flex justify-between items-center">
<h3 class="font-label-caps text-label-caps">SCHEDULE STRATEGY CALL</h3>
<span class="material-symbols-outlined">calendar_today</span>
</div>
<div class="p-6 bg-surface">
<div class="mb-6">
<p class="font-subheading text-subheading mb-1">15 Min Consultation</p>
<p class="font-body-md text-on-surface-variant">Initial compliance assessment and scope alignment.</p>
</div>
<!-- Calendar Placeholder -->
<div class="grid grid-cols-7 gap-1 mb-6">
<div class="text-center font-ui-mono text-xs opacity-50 py-2">M</div>
<div class="text-center font-ui-mono text-xs opacity-50 py-2">T</div>
<div class="text-center font-ui-mono text-xs opacity-50 py-2">W</div>
<div class="text-center font-ui-mono text-xs opacity-50 py-2">T</div>
<div class="text-center font-ui-mono text-xs opacity-50 py-2">F</div>
<div class="text-center font-ui-mono text-xs opacity-50 py-2">S</div>
<div class="text-center font-ui-mono text-xs opacity-50 py-2">S</div>
<div class="h-10 flex items-center justify-center font-ui-mono opacity-20">28</div>
<div class="h-10 flex items-center justify-center font-ui-mono opacity-20">29</div>
<div class="h-10 flex items-center justify-center font-ui-mono opacity-20">30</div>
<div class="h-10 flex items-center justify-center font-ui-mono border border-outline-variant hover:bg-primary-fixed cursor-pointer">1</div>
<div class="h-10 flex items-center justify-center font-ui-mono border border-outline-variant hover:bg-primary-fixed cursor-pointer">2</div>
<div class="h-10 flex items-center justify-center font-ui-mono opacity-20">3</div>
<div class="h-10 flex items-center justify-center font-ui-mono opacity-20">4</div>
<div class="h-10 flex items-center justify-center font-ui-mono border border-outline-variant hover:bg-primary-fixed cursor-pointer">5</div>
<div class="h-10 flex items-center justify-center font-ui-mono border border-outline-variant hover:bg-primary-fixed cursor-pointer bg-primary text-white">6</div>
<div class="h-10 flex items-center justify-center font-ui-mono border border-outline-variant hover:bg-primary-fixed cursor-pointer">7</div>
<div class="h-10 flex items-center justify-center font-ui-mono border border-outline-variant hover:bg-primary-fixed cursor-pointer">8</div>
<div class="h-10 flex items-center justify-center font-ui-mono border border-outline-variant hover:bg-primary-fixed cursor-pointer">9</div>
<div class="h-10 flex items-center justify-center font-ui-mono opacity-20">10</div>
<div class="h-10 flex items-center justify-center font-ui-mono opacity-20">11</div>
</div>
<button class="w-full border-[3px] border-on-surface py-3 font-label-caps text-label-caps hover:bg-on-surface hover:text-surface transition-colors" onclick="alert('Time selection logic would trigger here.');">
                            SELECT TIME
                        </button>
</div>
</div>
<!-- Contact Details -->
<div class="space-y-8">
<div>
<h3 class="font-label-caps text-label-caps text-primary border-b-[3px] border-primary inline-block mb-6">GLOBAL HQ</h3>
<div class="space-y-2">
<p class="font-subheading text-subheading">Budapest, Hungary</p>
<p class="font-body-md text-on-surface-variant">Andrássy út 42, 1061</p>
<p class="font-body-md text-on-surface-variant">+36 (1) 450-2800</p>
</div>
</div>
<div>
<h3 class="font-label-caps text-label-caps text-primary border-b-[3px] border-primary inline-block mb-6">SATELLITE OFFICE</h3>
<div class="space-y-2">
<p class="font-subheading text-subheading">Brussels, Belgium</p>
<p class="font-body-md text-on-surface-variant">Rue de la Loi 175, 1048</p>
</div>
</div>
<div>
<h3 class="font-label-caps text-label-caps text-primary border-b-[3px] border-primary inline-block mb-6">EMAIL</h3>
<p class="font-subheading text-subheading underline decoration-4 underline-offset-4 decoration-primary-container">hello@agotacsaszar.com</p>
</div>
</div>
</div>
</div>
</section>
<!-- Map Placeholder -->
<section class="px-grid-margin py-stack-xl">
<div class="h-[400px] w-full border-[3px] border-on-surface relative grayscale contrast-125 overflow-hidden">
<div class="w-full h-full bg-cover bg-center" data-alt="A neo-brutalist styled map of Budapest and Brussels in high contrast black and white with teal markers indicating office locations." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuD9PffjQJG_no4GPFvbYk5yk92qTjskwvixLBooZNerQB22oBCNSLL0V13rFVBtenDoNp6wV-mAHSHYkwRdjoI_bM0dGDi8LoWPYQHkPfbuDwSroT1Os5oOWR4qihae3EJePF5GLhroS3wcyyYwCY4Se1-kxBEkWCdefdrE483pmIjgCO_-Mvy_VnK2YNSGHu-aTWCJB6IIT-FGZFfFsTAdITOzT0vT6kyMdyop6ky2Xvc17hLxlWhpAmNf3CCNMAxTPVDsCV_JeBqu')"></div>
<div class="absolute bottom-10 right-10 bg-on-surface text-surface p-6 border-[3px] border-surface brutalist-shadow">
<p class="font-label-caps text-label-caps mb-2">CURRENT LOCATION</p>
<p class="font-headline-lg text-2xl">BUDAPEST (CET)</p>
</div>
</div>
</section>
</main>
<!-- Footer -->

<script>
    // Form micro-interaction
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            const label = input.parentElement.querySelector('label');
            if(label) label.style.color = '#006b5c';
        });
        input.addEventListener('blur', () => {
            const label = input.parentElement.querySelector('label');
            if(label) label.style.color = '';
        });
    });

    // Simple button feedback
    document.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', function(e) {
            this.classList.add('scale-95');
            setTimeout(() => this.classList.remove('scale-95'), 100);
        });
    });
</script>`;

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Booking | Agota Csaszar Regulatory Services" },
      { name: "description", content: "Contact & Booking | Agota Csaszar Regulatory Services" },
      { property: "og:title", content: "Contact & Booking | Agota Csaszar Regulatory Services" },
      { property: "og:description", content: "Contact & Booking | Agota Csaszar Regulatory Services" },
    ],
  }),
  component: Page,
});

function Page() {
  useEffect(() => {
    // @ts-expect-error - tailwind cdn
    if (window.tailwind?.config) return;
  }, []);
  return <div className="bg-surface text-on-surface selection:bg-primary-container selection:text-on-primary-container" dangerouslySetInnerHTML={{ __html: HTML }} />;
}
