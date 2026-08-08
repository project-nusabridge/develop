import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { contactInquiryTypes } from "@/data/contact";

export default function InquiryTypes() {
  return (
    <Section>
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
            What Can We Help With?
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
            Tell Us What You Want to Explore
          </h2>

          <p className="mt-4 text-slate-600">
            Start with the area closest to your current business requirement.
            We can then understand the context and identify the appropriate
            next step.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {contactInquiryTypes.map((inquiry) => (
            <article
              key={inquiry.id}
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >
              <h3 className="text-xl font-semibold text-slate-900">
                {inquiry.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {inquiry.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
