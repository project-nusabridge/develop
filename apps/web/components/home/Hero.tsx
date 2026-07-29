import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function Hero() {
  return (
    <Section>
      <Container>

        <Badge>
          China Supply Chain × Indonesia Market
        </Badge>

        <div className="mt-6 max-w-4xl">

          <h1 className="text-5xl font-bold leading-tight tracking-tight text-slate-900 lg:text-7xl">
            Bridge China Supply Chain
            <br />
            With Indonesia Market
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">
            NusaBridge helps Chinese manufacturers,
            suppliers and brands expand into Indonesia
            through local business services,
            logistics, warehousing,
            company registration and market development.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <Button size="lg">
              Start Your Business
            </Button>

            <Button
              variant="outline"
              size="lg"
            >
              Explore Solutions
            </Button>

          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 max-w-xl">

            <div>
              <p className="text-3xl font-bold">
                500+
              </p>
              <p className="mt-2 text-slate-600">
                Supply Network
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold">
                30+
              </p>
              <p className="mt-2 text-slate-600">
                Service Coverage
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold">
                2
              </p>
              <p className="mt-2 text-slate-600">
                Market Focus
              </p>
            </div>

          </div>

        </div>

      </Container>
    </Section>
  );
}