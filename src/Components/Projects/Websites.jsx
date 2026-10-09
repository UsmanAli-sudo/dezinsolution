import web1 from "../../assets/images/websites/web_1.webp";
import web2 from "../../assets/images/websites/web_2.webp";
import web3 from "../../assets/images/websites/web_3.webp";
import web4 from "../../assets/images/websites/web_4.webp";
import web5 from "../../assets/images/websites/web_5.webp";
import web6 from "../../assets/images/websites/web_6.webp";

const websiteImages = [web1, web2, web3, web4, web5, web6];

import React from "react";

export default function Websites() {
  return (
    <article className="service relative left-6 mr-12">
      <div className="service-meta">
        <span className="spec-tag tag-ochre mono">Digital/03</span>
        <h3>Website Design</h3>
      </div>
      <div className="service-body">
        <p>
          Custom <strong>website design services</strong> for small businesses
          and personal brands — wireframed, designed, and built as a
          <strong>responsive web design</strong> that reads cleanly on a phone,
          a tablet, and a desktop. Focus stays on fast load times, clear
          navigation, and a layout built to convert visitors into enquiries.
        </p>
        <div className="kw-row">
          <span className="kw">custom website design</span>
          <span className="kw">responsive website design</span>
          <span className="kw">landing page design</span>
          <span className="kw">small business website designer</span>
        </div>
        <div className="shot-carousel">
          <div className="shot-track">
            {[...websiteImages, ...websiteImages].map((image, index) => (
              <div className="shot" key={index}>
                <img
                  src={image}
                  loading="lazy"
                  alt={`Website design ${(index % websiteImages.length) + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
