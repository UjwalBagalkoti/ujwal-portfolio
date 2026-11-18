export type Project = {
  name: string;
  kind: string;
  description: string;
  stack: string[];
  live: string;
  repo: string;
};

const gh = "https://github.com/UjwalBagalkoti/";

export const projects: Project[] = [
  {
    name: "UPI Fraud Detection",
    kind: "Full-stack · ML",
    description:
      "Scores each UPI payment with a Random Forest model blended with a rule engine, then returns an Allow, Review or Block decision with plain-language reasons. Analyst labels feed back into the model.",
    stack: ["Flask", "scikit-learn", "SQLAlchemy", "React", "PostgreSQL"],
    live: "https://upi-fraud-detection-frontend.onrender.com/",
    repo: gh + "upi-fraud-detection",
  },
  {
    name: "Career Copilot",
    kind: "AI assistant",
    description:
      "Upload a resume and a job description and get a 0–100 match score, skill gaps, bullet-tailoring suggestions, likely interview questions and structured feedback on practice answers.",
    stack: ["React", "Vite", "Vercel Functions", "Gemini API"],
    live: "https://career-copilot-lemon.vercel.app/",
    repo: gh + "career-copilot",
  },
  {
    name: "AI Time-Travel Debugger",
    kind: "Developer tooling",
    description:
      "Record an AI agent run once, inspect every step on a graph, rewind to any point, edit the input and fork a replay branch, without re-running external tools that already returned a result.",
    stack: ["Next.js", "React Flow", "FastAPI", "PostgreSQL", "Python SDK"],
    live: "https://ai-time-travel-debugger.onrender.com",
    repo: gh + "ai-time-travel-debugger",
  },
  {
    name: "Fake Face Detection System",
    kind: "Deep learning",
    description:
      "An end-to-end deepfake detector for images and video. It fuses spatial (EfficientNet), frequency (FFT) and temporal (Transformer) evidence into one calibrated real-or-fake prediction, served by FastAPI.",
    stack: ["Python", "PyTorch", "EfficientNet", "FastAPI"],
    live: "https://fake-face-detection-system.onrender.com/",
    repo: gh + "Fake-Face-Detection-System",
  },
  {
    name: "Wind Procurement Intelligence",
    kind: "Data dashboard",
    description:
      "A pilot dashboard comparing UK day-ahead wind forecasts with actual generation. It reports MAE, RMSE, bias and WAPE for any date window and exports the results as CSV.",
    stack: ["React", "Vite", "FastAPI", "Docker"],
    live: "https://quwuhdi-frontend.vercel.app",
    repo: gh + "quwuhdi",
  },
  {
    name: "Ultron AI Chatbot",
    kind: "Voice & web assistant",
    description:
      "A voice and web assistant in the style of Marvel's Ultron. It handles everyday commands like time, weather and opening sites, and falls back to Gemini for open questions, answered in character.",
    stack: ["Python", "Flask", "Gemini API", "Speech Recognition"],
    live: "https://ultron-ai-chatbot.onrender.com/",
    repo: gh + "Ultron-AI-Chatbot",
  },
];
