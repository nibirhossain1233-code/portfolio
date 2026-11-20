"use client";

import { useState } from "react";
import Container from "./Container";
import { PrimaryButton } from "./Button";
import { FiMenu, FiX } from "react-icons/fi";
import { logo } from "@/data/logo";

const links = [
  ["Home", "#home"],
  ["Services", "#services"],
  ["About me", "#about"],
  ["Portfolio", "#portfolio"],
  ["Contact me", "#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-50 bg-page">
      <Container className="grid min-h-23 grid-cols-[24px_1fr_auto] items-center gap-3 lg:flex lg:justify-between lg:gap-8">
        {/* Mobile Menu Button */}
        <button
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
          className="text-2xl text-white lg:hidden"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>

        {/* Logo */}
        <a
          href="#home"
          className="justify-self-center bg-linear-to-r from-[#fa6e00] to-[#e60026] bg-clip-text text-[20px] font-black tracking-[.9px] text-transparent lg:order-1 lg:justify-self-auto lg:text-[30px]"
        >
          {logo.text}
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 lg:order-2 lg:flex">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-[18px] font-medium tracking-[.4px] transition-colors hover:text-accent"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Hire Me Button */}
        <div className="justify-self-end lg:order-3">
          <div>
            <PrimaryButton className="w-21.25 md:w-35.25">
              Hire Me
            </PrimaryButton>
          </div>
        </div>
      </Container>

      {/* Mobile Navigation */}
      {open && (
        <div className="border-t border-white/10 bg-[#151515] px-5 py-5 lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-5">
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="text-muted transition-colors hover:text-accent"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
