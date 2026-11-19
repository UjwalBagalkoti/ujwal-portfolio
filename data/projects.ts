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
      "A debugging tool for AI-agent workflows. Records execution traces, visualizes steps and tool calls, and lets developers inspect earlier states, change inputs, then fork and replay a run using cached tool outputs.",
    stack: ["Next.js", "React Flow", "FastAPI", "PostgreSQL", "Python SDK"],
    live: "https://ai-time-travel-debugger-9gct.vercel.app",
    repo: "https://github.com/UjwalBagalkoti/ai-time-travel-debugger",
  },
  {
    name: "UPI Fraud Detection",
    category: "Full-Stack",
    description:
      "A payment-risk analysis application combining a Random Forest model with rule-based checks. Each transaction receives an Allow, Review, or Block decision with explainable reasons, while analyst feedback can be used to improve future decisions.",
    stack: ["Flask", "scikit-learn", "SQLAlchemy", "React", "PostgreSQL"],
    live: "https://upi-fraud-detection-frontend.onrender.com/",
    repo: "https://github.com/UjwalBagalkoti/upi-fraud-detection",
  },
  {
    name: "Fake Face Detection System",
    category: "AI/ML",
    description:
      "An image and video deepfake-detection system that combines spatial features from EfficientNet, frequency-domain signals from FFT, and temporal evidence from a Transformer to produce real/fake predictions through a FastAPI-powered browser dashboard.",
    stack: ["Python", "PyTorch", "EfficientNet", "FastAPI"],
    live: "https://fake-face-detection-system.onrender.com/",
    repo: "https://github.com/UjwalBagalkoti/Fake-Face-Detection-System",
  },
  {
    name: "Career Copilot",
    category: "AI/ML",
    description:
      "An AI-assisted job-application workspace that compares a resume with a job description, reports a match score and skill gaps, suggests targeted resume-bullet improvements, and supports interview practice with structured feedback.",
    stack: ["React", "Vite", "Vercel Serverless Functions", "Gemini API"],
    live: "https://career-copilot-lemon.vercel.app/",
    repo: "https://github.com/UjwalBagalkoti/career-copilot",
  },
  {
    name: "Sweety Blood Glucose Tracker",
    category: "Full-Stack",
    description:
      "A full-stack health-tracking application with email login, four daily reading slots, input validation, daily and monthly reports, and trend visualization. Includes API tests with Jest, component tests with Vitest, and a Docker Compose setup.",
    stack: ["React", "Node.js", "Express", "Prisma", "PostgreSQL"],
    live: "https://sweety-blood-glucose-tracker-ujwal.vercel.app",
    repo: "https://github.com/UjwalBagalkoti/sweety-blood-glucose-tracker",
  },
  {
    name: "Starlight Drift",
    category: "Game",
    description:
      "A browser-based arcade survival game built around score-building combos and escalating challenges. Players evade hunters and drones, use shield and freeze power-ups, and face a boss every fifth level, with keyboard and touch controls.",
    stack: ["Phaser 3", "JavaScript", "HTML5"],
    live: "https://starlight-drift.vercel.app",
    repo: "https://github.com/UjwalBagalkoti/starlight-drift",
  },
];

export const projectCategories = ["All", "Full-Stack", "Front End", "AI/ML", "Fintech", "Game"] as const;
