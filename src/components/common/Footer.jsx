
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
    <footer className="bg-white/[0.04] pt-10 pb-6">
      <Container>
        {/* Logo and Navigation */}
        <div className="flex flex-col items-center gap-[50px]">
          <Link
            href="/"
            className="bg-gradient-to-r from-[#fa6e00] to-[#e60026] bg-clip-text font-bold text-[30px] tracking-[0.9px] text-transparent"
          >
            {logo.text}
          </Link>

          <nav className="flex flex-wrap items-center justify-center gap-x-[60px] gap-y-5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[20px] font-medium tracking-[0.6px] text-[#959595] transition-colors duration-300 hover:text-white"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Social Links and Contact Information */}
        <div className="mt-[50px] flex flex-col items-center gap-[50px]">
          {/* Social Icons */}
          <div className="flex items-center gap-5">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#575757] text-white transition-all duration-300 hover:bg-gradient-to-r hover:from-[#fd6f00] hover:to-[#e46400]"
              >
                <Icon size={24} />
              </a>
            ))}
          </div>

          {/* Email and Phone */}
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
            <a
              href="mailto:Mahmood.fazile7005@gmail.com"
              className="flex items-center gap-[14px] text-[20px] font-bold tracking-[0.6px] text-[#959595] transition-colors hover:text-white"
            >
              <MdOutlineMail size={24} />
              <span>Mahmood.fazile7005@gmail.com</span>
            </a>

            <a
              href="tel:+93729107005"
              className="flex items-center gap-[14px] text-[20px] font-bold tracking-[0.6px] text-[#959595] transition-colors hover:text-white"
            >
              <MdOutlinePhone size={24} />
              <span>+93 729 107 005</span>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mx-auto mt-[50px] flex max-w-[593px] justify-center border-t border-[#707070] px-4 pt-4 text-center">
          <p className="text-[16px] font-bold tracking-[0.48px] text-[#707070]">
            Designed by @mahmood.fazile UI/UX designer
          </p>
        </div>
      </Container>
    </footer>
  );
}
