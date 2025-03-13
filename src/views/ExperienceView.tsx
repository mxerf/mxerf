import { GradientCard } from "@/components/GradientCard";
import { Timeline } from "@/components/TimelineComponent";
import Image from "next/image";
import avtomixImage from "../../public/avtomix.png";
import chatskyDocsImage from "../../public/chatsky-docs.png";
import chatskyUiImage from "../../public/chatsky-ui.png";
import istokImage from "../../public/istok.png";
import jftlImage from "../../public/jftl.png";
import leepyDesignImage from "../../public/leepy.png";
import tahografdvImage from "../../public/tahografdv.png";

const experienceTimeline = [
  {
    title: "2024",
    content: (
      <div className="">
        <div className="mb-8">
          <div className="mb-4 space-y-2">
            <h3 className="milestone-title">
              Major Accomplishments and Project Expansions
            </h3>
            <p className="milestone-description">
              Successfully delivered some substantial projects, each designed to
              enhance efficiency and engagement in different domains. These
              include the development of an{" "}
              <span className="text-lime-400">
                intelligent testing platform (ISTOK)
              </span>
              , enabling comprehensive evaluation of linguistic competencies; a{" "}
              <span className="text-blue-400">
                multi-functional personal account system
              </span>{" "}
              tailored for students, parents, and staff at a leading educational
              institution.
            </p>
          </div>
          <div className="experience-card-gradient-box mb-4">
            <GradientCard
              as={"a"}
              href="https://istok-demo.ru/"
              target="_blank"
              title="ISTOK Linguistic Testing"
              description="Intelligent Testing of Linguistic Competencies"
              colors={["#FFFFFF", "#BDED4D", "#2D4298", "#000000"]}
              className="h-max"
            >
              <p className="experience-card-gradient-text to-[#2D4298] via-[#b2c97f] from-[#BDED4D]">
                istok test.
              </p>
              <Image
                src={istokImage}
                alt="istok"
                className="experience-card-gradient-image"
              />
            </GradientCard>
            <GradientCard
              as={"a"}
              href="https://lk-jftl.ru/"
              target="_blank"
              title="JFTL Personal Account"
              description="Multi-functional Personal Account System"
              colors={["#FFFFFF", "#3C51A2", "#FAFAFC", "#000000"]}
              className="h-max"
            >
              <p className="experience-card-gradient-text to-[#3C51A2] via-[#96abff91] from-[#FAFAFC]">
                lk jftl.
              </p>
              <Image
                src={jftlImage}
                alt="jftl"
                className="experience-card-gradient-image"
              />
            </GradientCard>
          </div>
        </div>
        <div className="mb-8">
          <div className="my-4 space-y-2">
            <h3 className="milestone-title">
              Side Projects and Independent Development
            </h3>
            <p className="milestone-description">
              In addition привет to the aforementioned projects, and several
              custom solutions have been successfully implemented. These include
              the development of a{" "}
              <span className="text-[#9A5501]">designer&apos;s portfolio</span>,
              a <span className="text-[#E4C167]">custom CRM</span> for a carwash
              and a sophisticated{" "}
              <span className="text-chart-3">voting platform</span> for
              corporate competitions within{" "}
              <span className="text-chart-3">Russian Railways (RZD)</span>,
              ensuring transparency and accessibility in decision-making
              processes.
            </p>
          </div>
          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4 my-4">
            <GradientCard
              as={"a"}
              href="https://leepy-new.vercel.app/"
              target="_blank"
              title="Leepy Design"
              description="UX/UI Designer's Portfolio site with scroll effects and other interactive elements."
              colors={["#FFFFFF", "#9A5501", "#E4C167", "#000000"]}
              className="h-max"
              containerClassName=""
            >
              <p className="experience-card-gradient-text to-[#9A5501] via-[#E4C167] from-[#fff5ec]">
                leepy design.
              </p>
              <Image
                src={leepyDesignImage}
                alt="leepy-design"
                className="experience-card-gradient-image"
              />
            </GradientCard>
            <GradientCard
              title="Robot Wash"
              description="Carwash management system for staff with client management, and other features."
              colors={["#FFFFFF", "#9A5501", "#E4C167", "#000000"]}
              className="h-full flex-grow"
              containerClassName="flex flex-col min-h-[280px]"
            >
              <p className="experience-card-gradient-text relative group-hover:opacity-100 to-[#fff5ec] via-[#E4C167] from-[#9A5501]">
                robotwash.
              </p>
            </GradientCard>
            <GradientCard
              title="Russian Railways (RZD)"
              description="Voting system for corporate competitions."
              colors={["#FFFFFF", "#FF6666", "#D31A18", "#000000"]}
              className="h-full flex-grow"
              containerClassName="flex flex-col col-span-2 max-md:col-span-1 min-h-[280px]"
            >
              <p className="experience-card-gradient-text relative group-hover:opacity-100 to-[#ffdddd] from-[#D31A18]">
                rzd vote.
              </p>
            </GradientCard>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "2023",
    content: (
      <div>
        <div className="mb-4 space-y-2">
          <h3 className="milestone-title">First Professional Milestones</h3>
          <p className="milestone-description">
            Gained my first hands-on experience in real-world projects,
            successfully developing an <br />
            <span className="text-chart-1"> e-commerce platform</span> and a
            cutting-edge
            <span className="text-chart-3">
              {" "}
              Progressive Web Application (PWA)
            </span>{" "}
            for a beauty service provider.
          </p>
          <p className="milestone-description">
            Secured an official position as a{" "}
            <span className="text-chart-2">Frontend Developer at MIPT</span>,
            contributing to large-scale educational initiatives. Additionally,
            took the lead in the development and enhancement of the{" "}
            <span className="text-chart-2">chatsky-ui</span> project (formerly
            known as{" "}
            <span className="text-emerald-200">dialog-flow-designer</span>),
            focusing on improving UI/UX solutions for interactive communication
            tools.
          </p>
        </div>
        <div className="experience-card-gradient-box">
          <GradientCard
            as={"a"}
            href={"https://github.com/deeppavlov/chatsky-ui"}
            target="_blank"
            className="h-max"
            title="Chatsky UI"
            description="Chatsky UI helps you create versatile chatbots for business purposes and personal needs."
            colors={["#FFFFFF", "#FFAD0D", "#01A2FF", "#000000"]}
          >
            <p className="experience-card-gradient-text to-[#01A2FF] via-[#fff9ed5d] from-[#FFAD0D]">
              chatsky-ui.
            </p>
            <Image
              src={chatskyUiImage}
              alt="chatsky-ui"
              className="experience-card-gradient-image"
            />
          </GradientCard>
          <GradientCard
            as={"a"}
            href={"https://github.com/deeppavlov/chatsky-ui"}
            target="_blank"
            className="h-max"
            title="Chatsky Docs"
            description="Chatsky Docs provides detailed information about Chatsky UI, including its features and usage."
            colors={["#FFAD0D", "#01A2FF", "#FFAD0D", "#01A2FF"]}
          >
            <p className="experience-card-gradient-text to-[#FFAD0D] via-[#fff9ed5d] from-[#01A2FF]">
              chatsky docs.
            </p>
            <Image
              src={chatskyDocsImage}
              alt="chatsky-docs"
              className="experience-card-gradient-image"
            />
          </GradientCard>
        </div>
      </div>
    ),
  },
  {
    title: "2022",
    content: (
      <div>
        <div className="space-y-2 mb-4">
          <h3 className="milestone-title">The Beginning of My Journey</h3>
          <p className="milestone-description">
            Initiated my path in software development by mastering the
            fundamental principles of
            <span className="bg-orange-600 text-white px-1 inline-block rounded">
              {" "}
              HTML
            </span>{" "}
            <span className="bg-purple-600/80 text-white px-1 inline-block rounded">
              {" "}
              CSS
            </span>{" "}
            and{" "}
            <span className="bg-yellow-400 text-black px-1 inline-block rounded">
              {" "}
              JavaScript
            </span>{" "}
            .
          </p>
          <p className="milestone-description">
            Additionally, I embarked on the study of{" "}
            <span className="text-cyan-500 bg-white/20 px-1 inline-block rounded">
              React
            </span>{" "}
            and{" "}
            <span className="bg-blue-600 text-white px-1 inline-block rounded">
              TypeScript
            </span>
            , laying a solid foundation for building modern web applications.
          </p>
        </div>
        <div className="experience-card-gradient-box">
          <GradientCard
            as={"a"}
            href={"https://avtomix27.ru"}
            target="_blank"
            className="h-max"
            title="Avtomix 27"
            description="Avtomix 27 is a base html+css+js site for car service center."
            colors={["#FFFFFF", "#FFC700", "#3D4CD9", "#000000"]}
          >
            <p className="experience-card-gradient-text to-[#3D4CD9] via-[#fff9ed5d] from-[#FFC700]">
              avtomix.
            </p>
            <Image
              src={avtomixImage}
              alt="avtomix"
              className="experience-card-gradient-image"
            />
          </GradientCard>
          <GradientCard
            as={"a"}
            href={"https://github.com/deeppavlov/chatsky-ui"}
            target="_blank"
            className="h-max"
            title="Tahografdv"
            description="Tahografdv is a base html+css+js site for car service center."
            colors={["#E90825", "#3D4CD9", "#E90825", "#3D4CD9"]}
          >
            <p className="experience-card-gradient-text to-[#E90825] via-[#fff9ed5d] from-[#3D4CD9]">
              tahografdv.
            </p>
            <Image
              src={tahografdvImage}
              alt="tahografdv"
              className="experience-card-gradient-image"
            />
          </GradientCard>
        </div>
      </div>
    ),
  },
];

const ExperienceView = () => {
  return (
    <div className="max-w-[1440px] p-16 max-md:py-8 max-md:px-4 mx-auto">
      <section className="section-heading mt-0">
        <h2 className="section-title">Work experience</h2>
        <p className="section-description">
          Here are my professional experiences and achievements for 3+ years of
          work.
        </p>
      </section>
      <section>
        <Timeline data={experienceTimeline} />
      </section>
      {/* <div className="w-full flex items-center justify-center">
        <GoToGitButton />
      </div> */}
    </div>
  );
};

export default ExperienceView;
