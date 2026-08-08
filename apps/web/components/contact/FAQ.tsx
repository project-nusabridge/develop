import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { contactFaqs } from "@/data/contactEnhancements";

export default function FAQ() {
  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-3xl">
          <div className="mb-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">
              FAQ
            </p>

            <h2 className="text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">
              Common business inquiry questions
            </h2>

            <p className="mt-4 text-base leading-7 text-neutral-600">
              A few practical answers for businesses considering an initial
              discussion with our team.
            </p>
          </div>

          <div className="divide-y divide-neutral-200 border-y border-neutral-200">
            {contactFaqs.map((item) => (
              <article key={item.id} className="py-7">
                <h3 className="text-lg font-semibold text-neutral-950">
                  {item.question}
                </h3>

                <p className="mt-3 text-base leading-7 text-neutral-600">
                  {item.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
