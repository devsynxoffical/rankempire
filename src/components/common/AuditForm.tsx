import React from "react";

export default function AuditForm({
  id = "au-site",
  buttonText = "Get my free audit",
  placeholder = "Enter your website, e.g. yourbusiness.com",
}: {
  id?: string;
  buttonText?: string;
  placeholder?: string;
}) {
  return (
    <form
      className="audit"
      action="/contact-us/"
      role="search"
      aria-label="Free SEO audit"
    >
      <svg
        className="g"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
      </svg>
      <label className="sr-only" htmlFor={id}>
        Your website
      </label>
      <input
        id={id}
        name="site"
        type="text"
        inputMode="url"
        placeholder={placeholder}
        autoComplete="url"
      />
      <button className="btn ac" type="submit">
        {buttonText}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </button>
    </form>
  );
}
