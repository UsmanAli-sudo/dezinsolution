import React from 'react'
import sm1 from "../../assets/images/social_media/SM_1.png";
import sm2 from "../../assets/images/social_media/SM_2.png";
import sm3 from "../../assets/images/social_media/SM_3.jpg";
import sm4 from "../../assets/images/social_media/SM_4.jpg";
import sm5 from "../../assets/images/social_media/SM_5.jpg";
import sm6 from "../../assets/images/social_media/SM_6.png";
import sm7 from "../../assets/images/social_media/SM_7.png";

const socialMediaImages = [sm1, sm2, sm3, sm4, sm5, sm6, sm7];

export default function SocialMedia() {
  return (
    <article className="service relative left-6 mr-12">
      <div className="service-meta">
        <span className="spec-tag tag-ochre mono">Ecom/05</span>
        <h3>Social Media Design</h3>
      </div>

      <div className="service-body">
        <p>
          Ongoing <strong>social media graphics design</strong> — feed posts,
          carousels, story templates, and highlight covers kept on-brand across
          platforms. Built as reusable templates so{" "}
          <strong>Instagram post design</strong> stays consistent even between
          projects, cutting down on turnaround time for regular posting
          schedules.
        </p>

        <div className="kw-row">
          <span className="kw">social media branding</span>
          <span className="kw">Instagram carousel design</span>
          <span className="kw">social media content design</span>
          <span className="kw">story template design</span>
        </div>

        <div className="shot-carousel">
          <div className="shot-track">
            {[...socialMediaImages, ...socialMediaImages].map(
              (image, index) => (
                <div className="shot" key={index}>
                  <img
                    src={image}
                    loading="lazy"
                    alt={`Social media design ${(index % socialMediaImages.length) + 1}`}
                  />
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
