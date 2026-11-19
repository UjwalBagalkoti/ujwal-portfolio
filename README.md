<h1 align="center">Ujwal Bagalkoti — Developer Portfolio</h1>

<p align="center">
  <strong>Full-Stack Developer · AI/ML · Backend Engineering</strong>
  <br />
  Building useful web applications, AI-powered tools, and reliable backend systems.
  <br /><br />
  <a href="https://ujwal-portfolio-tau.vercel.app/"><strong>Explore Live Portfolio</strong></a>
  &nbsp;·&nbsp;
  <a href="https://github.com/UjwalBagalkoti">GitHub</a>
  &nbsp;·&nbsp;
  <a href="https://www.linkedin.com/in/ujwal-bagalkoti">LinkedIn</a>
  &nbsp;·&nbsp;
  <a href="mailto:uabagalkoti@gmail.com">Email</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-14-black?logo=next.js" alt="Next.js 14" />
  <img src="https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black" alt="React 18" />
  <img src="https://img.shields.io/badge/TypeScript-5.5-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Deployed_on-Vercel-black?logo=vercel" alt="Deployed on Vercel" />
</p>

---

## About This Project

This repository contains my personal developer portfolio: a single place to explore my selected projects, technical skills, education, experience, and contact details.

The portfolio is built with **Next.js, React, TypeScript, and Tailwind CSS**. Its content is maintained in separate data files, making it straightforward to update projects and profile information without rewriting the page components.

## Featured Projects

These are the six projects currently showcased in the portfolio.

| Project | Overview | Built with | Live Demo | GitHub |
| --- | --- | --- | --- | --- |
| **AI Time-Travel Debugger** | Records AI-agent executions so individual steps can be inspected, state can be rewound, and execution paths can be forked and replayed. | Next.js, React Flow, FastAPI, PostgreSQL, Python SDK | [Live Demo](https://ai-time-travel-debugger-9gct.vercel.app) | [GitHub](https://github.com/UjwalBagalkoti/ai-time-travel-debugger) |
| **UPI Fraud Detection** | Evaluates UPI transactions and returns an Allow / Review / Block decision with human-readable reasons. | Flask, scikit-learn, SQLAlchemy, React, PostgreSQL | [Live Demo](https://upi-fraud-detection-frontend.onrender.com/) | [GitHub](https://github.com/UjwalBagalkoti/upi-fraud-detection) |
| **Fake Face Detection System** | Analyses image and video inputs using spatial, frequency-domain, and temporal evidence to identify manipulated media. | Python, PyTorch, EfficientNet, FastAPI | [Live Demo](https://fake-face-detection-system.onrender.com/) | [GitHub](https://github.com/UjwalBagalkoti/Fake-Face-Detection-System) |
| **Career Copilot** | Compares a resume with a job description, highlights skill gaps, suggests resume improvements, and supports interview practice. | React, Vite, Vercel Serverless Functions, Gemini API | [Live Demo](https://career-copilot-lemon.vercel.app/) | [GitHub](https://github.com/UjwalBagalkoti/career-copilot) |
| **Sweety Blood Glucose Tracker** | Tracks daily glucose readings and provides daily/monthly reports and trend visualisation. | React, Node.js, Express, Prisma, PostgreSQL | Not deployed yet | [GitHub](https://github.com/UjwalBagalkoti/sweety-blood-glucose-tracker) |
| **Starlight Drift** | An arcade survival game with combos, power-ups, enemies, and boss levels. | Phaser 3, JavaScript, HTML5 | [Live Demo](https://starlight-drift.vercel.app) | [GitHub](https://github.com/UjwalBagalkoti/starlight-drift) |

## Technical Skills

| Area | Technologies |
| --- | --- |
| **Languages** | Python, Java, JavaScript, TypeScript, SQL |
| **Frontend** | React.js, Next.js, Angular, Redux, Tailwind CSS, HTML5, CSS3 |
| **Backend & APIs** | Flask, FastAPI, Node.js, Express.js, REST API design, Redis |
| **Databases** | PostgreSQL, MySQL |
| **AI / ML** | OpenAI API, Gemini API, machine learning, CNNs, GANs, computer vision, NLP, Pandas, NumPy |
| **Core concepts** | OOP, data structures & algorithms, SDLC, debugging, software testing |
| **Tools** | Git, GitHub, VS Code, Vercel |

## Portfolio Features

- **Project showcase** with descriptions, technology stacks, source repositories, and live demos where available.
- **Project category filtering** to browse work by area.
- **Light and dark themes** for comfortable viewing.
- **Profile sections** for experience, education, skills, and contact information.
- **Responsive interface** built with reusable React components.
- **Centralised content data** so profile updates stay separate from presentation logic.

## Built With

- [Next.js 14](https://nextjs.org/) — App Router and application framework
- [React 18](https://react.dev/) — UI components
- [TypeScript](https://www.typescriptlang.org/) — typed application code
- [Tailwind CSS 3](https://tailwindcss.com/) — styling
- [Redux Toolkit](https://redux-toolkit.js.org/) and [React Redux](https://react-redux.js.org/) — shared UI state
- [Vercel](https://vercel.com/) — deployment

## Run Locally

### Requirements

- Node.js (LTS recommended)
- npm

### Installation

```bash
git clone https://github.com/UjwalBagalkoti/ujwal-portfolio.git
cd ujwal-portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Available Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create an optimised production build |
| `npm run start` | Start the production server |
| `npm run lint` | Run the configured Next.js lint command |

## Repository Structure

```
app/             Next.js routes, root layout, and global styles
components/      Reusable portfolio sections and interface components
data/            Profile content: projects, skills, education, experience, links
lib/             Redux store, UI slice, and typed hooks
public/          Static assets, profile photo, and resume
```

## Update Portfolio Content

Portfolio content is separated into the `data/` directory:

| File | What to update |
| --- | --- |
| `data/site.ts` | Name, email, GitHub, and LinkedIn |
| `data/projects.ts` | Project summaries, categories, tech stacks, repository links, and demos |
| `data/skills.ts` | Skill groups and technologies |
| `data/education.ts` | Education and certifications |
| `data/experience.ts` | Work experience and descriptions |

To add or edit a project, update `data/projects.ts` and provide its repository and live-demo URLs when available.

## Contact

- **Email:** [uabagalkoti@gmail.com](mailto:uabagalkoti@gmail.com)
- **GitHub:** [UjwalBagalkoti](https://github.com/UjwalBagalkoti)
- **LinkedIn:** [Ujwal Bagalkoti](https://www.linkedin.com/in/ujwal-bagalkoti)
- **Portfolio:** [ujwal-portfolio-tau.vercel.app](https://ujwal-portfolio-tau.vercel.app/)
