import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import { PrimaryButton } from "@/components/common/Button";
import { skills } from "@/data/skills";
import { IoDownloadOutline } from "react-icons/io5";

export default function About() {
  return (
    <section id="about" className="section-space">
      <Container>
        <SectionHeading
          title="About Me"
          description="Full Stack Developer | Passionate Learner | Problem Solver"
        />

        {/* About Content */}
        <div className="flex flex-col items-center gap-8 lg:grid lg:grid-cols-[.85fr_1fr] lg:items-center lg:gap-12 xl:gap-20">
          {/* Profile Image */}
          <div className="relative mx-auto aspect-[.7] w-full max-w-99 overflow-hidden lg:aspect-[.66] lg:max-w-125">
            <div className="absolute bottom-0 left-1/2 h-[84%] w-[97%] -translate-x-1/2 rounded-t-full rounded-b-xl bg-white/4" />

            <img
              src="images/about-me/profile.png"
              alt="Designer portrait"
              className="relative h-full w-full object-cover object-top grayscale"
            />
          </div>

          {/* About Description */}
          <div className="w-full">
            <p className="text-[16px] leading-[1.9] text-muted lg:text-[17px] lg:leading-[2.1]">
              I'm a passionate Full Stack Developer with over a year of
              experience in learning and building modern web applications. I
              enjoy transforming creative ideas into functional, visually
              appealing, and user-friendly digital experiences. With a strong
              interest in frontend and backend development, I work with
              technologies like React.js, Next.js, Node.js, and MongoDB to build
              responsive, efficient, and scalable web solutions. I believe in
              continuous learning and constantly exploring new technologies to
              improve my skills and stay up to date with the latest trends in
              web development. I pay close attention to detail, enjoy solving
              problems, and strive to write clean, maintainable code. My goal is
              to create meaningful digital experiences that not only look great
              but also provide real value to users.
            </p>

            {/* Download CV */}
            <div className="mt-8 flex justify-center lg:justify-start">
              <PrimaryButton
                href="cv/cv.pdf"
                download="Nibir-hossain-Cv.pdf"
                className="w-46.5 md:w-60 h-10 md:h-12 text-[16px] md:text-[20px] flex items-center gap-2.5"
              >
                <IoDownloadOutline />
                Download CV
              </PrimaryButton>
            </div>
          </div>
        </div>

        {/* Mobile Skills */}
        <div className="mt-14 grid grid-cols-2 justify-items-center gap-x-2.5 gap-y-10 lg:hidden">
          {skills.map((items) => {
            const Icon = items.icon;

            return (
              <div
                key={items.name}
                className="flex w-full flex-col items-center gap-4"
              >
                {/* Circular Progress */}
                <div
                  className="relative flex h-22.5 w-22.5 items-center justify-center rounded-full"
                  style={{
                    background: `conic-gradient(#fd6f00 ${items.value}%, #383838 ${items.value}% 100%)`,
                  }}
                >
                  <div className="flex h-19 w-19 items-center justify-center rounded-full bg-[#171717]">
                    <Icon size={34} className="text-muted" />
                  </div>
                </div>

                {/* Skill Information */}
                <div className="flex flex-col items-center gap-1 text-center">
                  <p className="text-[20px] font-bold text-accent">
                    {items.value}%
                  </p>

                  <p className="text-[16px] font-bold leading-tight text-muted">
                    {items.name}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Desktop Skills */}
        <div className="mt-24 hidden grid-cols-5 items-start justify-items-center gap-6 lg:grid">
          {skills.map((items) => {
            const Icon = items.icon;

            return (
              <div
                key={items.name}
                className="flex w-full flex-col items-center gap-5"
              >
                {/* Circular Progress */}
                <div
                  className="relative flex h-31 w-31 items-center justify-center rounded-full"
                  style={{
                    background: `conic-gradient(#fd6f00 ${items.value}%, #383838 ${items.value}% 100%)`,
                  }}
                >
                  <div className="flex h-26 w-26 items-center justify-center rounded-full bg-[#171717]">
                    <Icon size={48} className="text-muted" />
                  </div>
                </div>

                {/* Skill Information */}
                <div className="flex flex-col items-center gap-2 text-center">
                  <p className="text-[28px] font-bold text-accent">
                    {items.value}%
                  </p>

                  <p className="text-[20px] font-bold leading-tight text-muted">
                    {items.name}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
