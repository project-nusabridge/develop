import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function CTAResources() {
  return (
    <Section>
      <Container>
        <div className="rounded-3xl border border-neutral-200 bg-neutral-50 px-6 py-12 text-center sm:px-10 lg:px-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">
            Next Step
          </p>

          <h2 className="mx-auto max-w-3xl text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">
            Have a business opportunity to discuss?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-neutral-600">
            Tell us what you are trying to achieve, which market you are
            targeting, and what kind of support you need.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="/contact"
              className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Start a Business Inquiry
            </a>

            <a
              href="/"
              className="inline-flex items-center rounded-md border border-neutral-200 bg-white px-4 py-2 text-sm font-semibold text-neutral-900 hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-neutral-300"
            >
              Back to Home
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}
