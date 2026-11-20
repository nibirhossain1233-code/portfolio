
import Container from "@/components/common/Container";
import { PrimaryButton } from "@/components/common/Button";
import { user } from "@/data/user";
import { heroIcon } from "@/data/heroIcon";

export default function Hero() {
  return (
    <section id="home" className="pt-0 pb-0 md:pt-16 md:pb-20">
      <Container className="grid items-center gap-6 lg:grid-cols-[1fr_.9fr] lg:gap-8">

        {/* Hero Content */}
        <div className="order-1 text-center lg:order-1 lg:text-left">

          {/* Introduction */}
          <div>
            <p className="text-[16px] font-semibold tracking-[.7px] text-[#707070] md:text-[22px]">
              Hi, I am
            </p>

            <p className="mt-1 text-[20px] font-bold tracking-[.8px] text-muted md:mt-2 md:text-[26px]">
              {user.name}
            </p>
          </div>

          {/* Profession */}
          <h1 className="gradient-text mt-5 text-[clamp(2rem,9.5vw,3rem)] font-black leading-[1.12] tracking-wide sm:text-5xl md:mt-5 md:text-6xl xl:text-[70px]">
            {user.Profession}
          </h1>

          {/* Social Icons */}
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

          {/* Action Buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 lg:justify-start">
            <PrimaryButton className="w-23.25 md:w-39 h-8.25 md:h-12 text-[14px] md:text-[20px]">Hire Me</PrimaryButton>

            <PrimaryButton download="Nibir-hossain-Cv" href="cv/cv.pdf" className="w-32.5 md:w-52.25 h-8.25 md:h-12 text-[14px] md:text-[20px]">
              Download CV
            </PrimaryButton>
          </div>

          {/* Statistics */}
          <div className="glass-card mx-auto mt-12.5 grid w-full max-w-137.5 grid-cols-3 rounded-lg p-4 text-left lg:mx-0">
            {[
              [`${user.experiences}+`, "Experiences"],
              [`${user.projectDone}+`, "Project done"],
              [`${user.happyClients}+`, "Happy Clients"],
            ].map(([num, label], i) => (
              <div
                key={label}
                className={`min-w-0 ${
                  i !== 2 ? "border-r border-[#777]" : ""
                } ${i === 0 ? "pr-2" : i === 1 ? "px-3" : "pl-3"}`}
              >
                <p className="text-[20px] font-extrabold tracking-wide text-accent">
                  {num}
                </p>

                <p className="mt-2 text-[13px] font-bold leading-tight text-[#dfdfdf] sm:text-[15px] md:text-[17px]">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Profile Image */}
        <div className="relative order-2 mx-auto w-full max-w-130 lg:order-2">

          {/* Background Circle */}
          <div className="absolute bottom-0 left-1/2 aspect-square w-full -translate-x-1/2 rounded-full bg-[#1a1919] lg:w-[88%] lg:border-2 lg:border-accent/50 lg:bg-transparent" />

          {/* Portrait */}
          <div className="relative mx-auto aspect-[.665] w-[84%] overflow-hidden lg:w-[82%] lg:aspect-[.67]">
            <img
              src="images/hero/profile.png"
              alt="Portrait of the portfolio designer"
              className="h-full w-full object-cover object-top"
            />
          </div>
        </div>

      </Container>
    </section>
  );
}
