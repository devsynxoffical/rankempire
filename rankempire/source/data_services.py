# Service pages content. Each entry builds one landing page.
S = {}
def svc(slug, **k): k['slug'] = slug; S[slug] = k

svc('seo-company', name='SEO Company', group='core', img='team',
 title='SEO Company That Builds Rankings That Compound | RankEmpire',
 desc='RankEmpire is a full-service SEO company for local businesses, e-commerce brands and SaaS teams. Technical SEO, content, links and Google Business Profile under one roof.',
 h1='The SEO company built for <em>compounding</em> growth', sub='One team for technical SEO, content, links and local search, so every month of work stacks on the last instead of starting over.',
 intro='Most businesses do not need more SEO activity. They need fewer, better decisions made in the right order. We audit first, prioritize by revenue impact, ship the work ourselves and report on the numbers that matter: qualified traffic, calls, leads and sales.',
 inc=[('Technical foundation','Crawlability, indexation, Core Web Vitals, internal linking and structured data fixed before anything else.'),('Search intent mapping','Every target keyword mapped to one page with one job, so you stop competing with yourself.'),('Content that ranks','Service pages, location pages and articles written by subject matter writers and edited for search.'),('Authority building','Editorial links, digital PR and citations earned on relevant sites, never bought in bulk.'),('Local visibility','Google Business Profile, reviews and map pack rankings for every location you serve.'),('Clear reporting','A monthly report in plain English plus a live dashboard of rankings, traffic and conversions.')],
 fit=['Service businesses that rely on calls and form leads','E-commerce stores that want organic revenue, not just traffic','SaaS companies building a content and product-led pipeline','Multi-location brands that need consistency across every city'],
 faq=[('What makes RankEmpire different from other SEO companies?','We keep the whole job in one team. The people who audit your site are the same people who fix it, write for it and report on it, so nothing gets lost between agencies or freelancers.'),('Do you lock clients into long contracts?','No. Plans run month to month after an initial 3 month onboarding period, because SEO needs that long to show direction.'),('Who owns the work?','You do. Every page, account, report and piece of content we create belongs to your business from day one.')],
 related=['seo-services','local-seo','technical-seo','seo-audit'])

svc('seo-services', name='SEO Services', group='core', img='s-saas', hub=True,
 title='SEO Services: Technical, Local, Content and Link Building | RankEmpire',
 desc='Explore every SEO service RankEmpire offers: local SEO, technical SEO, e-commerce, SaaS, content, link building, audits, consulting and more.',
 h1='SEO services for every <em>stage</em> of growth', sub='Pick a single service or combine them into a full program. Every engagement starts with an audit so we work on what moves revenue first.',
 intro='Search has changed. Rankings now depend on technical health, genuinely useful content, real authority and strong local signals all at once. Our services are built to work together, and our team decides the mix based on your data, not a template.',
 inc=[], fit=[],
 faq=[('Can I buy a single SEO service?','Yes. Many clients start with an SEO audit, technical SEO or link building and add services once they see results.'),('Which service should I start with?','If you are unsure, start with an SEO audit. It shows exactly where you are losing rankings and what to fix first.'),('Do your services include reporting?','Every service includes monthly reporting and access to a live dashboard.')],
 related=['seo-audit','seo-packages','seo-company','seo-consulting'])

