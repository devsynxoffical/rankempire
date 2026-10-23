export default function X() {
  return (
    <section className="x" style={{paddingTop: "20px"} as React.CSSProperties}>
      <div className="wrap">
        <label className="filter">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-4-4" />
          </svg>
          <span className="sr-only">
            {"Search industries"}
          </span>
          <input type="search" placeholder="Search your industry, e.g. dentists" data-filter="#indlist" />
        </label>
        <div id="indlist">
          <div data-grp="" style={{"--c": "#ec4e3b"} as React.CSSProperties}>
            <h2 className="h3">
              {"Home Services"}
            </h2>
            <div className="linkgrid">
              <a data-k="cleaning companies cleaning" href="/seo-for-cleaning/">
                {"SEO for Cleaning Companies"}
              </a>
              <a data-k="electricians electricians" href="/seo-for-electricians/">
                {"SEO for Electricians"}
              </a>
              <a data-k="fencing companies fencing-companies" href="/seo-for-fencing-companies/">
                {"SEO for Fencing Companies"}
              </a>
              <a data-k="flooring companies flooring-companies" href="/seo-for-flooring-companies/">
                {"SEO for Flooring Companies"}
              </a>
              <a data-k="general contractors general-contractors" href="/seo-for-general-contractors/">
                {"SEO for General Contractors"}
              </a>
              <a data-k="hvac companies hvac" href="/seo-for-hvac/">
                {"SEO for HVAC Companies"}
              </a>
              <a data-k="landscaping companies landscaping" href="/seo-for-landscaping/">
                {"SEO for Landscaping Companies"}
              </a>
              <a data-k="locksmiths locksmiths" href="/seo-for-locksmiths/">
                {"SEO for Locksmiths"}
              </a>
              <a data-k="moving companies movers" href="/seo-for-movers/">
                {"SEO for Moving Companies"}
              </a>
              <a data-k="painting contractors painters" href="/seo-for-painters/">
                {"SEO for Painting Contractors"}
              </a>
              <a data-k="pest control companies pest-control" href="/seo-for-pest-control/">
                {"SEO for Pest Control Companies"}
              </a>
              <a data-k="plumbers plumbers" href="/seo-for-plumbers/">
                {"SEO for Plumbers"}
              </a>
              <a data-k="pool service companies pool-service-companies" href="/seo-for-pool-service-companies/">
                {"SEO for Pool Service Companies"}
              </a>
              <a data-k="roofing companies roofing" href="/seo-for-roofing/">
                {"SEO for Roofing Companies"}
              </a>
            </div>
          </div>
          <div data-grp="" style={{"--c": "#2b55e8"} as React.CSSProperties}>
            <h2 className="h3">
              {"Medical and Health"}
            </h2>
            <div className="linkgrid">
              <a data-k="chiropractors chiropractors" href="/seo-for-chiropractors/">
                {"SEO for Chiropractors"}
              </a>
              <a data-k="dentists dentists" href="/seo-for-dentists/">
                {"SEO for Dentists"}
              </a>
              <a data-k="doctors and medical practices doctors" href="/seo-for-doctors/">
                {"SEO for Doctors and Medical Practices"}
              </a>
              <a data-k="orthodontists orthodontists" href="/seo-for-orthodontists/">
                {"SEO for Orthodontists"}
              </a>
              <a data-k="plastic surgeons plastic-surgeons" href="/seo-for-plastic-surgeons/">
                {"SEO for Plastic Surgeons"}
              </a>
              <a data-k="therapists and counselors therapists" href="/seo-for-therapists/">
                {"SEO for Therapists and Counselors"}
              </a>
              <a data-k="veterinarians veterinarians" href="/seo-for-veterinarians/">
                {"SEO for Veterinarians"}
              </a>
            </div>
          </div>
          <div data-grp="" style={{"--c": "#e37a38"} as React.CSSProperties}>
            <h2 className="h3">
              {"Legal"}
            </h2>
            <div className="linkgrid">
              <a data-k="lawyers lawyers" href="/seo-for-lawyers/">
                {"SEO for Lawyers"}
              </a>
              <a data-k="personal injury lawyers personal-injury-lawyers" href="/seo-for-personal-injury-lawyers/">
                {"SEO for Personal Injury Lawyers"}
              </a>
            </div>
          </div>
          <div data-grp="" style={{"--c": "#4a9f5f"} as React.CSSProperties}>
            <h2 className="h3">
              {"Automotive"}
            </h2>
            <div className="linkgrid">
              <a data-k="auto detailing businesses auto-detailing" href="/seo-for-auto-detailing/">
                {"SEO for Auto Detailing Businesses"}
              </a>
              <a data-k="auto repair shops auto-repair" href="/seo-for-auto-repair/">
                {"SEO for Auto Repair Shops"}
              </a>
              <a data-k="towing companies towing" href="/seo-for-towing/">
                {"SEO for Towing Companies"}
              </a>
            </div>
          </div>
          <div data-grp="" style={{"--c": "#8c2fe2"} as React.CSSProperties}>
            <h2 className="h3">
              {"Food and Hospitality"}
            </h2>
            <div className="linkgrid">
              <a data-k="bakeries bakeries" href="/seo-for-bakeries/">
                {"SEO for Bakeries"}
              </a>
              <a data-k="cafes cafes" href="/seo-for-cafes/">
                {"SEO for Cafes"}
              </a>
              <a data-k="florists florists" href="/seo-for-florists/">
                {"SEO for Florists"}
              </a>
              <a data-k="photographers photographers" href="/seo-for-photographers/">
                {"SEO for Photographers"}
              </a>
              <a data-k="restaurants restaurants" href="/seo-for-restaurants/">
                {"SEO for Restaurants"}
              </a>
              <a data-k="wedding planners wedding-planners" href="/seo-for-wedding-planners/">
                {"SEO for Wedding Planners"}
              </a>
            </div>
          </div>
          <div data-grp="" style={{"--c": "#e0a800"} as React.CSSProperties}>
            <h2 className="h3">
              {"Professional Services"}
            </h2>
            <div className="linkgrid">
              <a data-k="accountants and cpas accountants" href="/seo-for-accountants/">
                {"SEO for Accountants and CPAs"}
              </a>
              <a data-k="daycares and preschools daycares" href="/seo-for-daycares/">
                {"SEO for Daycares and Preschools"}
              </a>
              <a data-k="financial advisors financial-advisors" href="/seo-for-financial-advisors/">
                {"SEO for Financial Advisors"}
              </a>
              <a data-k="insurance agencies insurance" href="/seo-for-insurance/">
                {"SEO for Insurance Agencies"}
              </a>
              <a data-k="tutors and tutoring centers tutors" href="/seo-for-tutors/">
                {"SEO for Tutors and Tutoring Centers"}
              </a>
            </div>
          </div>
          <div data-grp="" style={{"--c": "#ec4e3b"} as React.CSSProperties}>
            <h2 className="h3">
              {"Real Estate and Property"}
            </h2>
            <div className="linkgrid">
              <a data-k="home builders home-builders" href="/seo-for-home-builders/">
                {"SEO for Home Builders"}
              </a>
              <a data-k="property management companies property-management" href="/seo-for-property-management/">
                {"SEO for Property Management Companies"}
              </a>
              <a data-k="real estate agents and brokerages real-estate" href="/seo-for-real-estate/">
                {"SEO for Real Estate Agents and Brokerages"}
              </a>
            </div>
          </div>
          <div data-grp="" style={{"--c": "#2b55e8"} as React.CSSProperties}>
            <h2 className="h3">
              {"Beauty, Fitness and Lifestyle"}
            </h2>
            <div className="linkgrid">
              <a data-k="barbershops barbers" href="/seo-for-barbers/">
                {"SEO for Barbershops"}
              </a>
              <a data-k="gyms and fitness studios gyms" href="/seo-for-gyms/">
                {"SEO for Gyms and Fitness Studios"}
              </a>
              <a data-k="hair salons salons" href="/seo-for-salons/">
                {"SEO for Hair Salons"}
              </a>
              <a data-k="med spas med-spas" href="/seo-for-med-spas/">
                {"SEO for Med Spas"}
              </a>
              <a data-k="yoga studios yoga-studios" href="/seo-for-yoga-studios/">
                {"SEO for Yoga Studios"}
              </a>
            </div>
          </div>
        </div>
        <p className="empty">
          {"No match. "}
          <a className="tlink" href="/contact-us/">
            {"Tell us about your industry"}
          </a>
        </p>
      </div>
    </section>
  );
}
