export interface EducationItem {
  degree: string;
  school: string;
  period: string;
  score: string;
}

export const education: EducationItem[] = [
  {
    degree: "B.E. in Computer Science Engineering",
    school: "East West College of Engineering, Bengaluru",
    period: "2023 – 2026",
    score: "73.72%",
  },
  {
    degree: "Diploma in Computer Science",
    school: "K H K Institute of Engineering, Dharwad",
    period: "2021 – 2023",
    score: "72.30%",
  },
  {
    degree: "SSLC",
    school: "JK Education Society English Medium High School, Hubli",
    period: "2019 – 2020",
    score: "74.56%",
  },
];

export const certifications = [
  "AI Fluency: Framework & Foundations — Anthropic",
  "Java Full Stack Development — LCC Group of Institution",
  "AI Tools & ChatGPT Workshop — Be10x",
];
export const spokenLanguages = ["English", "Kannada", "Hindi", "Marathi"];
