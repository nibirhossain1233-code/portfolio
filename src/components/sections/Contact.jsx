
"use client";

import { useState } from "react";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import { FiChevronDown } from "react-icons/fi";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  }

  const inputStyle =
    "h-[54px] w-full rounded-lg bg-[#1b1b1b] px-6 text-[16px] text-white outline-none placeholder:text-[#959595] focus:ring-1 focus:ring-accent";

  return (
    <section id="contact" className="section-space">
      <Container>
        <SectionHeading
          title="Contact me"
          description="Cultivating Connections: Reach Out And Connect With Me"
        />

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-x-7.5 gap-y-4 md:grid-cols-2 md:gap-y-7.5"
        >
          {/* Name */}
          <input
            required
            type="text"
            name="name"
            placeholder="Name"
            aria-label="Name"
            className={inputStyle}
          />

          {/* Email */}
          <input
            required
            type="email"
            name="email"
            placeholder="Email"
            aria-label="Email"
            className={inputStyle}
          />

          {/* Phone Number */}
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            aria-label="Phone Number"
            className={inputStyle}
          />

          {/* Service Of Interest */}
          <div className="relative">
            <select
              required
              name="service"
              defaultValue=""
              aria-label="Service Of Interest"
              className={`${inputStyle} appearance-none pr-12 text-muted`}
            >
              <option value="" disabled>
                Service Of Interest
              </option>
              <option value="web-design">Web Design</option>
              <option value="frontend-development">
                Frontend Development
              </option>
              <option value="backend-development">
                Backend Development
              </option>
              <option value="full-stack-development">
                Full Stack Development
              </option>
            </select>

            <FiChevronDown
              size={20}
              className="pointer-events-none absolute right-6 top-1/2 -translate-y-1/2 text-muted"
            />
          </div>

          {/* Timeline */}
          <input
            type="text"
            name="timeline"
            placeholder="Timeline"
            aria-label="Timeline"
            className={inputStyle}
          />

          {/* Project Details */}
          <textarea
            required
            name="message"
            rows={6}
            placeholder="Project Details..."
            aria-label="Project Details"
            className="h-40.5 w-full resize-none rounded-lg bg-[#1b1b1b] px-6 py-4 text-[16px] text-white outline-none placeholder:text-muted focus:ring-1 focus:ring-accent"
          />

          {/* Send Button */}
          <div className="flex justify-center md:col-start-2 md:justify-end">
            <button
              type="submit"
              className="flex h-8.75 w-21.25 items-center justify-center rounded-lg border-2 border-muted text-[16px] font-semibold text-[#d0d0d0] transition duration-300 hover:border-accent hover:text-accent md:h-12 md:w-31.5"
            >
              Send
            </button>
          </div>

          {submitted && (
            <p
              role="status"
              className="text-center text-sm text-green-400 md:col-span-2"
            >
              Form submitted (demo only). Connect an API to send messages.
            </p>
          )}
        </form>
      </Container>
    </section>
  );
}
