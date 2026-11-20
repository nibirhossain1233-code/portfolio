import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import { PrimaryButton } from "@/components/common/Button";
import { skills } from "@/data/skills";

export default function About() {
  return (
    <section id="about" className="section-space">
      <Container>
        <SectionHeading
          title="About Me"
          description="Full Stack Developer | Passionate Learner | Problem Solver"
        />
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="mx-auto w-full max-w-[480px] overflow-hidden rounded-[42px] bg-[#222]">
            <img
              src="images/about-me/profile.png"
              alt="Designer portrait"
              className="aspect-[4/5] w-full object-cover object-top"
            />
          </div>
          <div>
            <p className="text-[17px] leading-[1.9] text-[#959595]">
              I'm a passionate Full Stack Developer with over a year of learning
              experience in web development. I enjoy creating modern,
              responsive, and user-friendly web applications using React.js,
              Next.js, Node.js, and MongoDB. I'm always eager to learn new
              technologies, improve my skills, and turn creative ideas into
              functional digital experiences.
            </p>
            <div className="mt-8 space-y-5">
              {skills.map((item) => (
                <div key={item.name}>
                  <div className="mb-2 flex justify-between text-sm font-semibold text-[#ddd]">
                    <span>{item.name}</span>
                    <span>{item.value}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#fd6f00] to-[#e46400]"
                      style={{ width: `${item.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-9">
              <PrimaryButton href="cv/cv.pdf" download="Nibir-hossain-Cv.pdf">
                Download CV
              </PrimaryButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