svc('local-seo', name='Local SEO', group='core', img='s-local', chips=['Map Pack Rankings','Google Business Profile','Local Citations'],
 title='Local SEO Services: Rank in the Map Pack | RankEmpire',
 desc='Local SEO that puts your business in the Google map pack and local results. Google Business Profile optimization, citations, reviews and location pages.',
 h1='Local SEO that wins the <em>map pack</em>', sub='Show up when nearby customers search for what you do, with a Google Business Profile, location pages and local signals that outrank the competition.',
 intro='Most local searches end with a call, a visit or a booking within a day. If you are not in the top three map results, those customers go to someone else. We build the proximity, relevance and prominence signals Google uses to choose who appears.',
 inc=[('Google Business Profile optimization','Categories, services, products, attributes, photos and posts set up to match how customers search.'),('Location landing pages','Unique pages for each city or service area with real local proof, not swapped city names.'),('Citation building and cleanup','Consistent name, address and phone across the directories and data aggregators that matter.'),('Review generation system','A simple process and templates to earn more reviews and respond to every one.'),('Local link building','Sponsorships, local press, partners and community sites that strengthen local authority.'),('Rank grid tracking','Map pack rankings tracked across a grid of your service area, not just your office address.')],
 fit=['Home service businesses that live on phone calls','Clinics, practices and firms serving a defined area','Multi-location brands with inconsistent listings','Businesses losing map rankings to closer competitors'],
 steps=[('Local audit','We review your profile, citations, reviews, local pages and competitors in the map pack.'),('Profile and citation fixes','Your Google Business Profile and core citations are cleaned up and optimized.'),('Local content and links','Location pages and local links go live to build relevance and prominence.'),('Reviews and rank grid','Review flow and grid tracking show progress across every neighborhood you serve.')],
 faq=[('How long does local SEO take?','Many businesses see map pack movement within 60 to 90 days. Competitive markets and new profiles take longer.'),('Can you rank me in a city where I have no address?','Google heavily favors proximity for map results, so we focus map work on areas near your locations and use organic location pages to win wider areas.'),('Do you handle multiple locations?','Yes. We manage profiles, pages and reporting for multi-location brands with one consistent system.')],
 related=['google-business-profile-seo','seo-packages/local-seo','seo-audit','industries'])

svc('ecommerce-seo', name='E-commerce SEO', group='core', img='s-ecom', chips=['Category Pages','Product SEO','Faceted Navigation'],
 title='E-commerce SEO Services for Shopify and WooCommerce | RankEmpire',
 desc='E-commerce SEO that grows organic revenue: category and product page optimization, technical fixes for faceted navigation, structured data and content.',
 h1='E-commerce SEO that grows <em>revenue</em>, not just traffic', sub='Category pages that rank, product pages that convert and a technical setup that lets Google crawl your whole catalog.',
 intro='Online stores lose organic revenue in quiet ways: duplicate product variants, thin category pages, filters that create thousands of useless URLs and missing product schema. We fix the store first, then build the category and content strategy that captures buyers at every stage.',
 inc=[('Category page optimization','Category copy, internal links and filters rebuilt around high-intent searches.'),('Product page SEO','Unique titles, descriptions, images and reviews markup across your catalog.'),('Faceted navigation control','Canonicals, noindex rules and crawl paths that stop filter bloat.'),('Product structured data','Product, offer, review and breadcrumb schema for rich results.'),('Buying guide content','Guides and comparisons that capture shoppers before they choose a store.'),('Platform fixes','Shopify, WooCommerce, BigCommerce and Magento issues resolved at the template level.')],
 fit=['Shopify and WooCommerce stores with large catalogs','Brands relying too heavily on paid ads','Stores with traffic but weak organic revenue','Retailers launching new categories'],
 steps=[('Catalog crawl','We crawl every product, category and filter URL to map waste and opportunity.'),('Template fixes','Technical fixes ship once at the template level and apply across the store.'),('Category growth','Priority categories get new copy, links and supporting content.'),('Revenue reporting','We track organic revenue and conversion rate, not only sessions.')],
 faq=[('Which platforms do you work with?','Shopify, WooCommerce, BigCommerce, Magento and custom builds.'),('Will SEO changes affect my store design?','Most changes are invisible to shoppers. Where copy is added, we design it to fit your layout.'),('How do you measure e-commerce SEO success?','Organic revenue, transactions and conversion rate from organic search, reported monthly.')],
 related=['seo-packages/ecommerce-seo','technical-seo','content-seo','keyword-research'])

