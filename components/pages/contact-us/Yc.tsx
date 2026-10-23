export default function Yc() {
  return (
    <section className="yh yc">
      <canvas className="grain" aria-hidden="true"></canvas>
      <div className="wrap">
        <nav className="crumb" aria-label="Breadcrumb">
          <a href="/">
            {"Home"}
          </a>
          <span className="sep">
            {"/"}
          </span>
          <span aria-current="page">
            {"Contact Us"}
          </span>
        </nav>
        <div className="yh-g">
          <div className="yh-l">
            <span className="eyb pill lt" data-r="">
              <i></i>
              {"Contact"}
            </span>
            <h1 data-r="">
              {"Get your free "}
              <span className="acc">
                {"SEO audit"}
              </span>
            </h1>
            <p className="lead" data-r="">
              {"Tell us about your business and goals. We reply within one business day with next steps and your free audit."}
            </p>
            {"\n"}
            <div className="ycards" data-r="">
              <a href="mailto:hello@rankempire.com">
                <span className="ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3" y="5" width="18" height="14" rx="3" />
                    <path d="m4 7 8 6 8-6" />
                  </svg>
                </span>
                <b>
                  {"hello@rankempire.com"}
                </b>
                <span>
                  {"New projects and pricing"}
                </span>
              </a>
              <div>
                <span className="ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </svg>
                </span>
                <b>
                  {"Mon to Fri, 9am to 6pm ET"}
                </b>
                <span>
                  {"Strategy calls by video"}
                </span>
              </div>
              <div>
                <span className="ic">
                  <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4Z" />
                  </svg>
                </span>
                <b>
                  {"2 business days"}
                </b>
                <span>
                  {"To your free audit"}
                </span>
              </div>
            </div>
          </div>
          {"\n"}
          <div className="yh-v">
            <form className="form card ycf" data-mail="hello@rankempire.com" data-subject="Free SEO audit request" data-r="">
              {"\n"}
              <div className="two">
                <label>
                  {"First name"}
                  <input name="First name" autoComplete="given-name" required />
                </label>
                <label>
                  {"Last name"}
                  <input name="Last name" autoComplete="family-name" />
                </label>
              </div>
              {"\n"}
              <div className="two">
                <label>
                  {"Work email"}
                  <input type="email" name="Email" autoComplete="email" required />
                </label>
                <label>
                  {"Website"}
                  <input id="f-site" name="Website" inputMode="url" placeholder="yourbusiness.com" />
                </label>
              </div>
              {"\n"}
              <label>
                {"Service you are interested in"}
                <select name="Service">
                  <option value="">
                    {"Select a service"}
                  </option>
                  <option>
                    {"Local SEO"}
                  </option>
                  <option>
                    {"E-commerce SEO"}
                  </option>
                  <option>
                    {"SaaS SEO"}
                  </option>
                  <option>
                    {"Technical SEO"}
                  </option>
                  <option>
                    {"SEO Audit"}
                  </option>
                  <option>
                    {"Google Business Profile SEO"}
                  </option>
                  <option>
                    {"B2B SEO"}
                  </option>
                  <option>
                    {"Answer Engine Optimization"}
                  </option>
                  <option>
                    {"Generative Engine Optimization"}
                  </option>
                  <option>
                    {"National SEO"}
                  </option>
                  <option>
                    {"Enterprise SEO"}
                  </option>
                  <option>
                    {"On-Page SEO"}
                  </option>
                  <option>
                    {"Off-Page SEO"}
                  </option>
                  <option>
                    {"Link Building"}
                  </option>
                  <option>
                    {"Content SEO"}
                  </option>
                  <option>
                    {"International SEO"}
                  </option>
                  <option>
                    {"Keyword Research"}
                  </option>
                  <option>
                    {"Competitor SEO Analysis"}
                  </option>
                  <option>
                    {"SEO Consulting"}
                  </option>
                  <option>
                    {"Not sure yet"}
                  </option>
                </select>
              </label>
              {"\n"}
              <label>
                {"Monthly budget"}
                <select name="Budget">
                  <option value="">
                    {"Select a range"}
                  </option>
                  <option>
                    {"Under $1,000"}
                  </option>
                  <option>
                    {"$1,000 to $2,500"}
                  </option>
                  <option>
                    {"$2,500 to $5,000"}
                  </option>
                  <option>
                    {"$5,000+"}
                  </option>
                </select>
              </label>
              {"\n"}
              <label>
                {"Message"}
                <textarea id="f-msg" name="Message" placeholder="Tell us about your business, your market and your goals"></textarea>
              </label>
              {"\n"}
              <button className="btn ac lg full" type="submit">
                {"Request my free audit"}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </button>
              <div className="ok" role="status">
                {"Your email app has opened with your message. Press send and we will reply within one business day."}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
