import React from 'react'
import logo from "../assets/images/logos/logo.png"

export default function ContactUs() {
  return (
    <section id="book" className="lg:pt-25 pt-15">
      <div className="container">
        <div
          className="lg:w-[75%] mx-auto text-center lg:px-12.5 py-7.5 px-8 border border-[rgba(0,0,0,0.05)] rounded-[20px] fadeInUp"
          data-delay="0.2"
        >
          <h2 className="xl:leading-[90px] xl:text-[80px] md:leading-[60px] md:text-[50px] leading-[50px] text-[40px] text-black-100 font-normal">
            See if Dezinsolutions is right for you. (It totally is.)
          </h2>

          <p className="md:text-xl md:leading-7 text-base mt-2">
            Get a guided tour through Dezinsolutions, and find out how you and
            your team can change the way you source design, forever.
          </p>

          <div className="mt-7.5 flex items-center gap-4 justify-center">
            {/* Email */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=info@dezinsolutions.org"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-primary text-secondary hover:bg-black-200 hover:text-white transition"
            >
              <i className="fa-solid fa-envelope text-xl"></i>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/923163450427"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-primary text-secondary hover:bg-black-200 hover:text-white transition"
            >
              <i className="fa-brands fa-whatsapp text-xl"></i>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/dezinsolutions/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-primary text-secondary hover:bg-black-200 hover:text-white transition"
            >
              <i className="fa-brands fa-facebook-f text-xl"></i>
            </a>
          </div>

          <a href="#">
            <img
              src={logo}
              alt="Dezinsolutions Logo"
              title="Dezinsolutions Logo"
              className="max-w-[200px] mx-auto relative top-7"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
