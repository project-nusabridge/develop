import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { aboutPrinciples, aboutSections } from "@/data/about";

export default function Mission() {
  const section = aboutSections.find((item) => item.id === "mission");

  if (!section) {
    return null;
  }

  return (
    <Section className="bg-slate-50">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
            {section.eyebrow}
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
            {section.title}
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            {section.description}
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {aboutPrinciples.map((principle) => (
            <article
              key={principle.id}
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {principle.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {principle.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
