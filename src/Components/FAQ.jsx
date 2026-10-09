import { useState } from "react";

const faqs = [
  {
    question: "How secure is my financial data on your platform?",
    answer:
      "We take your privacy and security seriously. Any information you share with Dezinsolutions is kept confidential and handled securely. We only use your details to communicate with you, understand your requirements, and deliver our services. We never sell or share your personal information with third parties without your consent.",
  },
  {
    question: "How quickly can you deliver designs for our business?",
    answer:
      "Most single-item requests, such as logos, flyers, and social media posts, are delivered within 2–4 business days. Larger projects, including full brand identities, websites, and packaging systems, typically take 1–3 weeks depending on the project scope and revision rounds. Rush delivery may be available on request.",
  },
  {
    question: "Can I request revisions to the designs provided?",
    answer:
      "Yes! We welcome feedback and revisions to help refine your designs. The number of included revisions depends on your project or subscription plan. Any additional revisions outside the agreed scope will be discussed with you beforehand.",
  },
  {
    question: "What types of designs does Dezinsolutions specialize in?",
    answer:
      "Dezinsolutions specializes in logo and brand identity design, stationery, website design, UI/UX, social media graphics, product packaging, labels, brochures, print materials, e-commerce graphics, video editing, motion graphics, newsletter design, apparel design, and book covers.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faqs" className="lg:pt-25 pt-15">
      <div className="container">
        <div className="text-center pb-15 fadeInUp" data-delay="0.2">
          <h3 className="border border-[#bebebe] py-2.5 px-5 rounded-3xl md:text-base md:leading-5 text-sm inline-block font-normal mb-[5px]">
            <i className="ri-arrow-right-up-line text-primary"></i> FAQs
          </h3>

          <h2 className="xl:leading-[90px] xl:text-[80px] md:leading-[60px] md:text-[50px] leading-[50px] text-[40px] text-black-100 font-medium">
            Frequently Asked Questions
          </h2>

          <p className="md:text-xl md:leading-7 text-base mt-2">
            Unsure about subscription design?
          </p>
        </div>

        <div className="flex flex-col gap-[15px] lg:pl-7.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div className="accordion-item" key={faq.question}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="accordion-header flex w-full justify-between items-center lg:text-[22px] text-lg text-left rounded-[10px] border border-[#ccc] py-4 px-5 font-medium cursor-pointer"
                >
                  {faq.question}

                  <span
                    className={`inline-block w-[11px] h-[11px] rounded-full shrink-0 transition-colors ${
                      isOpen ? "bg-primary" : "bg-secondary"
                    }`}
                  ></span>
                </button>

                <div
                  className={`accordion-body overflow-hidden px-5 transition-all duration-500 ${
                    isOpen
                      ? "max-h-[500px] opacity-100 visible py-4"
                      : "max-h-0 opacity-0 invisible py-0"
                  }`}
                >
                  <p className="mb-4">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
