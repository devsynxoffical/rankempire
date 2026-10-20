PACKAGES = {
 'seo-packages': dict(name='SEO Packages', h1='SEO packages with <em>clear</em> pricing', sub='Monthly plans for every stage. No long contracts after onboarding, no hidden fees and every deliverable listed up front.',
   title='SEO Packages and Pricing | RankEmpire', desc='Transparent SEO packages for local businesses, e-commerce stores and SaaS companies. Compare plans, deliverables and pricing.',
   plans=[('Local','Single-location businesses',799,'pop0',['Google Business Profile optimization','Up to 10 tracked keywords','4 optimized pages per month','Citation cleanup and building','Monthly report and call']),
          ('Growth','Growing businesses and multi-location brands',1499,'pop',['Everything in Local','Up to 30 tracked keywords','8 optimized or new pages per month','Technical SEO fixes','Monthly link building','Live ranking dashboard']),
          ('Empire','Competitive markets and national brands',2999,'pop0',['Everything in Growth','Up to 100 tracked keywords','16 optimized or new pages per month','Digital PR campaign','Dedicated strategist','Quarterly roadmap workshop'])]),
 'seo-packages/local-seo': dict(name='Local SEO Packages', h1='Local SEO packages that win the <em>map pack</em>', sub='Plans built for service businesses, clinics and multi-location brands that depend on local calls and visits.',
   title='Local SEO Packages and Pricing | RankEmpire', desc='Local SEO packages with Google Business Profile optimization, citations, reviews, location pages and map pack tracking.',
   plans=[('Starter','One location, one service area',599,'pop0',['Google Business Profile setup and optimization','Top 40 citations','Review request system','2 location or service pages per month','Rank grid report']),
          ('Pro','Up to three locations',1199,'pop',['Everything in Starter','Weekly Google posts','4 local pages per month','Local link building','Review response management','Competitor map pack tracking']),
          ('Multi-location','Four or more locations',2199,'pop0',['Everything in Pro','Per-location profiles and pages','Store locator SEO','Centralized review dashboard','Dedicated local strategist'])]),
 'seo-packages/ecommerce-seo': dict(name='E-commerce SEO Packages', h1='E-commerce SEO packages built for <em>revenue</em>', sub='Plans for Shopify, WooCommerce and custom stores that want organic sales to carry more of the load.',
   title='E-commerce SEO Packages and Pricing | RankEmpire', desc='E-commerce SEO packages covering technical fixes, category and product optimization, structured data, content and link building.',
   plans=[('Launch','Stores up to 500 products',1199,'pop0',['Technical store audit','Product schema setup','6 category or product optimizations per month','Monthly revenue report']),
          ('Scale','Stores up to 5,000 products',2299,'pop',['Everything in Launch','Faceted navigation control','12 optimizations per month','2 buying guides per month','Link building']),
          ('Enterprise','Large catalogs and marketplaces',3999,'pop0',['Everything in Scale','Template-level technical program','Programmatic category pages','Digital PR','Dedicated SEO lead'])]),
 'seo-packages/saas-seo': dict(name='SaaS SEO Packages', h1='SaaS SEO packages that build <em>pipeline</em>', sub='Plans for B2B software companies that want trials, demos and signups from organic search.',
   title='SaaS SEO Packages and Pricing | RankEmpire', desc='SaaS SEO packages with bottom-funnel pages, comparison pages, topical authority content, technical SEO and pipeline reporting.',
   plans=[('Seed','Early-stage SaaS',1499,'pop0',['Keyword and competitor research','4 bottom-funnel pages per month','Technical SEO review','Signup tracking setup']),
          ('Series','Growth-stage SaaS',2999,'pop',['Everything in Seed','8 pages or articles per month','Comparison and alternative pages','Link building','Pipeline reporting']),
          ('Category leader','Established SaaS',5499,'pop0',['Everything in Series','Programmatic integration pages','Digital PR','International SEO support','Dedicated content lead'])]),
}