svc('saas-seo', name='SaaS SEO', group='core', img='s-saas', chips=['Product-led Content','Comparison Pages','Topical Authority'],
 title='SaaS SEO Agency for B2B Software Companies | RankEmpire',
 desc='SaaS SEO that builds pipeline: bottom-funnel pages, comparison and alternative pages, integration pages and topical authority content for B2B software.',
 h1='SaaS SEO that fills the <em>pipeline</em>', sub='Bottom-funnel pages first, then the topical authority that makes your whole site rank. Built around trials, demos and signups.',
 intro='Most SaaS blogs chase traffic that never converts. We start where buyers already are: alternatives, comparisons, integrations, use cases and problem searches with clear intent. Then we build the content clusters that make your domain the obvious answer in your category.',
 inc=[('Bottom-funnel pages','Alternative, comparison, pricing and use case pages built to convert evaluators.'),('Programmatic pages','Integration and template pages generated from your product data with real value on each page.'),('Topical authority clusters','Pillar and supporting articles mapped to your product capabilities.'),('Product-led content','Articles that show your product solving the problem, with screenshots and workflows.'),('Technical SEO for apps','JavaScript rendering, docs subdomains, international setups and site migrations.'),('Pipeline attribution','Organic signups, demos and pipeline tracked in your analytics and CRM.')],
 fit=['B2B SaaS teams from seed to growth stage','Products with strong integrations or templates','Companies with blogs that do not convert','Teams planning a site migration or rebrand'],
 steps=[('Intent research','We map bottom, middle and top funnel searches to your product.'),('Money pages first','Comparison, alternative and use case pages go live first.'),('Authority clusters','Supporting content builds topical depth around your core category.'),('Pipeline reporting','We report on trials, demos and pipeline from organic search.')],
 faq=[('Do you write technical SaaS content?','Yes. Our writers interview your team and use your product so content is accurate and specific.'),('How fast can SaaS SEO produce leads?','Bottom-funnel pages often generate signups within the first few months, while authority content compounds over 6 to 12 months.'),('Can you work with our in-house content team?','Yes. We can lead strategy and technical SEO while your team writes, or the other way around.')],
 related=['seo-packages/saas-seo','content-seo','technical-seo','keyword-research'])

svc('technical-seo', name='Technical SEO', group='core', img='s-tech', chips=['Core Web Vitals','Crawl and Indexing','Schema Markup'],
 title='Technical SEO Services: Crawl, Speed and Indexing Fixes | RankEmpire',
 desc='Technical SEO services that fix crawlability, indexation, Core Web Vitals, structured data, JavaScript rendering and site migrations.',
 h1='Technical SEO that removes the <em>ceiling</em>', sub='If Google cannot crawl, render and understand your site, nothing else works. We fix the foundation so content and links can do their job.',
 intro='Technical problems rarely look dramatic. A canonical tag pointing the wrong way, a slow template, a render-blocking script or an orphaned section can quietly hold back an entire site. We find these issues with full crawls and log data, then fix them at the source.',
 inc=[('Crawl and index audit','Full crawl plus Search Console data to find what Google sees, skips and ignores.'),('Core Web Vitals','LCP, INP and CLS improvements on the templates that carry your traffic.'),('Structured data','Organization, LocalBusiness, Product, FAQ, Article and Breadcrumb schema.'),('JavaScript SEO','Rendering checks and fixes for React, Next.js, Vue and other frameworks.'),('Site architecture','Internal linking, URL structure and navigation built for crawl depth and relevance.'),('Migration support','Redirect maps, pre-launch checks and post-launch monitoring for redesigns and replatforms.')],
 fit=['Sites with pages that will not index','Large sites with crawl budget issues','Teams planning a redesign or migration','Websites with slow mobile performance'],
 steps=[('Crawl and diagnose','We crawl the site, review Search Console and prioritize issues by impact.'),('Fix plan','Developers get clear tickets with the exact change and the reason for it.'),('Implementation','We implement directly or work alongside your dev team.'),('Verify and monitor','Fixes are validated in Search Console and monitored for regressions.')],
 faq=[('Do you need access to our developers?','It helps. We can implement directly on most CMS platforms or provide developer-ready tickets for your team.'),('What tools do you use?','Screaming Frog, Sitebulb, Google Search Console, PageSpeed Insights, Lighthouse and server log analysis.'),('Can you help with a site migration?','Yes. Migrations are one of the highest-risk moments for SEO and we plan redirects and checks before launch.')],
 related=['seo-audit','on-page-seo','seo-tools/website-seo-checker','seo-tools/schema-checker'])

