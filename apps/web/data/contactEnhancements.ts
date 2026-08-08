import type {
  CaseStudy,
  FaqItem,
  ResourceItem,
} from "@/types/contactEnhancements";

export const contactFaqs: FaqItem[] = [
  {
    id: "timeline",
    question: "How long does an initial consultation usually take?",
    answer:
      "An initial discussion is focused on understanding your business objectives, market priorities, and the type of support you are looking for. The exact timing depends on the scope of the inquiry.",
  },
  {
    id: "scope",
    question: "What information should I provide in my inquiry?",
    answer:
      "A short description of your company, target market, business objectives, product or service category, and the type of support you need is usually enough to begin the conversation.",
  },
  {
    id: "market",
    question: "Can you support China–Indonesia business opportunities?",
    answer:
      "Yes. The contact process is designed for businesses exploring opportunities between China and Indonesia, including market entry, sourcing, partnerships, distribution, and related business development discussions.",
  },
  {
    id: "partnership",
    question: "Can I contact you about a partnership?",
    answer:
      "Yes. Partnership, supplier, distribution, market-entry, and other business collaboration inquiries can be submitted through the contact page.",
  },
];

export const contactResources: ResourceItem[] = [
  {
    id: "business-inquiry",
    title: "Business Inquiry",
    description:
      "Share your business objectives and the type of support you are looking for so the discussion can start with the right context.",
    href: "/contact",
    label: "Start an inquiry",
  },
  {
    id: "market-entry",
    title: "Market Entry Discussion",
    description:
      "For companies evaluating opportunities in China or Indonesia, provide your target market and business priorities for an initial discussion.",
    href: "/contact",
    label: "Discuss market entry",
  },
  {
    id: "partnership",
    title: "Partnership Inquiry",
    description:
      "Businesses interested in partnerships, distribution, sourcing, or other forms of collaboration can use the contact channel to introduce their proposal.",
    href: "/contact",
    label: "Discuss partnership",
  },
];

export const contactCaseStudies: CaseStudy[] = [
  {
    id: "market-entry",
    title: "Market Entry",
    description:
      "A structured approach for businesses evaluating how to enter or expand within a new China or Indonesia market.",
    focus: "Market research, positioning, local connections, and execution planning.",
  },
  {
    id: "sourcing",
    title: "Sourcing & Supply",
    description:
      "Business discussions focused on identifying suitable sourcing opportunities and developing practical supply relationships.",
    focus: "Supplier discovery, product requirements, communication, and coordination.",
  },
  {
    id: "cross-border",
    title: "Cross-Border Partnership",
    description:
      "Support for companies exploring commercial relationships across China and Indonesia.",
    focus: "Partner identification, business alignment, and collaboration structure.",
  },
];
