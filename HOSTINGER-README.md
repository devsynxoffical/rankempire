# RankEmpire on Hostinger

This branch contains the ready-to-serve static website (built from `main` with `STATIC_EXPORT=1 npx next build`).

Deploy: hPanel > Websites > rankempire.us > Advanced > Git
- Repository: devsynxoffical/rankempire, Branch: `hostinger`, Directory: leave empty (deploys into public_html)
- Click Deploy. `.htaccess` handles HTTPS, www, trailing slashes, 404, caching and compression.

Update: rebuild from `main` and replace the files on this branch, then press Deploy (or enable auto-deployment with the webhook Hostinger shows).
