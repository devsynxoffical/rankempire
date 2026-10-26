import React from 'react';

const LOGOS = [
  { src: '/img/logos/logo-01.webp', alt: 'Client Partner 1' },
  { src: '/img/logos/logo-02.webp', alt: 'Client Partner 2' },
  { src: '/img/logos/logo-03.webp', alt: 'Client Partner 3' },
  { src: '/img/logos/logo-04.webp', alt: 'Client Partner 4' },
  { src: '/img/logos/logo-05.webp', alt: 'Client Partner 5' },
  { src: '/img/logos/logo-06.webp', alt: 'Client Partner 6' },
  { src: '/img/logos/logo-07.webp', alt: 'Client Partner 7' },
  { src: '/img/logos/logo-08.webp', alt: 'Client Partner 8' },
  { src: '/img/logos/logo-10.webp', alt: 'Client Partner 10' },
  { src: '/img/logos/logo-11.webp', alt: 'Client Partner 11' },
  { src: '/img/logos/logo-12.webp', alt: 'Client Partner 12' },
  { src: '/img/logos/logo-13.webp', alt: 'Client Partner 13' },
  { src: '/img/logos/logo-15.webp', alt: 'Client Partner 15' },
  { src: '/img/logos/logo-16.webp', alt: 'Client Partner 16' },
  { src: '/img/logos/logo-17.webp', alt: 'Client Partner 17' },
  { src: '/img/logos/logo-18.webp', alt: 'Client Partner 18' },
  { src: '/img/logos/logo-19.webp', alt: 'Client Partner 19' },
  { src: '/img/logos/logo-20.webp', alt: 'Client Partner 20' },
  { src: '/img/logos/logo-21.webp', alt: 'Client Partner 21' },
  { src: '/img/logos/logo-22.webp', alt: 'Client Partner 22' },
];

export default function TrustedLogos() {
  return (
    <div className="tr-logos-wrap" aria-label="Trusted Partners">
      <p className="tr-logos-title">
        {"Trusted by teams who sell through conversation"}
      </p>
      <div className="tr-logos-marquee">
        <div className="tr-logos-track">
          {LOGOS.map((logo, idx) => (
            <div key={`logo-a-${idx}`} className="tr-logo-item">
              <img
                src={logo.src}
                alt={logo.alt}
                loading="eager"
                width={120}
                height={40}
              />
            </div>
          ))}
          {LOGOS.map((logo, idx) => (
            <div key={`logo-b-${idx}`} className="tr-logo-item" aria-hidden="true">
              <img
                src={logo.src}
                alt=""
                loading="lazy"
                width={120}
                height={40}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
