import React from "react";
import { SparkIcon, LinkIcon } from "@/components/common/Icons";

export default function OpportunitySection() {
  return (
    <section className="sec tint">
      <div className="wrap">
        <div className="sh c" data-r>
          <span className="eyb">The opportunity</span>
          <h2 className="h2">Your next customer is already searching.</h2>
          <p>
            Most buying journeys start on Google. The businesses that show up in the
            right place, at the right moment, win the call.
          </p>
        </div>

        <div className="g3" data-stagger>
          {/* Card 1: Organic search results */}
          <div className="card">
            <div className="pv">
              <div className="sr">
                <i>competitor.com</i>
                <b>Emergency Plumber, 24/7 Service</b>
                <span>Fast local repairs...</span>
              </div>
              <div className="sr me">
                <i>yourbusiness.com</i>
                <b>Licensed Plumber Near You, Book Today</b>
                <span>Upfront pricing, same-day service...</span>
              </div>
            </div>
            <h3>Organic search results</h3>
            <p>
              Rank your service, product and location pages for the searches your
              customers type every day.
            </p>
          </div>

          {/* Card 2: The Google map pack */}
          <div className="card">
            <div className="pv" style={{ padding: 0 }}>
              <div className="mapv">
                <span
                  className="road"
                  style={{ left: 0, right: 0, top: "58%", height: "10px" }}
                ></span>
                <span
                  className="road"
                  style={{ top: 0, bottom: 0, left: "38%", width: "10px" }}
                ></span>
                <span className="mpin" style={{ left: "20%", top: "22%" }}>
                  <b>3</b>
                </span>
                <span className="mpin me" style={{ left: "52%", top: "30%" }}>
                  <b>1</b>
                </span>
                <span className="mpin" style={{ left: "74%", top: "56%" }}>
                  <b>2</b>
                </span>
              </div>
            </div>
            <h3>The Google map pack</h3>
            <p>
              Get into the top three map results with a stronger Google Business
              Profile, reviews and local signals.
            </p>
          </div>

          {/* Card 3: AI answers and overviews */}
          <div className="card">
            <div className="pv">
              <div className="aio">
                <div className="t">
                  <SparkIcon />
                  AI overview
                </div>
                <div className="l" style={{ width: "92%" }}></div>
                <div className="l" style={{ width: "78%" }}></div>
                <div className="l" style={{ width: "86%" }}></div>
                <span className="cite">
                  <LinkIcon /> yourbusiness.com
                </span>
              </div>
            </div>
            <h3>AI answers and overviews</h3>
            <p>
              Structured, expert content that search engines and AI assistants
              trust enough to cite.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
