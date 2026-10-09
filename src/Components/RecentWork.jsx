import React from 'react'
import scribble from "../assets/images/shapes/work-scribble.png" 
import logo13 from "../assets/images/logos/logo13.jpg";
import logo10 from "../assets/images/logos/logo10.jpg";
import logo11 from "../assets/images/logos/logo11.jpg";
import logo14 from "../assets/images/logos/logo14.jpg";


const logos = [logo13, logo10, logo11, logo14];

export default function RecentWork() {
  return (
<div className="pt-5" id="portfolio">
<div>
<img src={scribble} alt="Custom decorative shape" className="max-w-[300px]" />
</div>
<div className='px-5'>
  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {logos.map((logo, index) => (
        <img
          key={logo}
          src={logo}
          alt={`Logo design ${index + 1}`}
          className="rounded-[10px] border-8 border-[#ccc]"
        />
      ))}
    </div>
</div>
</div>
  )
}
