import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function CTA() {
  return (
    <Section className="bg-slate-900">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Have a China-Indonesia Business Requirement?
          </h2>

          <p className="mt-4 text-slate-300">
            Start with a conversation about what you are trying to achieve.
            We can explore the relevant business direction together.
          </p>

          <div className="mt-8 flex justify-center">
            <Button variant="primary">Start a Conversation</Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
