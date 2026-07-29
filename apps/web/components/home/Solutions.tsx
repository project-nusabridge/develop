import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

const solutions = [
  {
    title: "China Supply Chain",
    description:
      "Connect with reliable manufacturers and sourcing resources across China's key industrial regions.",
    items: [
      "Supplier matching",
      "Product sourcing",
      "Factory coordination"
    ]
  },
  {
    title: "Indonesia Market Entry",
    description:
      "Support companies entering Indonesia with practical local business solutions.",
    items: [
      "Company setup",
      "Business support",
      "Local coordination"
    ]
  },
  {
    title: "Logistics & Operations",
    description:
      "Build efficient cross-border operations from China to Indonesia.",
    items: [
      "Warehousing",
      "Customs support",
      "Logistics coordination"
    ]
  }
];

export default function Solutions() {
  return (
    <Section className="bg-slate-50">
      <Container>

        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Solutions for China-Indonesia Business Growth
          </h2>

          <p className="mt-4 text-slate-600">
            NusaBridge connects supply chain capabilities in China
            with local business opportunities in Indonesia.
          </p>
        </div>


        <div className="mt-12 grid gap-8 lg:grid-cols-3">

          {solutions.map((solution) => (
            <div
              key={solution.title}
              className="rounded-2xl bg-white p-8 shadow-sm"
            >

              <h3 className="text-xl font-semibold text-slate-900">
                {solution.title}
              </h3>


              <p className="mt-4 text-sm leading-6 text-slate-600">
                {solution.description}
              </p>


              <ul className="mt-6 space-y-3">
                {solution.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-slate-700"
                  >
                    ✓ {item}
                  </li>
                ))}
              </ul>


              <Button
                className="mt-8"
                variant="outline"
              >
                Learn More
              </Button>

            </div>
          ))}

        </div>

      </Container>
    </Section>
  );
}