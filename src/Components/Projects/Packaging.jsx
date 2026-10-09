import React from 'react'
import p1 from "../../assets/images/packaging/p_1.webp";
import p2 from "../../assets/images/packaging/p_2.webp";
import p3 from "../../assets/images/packaging/p_3.webp";
import p4 from "../../assets/images/packaging/p_4.webp";
import p5 from "../../assets/images/packaging/p_5.webp";
import p6 from "../../assets/images/packaging/p_6.webp";
import p7 from "../../assets/images/packaging/p_7.webp";

const packagingImages = [p1, p2, p3, p4, p5, p6, p7];

export default function Packaging() {
  return (
    <article className="service relative left-6 mr-12">
      <div className="service-meta">
        <span className="spec-tag tag-ochre mono">Print/06</span>
        <h3>Packaging Design</h3>
      </div>

      <div className="service-body">
        <p>
          <strong>Product packaging design</strong> that stands out on a shelf
          and still holds up on a phone screen — boxes, pouches, and{" "}
          <strong>label design</strong> built print-ready with dielines, bleed,
          and spot-colour separations. A 3D{" "}
          <strong>packaging mockup design</strong> is included so a client can
          see the result before it goes to press.
        </p>

        <div className="kw-row">
          <span className="kw">box packaging design</span>
          <span className="kw">product label designer</span>
          <span className="kw">dieline design</span>
          <span className="kw">packaging mockup</span>
        </div>

        <div className="shot-carousel">
          <div className="shot-track" style={{ overflow: "hidden" }}>
            {[...packagingImages, ...packagingImages].map((image, index) => (
              <div className="shot" key={index}>
                <img
                  src={image}
                  loading="lazy"
                  alt={`Packaging Design ${(index % packagingImages.length) + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
