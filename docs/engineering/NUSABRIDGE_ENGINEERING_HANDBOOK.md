# NusaBridge Engineering Handbook v1.0

**Document ID:** #014B
**Version:** v1.0
**Status:** Approved for Repository Submission
**Repository:** `project-nusabridge/develop`
**Target Branch:** `feature/design-system`
**Document Path:** `docs/engineering/NUSABRIDGE_ENGINEERING_HANDBOOK.md`

---

## 1. Purpose

This handbook defines the engineering standards for the NusaBridge web platform.

It establishes a consistent foundation for:

* project architecture
* component development
* data management
* TypeScript usage
* naming conventions
* import conventions
* design-system usage
* homepage module architecture
* internationalization readiness
* future CMS integration
* code review
* Git delivery workflow

The objective is not only to make the application functional, but to ensure that the codebase remains:

* maintainable
* scalable
* reusable
* understandable
* reviewable
* suitable for future business expansion

This document is the engineering baseline for future NusaBridge development.

---

# 2. Engineering Principles

All future development should follow these principles.

## 2.1 Simplicity First

Prefer simple, explicit implementations over unnecessary abstractions.

Do not introduce:

* unnecessary dependencies
* unnecessary hooks
* unnecessary state
* unnecessary design patterns
* premature optimization

A component should be as simple as its responsibility allows.

---

## 2.2 Reusability

Shared UI patterns should be implemented through reusable components.

Existing Design System components should be reused whenever possible.

Examples:

```tsx
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
```

Do not duplicate existing UI primitives inside individual business components.

---

## 2.3 Separation of Concerns

The application should maintain a clear separation between:

```text
UI
↓
Components
↓
Data
↓
Types
```

Business content should not be unnecessarily embedded inside complex rendering logic.

---

## 2.4 Pure Components

Homepage business components should preferably remain pure rendering components.

A pure component:

* receives data or imports static data
* renders UI
* has no side effects
* does not perform API requests
* does not fetch remote data
* does not manipulate global state
* does not contain business workflows

Example:

```tsx
export default function Industries() {
  return (
    <Section>
      <Container>
        {/* presentation */}
      </Container>
    </Section>
  );
}
```

---

## 2.5 Real Business Information

The website must not fabricate:

* customer counts
* supplier counts
* revenue
* market share
* rankings
* transaction volume
* partnerships
* certifications
* case studies
* performance claims

If a number cannot be verified, it should not be presented as a factual business KPI.

---

# 3. Repository Architecture

The primary web application is located under:

```text
apps/web/
```

The expected architecture is:

```text
apps/web/
├── app/
│   ├── page.tsx
│   └── ...
│
├── components/
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Container.tsx
│   │   ├── Section.tsx
│   │   └── ...
│   │
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   │
│   └── home/
│       ├── Industries.tsx
│       ├── SupplyNetwork.tsx
│       ├── Process.tsx
│       ├── CTA.tsx
│       └── ...
│
├── data/
│   ├── industries.ts
│   ├── supplyNetwork.ts
│   ├── solutions.ts
│   ├── company.ts
│   └── ...
│
├── types/
│   ├── industry.ts
│   ├── supply-network.ts
│   ├── process.ts
│   └── ...
│
├── lib/
│   └── ...
│
└── hooks/
    └── ...
```

The architecture may evolve, but new changes should preserve the principle of clear responsibility boundaries.

---

# 4. Application Layer

## 4.1 `app/`

The `app/` directory is responsible for route-level composition.

For the homepage:

```text
apps/web/app/page.tsx
```

The page should primarily compose modules.

Example:

```tsx
export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <TrustBar />
        <Solutions />
        <Industries />
        <SupplyNetwork />
        <Process />
        <CTA />
      </main>

      <Footer />
    </>
  );
}
```

The page should not become a container for large business datasets or complex rendering logic.

---

# 5. Component Architecture

## 5.1 UI Components

Location:

```text
apps/web/components/ui/
```

These are reusable design-system primitives.

Examples:

```text
Button
Container
Section
Badge
```

UI components should remain generic and reusable.

They should not contain NusaBridge-specific business content unless the component is explicitly designed for that purpose.

---

## 5.2 Layout Components

Location:

```text
apps/web/components/layout/
```

Examples:

