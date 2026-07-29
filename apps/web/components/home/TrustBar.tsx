import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const trustItems = [
  {
    title: "China Supply Network",
    description:
      "Connected with manufacturing resources across Guangdong, Zhejiang and major industrial regions."
  },
  {
    title: "Industry Experience",
    description:
      "Focused on automotive parts, LED lighting, outdoor products and solar energy solutions."
  },
  {
    title: "Indonesia Local Support",
    description:
      "Providing market entry assistance including business setup, logistics and local operations."
  },
  {
    title: "Cross-border Solutions",
    description:
      "Bridging Chinese suppliers with Indonesia business opportunities."
  }
];

export default function TrustBar() {
  return (
    <Section>
      <Container>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}