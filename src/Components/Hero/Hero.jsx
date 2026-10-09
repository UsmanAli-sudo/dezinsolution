import "./Hero.css";
import LivingOrb from "../LivingOrb.jsx";

export default function Hero() {
  return (
    <section className="dz-hero">
      <div className="dz-hero-grid" aria-hidden="true" />
      <div className="dz-hero-glow" aria-hidden="true" />

      <div className="dz-hero-layout">
        <div className="dz-hero-content">
          <div className="dz-hero-eyebrow">
            <span className="dz-status-dot" />
            CREATIVE STUDIO · EST. 2008
          </div>

          <h1 className="dz-hero-title text-white">
            Make your
            <br />
            brand
            <br />
            <span className="dz-title-highlight">impossible</span>
            <br />
            to ignore<span className="dz-title-period">.</span>
          </h1>

          <p className="dz-hero-description">
            We turn ambitious ideas into distinctive brands through bold
            identities, thoughtful packaging, and digital experiences that leave
            a lasting impression.
          </p>

          <div className="dz-hero-actions">
            <a href="#projects" className="dz-btn-primary">
              Explore our work
              <i className="ri-arrow-right-up-line" />
            </a>

            <a href="#book" className="dz-btn-secondary">
              Let's create something
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="dz-hero-bottom">
            <span className="dz-hero-bottom-line" />
            <p>
              GOOD DESIGN GETS NOTICED.
              <br />
              GREAT DESIGN GETS REMEMBERED.
            </p>
          </div>
        </div>

        <div className="dz-hero-visual">
          <div className="orb-label">
            <span className="dz-status-dot" />
            INTERACTIVE DESIGN
          </div>

          <LivingOrb />

          <div className="orb-caption">
            <span>FORM / LIGHT / MOTION</span>
            <span>DS® — 001</span>
          </div>
        </div>
      </div>

      <div className="dz-hero-scroll">
        <span />
        SCROLL TO DISCOVER
      </div>

      <span className="dz-hero-index">01 — CREATIVE DIRECTION</span>
    </section>
  );
}