```text
Navbar.tsx
Footer.tsx
```

Layout components define global page structure.

They should not contain unnecessary page-specific business logic.

---

## 5.3 Homepage Components

Location:

```text
apps/web/components/home/
```

Homepage components represent individual business communication modules.

Examples:

```text
Hero.tsx
TrustBar.tsx
Solutions.tsx
Industries.tsx
SupplyNetwork.tsx
Process.tsx
CTA.tsx
```

Each component should have one clear communication responsibility.

---

# 6. Homepage Architecture

The homepage is designed around the following business communication sequence:

```text
Navbar
   ↓
Hero
   ↓
TrustBar
   ↓
Solutions
   ↓
Industries
   ↓
SupplyNetwork
   ↓
Process
   ↓
CTA
   ↓
Footer
```

The sequence is intentional.

## 6.1 Hero

Primary responsibilities:

* explain what NusaBridge is
* establish the China–Indonesia business positioning
* introduce the primary value proposition
* provide clear calls to action

---

## 6.2 TrustBar

Primary responsibilities:

* communicate capabilities
* establish credibility
* explain the operating context
* reinforce China supply + Indonesia local support

---

## 6.3 Solutions

Primary responsibilities:

* explain major business solution paths
* make the service structure understandable
* guide visitors toward relevant business needs

---

## 6.4 Industries

Primary responsibilities:

* demonstrate industry specialization
* communicate where NusaBridge can provide relevant supply-chain support
* provide a scalable industry data structure

Current business areas may include:

```text
Automotive Parts
LED Lighting
Outdoor Products
Solar Energy
```

These should be treated as business focus areas rather than unsupported market-ranking claims.

---

## 6.5 SupplyNetwork

Primary responsibilities:

* communicate geographic supply-chain capabilities
* connect manufacturing regions with relevant industrial resources
* explain the China-side supply network

Relevant geographic references may include:

```text
Guangdong
Zhejiang
Shenzhen
Dongguan
Yiwu
```

The presence of a geographic name does not imply a quantified supplier relationship unless separately verified.

---

## 6.6 Process

Primary responsibilities:

* explain how a customer begins cooperation
* make the commercial process understandable
* reduce friction before contact

The process should remain informational rather than implementing business workflow logic inside the frontend component.

---

## 6.7 CTA

Primary responsibilities:

* provide a clear next action
* convert visitor interest into a contact or business inquiry
* avoid unnecessary distractions

---

# 7. Data Layer Standard

Business content should be separated from presentation whenever practical.

Location:

```text
apps/web/data/
```

Examples:

```text
industries.ts
supplyNetwork.ts
solutions.ts
company.ts
process.ts
```

Example:

```ts
import type { Industry } from "@/types/industry";

export const industries: Industry[] = [
  {
    id: "automotive",
    title: "Automotive Parts",
    description: "...",
  },
];
```

Components should consume the exported data rather than duplicating large datasets.

---

# 8. TypeScript Type Standard

Types belong in:

```text
apps/web/types/
```

Example:

```text
apps/web/types/industry.ts
apps/web/types/supply-network.ts
apps/web/types/process.ts
```

Types should describe the shape of application data.

Example:

```ts
export interface Industry {
  id: string;
  title: string;
  description?: string;
}
```

Avoid:

```ts
any
```

unless there is a documented technical reason.

Prefer explicit types.

---

# 9. Naming Convention

## 9.1 Components

Use PascalCase:

```text
Navbar.tsx
Footer.tsx
Industries.tsx
SupplyNetwork.tsx
```

---

## 9.2 Data Files

Use camelCase or established kebab-case according to the existing project convention.

Examples:

```text
industries.ts
supplyNetwork.ts
```

---

## 9.3 Type Files

Use the established project naming convention:

```text
industry.ts
supply-network.ts
```

---

## 9.4 Variables

Use camelCase:

```ts
const industryItems = [];
const supplyRegions = [];
```

---

## 9.5 Constants

Use descriptive names.

Do not use unexplained abbreviations.

---

# 10. Import Convention

Use the configured `@/` alias.

Preferred:

```tsx
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
```

Data:

```ts
import { industries } from "@/data/industries";
```

Types:

```ts
import type { Industry } from "@/types/industry";
```

Avoid unnecessary relative paths such as:

```tsx
../../../components/ui/Button
```

