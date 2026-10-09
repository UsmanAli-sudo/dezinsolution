import React from 'react'
import ui1 from "../../assets/images/UIUX/UI_1.webp";
import ui2 from "../../assets/images/UIUX/UI_2.webp";

export default function UIUX() {
  return (
    <article className="service relative left-6 mr-12">
      <div className="service-meta">
        <span className="spec-tag tag-ochre mono">Digital/04</span>
        <h3>UI/UX Design</h3>
      </div>

      <div className="service-body">
        <p>
          <strong>UI UX design services</strong> for apps and web products —
          user flows, wireframes, and high-fidelity screens built in a shared
          design system. Every <strong>mobile app UI design</strong> project
          starts with quick <strong>wireframing and prototyping</strong> so
          navigation gets tested before a single pixel is polished.
        </p>

        <div className="kw-row">
          <span className="kw">user experience design</span>
          <span className="kw">app UI designer</span>
          <span className="kw">design system</span>
          <span className="kw">Figma prototyping</span>
        </div>

        <div className="shot-grid">
          <div className="shot">
            <img src={ui1} alt="UI/UX Design 1" loading="lazy" />
          </div>

          <div className="shot">
            <img src={ui2} alt="UI/UX Design 2" loading="lazy" />
          </div>
        </div>
      </div>
    </article>
  );
}
