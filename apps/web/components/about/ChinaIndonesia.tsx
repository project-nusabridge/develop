import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { aboutSections } from "@/data/about";

export default function ChinaIndonesia() {
  const section = aboutSections.find((item) => item.id === "connection");

  if (!section) {
    return null;
  }

  return (
    <Section>
      <Container>
        <div className="overflow-hidden rounded-3xl bg-slate-900">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 sm:p-10 lg:p-12">
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-400">
                {section.eyebrow}
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white">
                {section.title}
              </h2>

              <p className="mt-5 leading-7 text-slate-300">
                {section.description}
              </p>
            </div>

            <div className="grid grid-cols-2 border-t border-slate-700 lg:border-l lg:border-t-0">
              <div className="flex min-h-48 items-center justify-center border-b border-r border-slate-700 p-6 text-center sm:min-h-56">
                <div>
                  <p className="text-2xl font-bold text-white">China</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Supply chain capabilities and business resources
                  </p>
                </div>
              </div>

              <div className="flex min-h-48 items-center justify-center border-b border-slate-700 p-6 text-center sm:min-h-56">
                <div>
                  <p className="text-2xl font-bold text-white">Indonesia</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Local market opportunities and operating context
                  </p>
                </div>
              </div>

              <div className="col-span-2 flex min-h-40 items-center justify-center p-6 text-center">
                <div>
                  <p className="text-lg font-semibold text-white">
                    NusaBridge
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Connecting the requirements, resources and next steps
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