The project alias exists specifically to keep imports stable and readable.

---

# 11. Design System Standard

Existing Design System components should be reused.

Primary primitives:

```text
Container
Section
Button
Badge
```

The design system should provide consistency for:

* spacing
* typography
* layout width
* buttons
* borders
* responsive behavior
* visual hierarchy

Business components should not recreate these primitives unnecessarily.

---

# 12. Styling Standard

Tailwind CSS utility classes should be used consistently with the existing project.

Avoid introducing arbitrary styling systems.

Do not add:

* new CSS frameworks
* inline style systems
* duplicate utility abstractions
* unnecessary CSS files

unless explicitly required by a future architectural decision.

---

# 13. Responsive Design

Homepage modules must support:

```text
Mobile
Tablet
Desktop
```

Responsive behavior should be implemented using the existing Tailwind responsive utilities.

Typical progression:

```text
mobile
→ md
→ lg
```

Components should remain readable and usable at smaller viewport widths.

---

# 14. Accessibility Standard

Semantic HTML should be preferred.

Examples:

```html
<header>
<nav>
<main>
<section>
<footer>
<h1>
<h2>
<h3>
<ul>
<li>
```

Interactive controls should use appropriate accessible elements.

For example:

```html
<button>
```

should be used for actions.

Links should use:

```html
<a>
```

when navigating.

Do not use non-interactive elements as fake buttons.

---

# 15. SEO Considerations

Homepage content should maintain a clear heading hierarchy.

Recommended structure:

```text
H1
 ├── H2
 │    ├── H3
 │    └── H3
 ├── H2
 │    ├── H3
 │    └── H3
 └── H2
```

There should generally be one primary H1 representing the homepage proposition.

Business sections should use descriptive headings rather than purely decorative labels.

---

# 16. Internationalization Readiness

The current implementation may use static English content while the architecture remains ready for future internationalization.

Future implementation may introduce:

```text
next-intl
```

or another approved localization system.

Components should avoid tightly coupling business content to rendering logic.

For example, this is preferable:

```ts
const title = "China Supply Chain";
```

inside a data layer rather than embedding large amounts of business content inside deeply nested JSX.

No internationalization dependency should be introduced without an explicit project-level decision.

---

# 17. CMS Readiness

The current website may use local static data.

Future CMS integration should be possible without redesigning the component architecture.

Preferred evolution:

```text
Static Data
    ↓
Data Adapter
    ↓
Component
```

Future:

```text
CMS / API
    ↓
Data Adapter
    ↓
Component
```

Components should therefore avoid directly coupling themselves to a specific CMS provider.

---

# 18. Business Logic Boundary

Business logic should not be hidden inside presentation components.

Avoid putting the following directly inside homepage components:

* API requests
* pricing calculations
* supplier matching algorithms
* customer qualification logic
* authentication
* CRM logic
* logistics calculations
* complex workflow state machines

Those concerns belong in appropriate service or application layers when they are introduced.

---

# 19. Dependency Policy

New dependencies are not allowed by default.

Before introducing a dependency, the requirement must be evaluated against:

1. whether the functionality already exists
2. whether it can be implemented using existing project capabilities
3. whether the dependency creates long-term maintenance cost
4. whether the dependency is justified by actual product requirements

For the current homepage architecture:

```text
No additional dependency required.
```

---

# 20. Component API Standard

Components should expose simple, predictable APIs.

Prefer:

```tsx
type Props = {
  title?: string;
};
```

over large configuration objects when unnecessary.

If a component does not require props, it does not need an artificial props interface.

---

# 21. Data Mutation Policy

Homepage static data should be treated as immutable application configuration.

Avoid modifying imported arrays inside components.

Bad:

```ts
industries.push(newIndustry);
```

Preferred:

```ts
industries.map(...)
```

or another non-mutating operation.

---

# 22. Error Handling

Static presentation components should not introduce artificial error-handling complexity.

If future remote data is introduced, loading/error states should be handled at the appropriate data or application boundary.

Do not add fake loading states to static components.

---

# 23. Performance Principles

The homepage should remain lightweight.

Avoid:

* unnecessary client components
* unnecessary JavaScript
* unnecessary dependencies
* duplicate rendering logic
* large inline datasets inside components
* unnecessary state management

Do not add:

