import React from 'react'

export default function Footer() {
  return (
    <footer>
      <div className="pt-12.5 pb-10">
        <div className="container">
          <div className="flex lg:flex-row flex-col items-center justify-between gap-y-4">
            <div className="copyright-text">
              <p>
                Copyright{" "}
                <a href="/" className="text-primary">
                  &copy;Dezinsolutions
                </a>{" "}
                All Rights Reserved.
              </p>
            </div>

            <ul className="flex flex-wrap justify-center gap-x-7.5 gap-y-3">
              <li>
                <p>
                  Dezinsolutions — Freelance Graphic Design Studio, Est. 2008
                </p>
              </li>
              <li>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
