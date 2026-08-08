import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function Hero() {
  return (
    <Section>
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
            Contact NusaBridge
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Let&apos;s Start a China-Indonesia Business Conversation
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Tell us what you are looking for, and we can explore the right
            sourcing, market entry or cross-border cooperation opportunities
            for your business.
          </p>
        </div>
      </Container>
    </Section>
  );
}