TOOLS = [
 ('seo-audit-tool','SEO Audit Tool','audit','Run a quick on-page SEO audit of any page by pasting its HTML. Checks titles, meta tags, headings, images, links, canonical and structured data.'),
 ('keyword-rank-checker','Keyword Rank Checker','rank','Find where a domain appears in a results list. Paste the result URLs for a keyword and we show the position of your domain and competitors.'),
 ('keyword-research-tool','Keyword Research Tool','kw','Generate hundreds of keyword ideas from a seed term, grouped by intent: questions, commercial, local and comparisons.'),
 ('backlink-checker','Backlink Checker','backlink','Analyze a backlink export from any tool. Paste URLs to see referring domains, anchor text mix and link patterns.'),
 ('website-seo-checker','Website SEO Checker','audit','Check the SEO basics of any page in seconds by pasting the page source code.'),
 ('serp-checker','SERP Checker','serp','Preview how your title and description appear in Google search results on desktop and mobile, with pixel width checks.'),
 ('seo-score-checker','SEO Score Checker','audit','Get a 0 to 100 SEO score for any page based on 20 on-page checks.'),
 ('meta-tag-checker','Meta Tag Checker','meta','Check title, description, robots, canonical, Open Graph and Twitter tags from any page source.'),
 ('schema-checker','Schema Checker','schema','Validate JSON-LD structured data and see which schema types and required properties are present.'),
 ('sitemap-checker','Sitemap Checker','sitemap','Paste an XML sitemap to count URLs, find duplicates, check formats and spot common errors.'),
 ('robots-txt-checker','Robots.txt Checker','robots','Test whether a URL is allowed or blocked for Googlebot and other crawlers based on your robots.txt rules.'),
]

TEAM = [
 ('t1','Daniel Brooks','Founder and Head of Strategy','Leads strategy across every account and still runs audits himself.'),
 ('t2','Sofia Ramirez','Director of Local SEO','Runs the local search program for service businesses and multi-location brands.'),
 ('t3','Marcus Lee','Technical SEO Lead','Owns crawling, rendering, site speed and migrations.'),
 ('t4','Helen Carter','Head of Content','Plans topic clusters and edits every piece before it ships.'),
]

