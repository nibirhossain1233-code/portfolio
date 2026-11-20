
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

        <div className="grid grid-cols-2 gap-x-4 gap-y-6 md:flex md:flex-wrap md:justify-center md:gap-6">
          {services.map((items) => {
            const Icon = items.icon;

            return (
              <article
                key={items.id}
                className="glass-card flex min-h-50.5 min-w-0 flex-col items-center justify-center rounded-2xl px-3 py-6 text-center transition duration-300 hover:-translate-y-1 hover:border-accent/30 md:min-h-62.5 md:w-full md:max-w-95 md:rounded-3xl md:px-8 md:py-9"
              >
                <Icon
                  className="mb-2 text-accent md:mb-5"
                  size={34}
                  strokeWidth={1.5}
                />

                <h3 className="text-[18px] font-bold leading-[1.6] text-accent sm:text-xl md:text-2xl md:leading-relaxed">
                  {items.title}
                </h3>

                <p className="mt-5 w-full text-[13px] leading-[1.6] tracking-wide text-[#777] sm:text-sm md:mt-4 md:max-w-85 md:text-[17px] md:leading-[1.7]">
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
