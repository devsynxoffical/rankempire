export default function MobileMenu() {
  return (
    <div className="mob" aria-label="Mobile menu">
      <details>
        <summary>
          {"Services"}
        </summary>
        <div>
          <a href="/seo-services/" style={{fontWeight: "700"} as React.CSSProperties}>
            {"All services →"}
          </a>
          <a href="/seo-services/">
            {"SEO Services"}
          </a>
          <a href="/local-seo/">
            {"Local SEO"}
          </a>
          <a href="/ecommerce-seo/">
            {"E-commerce SEO"}
          </a>
          <a href="/saas-seo/">
            {"SaaS SEO"}
          </a>
          <a href="/technical-seo/">
            {"Technical SEO"}
          </a>
          <a href="/seo-audit/">
            {"SEO Audit"}
          </a>
          <a href="/google-business-profile-seo/">
            {"Google Business Profile SEO"}
          </a>
          <a href="/b2b-seo/">
            {"B2B SEO"}
          </a>
          <a href="/aeo/">
            {"Answer Engine Optimization"}
          </a>
          <a href="/geo/">
            {"Generative Engine Optimization"}
          </a>
        </div>
      </details>
      <details>
        <summary>
          {"Industries"}
        </summary>
        <div>
          <a href="/industries/" style={{fontWeight: "700"} as React.CSSProperties}>
            {"All industries →"}
          </a>
          <a href="/industries/">
            {"Industries We Serve"}
          </a>
          <a href="/seo-for-dentists/">
            {"Dentists"}
          </a>
          <a href="/seo-for-hvac/">
            {"HVAC Companies"}
          </a>
          <a href="/seo-for-lawyers/">
            {"Lawyers"}
          </a>
          <a href="/seo-for-med-spas/">
            {"Med Spas"}
          </a>
          <a href="/seo-for-plumbers/">
            {"Plumbers"}
          </a>
          <a href="/seo-for-real-estate/">
            {"Real Estate Agents and Brokerages"}
          </a>
          <a href="/seo-for-restaurants/">
            {"Restaurants"}
          </a>
          <a href="/seo-for-roofing/">
            {"Roofing Companies"}
          </a>
        </div>
      </details>
      <details>
        <summary>
          {"Pricing"}
        </summary>
        <div>
          <a href="/seo-packages/" style={{fontWeight: "700"} as React.CSSProperties}>
            {"All pricing →"}
          </a>
          <a href="/seo-packages/">
            {"SEO Packages"}
          </a>
          <a href="/seo-packages/local-seo/">
            {"Local SEO Packages"}
          </a>
          <a href="/seo-packages/ecommerce-seo/">
            {"E-commerce SEO Packages"}
          </a>
          <a href="/seo-packages/saas-seo/">
            {"SaaS SEO Packages"}
          </a>
        </div>
      </details>
      <details>
        <summary>
          {"Free tools"}
        </summary>
        <div>
          <a href="/seo-tools/" style={{fontWeight: "700"} as React.CSSProperties}>
            {"All free tools →"}
          </a>
          <a href="/seo-tools/">
            {"SEO Tools"}
          </a>
          <a href="/seo-tools/seo-audit-tool/">
            {"SEO Audit Tool"}
          </a>
          <a href="/seo-tools/keyword-rank-checker/">
            {"Keyword Rank Checker"}
          </a>
          <a href="/seo-tools/keyword-research-tool/">
            {"Keyword Research Tool"}
          </a>
          <a href="/seo-tools/backlink-checker/">
            {"Backlink Checker"}
          </a>
          <a href="/seo-tools/website-seo-checker/">
            {"Website SEO Checker"}
          </a>
          <a href="/seo-tools/schema-checker/">
            {"Schema Checker"}
          </a>
          <a href="/seo-tools/robots-txt-checker/">
            {"Robots.txt Checker"}
          </a>
        </div>
      </details>
      <details>
        <summary>
          {"Locations"}
        </summary>
        <div>
          <a href="/locations/" style={{fontWeight: "700"} as React.CSSProperties}>
            {"All locations →"}
          </a>
          <a href="/locations/">
            {"Locations"}
          </a>
          <a href="/locations/new-york/">
            {"New York"}
          </a>
          <a href="/locations/los-angeles/">
            {"Los Angeles"}
          </a>
          <a href="/locations/chicago/">
            {"Chicago"}
          </a>
          <a href="/locations/houston/">
            {"Houston"}
          </a>
          <a href="/locations/dallas/">
            {"Dallas"}
          </a>
          <a href="/locations/miami/">
            {"Miami"}
          </a>
        </div>
      </details>
      <details>
        <summary>
          {"Company"}
        </summary>
        <div>
          <a href="/about-us/" style={{fontWeight: "700"} as React.CSSProperties}>
            {"All company →"}
          </a>
          <a href="/about-us/">
            {"About Us"}
          </a>
          <a href="/our-team/">
            {"Our Team"}
          </a>
          <a href="/case-studies/">
            {"Case Studies"}
          </a>
          <a href="/blog/">
            {"SEO Blog"}
          </a>
          <a href="/contact-us/">
            {"Contact Us"}
          </a>
        </div>
      </details>
      <a href="/case-studies/">
        {"Results"}
      </a>
      <a className="btn ac lg" href="/contact-us/">
        {"Get a free SEO audit"}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </a>
    </div>
  );
}
