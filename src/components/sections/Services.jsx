import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section id="services" className="section-space">
      <Container>
        <SectionHeading
          title="What I Can Do for You"
          description="I provide modern, responsive, and user-friendly web development solutions to help businesses and individuals build their online presence."
        />
        <div className="flex flex-wrap justify-center gap-6">
          {services.map((items) => {
            const Icon = items.icon;

            return (
              <article
                key={items.id}
                className="glass-card flex min-h-[250px] w-full max-w-[380px] flex-col items-center justify-center rounded-3xl px-8 py-9 text-center transition duration-300 hover:-translate-y-1 hover:border-accent/30"
              >
                <Icon
                  className="mb-5 text-accent"
                  size={58}
                  strokeWidth={1.5}
                />

                <h3 className="text-2xl font-bold leading-relaxed text-accent">
                  {items.title}
                </h3>

                <p className="mt-4 max-w-[340px] text-[17px] leading-[1.7] tracking-wide text-[#777]">
                  {items.subTitle}
                </p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
