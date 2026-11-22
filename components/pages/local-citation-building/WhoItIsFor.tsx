export default function WhoItIsFor() {
  return (
    <section className="x xfit" id="fit">
      <div className="wrap">
        <div className="xfit-p">
          <div className="l">
            <div className="xh lt" data-r="">
              <span className="xe">
                <i></i>
                {"Who it is for"}
              </span>
              <h2 className="h2">
                {"Is citation building right for your business?"}
              </h2>
            </div>
            <div className="best">
              <b>
                {"Best fit"}
              </b>
              <span>
                {"Local service businesses and clinics"}
              </span>
              <span>
                {"Businesses that moved or changed phone number"}
              </span>
              <span>
                {"Multi-location brands with inconsistent listings"}
              </span>
              <span>
                {"New businesses with few listings"}
              </span>
            </div>
            <div className="yfit-m" data-r="">
              <div className="m">
                <svg viewBox="0 0 120 70">
                  <path className="t" d="M10 65 A50 50 0 0 1 110 65" />
                  <path className="v" d="M10 65 A50 50 0 0 1 110 65" />
                </svg>
                <b data-fitn="">
                  {"5"}
                </b>
                <span>
                  {"signs checked"}
                </span>
              </div>
              <p>
                {"If two or more apply, this service is likely to pay for itself."}
              </p>
            </div>
          </div>
          <ul className="xchk ychk" data-fit="">
            <li data-r="" style={{"--i": "0"} as React.CSSProperties}>
              <span className="ck"></span>
              <span>
                {"You moved or changed your phone number in the last five years"}
              </span>
            </li>
            <li data-r="" style={{"--i": "1"} as React.CSSProperties}>
              <span className="ck"></span>
              <span>
                {"Google shows the wrong hours, address or phone"}
              </span>
            </li>
            <li data-r="" style={{"--i": "2"} as React.CSSProperties}>
              <span className="ck"></span>
              <span>
                {"You have duplicate Google or Yelp profiles"}
              </span>
            </li>
            <li data-r="" style={{"--i": "3"} as React.CSSProperties}>
              <span className="ck"></span>
              <span>
                {"Competitors appear above you on Google Maps"}
              </span>
            </li>
            <li data-r="" style={{"--i": "4"} as React.CSSProperties}>
              <span className="ck"></span>
              <span>
                {"You do not know where your business is listed"}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
