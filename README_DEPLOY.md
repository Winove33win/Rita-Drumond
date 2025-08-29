Deploy instructions for Plesk
=============================

This file explains how to deploy the prepared production build that is included as `dist-for-deploy.zip` in this repository.

What is included
- `dist-for-deploy.zip` — the Vite production build (contains `public/index.html` and `assets/`) placed at the repository root for easy download.
- `backend/index.js` — updated to serve the build from `backend/dist/public`.

Goal
- Provide a single ZIP that Plesk can extract into the application folder so the Node backend serves the static files.

Recommended Plesk deployment steps (GUI)
1. Log in to Plesk and open Domains > <your-domain> > File Manager.
2. Navigate to the folder where your Node app lives (the folder that contains `backend/index.js`).
3. Upload `dist-for-deploy.zip` (you can download it from this GitHub repo or use the copy already in the repo if you cloned the repo on the server).
4. After upload, use the File Manager Extract (Unzip) action to extract the archive. The extraction should create `dist/public/index.html` and `dist/assets/...` under the same directory as `backend/index.js`.
5. Confirm the folder structure:
   - backend/
     - index.js
     - dist/
       - public/
         - index.html
         - assets/

6. In Plesk > Node.js for that domain, restart the application (Restart button) so the Node process picks up the new assets.
7. Open the site in your browser and check DevTools Console and Network for missing files or CSP errors.

If you prefer SSH/SCP
1. Copy the zip to the server:
   scp dist-for-deploy.zip user@server:/path/to/app
2. SSH in, extract and ensure correct layout:
   ssh user@server
   cd /path/to/app
   unzip -o dist-for-deploy.zip -d .
3. Restart the Node app (via Plesk UI or pm2/systemd depending on your setup).

Notes and troubleshooting
- `backend/index.js` was updated to serve files from `dist/public`. If you prefer `dist` root instead, move files accordingly or edit `backend/index.js`.
- If you see 404s on hashed asset names, ensure `dist/public/assets` exists and the server serves it.
- If CSP blocks scripts, check the backend logs and the Content-Security-Policy header in `backend/index.js`.

If you want, I can also create a GitHub Release with the zip attached — say the word and I will create it.

---
Deployed by automation on local machine. Verify on Plesk after extraction and restart.
