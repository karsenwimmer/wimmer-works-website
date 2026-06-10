import Image from "next/image";
import type { Metadata } from "next";
import { QuoteForm } from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Coffee News Reader Offer | Wimmer Works Paint & Stain",
  description:
    "Coffee News readers can request a Wimmer Works painting or staining quote and save $100 on qualifying projects of $1,000 or more.",
};

const offerSource = "Coffee News reader offer: $100 off any $1000+ project";

export default function CoffeeOfferPage() {
  return (
    <main className="min-h-screen bg-linen text-ink">
      <header className="absolute inset-x-0 top-0 z-20 border-b border-black/10 bg-linen/72 px-6 py-3 backdrop-blur-md sm:px-10 lg:px-12">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
          <a href="/" aria-label="Wimmer Works Paint & Stain home" className="block shrink-0">
            <Image
              src="/brand/logo-transparent-trimmed.png"
              alt="Wimmer Works Paint & Stain"
              width={332}
              height={98}
              className="h-10 w-auto max-w-[13rem] object-contain sm:h-12 sm:max-w-[17rem]"
              priority
            />
          </a>
          <a
            href="#claim"
            className="hidden min-h-11 items-center justify-center border border-gold bg-gold px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:border-ink hover:bg-ink sm:inline-flex"
          >
            Claim Offer
          </a>
        </div>
      </header>

      <section className="relative isolate flex min-h-[690px] items-center overflow-hidden px-6 pb-20 pt-36 sm:px-10 sm:pt-40 lg:px-12">
        <Image
          src="/photos/hero-paint-wall.png"
          alt="Interior wall mid-paint with ladder, paint buckets, and drop cloth"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-20 object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-linen/96 via-linen/76 to-linen/8" />

        <div className="mx-auto w-full max-w-7xl">
          <div className="max-w-2xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-gold">
              Coffee News reader offer
            </p>
            <h1 className="font-serif text-4xl leading-[1.08] text-ink sm:text-5xl lg:text-6xl">
              Save $100 on your next painting or staining project.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-charcoal/82">
              Saw Wimmer Works in Coffee News? You can take $100 off any
              qualifying project of $1,000 or more.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#claim"
                className="inline-flex min-h-12 items-center justify-center border border-gold bg-gold px-7 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:border-ink hover:bg-ink"
              >
                Request Quote
              </a>
              <a
                href="/#services"
                className="inline-flex min-h-12 items-center justify-center border border-black/20 px-7 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-ink transition hover:border-gold hover:text-gold"
              >
                View Services
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gold">
              How to claim
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-ink sm:text-5xl">
              Mention the Coffee News offer when we quote the work.
            </h2>
            <p className="mt-6 text-lg leading-8 text-charcoal/82">
              Wimmer Works handles interior painting, exterior painting, new
              wood staining, and wood refinishing across Oakville, Burlington,
              and nearby areas.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            {[
              ["01", "Send your quote request."],
              ["02", "We review the project details."],
              ["03", "$100 comes off qualifying $1,000+ projects."],
            ].map(([number, text]) => (
              <div key={number} className="border-t border-black/15 pt-5">
                <p className="text-sm font-semibold text-gold">{number}</p>
                <p className="mt-4 font-serif text-2xl leading-tight text-ink">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="claim" className="bg-parchment px-6 py-16 sm:px-10 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gold">
              Claim your offer
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-ink sm:text-5xl">
              Tell us what needs painting or staining.
            </h2>
            <p className="mt-6 text-lg leading-8 text-charcoal/82">
              Submit the form and your request will be marked as a Coffee News
              reader offer automatically.
            </p>
          </div>

          <div className="bg-linen p-6 shadow-soft sm:p-8 lg:p-10">
            <QuoteForm source={offerSource} />
          </div>
        </div>
      </section>
    </main>
  );
}
