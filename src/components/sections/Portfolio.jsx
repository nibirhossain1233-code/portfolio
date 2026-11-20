"use client";

import { useMemo, useState } from "react";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";

const categories = ["All", "Website design", "App mobile design", "App desktop", "Braiding"];
const projects = [
  { title: "Website Design", category: "Website design", image: "https://www.figma.com/api/mcp/asset/63dabd01-28c9-44d6-a8ec-bc257c021f1c/9d266.png" },
  { title: "Mobile App", category: "App mobile design", image: "https://www.figma.com/api/mcp/asset/63dabd01-28c9-44d6-a8ec-bc257c021f1c/f5a34.png" },
  { title: "Dashboard UI", category: "App desktop", image: "https://www.figma.com/api/mcp/asset/63dabd01-28c9-44d6-a8ec-bc257c021f1c/a150c.png" },
  { title: "Creative Project", category: "Braiding", image: "https://www.figma.com/api/mcp/asset/63dabd01-28c9-44d6-a8ec-bc257c021f1c/9d266.png" },
  { title: "Product Interface", category: "App mobile design", image: "https://www.figma.com/api/mcp/asset/63dabd01-28c9-44d6-a8ec-bc257c021f1c/f5a34.png" },
  { title: "Landing Page", category: "Website design", image: "https://www.figma.com/api/mcp/asset/63dabd01-28c9-44d6-a8ec-bc257c021f1c/a150c.png" },
];

export default function Portfolio() {
  const [active, setActive] = useState("All");
  const visible = useMemo(() => active === "All" ? projects : projects.filter(p => p.category === active), [active]);
  return (
    <section id="portfolio" className="section-space">
      <Container>
        <SectionHeading title="Portfolio" description="A selection of my recent design projects and creative work." />
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map(category => <button key={category} onClick={() => setActive(category)} className={`rounded-lg px-5 py-3 text-sm font-bold transition sm:text-base ${active === category ? "bg-gradient-to-r from-[#fd6f00] to-[#e46400] text-white" : "bg-white/[.05] text-[#aaa] hover:text-white"}`}>{category}</button>)}
        </div>
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project, i) => <article key={`${project.title}-${i}`} className="group overflow-hidden rounded-2xl bg-white/[.04]">
            <div className="aspect-[4/3] overflow-hidden bg-[#222]"><img src={project.image} alt={project.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /></div>
            <div className="p-5"><p className="text-sm text-accent">{project.category}</p><h3 className="mt-2 text-xl font-bold text-white">{project.title}</h3></div>
          </article>)}
        </div>
      </Container>
    </section>
  );
}