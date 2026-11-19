export interface ExperienceItem {
  role: string;
  org: string;
  period?: string;
  summary: string;
}

// Most recent first. `period` is optional.
export const experience: ExperienceItem[] = [
  {
    role: "Python Development Intern",
    org: "Global Quest Technologies",
    period: "Feb – May 2026",
    summary:
      "Built and debugged Python applications, wrote and ran tests, and worked with the team to ship features while keeping the codebase reliable.",
  },
  {
    role: "Full Stack Development Intern",
    org: "Athreya Technologies",
    period: "Feb – Jun 2023",
    summary:
      "A 640-hour internship building web application features, integrating REST APIs, and handling debugging, testing, and deployment with Git.",
  },
];
