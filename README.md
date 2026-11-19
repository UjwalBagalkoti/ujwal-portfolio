<h1 align="center">Ujwal Bagalkoti — Developer Portfolio</h1>

<p align="center">
  <strong>Full-Stack Developer | AI/ML Projects | Backend Engineering</strong>
  <br />
  Building practical web applications, AI-powered tools, and developer-focused products.
  <br /><br />
  <a href="https://ujwal-portfolio-tau.vercel.app/">Live Portfolio</a> ·
  <a href="https://github.com/UjwalBagalkoti">GitHub</a> ·
  <a href="https://www.linkedin.com/in/ujwal-bagalkoti">LinkedIn</a>
</p>

---

## About

This repository contains my personal developer portfolio. It presents selected projects, technical skills, education, experience, and ways to contact me.

I am a Computer Science graduate focused on full-stack development, Python backends, and applied AI/ML. I enjoy taking ideas from problem definition through implementation and deployment.

## Featured Projects

The portfolio currently highlights these six projects:

| Project | What it does | Technologies |
| --- | --- | --- |
| [AI Time-Travel Debugger](https://github.com/UjwalBagalkoti/ai-time-travel-debugger) | Records AI-agent executions so you can inspect steps, rewind state, and fork/replay execution paths. [Live demo](https://ai-time-travel-debugger.onrender.com) | Next.js, React Flow, FastAPI, PostgreSQL, Python SDK |
| [UPI Fraud Detection](https://github.com/UjwalBagalkoti/upi-fraud-detection) | Evaluates UPI transactions and returns Allow / Review / Block decisions with human-readable reasons. [Live demo](https://upi-fraud-detection-frontend.onrender.com/) | Flask, scikit-learn, SQLAlchemy, React, PostgreSQL |
| [Fake Face Detection System](https://github.com/UjwalBagalkoti/Fake-Face-Detection-System) | Detects manipulated images and videos using spatial, frequency-domain, and temporal evidence. [Live demo](https://fake-face-detection-system.onrender.com/) | Python, PyTorch, EfficientNet, FastAPI |
| [Career Copilot](https://github.com/UjwalBagalkoti/career-copilot) | Helps compare a resume with a job description, identify skill gaps, tailor resume bullets, and practise interviews. [Live demo](https://career-copilot-lemon.vercel.app/) | React, Vite, Vercel Serverless Functions, Gemini API |
| [Sweety Blood Glucose Tracker](https://github.com/UjwalBagalkoti/sweety-blood-glucose-tracker) | Tracks daily glucose readings and provides daily/monthly reports and trend visualisation. | React, Node.js, Express, Prisma, PostgreSQL |
| [Starlight Drift](https://github.com/UjwalBagalkoti/starlight-drift) | An arcade survival game featuring combos, power-ups, enemies, and boss levels. [Play](https://starlight-drift.vercel.app) | Phaser 3, JavaScript, HTML5 |

## Tech Stack

- **Languages:** Python, JavaScript, TypeScript, Java, SQL
- **Frontend:** React, Next.js, HTML, CSS, Tailwind CSS
- **Backend:** FastAPI, Flask, Node.js, Express, REST APIs
- **Databases:** PostgreSQL, SQL
- **AI/ML:** PyTorch, scikit-learn, Gemini API
- **Tools & Platforms:** Git, GitHub, Docker, Vercel, Render

## Portfolio Tech

This portfolio is built with:

- Next.js 14 (App Router)
- React 18 and TypeScript
- Tailwind CSS
- Redux Toolkit and React Redux

The Redux UI slice manages the theme and selected-project category filter.

## Run Locally

### Prerequisites

- Node.js (LTS recommended)
- npm

### Setup

```bash
git clone https://github.com/UjwalBagalkoti/ujwal-portfolio.git
cd ujwal-portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the local development server |
| `npm run build` | Creates a production build |
| `npm run start` | Starts the production server |
| `npm run lint` | Runs the configured Next.js lint command |

## Project Structure

```
app/             Next.js routes, layout, and global styles
components/      Reusable portfolio sections and UI components
data/            Portfolio content: projects, skills, education, experience, site
lib/             Redux store, UI slice, and typed hooks
public/          Static assets, including the resume when present
```

## Updating Portfolio Content

Most portfolio information is maintained in the `data/` directory:

- `data/site.ts` — contact details and profile links
- `data/projects.ts` — project descriptions, technology stacks, repositories, and live demos
- `data/skills.ts` — technical skills
- `data/education.ts` — education details
- `data/experience.ts` — experience details

Update these files to keep the portfolio content current.

## Contact

- **Email:** [uabagalkoti@gmail.com](mailto:uabagalkoti@gmail.com)
- **GitHub:** [github.com/UjwalBagalkoti](https://github.com/UjwalBagalkoti)
- **LinkedIn:** [linkedin.com/in/ujwal-bagalkoti](https://www.linkedin.com/in/ujwal-bagalkoti)

