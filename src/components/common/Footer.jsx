
import Link from "next/link";
import {
  FaInstagram,
  FaLinkedinIn,
  FaDribbble,
  FaBehance,
} from "react-icons/fa";
import { MdOutlineMail, MdOutlinePhone } from "react-icons/md";
import Container from "./Container";
import { logo } from "@/data/logo";
import { heroIcon } from "@/data/heroIcon";
import { user } from "@/data/user";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "About me", href: "#about" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact me", href: "#contact" },
];

const socialLinks = [
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
  { icon: FaDribbble, href: "#", label: "Dribbble" },
  { icon: FaBehance, href: "#", label: "Behance" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1b1b1b] py-11.25">
      <Container>
        <div className="flex flex-col items-center">
          {/* Logo */}
          <Link
            href="/"
            className="bg-linear-to-r from-[#fa6e00] to-[#e60026] bg-clip-text text-[30px] font-bold tracking-[0.9px] text-transparent"
          >
            {logo.text}
          </Link>

          {/* Navigation */}
          <nav className="mt-7.5 flex max-w-95 flex-wrap items-center justify-center gap-x-6 gap-y-5 md:mt-12 md:max-w-none md:gap-x-15">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[16px] font-medium tracking-[0.4px] text-muted transition-colors duration-300 hover:text-white md:text-[20px] md:tracking-[0.6px]"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="mt-6 flex items-center justify-center gap-5 lg:justify-start">
            {heroIcon.map((icon) => {
              const Icon = icon.icon;

              return (
                <a
                  key={icon.id}
                  href={icon.url}
                  aria-label="Social link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#777] text-[#d0d0d0] transition hover:border-accent hover:text-accent"
                >
                  <Icon size={19} />
                </a>
              );
            })}
          </div>

          {/* Contact Information */}
          <div className="mt-7 flex flex-col items-center gap-5 md:mt-12 md:flex-row md:gap-10">
            <a
              href={`mailto:${user.email}`}
              className="flex items-center gap-3.5 text-[16px] font-bold tracking-[0.3px] text-muted transition-colors hover:text-white md:text-[20px] md:tracking-[0.6px]"
            >
              <MdOutlineMail size={24} />
              <span>{user.email}</span>
            </a>

            <a
              href={`tel:+880${user.phone}`}
              className="flex items-center gap-3.5 text-[16px] font-bold tracking-[0.3px] text-muted transition-colors hover:text-white md:text-[20px] md:tracking-[0.6px]"
            >
              <MdOutlinePhone size={24} />
              <span>+880{user.phone}</span>
            </a>
          </div>

          {/* Copyright */}
          <div className="mt-7 flex w-full max-w-148.25 justify-center border-t border-[#707070] px-2 pt-4 text-center md:mt-12">
            <p className="text-[14px] font-bold tracking-[0.3px] text-[#707070] md:text-[16px] md:tracking-[0.48px]">
              Designed by @{user.username} {user.Profession}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
