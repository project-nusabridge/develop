import type {
  ContactChannel,
  ContactInquiryType,
} from "@/types/contact";

export const contactInquiryTypes: ContactInquiryType[] = [
  {
    id: "sourcing",
    title: "China Sourcing",
    description:
      "Discuss sourcing requirements, supplier connections and China-side business resources.",
  },
  {
    id: "market-entry",
    title: "Indonesia Market Entry",
    description:
      "Explore practical opportunities for entering the Indonesian market and developing local operations.",
  },
  {
    id: "cross-border",
    title: "Cross-Border Cooperation",
    description:
      "Discuss business cooperation opportunities connecting China and Indonesia.",
  },
  {
    id: "other",
    title: "Other Business Inquiry",
    description:
      "Have another China-Indonesia business requirement? Tell us what you are looking for.",
  },
];

export const contactChannels: ContactChannel[] = [
  {
    id: "business-inquiry",
    label: "Business Inquiry",
    value: "Start a conversation",
    description:
      "Share your business requirements and the opportunity you would like to explore.",
  },
  {
    id: "partnership",
    label: "Partnership",
    value: "Explore cooperation",
    description:
      "Tell us about your organization and the type of cooperation you have in mind.",
  },
];
