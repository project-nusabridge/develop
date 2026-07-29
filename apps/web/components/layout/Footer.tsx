import Container from "@/components/ui/Container";

const footerLinks = [
  {
    title: "Services",
    links: [
      "China Supply Chain",
      "Indonesia Market Entry",
      "Logistics & Warehousing",
      "Business Support"
    ]
  },
  {
    title: "Industries",
    links: [
      "Auto Parts",
      "LED Lighting",
      "Outdoor Products",
      "Solar & Energy"
    ]
  }
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <Container>
        <div className="grid gap-10 py-16 md:grid-cols-3">

          <div>
            <h3 className="text-xl font-bold text-slate-900">
              NusaBridge
            </h3>

            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-600">
              Connecting China supply chain capabilities
              with Indonesia market opportunities.
            </p>
          </div>


          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="font-semibold text-slate-900">
                {group.title}
              </h4>

              <ul className="mt-4 space-y-3">
                {group.links.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-slate-600"
                  >
                    {item}
                  </li>
                ))}
              </ul>

            </div>
          ))}

        </div>


        <div className="border-t border-slate-200 py-6 text-sm text-slate-500">
          © {new Date().getFullYear()} NusaBridge. All rights reserved.
        </div>

      </Container>
    </footer>
  );
}