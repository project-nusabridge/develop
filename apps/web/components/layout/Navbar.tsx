import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const navigation = [
  {
    name: "Home",
    href: "#"
  },
  {
    name: "Solutions",
    href: "#solutions"
  },
  {
    name: "Industries",
    href: "#industries"
  },
  {
    name: "About",
    href: "#about"
  },
  {
    name: "Contact",
    href: "#contact"
  }
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <div className="text-xl font-bold tracking-tight">
            NusaBridge
          </div>

          <nav className="hidden gap-8 md:flex">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-slate-700 transition hover:text-blue-600"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <Button>
            Start Cooperation
          </Button>
        </div>
      </Container>
    </header>
  );
}