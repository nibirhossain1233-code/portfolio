"use client";

import { useState } from "react";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import { FiMail, FiPhone } from "react-icons/fi";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  }
  return (
    <section id="contact" className="section-space">
      <Container>
        <SectionHeading title="Contact Me" description="Have a project in mind? Let's work together." />
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div className="space-y-7">
            <div className="flex items-center gap-4"><span className="rounded-full bg-accent/10 p-4 text-accent"><FiMail size={23} /></span><div><p className="text-sm text-[#777]">Email</p><p className="mt-1 text-lg text-white">hello@example.com</p></div></div>
            <div className="flex items-center gap-4"><span className="rounded-full bg-accent/10 p-4 text-accent"><FiPhone size={23} /></span><div><p className="text-sm text-[#777]">Phone</p><p className="mt-1 text-lg text-white">+00 123 456 789</p></div></div>
          </div>
          <form onSubmit={handleSubmit} className="glass-card grid gap-5 rounded-2xl p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <input required placeholder="Your name" className="min-w-0 rounded-lg border border-white/10 bg-[#191919] px-4 py-4 text-white outline-none placeholder:text-[#777] focus:border-accent" />
              <input required type="email" placeholder="Your email" className="min-w-0 rounded-lg border border-white/10 bg-[#191919] px-4 py-4 text-white outline-none placeholder:text-[#777] focus:border-accent" />
            </div>
            <input placeholder="Subject" className="min-w-0 rounded-lg border border-white/10 bg-[#191919] px-4 py-4 text-white outline-none placeholder:text-[#777] focus:border-accent" />
            <textarea required rows="6" placeholder="Your message" className="min-w-0 resize-y rounded-lg border border-white/10 bg-[#191919] px-4 py-4 text-white outline-none placeholder:text-[#777] focus:border-accent" />
            <div><button type="submit" className="gradient-button">Send Message</button></div>
            {submitted && <p role="status" className="text-sm text-green-400">Form submitted (demo only). Connect an API to send messages.</p>}
          </form>
        </div>
      </Container>
    </section>
  );
}