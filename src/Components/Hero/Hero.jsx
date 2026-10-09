import "./Hero.css";

export default function Hero() {
  return (
    <section className="dz-hero">
      <div className="dz-hero-grid" />
      <div className="dz-hero-glow dz-hero-glow-one" />
      <div className="dz-hero-glow dz-hero-glow-two" />

      <div className="dz-hero-layout">
        {/* Left: headline and CTA */}
        <div className="dz-hero-content">
          <div className="dz-hero-eyebrow">
            <span className="dz-status-dot" />
            <span>INDEPENDENT CREATIVE STUDIO</span>
            <span className="dz-eyebrow-line" />
          </div>

          <h1 className="dz-hero-title">
            We make
            <br />
            brands look
            <br />
            <span className="dz-title-highlight">
              extraordinary<span className="dz-title-period">.</span>
            </span>
          </h1>

          <p className="dz-hero-description">
            Strategy meets creativity. We build bold visual identities, digital
            experiences, and packaging that make your brand impossible to
            overlook.
          </p>

          <div className="dz-hero-actions">
            <a href="#projects" className="dz-btn-primary">
              Explore our work
              <i className="ri-arrow-right-up-line" />
            </a>

            <a href="#book" className="dz-btn-secondary">
              Start a project
              <span className="dz-btn-arrow">↗</span>
            </a>
          </div>

          <div className="dz-hero-bottom">
            <div className="dz-hero-stat">
              <span className="dz-stat-number">2008</span>
              <span className="dz-stat-label">CREATIVE JOURNEY</span>
            </div>

            <span className="dz-stat-divider" />

            <div className="dz-hero-stat">
              <span className="dz-stat-number">Design</span>
              <span className="dz-stat-label">WITH PURPOSE</span>
            </div>
          </div>
        </div>

        {/* Right: abstract animated 3D canvas */}
        <div
          className="dz-hero-visual"
          aria-label="Animated abstract orange sculpture"
        >
          <div className="dz-visual-topline">
            <span>FIG. 001</span>
            <span>FORM / LIGHT / MOTION</span>
          </div>

          <div className="dz-art-stage">
            <div className="dz-stage-cross dz-cross-one" />
            <div className="dz-stage-cross dz-cross-two" />

            {/* Perspective rings */}
            <div className="dz-orbit dz-orbit-one" />
            <div className="dz-orbit dz-orbit-two" />
            <div className="dz-orbit dz-orbit-three" />

            {/* Main glowing sculpture */}
            <div className="dz-sculpture">
              <div className="dz-sculpture-core" />
              <div className="dz-ribbon dz-ribbon-one" />
              <div className="dz-ribbon dz-ribbon-two" />
              <div className="dz-ribbon dz-ribbon-three" />
              <div className="dz-sculpture-highlight" />
            </div>

            {/* Moving light particles */}
            <span className="dz-particle dz-particle-one" />
            <span className="dz-particle dz-particle-two" />
            <span className="dz-particle dz-particle-three" />
            <span className="dz-particle dz-particle-four" />

            {/* Fine laser trails */}
            <div className="dz-light-trail dz-trail-one" />
            <div className="dz-light-trail dz-trail-two" />
            <div className="dz-light-trail dz-trail-three" />

            <div className="dz-visual-label dz-label-top">
              <span className="dz-label-marker" />
              CREATIVE ENERGY
            </div>

            <div className="dz-visual-label dz-label-bottom">
              <span>DESIGNING WHAT'S NEXT</span>
              <span className="dz-label-coordinates">24°51' N / 67°00' E</span>
            </div>
          </div>

          <div className="dz-visual-footer">
            <span>IDEAS INTO IMPACT</span>
            <span className="dz-footer-bars">
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
            </span>
            <span>DS — 001</span>
          </div>
        </div>
      </div>

      <div className="dz-hero-scroll">
        <span className="dz-scroll-line" />
        <span>SCROLL TO EXPLORE</span>
      </div>

      <div className="dz-hero-index">DS / CREATIVE STUDIO</div>
    </section>
  );
}
