import Image from "next/image";
import { QuoteForm } from "@/components/QuoteForm";

const paintingServices = [
  {
    title: "Interior Painting",
    copy: "Walls, ceilings, trim, doors, baseboards, casings, feature walls, and detailed repaint work.",
  },
  {
    title: "Exterior Painting",
    copy: "Exterior trim, doors, siding, railings, shutters, fences, porches, and other painted exterior surfaces.",
  },
];

const woodServices = [
  {
    title: "New Wood Staining",
    copy: "New decks, fences, pergolas, gazebos, stairs, railings, gates, and exterior woodwork.",
  },
  {
    title: "Wood Refinishing",
    copy: "Weathered decks, fences, pergolas, gazebos, stairs, railings, gates, and exterior wood that needs to be refreshed.",
  },
];

const processSteps = [
  "Request quote\nReceive assessment",
  "Review & accept quote",
  "Prep & Start Project",
  "Project Complete",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-linen text-ink">
      <Header />

      <section className="mx-auto grid max-w-7xl gap-14 px-6 pb-24 pt-14 sm:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-12 lg:pb-32 lg:pt-20">
        <div className="flex flex-col justify-center">
          <div className="mb-8 h-px w-24 bg-gold" />
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-gold">
            Premium local paint and stain work
          </p>
          <h1 className="max-w-4xl font-serif text-4xl leading-[1.08] text-ink sm:text-5xl lg:text-6xl">
            Professional Painting & Staining in Oakville, Burlington &
            Surrounding Areas
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-charcoal/82">
            Refined interior repainting, durable exterior finishes, and careful
            wood staining with clear communication from first photo to final
            cleanup.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#quote"
              className="inline-flex min-h-12 items-center justify-center border border-gold bg-gold px-7 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:border-ink hover:bg-ink"
            >
              Request Quote
            </a>
            <a
              href="#services"
              className="inline-flex min-h-12 items-center justify-center border border-black/20 px-7 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-ink transition hover:border-gold hover:text-gold"
            >
              View Services
            </a>
          </div>
        </div>

        <div className="flex items-center justify-center lg:justify-end">
          <div className="relative aspect-square w-full max-w-[34rem]">
            <Image
              src="/brand/emblem-transparent-trimmed.png"
              alt="Wimmer Works Paint & Stain emblem"
              fill
              priority
              sizes="(min-width: 1024px) 34rem, 80vw"
              className="object-contain p-10 sm:p-14"
            />
          </div>
        </div>
      </section>

      <Section id="services" label="Services" title="Painting and staining with careful prep behind every finish.">
        <div className="space-y-20 lg:space-y-28">
          <ServiceShowcase
            eyebrow="Paint work"
            title="Interior and exterior painting"
            intro="Careful prep, steady communication, and a polished finish make the work feel considered from start to finish. The goal is simple: surfaces that look refined, hold up well, and make the space feel properly cared for."
            services={paintingServices}
            images={[
              {
                src: "/photos/interior-painting-optimized.jpg",
                alt: "Interior wall being painted with a roller",
                label: "Interior",
              },
              {
                src: "/photos/exterior-painting-optimized.jpg",
                alt: "Exterior house wall being painted",
                label: "Exterior",
              },
            ]}
          />

          <section className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            <div className="self-center">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gold">
                Wood work
              </p>
              <h3 className="mt-4 font-serif text-3xl leading-tight text-ink sm:text-4xl">
                New staining and wood refinishing
              </h3>
              <p className="mt-5 text-lg leading-8 text-charcoal/82">
                Wood needs the right preparation before it can take a finish
                properly. Washing, sanding, and careful stain work help protect
                the surface, bring back the natural grain, and give outdoor
                spaces a cleaner, more finished look.
              </p>
              <div className="mt-8 grid gap-6">
                {woodServices.map((service) => (
                  <ServiceCopy key={service.title} service={service} />
                ))}
              </div>
            </div>

            <div className="grid gap-5">
              <figure className="relative min-h-[24rem] overflow-hidden bg-white shadow-soft">
                <Image
                  src="/photos/stained-deck-optimized.jpg"
                  alt="Freshly stained backyard deck"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
                <figcaption className="absolute left-4 top-4 bg-linen px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-ink">
                  New wood staining
                </figcaption>
              </figure>

              <div className="grid gap-5 sm:grid-cols-2">
                <BeforeAfterImage
                  src="/photos/weathered-deck-optimized.jpg"
                  alt="Weathered wood deck before refinishing"
                  label="Before"
                />
                <BeforeAfterImage
                  src="/photos/refinished-deck-optimized.jpg"
                  alt="Clean prepared wood deck after washing and sanding"
                  label="After"
                />
              </div>
            </div>
          </section>
        </div>
      </Section>

      <Section id="process" label="Process" title="Simple steps, clear expectations, tidy work.">
        <div className="grid gap-5 md:grid-cols-4">
          {processSteps.map((step, index) => (
            <div key={step} className="border-t border-black/15 pt-6">
              <p className="text-sm font-semibold text-gold">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-5 whitespace-pre-line font-serif text-2xl text-ink">
                {step}
              </h3>
            </div>
          ))}
        </div>
      </Section>

      <section id="quote" className="bg-parchment px-6 py-20 sm:px-10 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gold">
              Quote request
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-ink sm:text-5xl">
              Tell us about the work.
            </h2>
            <p className="mt-6 text-lg leading-8 text-charcoal/82">
              Send the essentials and Wimmer Works will follow up with next
              steps, timing, and a clear quote.
            </p>
          </div>
          <div className="bg-linen p-6 shadow-soft sm:p-8 lg:p-10">
            <QuoteForm />
          </div>
        </div>
      </section>

      <footer className="px-6 py-10 sm:px-10 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-black/10 pt-8 text-sm text-charcoal/70 sm:flex-row sm:items-center sm:justify-between">
          <p>Wimmer Works Paint & Stain</p>
          <p>Oakville, Burlington & surrounding areas</p>
        </div>
      </footer>
    </main>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-black/10 bg-linen/92 px-6 py-4 backdrop-blur sm:px-10 lg:px-12">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
        <a href="#" aria-label="Wimmer Works Paint & Stain home" className="block shrink-0">
          <Image
            src="/brand/logo-transparent-trimmed.png"
            alt="Wimmer Works Paint & Stain"
            width={332}
            height={98}
            className="h-10 w-auto max-w-[13rem] object-contain sm:h-12 sm:max-w-[17rem]"
            priority
          />
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
          <a className="text-sm text-charcoal/75 transition hover:text-gold" href="#services">
            Services
          </a>
          <a className="text-sm text-charcoal/75 transition hover:text-gold" href="#process">
            Process
          </a>
          <a className="text-sm text-charcoal/75 transition hover:text-gold" href="#quote">
            Quote
          </a>
        </nav>
      </div>
    </header>
  );
}

