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
      "Worked on Python application development and debugging, wrote and executed tests, and collaborated with the team to deliver features while maintaining code quality and reliability.",
  },
  {
    role: "Full Stack Development Intern",
    org: "Athreya Technologies",
    period: "Feb – Jun 2023",
    summary:
      "Completed a 640-hour internship focused on building web-application features, integrating REST APIs, and supporting debugging, testing, and Git-based deployment workflows.",
  },
];
