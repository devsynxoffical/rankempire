export default function Header({ active = '' }: { active?: string }) {
  return (
    <header className="hdr">
      <div className="in">
        {"\n"}
        <a className="logo" href="/" aria-label="RankEmpire home">
          <svg className="mk" viewBox="0 0 32 32" aria-hidden="true">
            <rect width="32" height="32" fill="#0b0b0c" />
            <path d="M7 21.5 6 11l5 4 5-7.5 5 7.5 5-4-1 10.5Z" fill="#ff3d2e" />
            <rect x="7" y="23" width="18" height="2.6" fill="#fff" />
          </svg>
          {"RankEmpire"}
          <em>
            {"Built to Rank"}
          </em>
        </a>
        {"\n"}
        <nav className="mnu" aria-label="Main">
          <div className="mi">
            <a href="/seo-services/" className={active === 'services' ? 'on' : ''} aria-expanded="false" aria-haspopup="true">
              {"Services"}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </a>
            <div className="dd" role="menu">
              <div className="ddg" style={{gridTemplateColumns: "1.35fr .9fr .85fr"} as React.CSSProperties}>
                {"\n"}
                <div>
                  <h6>
                    {"Core SEO services"}
                  </h6>
                  <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px"} as React.CSSProperties}>
                    <a className="dl" href="/local-seo/">
                      <span className="ic">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M12 21s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12Z" />
                          <circle cx="12" cy="9" r="2.5" />
                        </svg>
                      </span>
                      <span>
                        <b>
                          {"Local SEO"}
                        </b>
                        <span>
                          {"Map pack and local rankings"}
                        </span>
                      </span>
                    </a>
                    <a className="dl" href="/ecommerce-seo/">
                      <span className="ic">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M5 8h14l-1 12H6L5 8Z" />
                          <path d="M9 8V6a3 3 0 0 1 6 0v2" />
                        </svg>
                      </span>
                      <span>
                        <b>
                          {"E-commerce SEO"}
                        </b>
                        <span>
                          {"Organic revenue for online stores"}
                        </span>
                      </span>
                    </a>
                    <a className="dl" href="/saas-seo/">
                      <span className="ic">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M5 15c-1 1-1.5 4-1.5 4s3-.5 4-1.5M14 4c3 0 6 3 6 6l-7 7-6-6 7-7Z" />
                          <circle cx="14.5" cy="9.5" r="1.5" />
                        </svg>
                      </span>
                      <span>
                        <b>
                          {"SaaS SEO"}
                        </b>
                        <span>
                          {"Pipeline from organic search"}
                        </span>
                      </span>
                    </a>
                    <a className="dl" href="/technical-seo/">
                      <span className="ic">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <circle cx="12" cy="12" r="3" />
                          <path d="M19 12a7 7 0 0 0-.1-1.2l2-1.6-2-3.4-2.4 1a7 7 0 0 0-2-1.2L14 3h-4l-.5 2.6a7 7 0 0 0-2 1.2l-2.4-1-2 3.4 2 1.6A7 7 0 0 0 5 12c0 .4 0 .8.1 1.2l-2 1.6 2 3.4 2.4-1a7 7 0 0 0 2 1.2L10 21h4l.5-2.6a7 7 0 0 0 2-1.2l2.4 1 2-3.4-2-1.6c.1-.4.1-.8.1-1.2Z" />
                        </svg>
                      </span>
                      <span>
                        <b>
                          {"Technical SEO"}
                        </b>
                        <span>
                          {"Speed, crawling and indexing"}
                        </span>
                      </span>
                    </a>
                    <a className="dl" href="/seo-audit/">
                      <span className="ic">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <circle cx="11" cy="11" r="7" />
                          <path d="m20 20-4-4" />
                        </svg>
                      </span>
                      <span>
                        <b>
                          {"SEO Audit"}
                        </b>
                        <span>
                          {"A prioritized 90-day plan"}
                        </span>
                      </span>
                    </a>
                    <a className="dl" href="/google-business-profile-seo/">
                      <span className="ic">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M4 10h16v10H4zM3 6l2-3h14l2 3v2a3 3 0 0 1-6 0 3 3 0 0 1-6 0 3 3 0 0 1-6 0Z" />
                        </svg>
                      </span>
                      <span>
                        <b>
                          {"Google Business Profile SEO"}
                        </b>
                        <span>
                          {"More calls from your profile"}
                        </span>
                      </span>
                    </a>
                    <a className="dl" href="/b2b-seo/">
                      <span className="ic">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M4 21V5l8-3v19M12 9h8v12M7 8h2M7 12h2M7 16h2M15 13h2M15 17h2" />
                        </svg>
                      </span>
                      <span>
                        <b>
                          {"B2B SEO"}
                        </b>
                        <span>
                          {"Pipeline for long sales cycles"}
                        </span>
                      </span>
                    </a>
                    <a className="dl" href="/aeo/">
                      <span className="ic">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M4 5h16v11H9l-5 4Z" />
                        </svg>
                      </span>
                      <span>
                        <b>
                          {"Answer Engine Optimization"}
                        </b>
                        <span>
                          {"Win answers and snippets"}
                        </span>
                      </span>
                    </a>
                    <a className="dl" href="/geo/">
                      <span className="ic">
                        <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4Z" />
                        </svg>
                      </span>
                      <span>
                        <b>
                          {"Generative Engine Optimization"}
                        </b>
                        <span>
                          {"Get cited by AI search"}
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
                {"\n"}
                <div className="dsl">
                  <h6>
                    {"Specialist services"}
                  </h6>
                  <a href="/national-seo/">
                    {"National SEO"}
                  </a>
                  <a href="/enterprise-seo/">
                    {"Enterprise SEO"}
                  </a>
                  <a href="/on-page-seo/">
                    {"On-Page SEO"}
                  </a>
                  <a href="/off-page-seo/">
                    {"Off-Page SEO"}
                  </a>
                  <a href="/link-building/">
                    {"Link Building"}
                  </a>
                  <a href="/content-seo/">
                    {"Content SEO"}
                  </a>
                  <a href="/international-seo/">
                    {"International SEO"}
                  </a>
                  <a href="/keyword-research/">
                    {"Keyword Research"}
                  </a>
                  <a href="/competitor-seo-analysis/">
                    {"Competitor SEO Analysis"}
                  </a>
                  <a href="/seo-consulting/">
                    {"SEO Consulting"}
                  </a>
                </div>
                {"\n"}
                <div className="dpro">
                  <span className="eyb" style={{color: "#ff8a7a"} as React.CSSProperties}>
                    {"Free"}
                  </span>
                  <b>
                    {"Get a free SEO audit"}
                  </b>
                  <p>
                    {"We review your site, rankings and competitors and send a prioritized plan within 2 business days."}
                  </p>
                  <a className="btn ac sm" href="/contact-us/">
                    {"Request audit"}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </a>
                </div>
                {"\n"}
              </div>
              <div className="dfoot">
                <span>
                  {"21 SEO services for local, e-commerce and SaaS brands"}
                </span>
                <a className="tlink" href="/seo-services/">
                  {"All SEO services"}
                </a>
              </div>
            </div>
          </div>
          <div className="mi">
            <a href="/industries/" className={active === 'industries' ? 'on' : ''} aria-expanded="false" aria-haspopup="true">
              {"Industries"}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </a>
            <div className="dd" role="menu" style={{width: "min(1180px,calc(100vw - 32px))"} as React.CSSProperties}>
              <div className="dsl dcols">
                <h6>
                  {"Home Services"}
                </h6>
                <a href="/seo-for-cleaning/">
                  {"Cleaning Companies"}
                </a>
                <a href="/seo-for-electricians/">
                  {"Electricians"}
                </a>
                <a href="/seo-for-fencing-companies/">
                  {"Fencing Companies"}
                </a>
                <a href="/seo-for-flooring-companies/">
                  {"Flooring Companies"}
                </a>
                <a href="/seo-for-general-contractors/">
                  {"General Contractors"}
                </a>
                <a href="/seo-for-hvac/">
                  {"HVAC Companies"}
                </a>
                <a href="/seo-for-landscaping/">
                  {"Landscaping Companies"}
                </a>
                <a href="/seo-for-locksmiths/">
                  {"Locksmiths"}
                </a>
                <a href="/seo-for-movers/">
                  {"Moving Companies"}
                </a>
                <a href="/seo-for-painters/">
                  {"Painting Contractors"}
                </a>
                <a href="/seo-for-pest-control/">
                  {"Pest Control Companies"}
                </a>
                <a href="/seo-for-plumbers/">
                  {"Plumbers"}
                </a>
                <a href="/seo-for-pool-service-companies/">
                  {"Pool Service Companies"}
                </a>
                <a href="/seo-for-roofing/">
                  {"Roofing Companies"}
                </a>
                <h6>
                  {"Medical and Health"}
                </h6>
                <a href="/seo-for-chiropractors/">
                  {"Chiropractors"}
                </a>
                <a href="/seo-for-dentists/">
                  {"Dentists"}
                </a>
                <a href="/seo-for-doctors/">
                  {"Doctors and Medical Practices"}
                </a>
                <a href="/seo-for-orthodontists/">
                  {"Orthodontists"}
                </a>
                <a href="/seo-for-plastic-surgeons/">
                  {"Plastic Surgeons"}
                </a>
                <a href="/seo-for-therapists/">
                  {"Therapists and Counselors"}
                </a>
                <a href="/seo-for-veterinarians/">
                  {"Veterinarians"}
                </a>
                <h6>
                  {"Legal"}
                </h6>
                <a href="/seo-for-lawyers/">
                  {"Lawyers"}
                </a>
                <a href="/seo-for-personal-injury-lawyers/">
                  {"Personal Injury Lawyers"}
                </a>
                <h6>
                  {"Automotive"}
                </h6>
                <a href="/seo-for-auto-detailing/">
                  {"Auto Detailing Businesses"}
                </a>
                <a href="/seo-for-auto-repair/">
                  {"Auto Repair Shops"}
                </a>
                <a href="/seo-for-towing/">
                  {"Towing Companies"}
                </a>
                <h6>
                  {"Food and Hospitality"}
                </h6>
                <a href="/seo-for-bakeries/">
                  {"Bakeries"}
                </a>
                <a href="/seo-for-cafes/">
                  {"Cafes"}
                </a>
                <a href="/seo-for-florists/">
                  {"Florists"}
                </a>
                <a href="/seo-for-photographers/">
                  {"Photographers"}
                </a>
                <a href="/seo-for-restaurants/">
                  {"Restaurants"}
                </a>
                <a href="/seo-for-wedding-planners/">
                  {"Wedding Planners"}
                </a>
                <h6>
                  {"Professional Services"}
                </h6>
                <a href="/seo-for-accountants/">
                  {"Accountants and CPAs"}
                </a>
                <a href="/seo-for-daycares/">
                  {"Daycares and Preschools"}
                </a>
                <a href="/seo-for-financial-advisors/">
                  {"Financial Advisors"}
                </a>
                <a href="/seo-for-insurance/">
                  {"Insurance Agencies"}
                </a>
                <a href="/seo-for-tutors/">
                  {"Tutors and Tutoring Centers"}
                </a>
                <h6>
                  {"Real Estate and Property"}
                </h6>
                <a href="/seo-for-home-builders/">
                  {"Home Builders"}
                </a>
                <a href="/seo-for-property-management/">
                  {"Property Management Companies"}
                </a>
                <a href="/seo-for-real-estate/">
                  {"Real Estate Agents and Brokerages"}
                </a>
                <h6>
                  {"Beauty, Fitness and Lifestyle"}
                </h6>
                <a href="/seo-for-barbers/">
                  {"Barbershops"}
                </a>
                <a href="/seo-for-gyms/">
                  {"Gyms and Fitness Studios"}
                </a>
                <a href="/seo-for-salons/">
                  {"Hair Salons"}
                </a>
                <a href="/seo-for-med-spas/">
                  {"Med Spas"}
                </a>
                <a href="/seo-for-yoga-studios/">
                  {"Yoga Studios"}
                </a>
              </div>
              <div className="dfoot">
                <span>
                  {"SEO strategies for 45 industries"}
                </span>
                <a className="tlink" href="/industries/">
                  {"All industries"}
                </a>
              </div>
            </div>
          </div>
          <div className="mi">
            <a href="/seo-packages/" className={active === 'pricing' ? 'on' : ''} aria-expanded="false" aria-haspopup="true">
              {"Pricing"}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </a>
            <div className="dd sm" role="menu">
              <div className="ddg">
                <a className="dl" href="/seo-packages/">
                  <span className="ic">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M3 12V4h8l10 10-8 8L3 12Z" />
                      <circle cx="7.5" cy="8.5" r="1.5" />
                    </svg>
                  </span>
                  <span>
                    <b>
                      {"SEO Packages"}
                    </b>
                    <span>
                      {"Compare all plans and pricing"}
                    </span>
                  </span>
                </a>
                <a className="dl" href="/seo-packages/local-seo/">
                  <span className="ic">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M12 21s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12Z" />
                      <circle cx="12" cy="9" r="2.5" />
                    </svg>
                  </span>
                  <span>
                    <b>
                      {"Local SEO Packages"}
                    </b>
                    <span>
                      {"Map pack and Google Business Profile"}
                    </span>
                  </span>
                </a>
                <a className="dl" href="/seo-packages/ecommerce-seo/">
                  <span className="ic">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 8h14l-1 12H6L5 8Z" />
                      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
                    </svg>
                  </span>
                  <span>
                    <b>
                      {"E-commerce SEO Packages"}
                    </b>
                    <span>
                      {"Organic revenue for online stores"}
                    </span>
                  </span>
                </a>
                <a className="dl" href="/seo-packages/saas-seo/">
                  <span className="ic">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 15c-1 1-1.5 4-1.5 4s3-.5 4-1.5M14 4c3 0 6 3 6 6l-7 7-6-6 7-7Z" />
                      <circle cx="14.5" cy="9.5" r="1.5" />
                    </svg>
                  </span>
                  <span>
                    <b>
                      {"SaaS SEO Packages"}
                    </b>
                    <span>
                      {"Pipeline from organic search"}
                    </span>
                  </span>
                </a>
              </div>
              <div className="dfoot">
                <span>
                  {"Month to month after onboarding"}
                </span>
                <a className="tlink" href="/seo-audit/">
                  {"Start with an audit"}
                </a>
              </div>
            </div>
          </div>
          <div className="mi">
            <a href="/seo-tools/" className={active === 'free' ? 'on' : ''} aria-expanded="false" aria-haspopup="true">
              {"Free tools"}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </a>
            <div className="dd" role="menu" style={{width: "min(760px,calc(100vw - 32px))"} as React.CSSProperties}>
              <div className="ddg" style={{gridTemplateColumns: "1fr 1fr"} as React.CSSProperties}>
                <a className="dl" href="/seo-tools/seo-audit-tool/">
                  <span className="ic">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="11" cy="11" r="7" />
                      <path d="m20 20-4-4" />
                    </svg>
                  </span>
                  <span>
                    <b>
                      {"SEO Audit Tool"}
                    </b>
                    <span>
                      {"On-page audit of any page"}
                    </span>
                  </span>
                </a>
                <a className="dl" href="/seo-tools/keyword-rank-checker/">
                  <span className="ic">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M4 20V4M4 20h16M8 16l4-5 3 3 5-7" />
                    </svg>
                  </span>
                  <span>
                    <b>
                      {"Keyword Rank Checker"}
                    </b>
                    <span>
                      {"Find your position in results"}
                    </span>
                  </span>
                </a>
                <a className="dl" href="/seo-tools/keyword-research-tool/">
                  <span className="ic">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="8" cy="15" r="4" />
                      <path d="m11 12 9-9M17 6l3 3" />
                    </svg>
                  </span>
                  <span>
                    <b>
                      {"Keyword Research Tool"}
                    </b>
                    <span>
                      {"Keyword ideas by intent"}
                    </span>
                  </span>
                </a>
                <a className="dl" href="/seo-tools/backlink-checker/">
                  <span className="ic">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1" />
                    </svg>
                  </span>
                  <span>
                    <b>
                      {"Backlink Checker"}
                    </b>
                    <span>
                      {"Analyze your link profile"}
                    </span>
                  </span>
                </a>
                <a className="dl" href="/seo-tools/website-seo-checker/">
                  <span className="ic">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="11" cy="11" r="7" />
                      <path d="m20 20-4-4" />
                    </svg>
                  </span>
                  <span>
                    <b>
                      {"Website SEO Checker"}
                    </b>
                    <span>
                      {"Check SEO basics fast"}
                    </span>
                  </span>
                </a>
                <a className="dl" href="/seo-tools/serp-checker/">
                  <span className="ic">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="9" />
                      <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
                    </svg>
                  </span>
                  <span>
                    <b>
                      {"SERP Checker"}
                    </b>
                    <span>
                      {"Preview your Google snippet"}
                    </span>
                  </span>
                </a>
                <a className="dl" href="/seo-tools/seo-score-checker/">
                  <span className="ic">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="11" cy="11" r="7" />
                      <path d="m20 20-4-4" />
                    </svg>
                  </span>
                  <span>
                    <b>
                      {"SEO Score Checker"}
                    </b>
                    <span>
                      {"0 to 100 on-page score"}
                    </span>
                  </span>
                </a>
                <a className="dl" href="/seo-tools/meta-tag-checker/">
                  <span className="ic">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M3 12V4h8l10 10-8 8L3 12Z" />
                      <circle cx="7.5" cy="8.5" r="1.5" />
                    </svg>
                  </span>
                  <span>
                    <b>
                      {"Meta Tag Checker"}
                    </b>
                    <span>
                      {"Titles, descriptions, OG tags"}
                    </span>
                  </span>
                </a>
                <a className="dl" href="/seo-tools/schema-checker/">
                  <span className="ic">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="4" y="4" width="7" height="7" rx="1.5" />
                      <rect x="13" y="4" width="7" height="7" rx="1.5" />
                      <rect x="4" y="13" width="7" height="7" rx="1.5" />
                      <rect x="13" y="13" width="7" height="7" rx="1.5" />
                    </svg>
                  </span>
                  <span>
                    <b>
                      {"Schema Checker"}
                    </b>
                    <span>
                      {"Validate structured data"}
                    </span>
                  </span>
                </a>
                <a className="dl" href="/seo-tools/sitemap-checker/">
                  <span className="ic">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2Z" />
                      <path d="M9 4v14M15 6v14" />
                    </svg>
                  </span>
                  <span>
                    <b>
                      {"Sitemap Checker"}
                    </b>
                    <span>
                      {"Find sitemap errors"}
                    </span>
                  </span>
                </a>
              </div>
              <div className="dfoot">
                <span>
                  {"11 free tools, private and instant"}
                </span>
                <a className="tlink" href="/seo-tools/">
                  {"All SEO tools"}
                </a>
              </div>
            </div>
          </div>
          <div className="mi opt">
            <a href="/locations/" className={active === 'locations' ? 'on' : ''} aria-expanded="false" aria-haspopup="true">
              {"Locations"}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </a>
            <div className="dd" role="menu" style={{width: "min(720px,calc(100vw - 32px))"} as React.CSSProperties}>
              <div className="ddg dsl" style={{gridTemplateColumns: "repeat(3,1fr)", gap: "2px 16px"} as React.CSSProperties}>
                <a href="/locations/new-york/">
                  {"SEO Company in New York"}
                </a>
                <a href="/locations/los-angeles/">
                  {"SEO Company in Los Angeles"}
                </a>
                <a href="/locations/chicago/">
                  {"SEO Company in Chicago"}
                </a>
                <a href="/locations/houston/">
                  {"SEO Company in Houston"}
                </a>
                <a href="/locations/dallas/">
                  {"SEO Company in Dallas"}
                </a>
                <a href="/locations/miami/">
                  {"SEO Company in Miami"}
                </a>
                <a href="/locations/phoenix/">
                  {"SEO Company in Phoenix"}
                </a>
                <a href="/locations/san-diego/">
                  {"SEO Company in San Diego"}
                </a>
                <a href="/locations/san-francisco/">
                  {"SEO Company in San Francisco"}
                </a>
                <a href="/locations/austin/">
                  {"SEO Company in Austin"}
                </a>
                <a href="/locations/atlanta/">
                  {"SEO Company in Atlanta"}
                </a>
                <a href="/locations/seattle/">
                  {"SEO Company in Seattle"}
                </a>
                <a href="/locations/denver/">
                  {"SEO Company in Denver"}
                </a>
                <a href="/locations/boston/">
                  {"SEO Company in Boston"}
                </a>
                <a href="/locations/las-vegas/">
                  {"SEO Company in Las Vegas"}
                </a>
                <a href="/locations/charlotte/">
                  {"SEO Company in Charlotte"}
                </a>
                <a href="/locations/orlando/">
                  {"SEO Company in Orlando"}
                </a>
              </div>
              <div className="dfoot">
                <span>
                  {"Local SEO across 17 US metros"}
                </span>
                <a className="tlink" href="/locations/">
                  {"All locations"}
                </a>
              </div>
            </div>
          </div>
          <div className="mi">
            <a href="/case-studies/" className={active === 'results' ? 'on' : ''}>
              {"Results"}
            </a>
          </div>
          <div className="mi">
            <a href="/about-us/" className={active === 'company' ? 'on' : ''} aria-expanded="false" aria-haspopup="true">
              {"Company"}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </a>
            <div className="dd sm" role="menu">
              <div className="ddg" style={{gridTemplateColumns: "1fr 1fr"} as React.CSSProperties}>
                <a className="dl" href="/about-us/">
                  <span className="ic">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M4 21V5l8-3v19M12 9h8v12M7 8h2M7 12h2M7 16h2M15 13h2M15 17h2" />
                    </svg>
                  </span>
                  <span>
                    <b>
                      {"About Us"}
                    </b>
                    <span>
                      {"Who we are and how we work"}
                    </span>
                  </span>
                </a>
                <a className="dl" href="/our-team/">
                  <span className="ic">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="9" cy="8" r="3" />
                      <circle cx="17" cy="9" r="2.5" />
                      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M15 14.5c3 0 5 2 5 5" />
                    </svg>
                  </span>
                  <span>
                    <b>
                      {"Our Team"}
                    </b>
                    <span>
                      {"The specialists behind the work"}
                    </span>
                  </span>
                </a>
                <a className="dl" href="/case-studies/">
                  <span className="ic">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M4 20V4M4 20h16M8 16l4-5 3 3 5-7" />
                    </svg>
                  </span>
                  <span>
                    <b>
                      {"Case Studies"}
                    </b>
                    <span>
                      {"Playbooks and SEO results"}
                    </span>
                  </span>
                </a>
                <a className="dl" href="/blog/">
                  <span className="ic">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M7 3h7l5 5v13H7z" />
                      <path d="M14 3v5h5M10 13h6M10 17h6" />
                    </svg>
                  </span>
                  <span>
                    <b>
                      {"SEO Blog"}
                    </b>
                    <span>
                      {"Guides and SEO insights"}
                    </span>
                  </span>
                </a>
                <a className="dl" href="/seo-company/">
                  <span className="ic">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6Z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </span>
                  <span>
                    <b>
                      {"SEO Company"}
                    </b>
                    <span>
                      {"Why choose RankEmpire"}
                    </span>
                  </span>
                </a>
                <a className="dl" href="/contact-us/">
                  <span className="ic">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="3" y="5" width="18" height="14" rx="3" />
                      <path d="m4 7 8 6 8-6" />
                    </svg>
                  </span>
                  <span>
                    <b>
                      {"Contact Us"}
                    </b>
                    <span>
                      {"Talk to a strategist"}
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </nav>
        {"\n"}
        <div className="rt">
          <a className="btn ln sm" href="/seo-packages/">
            {"Pricing"}
          </a>
          <a className="btn dk sm" href="/contact-us/">
            {"Free SEO audit"}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
          <button className="burger" type="button" aria-label="Open menu" aria-expanded="false">
            <i></i>
            <i></i>
            <i></i>
          </button>
        </div>
        {"\n"}
      </div>
    </header>
  );
}
