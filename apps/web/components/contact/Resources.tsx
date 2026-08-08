import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { contactResources } from "@/data/contactEnhancements";

export default function Resources() {
  return (
    <Section>
      <Container>
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">
            Resources
          </p>

          <h2 className="text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">
            Start with the right business discussion
          </h2>

          <p className="mt-4 text-base leading-7 text-neutral-600">
            Choose the type of conversation that best matches your current
            business objective.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {contactResources.map((resource) => (
            <article
              key={resource.id}
              className="flex h-full flex-col rounded-2xl border border-neutral-200 p-6"
            >
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-neutral-950">
                  {resource.title}
                </h3>

                <p className="mt-3 text-base leading-7 text-neutral-600">
                  {resource.description}
                </p>
              </div>

              <div className="mt-6">
                <a
                  href={resource.href}
                  className="text-sm font-semibold text-neutral-950 underline underline-offset-4 transition-opacity hover:opacity-70"
                >
                  {resource.label}
                </a>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
