import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { contactCaseStudies } from "@/data/contactEnhancements";

export default function CaseStudies() {
  return (
    <Section>
      <Container>
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">
            Business Scenarios
          </p>

          <h2 className="text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">
            Areas where we can start a conversation
          </h2>

          <p className="mt-4 text-base leading-7 text-neutral-600">
            These examples describe common business situations without making
            unsupported claims about specific clients or results.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {contactCaseStudies.map((item) => (
            <article
              key={item.id}
              className="rounded-2xl border border-neutral-200 p-6"
            >
              <h3 className="text-xl font-semibold text-neutral-950">
                {item.title}
              </h3>

              <p className="mt-3 text-base leading-7 text-neutral-600">
                {item.description}
              </p>

              <div className="mt-6 border-t border-neutral-100 pt-5">
                <p className="text-sm font-medium text-neutral-500">
                  Focus
                </p>

                <p className="mt-2 text-sm leading-6 text-neutral-700">
                  {item.focus}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