```tsx
"use client";
```

unless client-side functionality is actually required.

---

# 24. Server / Client Boundary

The default homepage architecture should prefer server-rendered components.

Client components should only be introduced when functionality requires browser-side behavior.

Examples that may justify a client component:

* interactive navigation state
* client-side form interaction
* browser APIs
* interactive UI state

Static sections such as:

```text
Industries
SupplyNetwork
TrustBar
Solutions
```

should remain server-compatible whenever possible.

---

# 25. Code Review Checklist

Every production change should be reviewed against the following checklist.

### Architecture

* [ ] Correct directory
* [ ] Correct component responsibility
* [ ] No unnecessary abstraction
* [ ] No architectural duplication

### TypeScript

* [ ] TypeScript compiles
* [ ] No unnecessary `any`
* [ ] Types are explicit where needed
* [ ] Imports resolve correctly

### Components

* [ ] Component is reusable where appropriate
* [ ] No unnecessary client boundary
* [ ] No fetch/API inside pure presentation components
* [ ] No side effects

### Data

* [ ] Business data is separated appropriately
* [ ] No fabricated KPIs
* [ ] No unsupported claims
* [ ] Data shape has corresponding types

### Design System

* [ ] Existing Container reused
* [ ] Existing Section reused
* [ ] Existing Button reused
* [ ] Existing design tokens respected
* [ ] No unnecessary CSS

### Accessibility

* [ ] Semantic HTML
* [ ] Correct heading hierarchy
* [ ] Interactive elements are accessible
* [ ] Lists use appropriate list markup

### Responsive

* [ ] Mobile layout considered
* [ ] Tablet layout considered
* [ ] Desktop layout considered

### Dependencies

* [ ] No unnecessary dependency
* [ ] `package.json` unchanged unless explicitly required

---

# 26. Git Workflow

The repository uses feature-oriented development.

Example:

```text
feature/design-system
```

Changes should be grouped into meaningful deliverables.

Commit messages should describe the actual change.

Examples:

```text
feat(home): add industry and supply network sections
```

```text
docs(engineering): add NusaBridge Engineering Handbook v1.0
```

```text
fix(config): align TypeScript path aliases
```

Avoid vague commit messages such as:

```text
update
changes
fix stuff
new code
```

---

# 27. Deliverable Workflow

Each major engineering milestone should follow:

```text
Design
  ↓
Source Delivery
  ↓
Review
  ↓
Approval
  ↓
GitHub Submission
  ↓
Commit
  ↓
Push
```

The implementation phase and design phase should remain clearly separated.

GitHub AI should not independently redesign approved source material.

---

# 28. Code Freeze Policy

When Code Freeze is active, no repository modification should occur without explicit authorization.

Code Freeze means:

```text
No Create
No Update
No Delete
No Commit
No Push
No PR
No Refactor
```

unless explicitly authorized by the project owner.

This prevents accidental changes to approved architecture.

---

# 29. Change Control

Once a deliverable is approved, changes should be introduced through a new deliverable or explicitly authorized revision.

Example:

```text
Deliverable #014A
    ↓
Approved
    ↓
Deliverable #014B
    ↓
Approved
    ↓
Deliverable #015
```

This creates a traceable development history.

---

# 30. Homepage Business Architecture Roadmap

The homepage development roadmap is structured as follows.

## v0.1 — Foundation

Completed modules:

```text
Navbar
Hero
Footer
```

Purpose:

```text
Technical foundation
+
Initial homepage composition
```

---

## v0.2 — Business Layer

Modules:

```text
TrustBar
Solutions
```

Purpose:

```text
Technical website
        ↓
Business communication platform
```

---

## v0.3 — Differentiation

Modules:

```text
Industries
SupplyNetwork
```

Purpose:

```text
Generic business positioning
        ↓
China supply-chain differentiation
```

---

## v1.0 — Business Conversion

Planned modules:

```text
Process
CTA
```

Target sequence:

```text
Capability
    ↓
Industry
    ↓
Supply Network
    ↓
Business Process
    ↓
CTA
```

The objective is to turn the homepage into a clear business conversion experience.

---

# 31. Future Architecture Evolution

The architecture may eventually evolve toward:

