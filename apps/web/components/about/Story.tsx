import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { aboutSections } from "@/data/about";

export default function Story() {
  const section = aboutSections.find((item) => item.id === "story");

  if (!section) {
    return null;
  }

  return (
    <Section>
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
              {section.eyebrow}
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
              {section.title}
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-slate-600">
              {section.description}
            </p>

            <p className="mt-6 leading-7 text-slate-600">
              Cross-border business often involves more than finding a
              supplier or identifying a market. It requires communication,
              local understanding, coordination and the ability to connect
              different parts of the business ecosystem.
            </p>

            <p className="mt-6 leading-7 text-slate-600">
              NusaBridge is designed to help make those connections clearer and
              more practical, creating a structured path from business needs to
              potential cooperation.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