svc('seo-audit', name='SEO Audit', group='core', img='w2',
 title='Professional SEO Audit: Find What Is Holding You Back | RankEmpire',
 desc='A complete SEO audit covering technical health, content, backlinks, local SEO and competitors, with a prioritized action plan your team can follow.',
 h1='An SEO audit that ends with a <em>plan</em>, not a PDF', sub='Technical, content, links, local and competitor analysis, delivered as a prioritized roadmap ranked by revenue impact.',
 intro='Automated audit tools produce hundreds of warnings and no priorities. Our audit is done by people who have fixed these problems before. Every finding comes with the business impact, the effort required and the exact fix, so you know what to do first.',
 inc=[('Technical review','Crawlability, indexation, speed, mobile, structured data and architecture.'),('Content and intent review','Which pages match search intent, which compete with each other and which are missing.'),('Backlink profile','Link quality, toxic patterns, anchor text and gaps against competitors.'),('Local SEO review','Google Business Profile, citations, reviews and location pages.'),('Competitor gap analysis','Where competitors win rankings and why, with the pages and links behind it.'),('Prioritized roadmap','A 90-day action plan ranked by impact and effort, walked through on a call.')],
 fit=['Businesses whose traffic has dropped','Teams starting SEO for the first time','Companies switching SEO agencies','Sites preparing a redesign'],
 steps=[('Access and goals','We get read access to Search Console and analytics and agree on goals.'),('Deep analysis','Our team runs the technical, content, link and local analysis.'),('Roadmap','Findings become a prioritized 90-day plan.'),('Walkthrough','We walk your team through every recommendation on a call.')],
 faq=[('How long does an SEO audit take?','Most audits are delivered within 10 business days. Large sites can take longer.'),('Do I need to buy ongoing SEO after the audit?','No. Many clients implement the audit in-house. If you want help, we can do the work for you.'),('Is there a free version?','You can run our free SEO Audit Tool for a quick check. The full audit goes much deeper.')],
 related=['seo-tools/seo-audit-tool','technical-seo','competitor-seo-analysis','seo-consulting'])

svc('google-business-profile-seo', name='Google Business Profile SEO', group='core', img='w1', chips=['Profile Optimization','Review Strategy','GBP Posts'],
 title='Google Business Profile SEO and Optimization | RankEmpire',
 desc='Google Business Profile optimization that improves map rankings, calls and direction requests: categories, services, photos, posts, reviews and Q&A.',
 h1='Google Business Profile SEO that drives <em>calls</em>', sub='Your profile is often the first thing customers see. We turn it into the strongest asset in your local search presence.',
 intro='For many local businesses, the Google Business Profile drives more calls than the website. Yet most profiles use the wrong primary category, leave services blank and go months without a photo or post. Small changes here often produce the fastest wins in local SEO.',
 inc=[('Category strategy','Primary and secondary categories chosen from competitor and search data.'),('Services and products','Every service and product listed with keyword-aware descriptions.'),('Photo and video plan','Regular, geotagged-quality visuals that show real work and real people.'),('Weekly posts','Offers, updates and project posts that keep the profile active.'),('Review management','Review requests, response templates and monitoring.'),('Spam and suspension help','Reporting fake competitor listings and recovering suspended profiles.')],
 fit=['Local businesses that depend on calls','New profiles that do not appear in the map pack','Businesses with fewer reviews than competitors','Brands dealing with spammy competitor listings'],
 steps=[('Profile audit','We compare your profile with the top three competitors in your map pack.'),('Optimization','Categories, services, descriptions and attributes are updated.'),('Ongoing activity','Posts, photos and review responses keep the profile active.'),('Insights reporting','We report calls, direction requests and map rankings monthly.')],
 faq=[('Can you verify my Google Business Profile?','We guide you through verification and handle the setup once access is granted.'),('Will you respond to reviews for me?','Yes, using response templates you approve, or we can draft responses for you to post.'),('What if my profile was suspended?','We review the cause, fix guideline issues and file a reinstatement request.')],
 related=['local-seo','seo-packages/local-seo','industries','seo-audit'])

