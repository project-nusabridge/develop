import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <Section className="bg-slate-900">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Let&apos;s explore what we can build together
          </h2>

          <p className="mt-4 text-slate-300">
            Tell us about your business needs, target market or cross-border
            opportunity, and let&apos;s identify the practical next step.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button variant="primary">Start a Conversation</Button>

            <Button variant="outline">Explore Solutions</Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
