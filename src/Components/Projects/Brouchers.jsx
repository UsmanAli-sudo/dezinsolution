import React from 'react'
import b1 from "../../assets/images/brouchers/b_1.webp";
import b2 from "../../assets/images/brouchers/b_2.webp";
import b3 from "../../assets/images/brouchers/b_3.webp";
import b4 from "../../assets/images/brouchers/b_4.webp";
import b5 from "../../assets/images/brouchers/b_5.webp";
import b6 from "../../assets/images/brouchers/b_6.webp";
import b7 from "../../assets/images/brouchers/b_7.webp";
import b8 from "../../assets/images/brouchers/b_8.webp";
import b9 from "../../assets/images/brouchers/b_9.webp";

const brochureImages = [b1, b2, b3, b4, b5, b6, b7, b8, b9];

export default function Brouchers() {
  return (
    <article className="service relative left-6 mr-12">
      <div className="service-meta">
        <span className="spec-tag tag-ochre mono">Print/07</span>
        <h3>Brochure Design</h3>
      </div>

      <div className="service-body">
        <p>
          <strong>Brochure design</strong> for company profiles, catalogues, and
          product ranges — a <strong>tri-fold brochure design</strong> or
          multi-page layout built around a clear reading order. Every{" "}
          <strong>corporate brochure design</strong> keeps typography and grid
          consistent with the rest of the brand so it reads as one system, not a
          one-off.
        </p>

        <div className="kw-row">
          <span className="kw">catalog design</span>
          <span className="kw">company profile design</span>
          <span className="kw">multi-page brochure layout</span>
        </div>

        <div className="shot-carousel">
          <div className="shot-track">
            {[...brochureImages, ...brochureImages].map((image, index) => (
              <div className="shot" key={index}>
                <img
                  src={image}
                  loading="lazy"
                  alt={`Brochure Design ${(index % brochureImages.length) + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
