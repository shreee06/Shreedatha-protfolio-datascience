import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { existsSync } from 'node:fs'

// GitHub Pages serves a project site at https://<user>.github.io/<REPO_NAME>/
// Change REPO_NAME if you rename the repository (or set VITE_BASE, e.g. "/" for a user site).
const REPO_NAME = 'Shreedatha-protfolio-datascience'
const CV_FILE = 'Shreedatha_DS_CV.pdf'

export default defineConfig({
  base: process.env.VITE_BASE ?? `/${REPO_NAME}/`,
  plugins: [react()],
  define: {
    // The CV buttons only render if the PDF is actually present in public/cv/.
    __CV_FILE__: JSON.stringify(existsSync(`public/cv/${CV_FILE}`) ? `cv/${CV_FILE}` : ''),
  },
})
