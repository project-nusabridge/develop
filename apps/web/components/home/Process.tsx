import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { processSteps } from "@/data/process";

export default function Process() {
  return (
    <Section>
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
            How We Work
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
            From Business Needs to Practical Execution
          </h2>

          <p className="mt-4 text-slate-600">
            NusaBridge helps connect China supply chain capabilities with
            practical business opportunities in Indonesia through a structured
            cooperation process.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <article
              key={step.id}
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >
              <div
                aria-hidden="true"
                className="text-sm font-semibold text-blue-600"
              >
                {step.number}
              </div>

              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
