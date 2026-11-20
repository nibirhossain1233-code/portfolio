import Container from "@/components/common/Container";
import { PrimaryButton, OutlineButton } from "@/components/common/Button";
import { user } from "@/data/user";
import { heroIcon } from "@/data/heroIcon";

export default function Hero() {
  return (
    <section id="home" className="pb-20 pt-10 md:pt-16">
      <Container className="grid items-center gap-12 lg:grid-cols-[1fr_.9fr] lg:gap-8">
        <div className="order-2 lg:order-1">
          <p className="text-[22px] font-semibold tracking-[.7px] text-[#707070]">
            Hi, I am
          </p>
          <p className="mt-2 text-[26px] font-bold tracking-[.8px] text-muted">
            {user.name}
          </p>
          <h1 className="gradient-text mt-5 text-5xl font-black leading-[1.12] tracking-wide sm:text-6xl xl:text-[70px]">
            {user.Profession}
          </h1>
          <div className="mt-8 flex items-center gap-5">
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
          <div className="mt-12 flex items-center gap-2">
            <PrimaryButton className="h-[33px] w-[85px] px-[16px] py-[8px] text-[14px] md:h-[43px] md:w-[156px] md:px-[40px] md:py-[12px] md:text-[16px]">Hire Me</PrimaryButton>
            <PrimaryButton className="h-[33px] w-[85px] px-[16px] py-[8px] text-[14px] md:h-[43px] md:w-[142px] md:px-[40px] md:py-[12px] md:text-[16px]" download="Nibir-hossain-Cv" href="cv/cv.pdf">
              Download CV
            </PrimaryButton>
          </div>
          <div className="glass-card mt-16 flex max-w-[550px] flex-wrap gap-7 rounded-lg p-6 sm:gap-9">
            {[
              [`${user.experiences}+`, "Experiences"],
              [`${user.projectDone}+`, "Project done"],
              [`${user.happyClients}+`, "Happy Clients"],
            ].map(([num, label], i) => (
              <div
                key={label}
                className={`${i !== 2 ? "border-r border-[#777] pr-7" : ""}`}
              >
                <p className="text-2xl font-extrabold tracking-wide text-accent">
                  {num}
                </p>
                <p className="mt-2 text-[15px] font-bold text-[#dfdfdf] sm:text-[17px]">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative order-1 mx-auto w-full max-w-[520px] lg:order-2">
          <div className="absolute bottom-0 left-1/2 aspect-square w-[88%] -translate-x-1/2 rounded-full border-[2px] border-accent/50" />
          <div className="relative mx-auto aspect-[.67] w-[82%] overflow-hidden rounded-t-[48%] rounded-b-[8%] bg-[#1a1919]">
            <img
              src="images/hero/profile.png"
              alt="Portrait of the portfolio designer"
              className="h-full w-full  object-cover object-top"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
