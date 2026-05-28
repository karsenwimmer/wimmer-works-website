import Image from "next/image";
import { QuoteForm } from "@/components/QuoteForm";

type ServicePhoto = {
  src: string;
  alt: string;
  label: string;
};

type PaintingService = {
  title: string;
  copy: string;
  image: ServicePhoto;
};

type WoodService =
  | {
      kind: "single";
      title: string;
      copy: string;
      image: ServicePhoto;
    }
  | {
      kind: "splitBeforeAfter";
      title: string;
      copy: string;
      image: {
        src: string;
        alt: string;
      };
    };

const paintingServices: PaintingService[] = [
  {
    title: "Interior Painting",
    copy: "Walls, ceilings, trim, doors, baseboards, casings, feature walls, and detailed repaint work.",
    image: {
      src: "/photos/interior-painting-optimized.jpg",
      alt: "Interior wall being painted with a roller",
      label: "Interior",
    },
  },
  {
    title: "Exterior Painting",
    copy: "Exterior trim, doors, siding, railings, shutters, fences, porches, and other painted exterior surfaces.",
    image: {
      src: "/photos/exterior-painting-optimized.jpg",
      alt: "Exterior house wall being painted",
      label: "Exterior",
    },
  },
];

const woodServices: WoodService[] = [
  {
    kind: "single",
    title: "New Wood Staining",
    copy: "New decks, fences, pergolas, gazebos, stairs, railings, gates, and exterior woodwork.",
    image: {
      src: "/photos/new-wood-red-stain.jpg",
      alt: "Freshly stained red-toned backyard deck",
      label: "New wood staining",
    },
  },
  {
    kind: "splitBeforeAfter",
    title: "Wood Refinishing",
    copy: "Weathered decks, fences, pergolas, gazebos, stairs, railings, gates, and exterior wood that needs to be refreshed.",
    image: {
      src: "/photos/wood-refinishing-split.jpg",
      alt: "Backyard deck before and after wood refinishing",
    },
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

      <section className="relative isolate flex min-h-[calc(100svh-3.5rem)] items-center overflow-hidden px-6 pb-20 pt-36 sm:px-10 sm:pt-40 lg:min-h-[680px] lg:px-12 lg:pb-24">
        <Image
          src="/photos/hero-paint-wall.png"
          alt="Interior wall mid-paint with ladder, paint buckets, and drop cloth"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-20 object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-linen/95 via-linen/70 to-linen/10" />

        <div className="mx-auto w-full max-w-7xl">
          <div className="max-w-2xl">
            <div className="mb-8 h-px w-24 bg-gold" />
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-gold">
              Premium local paint and stain work
            </p>
            <h1 className="font-serif text-4xl leading-[1.08] text-ink sm:text-5xl lg:text-6xl">
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
        </div>
      </section>

      <Section id="services" label="Services" title="Painting and staining with careful prep behind every finish.">
        <div className="space-y-20 lg:space-y-28">
          <ServiceShowcase
            eyebrow="Paint work"
            title="Interior and exterior painting"
            intro="Careful prep, steady communication, and a polished finish make the work feel considered from start to finish. The goal is simple: surfaces that look refined, hold up well, and make the space feel properly cared for."
            services={paintingServices}
          />

          <section>
            <div className="max-w-3xl">
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
            </div>

            <div className="mt-10 grid gap-8 lg:grid-cols-2">
              {woodServices.map((service) => (
                <WoodServiceFeature key={service.title} service={service} />
              ))}
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
    <header className="sticky top-0 z-20 -mb-28 border-b border-black/10 bg-linen/70 px-6 py-3 backdrop-blur-md sm:px-10 md:-mb-[4.625rem] lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 md:flex-row md:items-center md:justify-between md:gap-6">
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

        <nav
          aria-label="Main navigation"
          className="flex w-full items-center justify-between gap-3 border-t border-black/10 pt-3 md:w-auto md:justify-end md:gap-8 md:border-0 md:pt-0"
        >
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
}: {
  eyebrow: string;
  title: string;
  intro: string;
  services: typeof paintingServices;
}) {
  return (
    <section>
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gold">
          {eyebrow}
        </p>
        <h3 className="mt-4 font-serif text-3xl leading-tight text-ink sm:text-4xl">
          {title}
        </h3>
        <p className="mt-5 text-lg leading-8 text-charcoal/82">{intro}</p>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        {services.map((service) => (
          <ServiceFeature key={service.title} service={service} />
        ))}
      </div>
    </section>
  );
}

function ServiceFeature({
  service,
}: {
  service: PaintingService;
}) {
  return (
    <article className="border-t border-black/15 pt-6">
      <h4 className="font-serif text-2xl text-ink sm:text-3xl">{service.title}</h4>
      <p className="mt-3 leading-7 text-charcoal/80">{service.copy}</p>
      <ServiceImage
        src={service.image.src}
        alt={service.image.alt}
        label={service.image.label}
        className="mt-6 aspect-[4/3]"
      />
    </article>
  );
}

function WoodServiceFeature({
  service,
}: {
  service: WoodService;
}) {
  return (
    <article className="border-t border-black/15 pt-6">
      <h4 className="font-serif text-2xl text-ink sm:text-3xl">{service.title}</h4>
      <p className="mt-3 leading-7 text-charcoal/80">{service.copy}</p>
      {service.kind === "single" ? (
        <ServiceImage
          src={service.image.src}
          alt={service.image.alt}
          label={service.image.label}
          className="mt-6 aspect-[4/3]"
        />
      ) : (
        <BeforeAfterImage
          src={service.image.src}
          alt={service.image.alt}
          className="mt-6 aspect-[1729/910]"
        />
      )}
    </article>
  );
}

function ServiceImage({
  src,
  alt,
  label,
  className,
}: {
  src: string;
  alt: string;
  label: string;
  className: string;
}) {
  return (
    <figure className={`relative overflow-hidden bg-white shadow-soft ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 42vw, 100vw"
        className="object-cover"
      />
      <figcaption className="absolute left-3 top-3 bg-linen px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-ink sm:left-4 sm:top-4 sm:px-4 sm:text-xs sm:tracking-[0.18em]">
        {label}
      </figcaption>
    </figure>
  );
}

function BeforeAfterImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className: string;
}) {
  const labelClassName =
    "absolute top-3 bg-linen px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-ink sm:top-4 sm:px-4 sm:text-xs sm:tracking-[0.18em]";

  return (
    <figure className={`relative overflow-hidden bg-white shadow-soft ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 42vw, 100vw"
        className="object-cover"
      />
      <span className={`${labelClassName} left-3 sm:left-4`}>
        Before
      </span>
      <span className={`${labelClassName} right-3 sm:right-4`}>
        After
      </span>
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