function ServiceShowcase({
  eyebrow,
  title,
  intro,
  services,
  images,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  services: typeof paintingServices;
  images: Array<{
    src: string;
    alt: string;
    label: string;
  }>;
}) {
  return (
    <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
      <div className="grid gap-5 sm:grid-cols-2">
        {images.map((image) => (
          <figure
            key={image.src}
            className="relative min-h-[26rem] overflow-hidden bg-white shadow-soft"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 32vw, 100vw"
              className="object-cover"
            />
            <figcaption className="absolute left-4 top-4 bg-linen px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-ink">
              {image.label}
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="self-center">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gold">
          {eyebrow}
        </p>
        <h3 className="mt-4 font-serif text-3xl leading-tight text-ink sm:text-4xl">
          {title}
        </h3>
        <p className="mt-5 text-lg leading-8 text-charcoal/82">{intro}</p>
        <div className="mt-8 grid gap-6">
          {services.map((service) => (
            <ServiceCopy key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCopy({
  service,
}: {
  service: { title: string; copy: string };
}) {
  return (
    <article className="border-t border-black/15 pt-5">
      <h4 className="font-serif text-2xl text-ink">{service.title}</h4>
      <p className="mt-3 leading-7 text-charcoal/80">{service.copy}</p>
    </article>
  );
}

function BeforeAfterImage({
  src,
  alt,
  label,
}: {
  src: string;
  alt: string;
  label: string;
}) {
  return (
    <figure className="relative min-h-[18rem] overflow-hidden bg-white shadow-soft">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 22vw, 100vw"
        className="object-cover"
      />
      <figcaption className="absolute left-4 top-4 bg-linen px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-ink">
        {label}
      </figcaption>
    </figure>
  );
}

function Section({
  id,
  label,
  title,
  children,
}: {
  id: string;
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="px-6 py-20 sm:px-10 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gold">
            {label}
          </p>
          <h2 className="mt-5 font-serif text-4xl leading-tight text-ink sm:text-5xl">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}
