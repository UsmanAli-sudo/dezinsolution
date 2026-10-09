import { useState } from "react";
import logo from "../assets/images/logos/logo.png"

export default function Navbar() {
const [menuOpen, setMenuOpen] = useState(false);

const closeMenu = () => setMenuOpen(false);

return (
  <header
    id="header"
    className="fixed top-0 z-50 w-full bg-[#fff6ec] py-1 transition-all duration-500 pt-3"
  >
    {" "}
    <div className="container mx-auto px-4">
      {" "}
      <div className="flex items-center justify-between">
        <a href="#" onClick={closeMenu}>
          {" "}
          <img
            src={logo}
            alt="Dezinsolutions"
            className="w-[200px] lg:max-w-[200px]"
          />{" "}
        </a>

        <button
          type="button"
          className="mt-1 block cursor-pointer text-3xl lg:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className={menuOpen ? "ri-close-line" : "ri-menu-line"} />
        </button>

        <nav
          id="menu"
          className={`absolute left-0 top-16 w-full overflow-hidden bg-white transition-all duration-500 lg:visible lg:static lg:w-auto lg:max-h-full lg:overflow-visible lg:bg-transparent ${
            menuOpen
              ? "visible max-h-96 opacity-100"
              : "invisible max-h-0 opacity-0 lg:opacity-100"
          }`}
        >
          <ul className="flex flex-col items-center lg:flex-row">
            <li>
              <a
                href="#how"
                onClick={closeMenu}
                className="inline-block px-5 py-3 font-medium text-black transition-colors duration-300 hover:text-primary hover:underline"
              >
                How It Works
              </a>
            </li>

            <li>
              <a
                href="#features"
                onClick={closeMenu}
                className="inline-block px-5 py-3 font-medium text-black transition-colors hover:text-primary hover:underline"
              >
                Features
              </a>
            </li>

            <li>
              <a
                href="#projects"
                onClick={closeMenu}
                className="inline-block px-5 py-3 font-medium text-black transition-colors hover:text-primary hover:underline"
              >
                Projects
              </a>
            </li>

            <li className="flex items-center gap-3 px-5">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=info@dezinsolutions.org"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
                className="rounded-full p-3 text-xl transition-colors hover:text-primary"
              >
                <i className="fa-solid fa-envelope" />
              </a>

              <a
                href="https://www.facebook.com/dezinsolutions/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="rounded-full p-3 text-xl hover:text-primary"
              >
                <i className="fa-brands fa-facebook-f" />
              </a>

              <a
                href="https://wa.me/923163450427"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="rounded-full p-3 text-[28px] transition-colors hover:text-primary"
              >
                <i className="fa-brands fa-whatsapp" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
);
}
