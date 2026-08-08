import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function Hero() {
  return (
    <Section>
      <Container>
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
            About NusaBridge
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Building a practical bridge between China and Indonesia
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            NusaBridge connects businesses, supply chain capabilities and local
            opportunities across China and Indonesia, helping turn cross-border
            business needs into practical next steps.
          </p>
        </div>
      </Container>
    </Section>
  );
}