BLOG = [
 dict(slug='why-most-seo-campaigns-fail', title='Why Most SEO Campaigns Fail in the First 6 Months', cat='SEO Strategy', img='b1',
  excerpt='It is rarely the budget. It is the order of operations. Here are the mistakes that stall SEO before it has a chance to work.',
  body='''<p>Most SEO campaigns do not fail because SEO stopped working. They fail because the work is done in the wrong order, measured with the wrong numbers or abandoned right before it starts paying off.</p>
<h2>1. Content before foundation</h2><p>Publishing articles on a site that Google struggles to crawl is like stocking shelves in a store with a locked front door. If key pages are blocked, slow, duplicated or buried six clicks deep, new content will not perform. Fix crawlability, indexation and internal linking first.</p>
<h2>2. Targeting keywords without intent</h2><p>A keyword with high volume is useless if the people searching it do not want what you sell. Every target should be checked against the current results page: if Google shows guides and you have a sales page, you are fighting the algorithm instead of working with it.</p>
<h2>3. One page trying to rank for everything</h2><p>Service pages that list ten services rarely rank for any of them. Each meaningful service, location and audience deserves its own page with a clear job. This is also how you avoid keyword cannibalization, where several of your own pages compete for the same search.</p>
<h2>4. Measuring the wrong thing</h2><p>Rankings and traffic are leading indicators, not outcomes. Track calls, form submissions, booked appointments and revenue from organic search. When the report connects to money, decisions get easier.</p>
<h2>5. Quitting at month four</h2><p>SEO compounds. Months one to three are mostly fixes and foundations, months four to six bring the first meaningful movement and the real returns usually show after that. Most campaigns that fail are stopped just before the curve bends.</p>
<h2>The fix</h2><p>Audit first, prioritize by impact, build pages with one clear job, earn real authority and measure revenue. It is not glamorous, but it is how rankings become an asset instead of an expense.</p>'''),
 dict(slug='local-seo-checklist', title='The Local SEO Checklist for Service Businesses', cat='Local SEO', img='b2',
  excerpt='A practical checklist to win the Google map pack: profile, citations, reviews, pages and links, in the order that matters.',
  body='''<p>The map pack is where local customers decide who to call. This checklist covers the work that moves map rankings, in the order we do it for clients.</p>
<h2>Google Business Profile</h2><ul><li>Choose the most specific primary category that matches your main service.</li><li>Add every service you offer with a short description.</li><li>Upload real photos of your team, vehicles, location and work every month.</li><li>Post at least weekly: offers, projects, tips and updates.</li><li>Answer common questions in the Q&amp;A section before customers ask.</li></ul>
<h2>Consistency across the web</h2><p>Your business name, address and phone number should match exactly across your website, Google, Apple Maps, Bing, Yelp, Facebook and industry directories. Inconsistent listings confuse both customers and search engines.</p>
<h2>Reviews</h2><ul><li>Ask every happy customer, with a direct link, at the moment of satisfaction.</li><li>Respond to every review within a few days, positive or negative.</li><li>Never buy reviews or offer incentives that break platform rules.</li></ul>
<h2>Location and service pages</h2><p>Create a page for each core service and each important area you serve. Include real details: projects completed nearby, local regulations, travel times and photos. Avoid copying the same page and swapping city names.</p>
<h2>Local links</h2><p>Sponsor local teams and events, join your chamber of commerce, partner with complementary businesses and pitch local news stories. Local links are a strong prominence signal that most competitors ignore.</p>
<h2>Track the right way</h2><p>Map rankings change by location. Use a grid-based rank tracker to see visibility across your whole service area, not just at your office.</p>'''),
 dict(slug='technical-seo-basics', title='Technical SEO Basics Every Business Owner Should Know', cat='Technical SEO', img='b3',
  excerpt='You do not need to be a developer to understand what holds a website back. Five technical basics, explained in plain English.',
  body='''<p>Technical SEO sounds intimidating, but the core ideas are simple: Google needs to find your pages, understand them and load them quickly. Here is what to check.</p>
<h2>1. Can Google find your pages?</h2><p>Every important page should be linked from somewhere on your site and listed in your XML sitemap. Pages nobody links to, called orphan pages, are hard for Google to discover. Use our <a href="../../seo-tools/sitemap-checker/">Sitemap Checker</a> to review your sitemap.</p>
<h2>2. Are you blocking anything by accident?</h2><p>Your robots.txt file tells crawlers what they may visit. One wrong line can block an entire section. Test important URLs with our <a href="../../seo-tools/robots-txt-checker/">Robots.txt Checker</a>.</p>
<h2>3. Is each page unique?</h2><p>Duplicate pages split ranking signals. Use canonical tags to point duplicates to the main version and give each page a unique title and description. Our <a href="../../seo-tools/meta-tag-checker/">Meta Tag Checker</a> shows these quickly.</p>
<h2>4. Is the site fast on phones?</h2><p>Google evaluates the mobile version of your site first. Large images, heavy scripts and slow hosting hurt both rankings and conversions. Compress images, use modern formats and remove scripts you do not need.</p>
<h2>5. Does Google understand what you are?</h2><p>Structured data, or schema markup, labels your business, services, products, reviews and FAQs in a format search engines read directly. It can unlock rich results. Validate yours with our <a href="../../seo-tools/schema-checker/">Schema Checker</a>.</p>
<h2>When to get help</h2><p>If pages will not index, traffic dropped after a redesign or your site is slow despite fixes, it is time for a professional <a href="../../technical-seo/">technical SEO</a> review.</p>'''),
]

