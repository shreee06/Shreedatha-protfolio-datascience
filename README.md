# Shreedatha DS — Portfolio

React + Vite portfolio: five documented data-science projects with case studies, two clearly-labelled interactive demos, experience, skills and contact. No backend, no paid services.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173/Shreedatha-protfolio-datascience/
npm run build      # production build into dist/
npm run preview    # serve dist/ locally
```

Requires Node 18+ (developed on Node 24).

## Where to edit content

| What | File |
| --- | --- |
| Name, links, about, experience, education, certifications, skills | `src/data/profile.js` |
| Project case studies (metrics, limitations, repo links) | `src/data/projects.js` |
| Colours / typography | CSS variables at the top of `src/styles.css` |
| Playground demos | `src/components/Playground.jsx` |

## Add your CV

Copy your current CV to `public/cv/Shreedatha_DS_CV.pdf`. The "Download CV" buttons appear automatically at build time when that file exists (the filename is set in `vite.config.js`). No placeholder file is shipped, so there is no broken link.

## Deploy to GitHub Pages (free)

1. Create a **public** GitHub repository named `Shreedatha-protfolio-datascience`.
2. Push this project:
   ```bash
   git add -A && git commit -m "Initial portfolio"
   git remote add origin https://github.com/shreee06/Shreedatha-protfolio-datascience.git
   git push -u origin main
   ```
3. In the repo go to **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` runs on every push to `main`. The site appears at `https://shreee06.github.io/Shreedatha-protfolio-datascience/`.

### Different repository name?

- The deploy workflow sets the base path from the repository name automatically.
- For local `dev`/`build`/`preview`, update `REPO_NAME` in `vite.config.js` (or run with `VITE_BASE=/your-name/`). Use `VITE_BASE=/` for a `<user>.github.io` user site.

## Content notes

- Figures come from the author's CV and project summaries; repository code was not reviewed when writing the case studies.
- The discount simulator is a textbook constant-elasticity illustration with a user-chosen elasticity, not a result from any project. The agentic-assistant demo is scripted: no database or LLM is called.
- Phone number is intentionally not shown on the page.
