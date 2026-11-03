// Social profile URLs now flow from content/site.json into the Organization schema through
// components/seo/OrgSchema.tsx (every page) and the footer. Nothing to inject; kept so `npm run socials` still works.
console.log('socials: edit content/site.json; OrgSchema and the footer read it at build time');
