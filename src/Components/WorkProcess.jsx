import React from 'react'
import shape_1 from "../assets/images/shapes/workprocess-shape1.png"
import shape_2 from "../assets/images/shapes/workprocess-shape2.png"

export default function WorkProcess() {
  return (
    <section id="how" className="lg:pt-25 pt-15">
<div className="container mx-auto px-4">
{/* Section Heading */}
<div className="fadeInUp pb-15 text-center" data-delay="0.2">
<h3 className="mb-[5px] inline-block rounded-3xl border border-[#bebebe] px-5 py-2.5 text-sm font-normal md:text-base md:leading-5">
<i className="ri-arrow-right-up-line text-primary"></i>
Work Process
</h3>

      <h2 className="text-[40px] font-medium leading-[50px] text-black-100 md:text-[50px] md:leading-[60px] xl:text-[80px] xl:leading-[90px]">
        We design. You grow
      </h2>

      <p className="mt-2 text-base md:text-xl md:leading-7">
        Our process is as simple as possible.
      </p>
    </div>

    {/* Process Steps */}
    <div className="grid gap-x-6 gap-y-12.5 pt-0 lg:grid-cols-3 lg:pt-15">
      {/* Step 1 */}
      <div className="relative flex flex-col items-center px-0 text-center sm:px-[25px]">
        <div className="relative flex h-12.5 w-12.5 items-center justify-center rounded-full border border-[rgba(0,0,0,.08)] lg:h-[65px] lg:w-[65px]">
          <i className="ri-shake-hands-line text-[25px]"></i>

          <div className="overlay-list absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#ff4f01] text-white lg:h-7.5 lg:w-7.5">
            <span className="text-sm lg:font-medium">01</span>
          </div>
        </div>

        <div className="pt-5 lg:pt-6">
          <div className="title-box">
            <h3 className="text-[26px] font-bold lg:text-[32px] lg:leading-[30px]">
              <a href="#contact">Let’s Connect</a>
            </h3>
          </div>

          <div className="mt-4 lg:mt-[22px]">
            <p className="text-lg font-medium leading-7">
              Have a project in mind? Get in touch with our team,
              share your ideas, and let’s discuss how we can bring
              them to life.
            </p>
          </div>
        </div>
      </div>

      {/* Step 2 */}
      <div className="relative flex flex-col items-center px-0 text-center sm:px-[25px]">
        <div className="absolute left-[-110px] top-0 hidden opacity-50 lg:block">
          <img
            src={shape_2}
            alt=""
            aria-hidden="true"
          />
        </div>

        <div className="relative flex h-12.5 w-12.5 items-center justify-center rounded-full border border-[rgba(0,0,0,.08)] lg:h-[65px] lg:w-[65px]">
          <i className="ri-global-fill text-[25px]"></i>

          <div className="overlay-list absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white lg:h-7.5 lg:w-7.5">
            <span className="text-sm lg:font-medium">02</span>
          </div>
        </div>

        <div className="pt-5 lg:pt-6">
          <div className="title-box">
            <h3 className="text-[26px] font-bold lg:text-[32px] lg:leading-[30px]">
              <a href="#contact">Receive</a>
            </h3>
          </div>

          <div className="mt-4 lg:mt-[22px]">
            <p className="text-lg font-medium leading-7">
              Start receiving your designs within 2–3 business
              days, or even sooner for smaller tasks. Yes, it can
              be that fast.
            </p>
          </div>
        </div>
      </div>

      {/* Step 3 */}
      <div className="relative flex flex-col items-center px-0 text-center sm:px-[25px]">
        <div className="absolute left-[-110px] top-0 hidden opacity-50 lg:block">
          <img
            src={shape_1}
            alt=""
            aria-hidden="true"
          />
        </div>

        <div className="relative flex h-12.5 w-12.5 items-center justify-center rounded-full border border-[rgba(0,0,0,.08)] lg:h-[65px] lg:w-[65px]">
          <i className="ri-stack-line text-[25px]"></i>

          <div className="overlay-list absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white lg:h-7.5 lg:w-7.5">
            <span className="text-sm lg:font-medium">03</span>
          </div>
        </div>

        <div className="pt-5 lg:pt-6">
          <div className="title-box">
            <h3 className="text-[26px] font-bold lg:text-[32px] lg:leading-[30px]">
              <a href="#contact">Continue</a>
            </h3>
          </div>

          <div className="mt-4 lg:mt-[22px]">
            <p className="text-lg font-medium leading-7">
              Approve designs or request revisions; we're not
              done until you're thrilled. Your satisfaction is
              our commitment.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}