svc('national-seo', name='National SEO', group='svc', img='city',
 title='National SEO Services to Rank Across the US | RankEmpire',
 desc='National SEO for brands that sell across the country: competitive keyword strategy, authority building, scalable content and technical SEO.',
 h1='National SEO for brands that compete <em>everywhere</em>', sub='Rank for competitive non-local keywords with a strategy built on authority, depth of content and a technically sound site.',
 intro='National rankings are won by the sites Google trusts most on a topic. That means a stronger link profile, deeper content and fewer technical weaknesses than the companies already on page one. We build all three in a plan sized to your market.',
 inc=[('Competitive keyword strategy','Keyword targets chosen by intent, difficulty and revenue potential.'),('Topical authority content','Content clusters that cover your topic more completely than competitors.'),('Digital PR and links','Data-led stories and expert commentary that earn national coverage.'),('Technical scale','Architecture and internal linking that support thousands of pages.'),('Conversion optimization','Landing pages tested to turn rankings into revenue.'),('Market reporting','Share of voice tracking against your top national competitors.')],
 fit=['Brands selling nationwide online','Lead generation businesses serving all states','Companies outgrowing local SEO','Publishers and marketplaces'],
 faq=[('How is national SEO different from local SEO?','National SEO targets searches without local intent, so authority and content depth matter more than proximity.'),('How long does national SEO take?','Expect 6 to 12 months for competitive terms, with earlier gains on long-tail keywords.')],
 related=['enterprise-seo','link-building','content-seo','seo-packages'])

svc('enterprise-seo', name='Enterprise SEO', group='svc', img='i-pro',
 title='Enterprise SEO Services for Large Websites | RankEmpire',
 desc='Enterprise SEO for large and complex websites: governance, technical SEO at scale, international setups, programmatic content and stakeholder reporting.',
 h1='Enterprise SEO with <em>governance</em> built in', sub='SEO for sites with thousands of pages, many stakeholders and no room for mistakes during releases and migrations.',
 intro='At enterprise scale, the biggest SEO risks come from process: a release that noindexes a section, a template change that breaks internal links, a team that publishes duplicate content. We bring the technical depth and the governance to keep organic growth safe.',
 inc=[('SEO governance','Release checklists, QA and alerts that stop regressions before they ship.'),('Technical SEO at scale','Log analysis, crawl budget management and template-level fixes.'),('Programmatic SEO','Scalable page types built from your data with quality controls.'),('International SEO','Hreflang, market structure and localization workflows.'),('Stakeholder reporting','Executive dashboards tied to revenue and pipeline.'),('Team enablement','Training for content, product and engineering teams.')],
 fit=['Websites with 10,000 pages or more','Companies with multiple brands or markets','Teams with frequent releases','Organizations planning replatforms'],
 faq=[('Do you work with in-house SEO teams?','Yes. We often act as an extension of an internal team for technical depth or extra capacity.'),('Can you support security and procurement reviews?','Yes. We work with NDAs, access controls and vendor onboarding processes.')],
 related=['technical-seo','international-seo','seo-consulting','national-seo'])

