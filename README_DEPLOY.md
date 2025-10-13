Deploy to Plesk
===============

What is included
- `dist-for-deploy.zip` — Vite production build (contains `index.html` and `assets/`).
- `backend/index.js` — serves the build from `backend/dist`.

Goal
- After each pull from GitHub, Plesk runs the Node app and it serves the built frontend from `backend/dist` without manual tweaks.

Recommended steps (Plesk GUI)
1. Open Domains → your domain → File Manager.
2. Go to the app root that contains `backend/index.js`.
3. Upload `dist-for-deploy.zip` (or keep `backend/dist` tracked in Git if you prefer).
4. Extract it so you have:
   - `backend/dist/index.html`
   - `backend/dist/assets/...`
5. In Domains → Node.js, restart the application.

Notes
- The server maps `/assets/*` to `backend/dist/assets` and serves `backend/dist/index.html` for SPA routes.
- If assets 404 or load as `text/html`, make sure the files exist in `backend/dist/assets` and that the Node process restarted.
- Adjust CSP in `backend/index.js` if you add new external sources.
- In Plesk → Node.js, choose Node 20.x or 22.x (these ship with `npm`). Other versions don't provide the `npm` binary and `npm run deploy` will fail.

