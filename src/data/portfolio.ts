// This file stores the reusable content shown across the portfolio.
// It defines the theme type plus the structured data used by the projects,
// case studies, and experience sections so the UI can stay consistent.
export type ThemeMode = "dark" | "light";

export const featuredProjects = [
  {
    title: "Northstar Finance",
    category: "Product Design • Front-End",
    summary:
      "Reimagined a financial dashboard into a clearer, calmer experience for busy teams.",
    outcome: "Raised task completion by 28% and cut onboarding friction.",
    details: [
      "Mapped the reporting workflow across finance leads, analysts, and operators to reduce friction at every step.",
      "Introduced a simplified layout system with clearer hierarchy, progressive disclosure, and calmer visual rhythm.",
      "Shipped a responsive interface that improved confidence in everyday decision-making.",
    ],
    highlights: ["Dashboard redesign", "Interaction patterns", "Improved clarity"],
  },
  {
    title: "Lumen Studio",
    category: "Brand Systems • Web UI",
    summary:
      "Crafted a modular, high-conversion website for a creative agency with a storytelling-first layout.",
    outcome: "Delivered a scalable component system for future launches.",
    details: [
      "Built a flexible content framework that gave the studio room to grow without losing consistency.",
      "Designed a modular section system that made launches faster and easier to maintain.",
      "Balanced storytelling, motion, and structure to create a memorable first impression.",
    ],
    highlights: ["Brand system", "Story-first web flow", "Reusable UI blocks"],
  },
  {
    title: "Atlas Mobility",
    category: "UX Strategy • Interaction Design",
    summary:
      "Designed a booking flow that feels effortless from first tap to final confirmation.",
    outcome: "Improved bookings and polished the product experience end to end.",
    details: [
      "Reframed the booking journey around confidence, reassurance, and simple progress cues.",
      "Refined micro-interactions so each step felt lightweight and intentional.",
      "Connected content, UI, and motion into a coherent experience from first tap to done.",
    ],
    highlights: ["Booking flow", "Micro-interactions", "Conversion focus"],
  },
];

export const caseStudies = [
  {
    title: "Designing trust in complex products",
    blurb:
      "A case study focused on simplifying dense information architecture without losing clarity or momentum.",
    tags: ["Research", "UI", "Frontend"],
    details: [
      "Used a layered content strategy to make dense information feel approachable instead of overwhelming.",
      "Introduced clearer visual hierarchy and guided transitions to support confidence in each interaction.",
      "Built a prototype that helped align business goals with a calmer user experience.",
    ],
  },
  {
    title: "Turning ideas into launch-ready experiences",
    blurb:
      "From concept sketches to polished interfaces, this project balanced storytelling with performance.",
    tags: ["Prototyping", "Systems", "React"],
    details: [
      "Moved from rough concepts to polished interfaces with a clear path from exploration to execution.",
      "Kept the experience performant while retaining a rich, editorial feel.",
      "Used modular patterns to make the work easier to iterate and scale.",
    ],
  },
  {
    title: "Building a portfolio that speaks for itself",
    blurb:
      "A personal storytelling project that mixes strong visuals with modular content and a thoughtful narrative.",
    tags: ["Portfolio", "Next.js", "Motion"],
    details: [
      "Created a portfolio experience that feels personal, concise, and flexible enough to grow.",
      "Designed the content flow to guide visitors from introduction to contact without friction.",
      "Used a minimal visual language to let the work stay at the center.",
    ],
  },
];

export const experienceMilestones = [
  {
    period: "2022 — Present",
    type: "Student • Design & Front-End",
    title: "Building a practice around product thinking and visual storytelling",
    description:
      "Developing a personal design system, sharpening frontend craft, and turning ideas into polished digital experiences.",
  },
  {
    period: "2020 — 2022",
    type: "Student • Creative Technology",
    title: "Studied interaction, storytelling, and interface systems",
    description:
      "Focused on design foundations, visual communication, and the relationship between content and user experience.",
  },
  {
    period: "2018 — 2020",
    type: "Early work • Freelance & collaboration",
    title: "Started creating digital work for clients and personal projects",
    description:
      "Gained early experience building concepts, visuals, and simple websites while learning to ship work quickly.",
  },
];