svc('on-page-seo', name='On-Page SEO', group='svc', img='s-content',
 title='On-Page SEO Services: Content and Page Optimization | RankEmpire',
 desc='On-page SEO that aligns every page with search intent: titles, headings, content, internal links, images and structured data.',
 h1='On-page SEO that makes every page <em>count</em>', sub='Titles, headings, copy, internal links and markup aligned with what searchers actually want to see.',
 intro='Many pages fail to rank not because they lack links, but because they do not answer the search well. We rewrite and restructure pages so the intent is obvious to both readers and Google, without stuffing keywords.',
 inc=[('Intent alignment','Each page matched to one primary search intent and keyword theme.'),('Titles and meta descriptions','Written for click-through rate, not just keyword placement.'),('Heading and content structure','Clear H1 to H3 hierarchy and content that covers what top results cover and more.'),('Internal linking','Contextual links that pass authority to priority pages.'),('Image optimization','File names, alt text, compression and modern formats.'),('Schema markup','Structured data that supports rich results where they apply.')],
 fit=['Pages stuck on page two','Sites with thin or outdated service pages','New websites before launch','Content teams that need a clear standard'],
 faq=[('How many pages do you optimize per month?','It depends on page length and plan. Most clients see 8 to 20 pages optimized each month.'),('Will on-page changes hurt my current rankings?','We track every change and avoid rewriting pages that already perform well without reason.')],
 related=['content-seo','technical-seo','keyword-research','seo-tools/meta-tag-checker'])

svc('off-page-seo', name='Off-Page SEO', group='svc', img='s-links',
 title='Off-Page SEO Services: Authority, Mentions and Links | RankEmpire',
 desc='Off-page SEO that builds real authority: editorial links, brand mentions, digital PR, citations and reputation signals.',
 h1='Off-page SEO that builds real <em>authority</em>', sub='Links, mentions and reputation signals from sources your customers and Google already trust.',
 intro='Authority is earned outside your website. Google looks at who links to you, who mentions you, what reviews say and how consistent your business information is across the web. We build those signals deliberately and safely.',
 inc=[('Editorial link building','Outreach to relevant publications with content worth linking to.'),('Digital PR','Data stories and expert commentary for journalists.'),('Brand mentions','Unlinked mentions found and turned into links.'),('Citations','Business listings that support local and entity signals.'),('Review signals','Systems to grow reviews on Google and industry platforms.'),('Toxic link monitoring','Monitoring for spam attacks and risky patterns.')],
 fit=['Sites with good content but weak authority','Businesses in competitive niches','Brands launching new products','Companies recovering from bad link building'],
 faq=[('Do you buy links?','No. We do not use private blog networks or paid link schemes that put your site at risk.'),('How many links will I get?','We focus on relevance and quality, and agree on monthly targets based on your plan and niche.')],
 related=['link-building','content-seo','national-seo','seo-tools/backlink-checker'])

svc('link-building', name='Link Building', group='svc', img='s-links', chips=['Editorial Links','Digital PR','Link Reclamation'],
 title='White Hat Link Building Services | RankEmpire',
 desc='Link building services that earn editorial backlinks from relevant, real websites through outreach, digital PR and linkable assets.',
 h1='Link building that earns links you are <em>proud</em> of', sub='Editorial backlinks from relevant, real websites, earned with outreach and content people actually want to reference.',
 intro='One relevant link from a respected site is worth more than a hundred from directories nobody reads. We find the sites your audience trusts, create a reason for them to link and handle the outreach from start to finish.',
 inc=[('Link gap analysis','Sites linking to competitors but not to you.'),('Linkable assets','Guides, tools, data and visuals designed to earn links.'),('Manual outreach','Personal outreach by our team, not mass templates.'),('Digital PR campaigns','Newsworthy stories pitched to journalists.'),('Resource and niche edits','Placements on existing, relevant pages where they add value.'),('Transparent reporting','Every live link reported with URL, domain and anchor.')],
 fit=['Competitive industries','New domains that need authority','Sites with strong content but few links','Brands replacing a risky link profile'],
 faq=[('Are your links safe?','We only pursue links on real sites with real audiences and avoid networks built for selling links.'),('Can I approve sites before outreach?','Yes. You can review target lists before we reach out.')],
 related=['off-page-seo','content-seo','competitor-seo-analysis','seo-tools/backlink-checker'])

