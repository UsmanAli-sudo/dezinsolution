import React from 'react'
import l1 from "../../assets/images/labels/l_1.png";
import l2 from "../../assets/images/labels/l_2.png";
import l3 from "../../assets/images/labels/l_3.png";
import l4 from "../../assets/images/labels/l_4.png";
import l5 from "../../assets/images/labels/l_5.jpg";
import l6 from "../../assets/images/labels/l_6.png";
import l7 from "../../assets/images/labels/l_7.png";
import l8 from "../../assets/images/labels/l_8.png";
import l9 from "../../assets/images/labels/l_9.png";
import l10 from "../../assets/images/labels/l_10.png";

const labelImages = [l1, l2, l3, l4, l5, l6, l7, l8, l9, l10];

export default function Labels() {
  return (
    <article className="service relative left-6 mr-12">
      <div className="service-meta">
        <span className="spec-tag tag-ochre mono">Print/08</span>
        <h3>Label Design</h3>
      </div>

      <div className="service-body">
        <p>
          <strong>Label design</strong> for products that need to stand out on
          shelves and online — carefully arranged typography, colours, and
          product details that keep your packaging clear and consistent with
          your brand. Each label is designed with print-ready requirements in
          mind.
        </p>

        <div className="kw-row">
          <span className="kw">product label design</span>
          <span className="kw">bottle label design</span>
          <span className="kw">custom label design</span>
        </div>

        <div className="shot-carousel">
          <div className="shot-track">
            {[...labelImages, ...labelImages].map((image, index) => (
              <div className="shot" key={index}>
                <img
                  src={image}
                  loading="lazy"
                  alt={`Label Design ${(index % labelImages.length) + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
