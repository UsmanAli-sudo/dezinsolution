
import businessLogo1 from "../../assets/images/business_logos/business_logo_1.webp";
import businessLogo2 from "../../assets/images/business_logos/business_logo_2.webp";
import businessLogo3 from "../../assets/images/business_logos/business_logo_3.webp";
import businessLogo4 from "../../assets/images/business_logos/business_logo_4.webp";
import businessLogo5 from "../../assets/images/business_logos/business_logo_5.webp";
import businessLogo6 from "../../assets/images/business_logos/business_logo_6.webp";
import businessLogo7 from "../../assets/images/business_logos/business_logo_7.webp";
import businessLogo8 from "../../assets/images/business_logos/business_logo_8.webp";
import businessLogo9 from "../../assets/images/business_logos/business_logo_9.webp";
import businessLogo10 from "../../assets/images/business_logos/business_logo_10.webp";
import businessLogo11 from "../../assets/images/business_logos/business_logo_11.webp";
import businessLogo12 from "../../assets/images/business_logos/business_logo_12.webp";
import businessLogo13 from "../../assets/images/business_logos/business_logo_13.webp";
import businessLogo14 from "../../assets/images/business_logos/business_logo_14.webp";



const businessLogos = [ businessLogo1, businessLogo2, businessLogo3, businessLogo4, businessLogo5, businessLogo6, businessLogo7, businessLogo8, businessLogo9, businessLogo10, businessLogo11, businessLogo12, businessLogo13, businessLogo14, ];

import React from 'react'

export default function StationaryDesign() {
  return (
    <article className="service relative left-6 mr-12"> 
    <div className="service-meta"> 
        <span className="spec-tag tag-ochre mono">Print/02</span>
         <h3>Stationery Design</h3> 
    </div> 
    <div className="service-body"> 
        <p> Print-ready <strong>business card design</strong>,<strong>letterhead design</strong>, and envelope sets built on the same grid as the brand identity, so a client's paperwork looks like it belongs to the same company as their website. Files are delivered die-line ready for any print shop, with bleed and CMYK colour already set. </p> 
        <div className="kw-row"> 
            <span className="kw">corporate stationery design</span> 
            <span className="kw">business card designer</span> 
            <span className="kw">letterhead template</span> 
            <span className="kw">envelope design</span> </div> 
            <div className="shot-carousel"> 
                <div className="shot-track"> {[...businessLogos, ...businessLogos].map((logo, index) => ( <div className="shot" key={index}> <img src={logo} loading="lazy" alt={`Stationery design ${index % businessLogos.length + 1}`} /> </div> ))} 
            </div>
            
            </div> 
            </div> 
            </article>
  )
}
