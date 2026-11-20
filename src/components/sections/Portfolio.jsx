
"use client";

import { useMemo, useState } from "react";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";

const categories = [
  "All",
  "Website design",
  "App desktop",
  "Landing page design",
  "App mobile design",
  "Braiding",
];

const projects = [
  {
    title: "Website Design",
    category: "Website design",
    image:
      "https://www.figma.com/api/mcp/asset/63dabd01-28c9-44d6-a8ec-bc257c021f1c/9d266.png",
  },
  {
    title: "Mobile App",
    category: "App mobile design",
    image:
      "https://www.figma.com/api/mcp/asset/63dabd01-28c9-44d6-a8ec-bc257c021f1c/f5a34.png",
  },
  {
    title: "Dashboard UI",
    category: "App desktop",
    image:
      "https://www.figma.com/api/mcp/asset/63dabd01-28c9-44d6-a8ec-bc257c021f1c/a150c.png",
  },
  {
    title: "Creative Project",
    category: "Braiding",
    image:
      "https://www.figma.com/api/mcp/asset/63dabd01-28c9-44d6-a8ec-bc257c021f1c/9d266.png",
  },
  {
    title: "Product Interface",
    category: "App mobile design",
    image:
      "https://www.figma.com/api/mcp/asset/63dabd01-28c9-44d6-a8ec-bc257c021f1c/f5a34.png",
  },
  {
    title: "Landing Page",
    category: "Landing page design",
    image:
      "https://www.figma.com/api/mcp/asset/63dabd01-28c9-44d6-a8ec-bc257c021f1c/a150c.png",
  },
];

export default function Portfolio() {
  const [active, setActive] = useState("All");

  const visible = useMemo(
    () =>
      active === "All"
        ? projects
        : projects.filter((project) => project.category === active),
    [active]
  );

  return (
    <section id="portfolio" className="section-space overflow-hidden">
      <Container>
        <SectionHeading
          title="Portfolio"
          description="A selection of my recent design projects and creative work."
        />

        {/* Categories */}
        <div className="mb-12 flex flex-wrap justify-center gap-3 md:gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActive(category)}
              className={`rounded-lg px-5 py-3 text-[13px] font-bold transition duration-300 sm:text-sm md:text-base ${
                active === category
                  ? "bg-linear-to-r from-[#fd6f00] to-[#e46400] text-white"
                  : "bg-white/8 text-[#aaa] hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Mobile Projects */}
        <div className="-mx-5 flex gap-4.5 overflow-x-auto px-5 pb-2 scrollbar-hide md:hidden">
          {visible.map((project, i) => (
            <article
              key={`${project.title}-${i}`}
              className="w-71 flex-none overflow-hidden rounded-2xl bg-white/8"
            >
              <div className="aspect-square overflow-hidden bg-[#222]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex h-13.5 items-center justify-between gap-2 px-4">
                <h3 className="truncate text-[14px] font-bold text-[#ddd]">
                  {project.title}
                </h3>

                <p className="shrink-0 text-[13px] text-[#999]">
                  Categories
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Desktop Projects */}
        <div className="hidden gap-7 md:grid md:grid-cols-2 xl:grid-cols-3">
          {visible.map((project, i) => (
            <article
              key={`${project.title}-${i}`}
              className="group overflow-hidden rounded-2xl bg-white/4"
            >
              <div className="aspect-4/3 overflow-hidden bg-[#222]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-5">
                <p className="text-sm text-accent">{project.category}</p>

                <h3 className="mt-2 text-xl font-bold text-white">
                  {project.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
