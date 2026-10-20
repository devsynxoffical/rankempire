RankEmpire website V1

site/    Upload the contents of this folder to your web root (Netlify, Vercel, cPanel, any static host).
         Clean URLs: /local-seo/, /seo-for-plumbers/, /locations/chicago/, /seo-packages/local-seo/
         Includes sitemap.xml, robots.txt and 404.html.

source/  Page generator. Content lives in data_*.py, templates in build.py.
         Rebuild:  python3 build.py deploy ../site
         Preview:  python3 build.py preview ../preview   (relative links, opens from any folder)

Before launch, update in build.py: SITE (your domain) and EMAIL.
Add pages: add an entry to data_industries.py, data_locations.py, data_services.py or data_misc.py and rebuild.