svc('content-seo', name='Content SEO', group='svc', img='s-content', chips=['Content Strategy','Topic Clusters','Content Refresh'],
 title='Content SEO Services: Strategy, Writing and Refreshes | RankEmpire',
 desc='Content SEO that builds topical authority: content strategy, SEO writing, topic clusters, content refreshes and editorial calendars.',
 h1='Content SEO that builds <em>topical authority</em>', sub='Strategy, writing and refreshes that make your site the most useful answer on the topics you sell.',
 intro='Content works when it is useful, specific and organized. We plan topic clusters around what your customers search, write with real expertise and update older content so it keeps ranking instead of slowly decaying.',
 inc=[('Content strategy','Topic clusters and an editorial calendar based on keyword and competitor research.'),('SEO writing','Articles and landing pages written by specialists and edited for search.'),('Content refreshes','Updating decaying pages to win back lost rankings.'),('Briefs for your team','Detailed briefs if your team prefers to write in-house.'),('Expertise signals','Author bios, sources and first-hand experience built into every piece.'),('Conversion paths','Calls to action and internal links that turn readers into leads.')],
 fit=['Businesses with little or no content','Blogs that get traffic but no leads','Sites with outdated content','In-house teams that need strategy'],
 faq=[('Do you use AI to write content?','We may use AI for research support, but every piece is written or rewritten and fact-checked by a human specialist.'),('Can you write for regulated industries?','Yes, with review by your subject matter experts before publishing.')],
 related=['on-page-seo','keyword-research','saas-seo','blog'])

svc('international-seo', name='International SEO', group='svc', img='city',
 title='International SEO Services: Hreflang and Global Growth | RankEmpire',
 desc='International SEO for brands entering new countries and languages: market research, hreflang, site structure, localization and global link building.',
 h1='International SEO for every <em>market</em> you enter', sub='Market research, site structure, hreflang and localized content so each country sees the right page.',
 intro='Expanding internationally multiplies SEO complexity. The wrong domain structure or a broken hreflang setup can make Google show the wrong country page or ignore new markets entirely. We plan it right before you launch.',
 inc=[('Market research','Search demand and competition in each target country.'),('Domain and URL structure','ccTLD, subfolder or subdomain chosen for your goals.'),('Hreflang implementation','Correct language and region annotations across every page.'),('Localization','Native-language content adapted for local search behavior.'),('Local link building','Authority built within each market.'),('Market reporting','Rankings and traffic tracked per country.')],
 fit=['Brands expanding into new countries','Sites with multiple languages','E-commerce stores shipping internationally','SaaS companies with global users'],
 faq=[('Do you translate content?','We work with native speakers who localize content for search, not just translate it.'),('Which structure is best for international SEO?','It depends on budget, markets and brand. We recommend a structure after reviewing your goals.')],
 related=['enterprise-seo','technical-seo','national-seo','seo-consulting'])

svc('keyword-research', name='Keyword Research', group='svc', img='w2',
 title='Keyword Research Services and Search Intent Mapping | RankEmpire',
 desc='Keyword research that maps real search demand to the pages you need: intent analysis, keyword clustering, difficulty scoring and content planning.',
 h1='Keyword research that tells you what to <em>build</em>', sub='Search demand, intent and difficulty mapped to a page plan, so every new page has a clear reason to exist.',
 intro='A keyword list is not a strategy. We group keywords by intent, decide which page should rank for each group and prioritize by commercial value and difficulty, so your team builds the right pages in the right order.',
 inc=[('Seed and competitor research','Keywords from your offers, customers and competitors.'),('Intent classification','Informational, commercial, transactional and local intent labeled.'),('Keyword clustering','Keywords grouped by the page that should rank for them.'),('Difficulty and value scoring','Priorities based on effort and revenue potential.'),('Page mapping','Each cluster mapped to an existing or new page.'),('Content roadmap','A clear build order for the next 6 to 12 months.')],
 fit=['New websites planning their structure','Businesses entering new services','Content teams without a plan','Sites with cannibalization issues'],
 faq=[('What do I receive?','A keyword map spreadsheet, a prioritized content plan and a walkthrough call.'),('Can I try a free tool first?','Yes. Our free Keyword Research Tool generates keyword ideas you can explore.')],
 related=['seo-tools/keyword-research-tool','content-seo','competitor-seo-analysis','on-page-seo'])

