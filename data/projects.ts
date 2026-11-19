export interface Project {
  name: string;
  category: "Full-Stack" | "Front End" | "AI/ML" | "Fintech" | "Game";
  description: string;
  stack: string[];
  live?: string;
  repo?: string;
}

export const projects: Project[] = [
  {
    name: "AI Time-Travel Debugger",
    category: "AI/ML",
    description:
      "Record an AI agent run once, inspect every step on a graph, rewind to any point, edit the input and fork a replay branch, without re-running external tools that already returned a result.",
    stack: ["Next.js", "React Flow", "FastAPI", "PostgreSQL", "Python SDK"],
    live: "https://ai-time-travel-debugger.onrender.com",
    repo: "https://github.com/UjwalBagalkoti/ai-time-travel-debugger",
  },
  {
    name: "UPI Fraud Detection",
    category: "Full-Stack",
    description:
      "Scores each UPI payment with a Random Forest model blended with a rule engine, returning an Allow / Review / Block decision with human-readable reasons, and a feedback loop that learns from analyst labels.",
    stack: ["Flask", "scikit-learn", "SQLAlchemy", "React", "PostgreSQL"],
    live: "https://upi-fraud-detection-frontend.onrender.com/",
    repo: "https://github.com/UjwalBagalkoti/upi-fraud-detection",
  },
  {
    name: "Fake Face Detection System",
    category: "AI/ML",
    description:
      "An end-to-end deepfake detector for images and video that fuses spatial (EfficientNet), frequency-domain (FFT), and temporal (Transformer) evidence into a calibrated real/fake prediction, served through a FastAPI backend with a browser dashboard.",
    stack: ["Python", "PyTorch", "EfficientNet", "FastAPI"],
    live: "https://fake-face-detection-system.onrender.com/",
    repo: "https://github.com/UjwalBagalkoti/Fake-Face-Detection-System",
  },
  {
    name: "Career Copilot",
    category: "AI/ML",
    description:
      "An AI job-application assistant: upload a resume and a job description to get a 0–100 match score, skill gaps, bullet-tailoring suggestions, likely interview questions, and structured feedback on practice answers.",
    stack: ["React", "Vite", "Vercel Serverless Functions", "Gemini API"],
    live: "https://career-copilot-lemon.vercel.app/",
    repo: "https://github.com/UjwalBagalkoti/career-copilot",
  },
  {
    name: "Sweety Blood Glucose Tracker",
    category: "Full-Stack",
    description:
      "A glucose tracker with email login, four daily reading slots, validation, daily and monthly reports and a trend chart. Covered by API tests (Jest) and component tests (Vitest), and runs with Docker Compose.",
    stack: ["React", "Node.js", "Express", "Prisma", "PostgreSQL"],
    repo: "https://github.com/UjwalBagalkoti/sweety-blood-glucose-tracker",
  },
  {
    name: "Starlight Drift",
    category: "Game",
    description:
      "An arcade survival game: collect stars, build combos, dash past hunters and drones, use shields and freeze power-ups, and beat a boss every fifth level. Works with keyboard and touch controls.",
    stack: ["Phaser 3", "JavaScript", "HTML5"],
    live: "https://starlight-drift.vercel.app",
    repo: "https://github.com/UjwalBagalkoti/starlight-drift",
  },
];

export const projectCategories = ["All", "Full-Stack", "Front End", "AI/ML", "Fintech", "Game"] as const;