FAQ_HOME = [
 ('general','How long does SEO take to work?','Most clients see early movement in 60 to 90 days and meaningful results in 4 to 6 months. Competitive markets and new websites take longer. We share a realistic timeline after the audit.'),
 ('general','What is included in every RankEmpire plan?','An initial audit, a prioritized roadmap, the work itself, monthly reporting in plain English and a live dashboard. You also get a named strategist you can reach directly.'),
 ('general','Do you work with businesses outside the US?','Our focus is the US market, but we support international SEO for US companies expanding abroad and for brands entering the US.'),
 ('pricing','Do I have to sign a long contract?','No. After a 3 month onboarding period, plans are month to month. You can cancel with 30 days notice.'),
 ('pricing','Are there setup fees?','No setup fees on standard plans. Custom enterprise programs may include a one-time onboarding project, quoted up front.'),
 ('pricing','Can I change plans later?','Yes. You can upgrade or downgrade at the start of any month.'),
 ('results','Do you guarantee first page rankings?','No honest SEO company can guarantee rankings, because Google controls the results. We commit to the work, the transparency and the process that produce results.'),
 ('results','How do you report results?','Monthly reports cover rankings, traffic, conversions and the work completed, plus a live dashboard you can check anytime.'),
 ('results','What happens if results stall?','We review the data with you, explain what we see and adjust the plan. You will never be left guessing.'),
 ('technical','Do you need access to my website?','Yes, editor access to your CMS plus read access to Google Search Console and Analytics. We never need ownership.'),
 ('technical','Which platforms do you work with?','WordPress, Shopify, Webflow, Wix, Squarespace, WooCommerce, BigCommerce, Framer and custom builds.'),
 ('technical','Will SEO slow down my website?','No. Our work usually makes sites faster by removing bloat, compressing images and fixing slow templates.'),
]

PLAYBOOKS = [
 dict(t='Map Pack Takeover', img='w1', desc='A 90-day local program for service businesses: profile rebuild, review engine, location pages and local links designed to move a business into the top three map results.', best='Home services, clinics and multi-location brands', svcs=['Local SEO','GBP SEO']),
 dict(t='Organic Revenue Engine', img='w3', desc='An e-commerce program that cleans up faceted navigation, rewrites priority categories and adds buying guides so organic search drives sales instead of empty sessions.', best='Shopify and WooCommerce stores', svcs=['E-commerce SEO','Content SEO']),
 dict(t='Technical Recovery', img='w2', desc='For sites that lost traffic after a redesign or update: full crawl, indexation fixes, redirect repair and Core Web Vitals work to restore and then grow visibility.', best='Sites after migrations or traffic drops', svcs=['Technical SEO','SEO Audit']),
 dict(t='Practice Growth', img='w4', desc='A trust-first program for dental, medical and legal practices: treatment or practice area pages, provider profiles, reviews and local authority built to bring in new patients and clients.', best='Dentists, clinics and law firms', svcs=['Local SEO','Content SEO']),
]

TRUST = [
 ('You own everything','Every page, account, report and piece of content we create belongs to you from day one. If you ever leave, you keep it all.','No lock-in, ever.','Commitment 01'),
 ('Reports you can read','Our monthly report explains what we did, what changed and what comes next, in plain English instead of screenshots and jargon.','No vanity metrics.','Commitment 02'),
 ('No shortcuts','We never buy links from networks, publish spun content or use tactics that put your site at risk of a penalty.','Safe, durable growth.','Commitment 03'),
 ('A real strategist','You get a named strategist who knows your business and answers your messages, not a rotating support queue.','Direct access.','Commitment 04'),
 ('Audit before action','We never start work without understanding your site, market and competitors first, so time goes where it pays back.','Priorities by impact.','Commitment 05'),
 ('Honest timelines','We tell you how long results should take in your market, including when SEO is not the right channel for your goal.','Straight answers.','Commitment 06'),
]

STACK = ['Google Search Console','Google Analytics 4','Google Business Profile','Ahrefs','Semrush','Screaming Frog','PageSpeed Insights','Schema.org','Shopify','WordPress','Webflow','BrightLocal']
