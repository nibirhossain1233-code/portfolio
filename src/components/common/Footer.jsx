
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
    <footer className="bg-[#1b1b1b] py-[45px]">
      <Container>
        <div className="flex flex-col items-center">
          {/* Logo */}
          <Link
            href="/"
            className="bg-gradient-to-r from-[#fa6e00] to-[#e60026] bg-clip-text text-[30px] font-bold tracking-[0.9px] text-transparent"
          >
            {logo.text}
          </Link>

          {/* Navigation */}
          <nav className="mt-[30px] flex max-w-[380px] flex-wrap items-center justify-center gap-x-6 gap-y-5 md:mt-[48px] md:max-w-none md:gap-x-[60px]">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[16px] font-medium tracking-[0.4px] text-[#959595] transition-colors duration-300 hover:text-white md:text-[20px] md:tracking-[0.6px]"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="mt-[28px] flex items-center gap-5 md:mt-[48px]">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#575757] text-[#bdbdbd] transition-all duration-300 hover:border-accent hover:bg-gradient-to-r hover:from-[#fd6f00] hover:to-[#e46400] hover:text-white"
              >
                <Icon size={22} />
              </a>
            ))}
          </div>

          {/* Contact Information */}
          <div className="mt-[28px] flex flex-col items-center gap-5 md:mt-[48px] md:flex-row md:gap-10">
            <a
              href="mailto:Mahmood.fazile7005@gmail.com"
              className="flex items-center gap-[14px] text-[16px] font-bold tracking-[0.3px] text-[#959595] transition-colors hover:text-white md:text-[20px] md:tracking-[0.6px]"
            >
              <MdOutlineMail size={24} />
              <span>Mahmood.fazile7005@gmail.com</span>
            </a>

            <a
              href="tel:+93729107005"
              className="flex items-center gap-[14px] text-[16px] font-bold tracking-[0.3px] text-[#959595] transition-colors hover:text-white md:text-[20px] md:tracking-[0.6px]"
            >
              <MdOutlinePhone size={24} />
              <span>+93 729 107 005</span>
            </a>
          </div>

          {/* Copyright */}
          <div className="mt-[28px] flex w-full max-w-[593px] justify-center border-t border-[#707070] px-2 pt-4 text-center md:mt-[48px]">
            <p className="text-[14px] font-bold tracking-[0.3px] text-[#707070] md:text-[16px] md:tracking-[0.48px]">
              Designed by @mahmood.fazile UI/UX designer
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
