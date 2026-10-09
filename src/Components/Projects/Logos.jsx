
import React from "react";


import logo1 from "../../assets/images/logos/logo1.webp";
import logo2 from "../../assets/images/logos/logo2.webp";
import logo3 from "../../assets/images/logos/logo3.webp";
import logo4 from "../../assets/images/logos/logo4.webp";
import logo5 from "../../assets/images/logos/logo5.webp";
import logo6 from "../../assets/images/logos/logo6.webp";
import logo7 from "../../assets/images/logos/logo7.webp";
import logo8 from "../../assets/images/logos/logo8.webp";
import logo9 from "../../assets/images/logos/logo9.webp";
import logo10 from "../../assets/images/logos/logo10.webp";
import logo11 from "../../assets/images/logos/logo11.webp";
import logo12 from "../../assets/images/logos/logo12.webp";
import logo13 from "../../assets/images/logos/logo13.webp";
import logo14 from "../../assets/images/logos/logo14.webp";
import logo15 from "../../assets/images/logos/logo15.webp";
import logo16 from "../../assets/images/logos/logo16.webp";
import logo17 from "../../assets/images/logos/logo17.webp";


const logos = [
  logo1, logo2, logo3, logo4, logo5, logo6,
  logo7, logo8, logo9, logo10, logo11, logo12,
  logo13, logo14, logo15, logo16, logo17,
];

function Logos() {
  // Duplicate images to make the scrolling loop seamless
  const carouselLogos = [...logos, ...logos];

  return (
    <section className="lg:pt-25 pt-15" id="projects">
      <div className="container">
        <div
          className="text-center pb-15 fadeInUp"
          data-delay="0.2"
        >
          <h3 className="border border-[#bebebe] py-2.5 px-5 rounded-3xl md:text-base md:leading-5 text-sm inline-block font-normal mb-[5px]">
            <i className="ri-arrow-right-up-line text-primary"></i>{" "}
            Projects
          </h3>

          <h2 className="xl:leading-[90px] xl:text-[80px] md:leading-[60px] md:text-[50px] leading-[50px] text-[40px] text-black-100 font-medium">
            Featured Projects
          </h2>

          <p className="md:text-xl md:leading-7 text-base mt-2">
            Get a glimpse of our work
          </p>
          <hr className="relative top-15"/>
        </div>

        <article className="service">
          <div className="service-meta">
            <span className="spec-tag tag-ochre mono">
              Identity/01
            </span>

            <h3>Logo &amp; Brand Identity Design</h3>
          </div>

          <div className="service-body">
            <p>
              A <strong>custom logo design</strong> built from research,
              not templates — sketches, typography, and colour tested
              against competitors before a single mark is finalised.
              Every <strong>brand identity design</strong> project ships
              with a primary logomark, a monochrome version, and clear
              usage rules so the mark stays consistent from a business
              card to a billboard.
            </p>

            <div className="kw-row">
              {[
                "logo designer",
                "brand identity design",
                "vector logo files",
                "brand style guide",
                "wordmark design",
              ].map((keyword) => (
                <span className="kw" key={keyword}>
                  {keyword}
                </span>
              ))}
            </div>

            <div className="shot-carousel">
              <div className="shot-track">
                {carouselLogos.map((logo, index) => (
                  <div className="shot" key={index}>
                    <img
                      src={logo}
                      loading="lazy"
                      alt={`Logo design ${(index % logos.length) + 1}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Logos;