svc('competitor-seo-analysis', name='Competitor SEO Analysis', group='svc', img='w2',
 title='Competitor SEO Analysis: See Why They Outrank You | RankEmpire',
 desc='Competitor SEO analysis that reveals the keywords, pages, links and technical advantages behind your competitors rankings, with a plan to beat them.',
 h1='See exactly why competitors <em>outrank</em> you', sub='Their keywords, their best pages, their links and their weak spots, turned into a plan you can act on.',
 intro='Every search result is a competition. We reverse-engineer the sites ahead of you to find what they do better and where they are vulnerable, then build a plan to close the gap faster than starting from scratch.',
 inc=[('Keyword gap analysis','Keywords competitors rank for and you do not.'),('Top page analysis','Their best performing pages and why they work.'),('Backlink gap','Sites linking to them that could link to you.'),('Technical comparison','Speed, structure and indexation compared side by side.'),('Local competitor review','Map pack competitors, reviews and profile strength.'),('Attack plan','Prioritized actions to win the most valuable gaps first.')],
 fit=['Businesses losing ground to a specific competitor','New entrants in established markets','Teams preparing an SEO budget case','Companies planning new services'],
 faq=[('How many competitors do you analyze?','Typically three to five, chosen from search results rather than only the businesses you consider rivals.'),('Is this included in your SEO plans?','A lighter version is included in onboarding. The full analysis is available as a standalone service.')],
 related=['seo-audit','keyword-research','link-building','seo-tools/serp-checker'])

svc('seo-consulting', name='SEO Consulting', group='svc', img='team',
 title='SEO Consulting for In-House Teams and Founders | RankEmpire',
 desc='SEO consulting for teams that want expert guidance: strategy sessions, audits, migration planning, training and ongoing advisory.',
 h1='SEO consulting when you need an <em>expert</em> in the room', sub='Strategy, second opinions, migration planning and training for teams that do the work in-house.',
 intro='Some teams do not need an agency, they need an experienced voice to check decisions before they become expensive mistakes. Our consultants work alongside founders, marketers and developers on the questions that matter most.',
 inc=[('Strategy sessions','Focused sessions on priorities, roadmap and budget.'),('Second opinions','Review of agency work, audits or proposals.'),('Migration planning','Risk assessment and checklists before a redesign or replatform.'),('Team training','Practical workshops for writers, marketers and developers.'),('Advisory retainer','Ongoing access to a senior consultant for questions and reviews.'),('Hiring support','Help defining roles and evaluating SEO candidates or agencies.')],
 fit=['In-house marketing teams','Founders running SEO themselves','Companies evaluating agencies','Developers planning a migration'],
 faq=[('How is consulting billed?','Hourly for one-off sessions, or as a monthly advisory retainer.'),('Can consulting turn into a full engagement?','Yes, though many clients keep work in-house and use us for guidance only.')],
 related=['seo-audit','enterprise-seo','technical-seo','contact-us'])

SERVICE_ORDER_CORE = ['local-seo','ecommerce-seo','saas-seo','technical-seo','seo-audit','google-business-profile-seo']
SERVICE_ORDER_SVC = ['national-seo','enterprise-seo','on-page-seo','off-page-seo','link-building','content-seo','international-seo','keyword-research','competitor-seo-analysis','seo-consulting']
HOME_SVCS = ['local-seo','technical-seo','ecommerce-seo','content-seo','link-building','saas-seo']
