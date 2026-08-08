import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { contactChannels } from "@/data/contact";

export default function ContactInfo() {
  return (
    <Section className="bg-slate-50">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
              Business Cooperation
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
              Bring Us Your Business Requirement
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Whether you are looking for resources in China, exploring
              opportunities in Indonesia or considering cross-border
              cooperation, a clear description of your requirement helps us
              understand where we can contribute.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {contactChannels.map((channel) => (
              <article
                key={channel.id}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <p className="text-sm font-semibold text-blue-600">
                  {channel.label}
                </p>

                <h3 className="mt-2 text-xl font-semibold text-slate-900">
                  {channel.value}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {channel.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