```text
components/
├── ui/
├── layout/
└── home/
    ├── hero/
    ├── trust/
    ├── solutions/
    ├── industries/
    ├── supply-network/
    ├── process/
    └── cta/
```

Where appropriate, individual modules may contain:

```text
index.tsx
types.ts
constants.ts
hooks.ts
components/
```

However, this structure should only be introduced when the complexity justifies it.

Do not create empty architectural layers prematurely.

---

# 32. Recommended Module Structure

For a sufficiently complex module:

```text
home/
└── industries/
    ├── index.tsx
    ├── types.ts
    ├── constants.ts
    └── components/
```

The current project may continue using flat components where appropriate.

Architecture should follow actual complexity rather than theoretical complexity.

---

# 33. Future Data Architecture

The intended long-term data flow is:

```text
CMS / API / Static Data
          ↓
      Data Layer
          ↓
     Typed Models
          ↓
      Components
          ↓
         UI
```

This allows the website to transition from static business content to a CMS-backed platform without requiring a complete component rewrite.

---

# 34. Future Business Platform Direction

NusaBridge is expected to evolve beyond a simple corporate website.

The long-term platform direction may include:

```text
China Supply Chain
        ↓
Industry Resources
        ↓
Indonesia Market Entry
        ↓
Local Business Support
        ↓
Logistics / Operations
        ↓
Customer Inquiry
        ↓
Business Conversion
```

Future platform functionality should be introduced incrementally.

The homepage remains the primary business communication layer.

---

# 35. Security Principles

The frontend should never expose:

* secrets
* private API credentials
* private keys
* internal authentication tokens
* confidential business information

Environment variables containing secrets must not be exposed to the client.

Business-sensitive information should only be introduced after explicit approval.

---

# 36. Content Governance

All public-facing business claims should be reviewable.

Before publishing a factual business statement, verify:

* accuracy
* source
* relevance
* current validity

Avoid language that implies unsupported certainty.

Prefer:

```text
"Focused on..."
```

over:

```text
"Market leader in..."
```

unless the latter can be independently substantiated.

---

# 37. Documentation Standard

Engineering documentation should be stored under:

```text
docs/
```

Recommended structure:

```text
docs/
├── architecture/
├── engineering/
├── product/
└── operations/
```

The Engineering Handbook belongs at:

```text
docs/engineering/NUSABRIDGE_ENGINEERING_HANDBOOK.md
```

---

# 38. Definition of Done

A development task is considered complete when:

* [ ] Required source files exist
* [ ] Architecture requirements are satisfied
* [ ] TypeScript requirements are satisfied
* [ ] Existing Design System is reused
* [ ] No unnecessary dependency is introduced
* [ ] No unsupported business claims are introduced
* [ ] Accessibility considerations are addressed
* [ ] Responsive behavior is considered
* [ ] Documentation is updated when architecture changes
* [ ] Code Review requirements are satisfied
* [ ] Deliverable is explicitly approved
* [ ] GitHub submission is authorized

---

# 39. Engineering Quality Principle

NusaBridge engineering should optimize for:

```text
Clarity
+
Consistency
+
Maintainability
+
Business Accuracy
+
Scalability
```

rather than simply maximizing development speed.

A working implementation is not automatically a production-quality implementation.

Production quality requires:

```text
Correct Architecture
+
Correct Types
+
Correct Data Boundaries
+
Consistent Design System
+
Accurate Business Content
+
Maintainable Code
```

---

# 40. Final Standard

This document establishes the baseline engineering standard for future NusaBridge web development.

Future deliverables should follow this handbook unless a newer approved architecture specification explicitly supersedes it.

The engineering direction is:

```text
Website Foundation
        ↓
Design System
        ↓
Business Homepage
        ↓
Business Conversion
        ↓
Structured Platform
        ↓
Scalable China–Indonesia Business Infrastructure
```

The goal is to build NusaBridge as a maintainable, scalable business platform rather than a collection of disconnected web pages.

---

## Document Status

**NusaBridge Engineering Handbook v1.0**

Status:

```text
READY FOR REVIEW
```

Recommended repository path:

```text
docs/engineering/NUSABRIDGE_ENGINEERING_HANDBOOK.md
```

Recommended commit:

```text
docs(engineering): add NusaBridge Engineering Handbook v1.0
```

Target branch:

```text
feature/design-system
```

No additional dependencies are required.
