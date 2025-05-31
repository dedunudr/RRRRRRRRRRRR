import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { github, preview } from "../assets";
import { PROJECTS } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { cn } from "../utils/lib";
import { fadeIn, textVariant } from "../utils/motion";

type ProjectCardProps = (typeof PROJECTS)[number] & {
  index: number;
};

// Project Card
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_site_link,
}: ProjectCardProps) => (
  <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
    >
      <div className="relative w-full h-[230px]">
        {/* Work image */}
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-2xl"
        />

        {/* Live Site */}
        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <div
            onClick={() => window.open(live_site_link, "_blank", "noreferrer")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              src={preview}
              alt="Live Site"
              title="Live Site"
              className="w-2/3 h-2/3 object-contain"
            />
          </div>

          {/* Github */}
          <div
            onClick={() =>
              window.open(source_code_link, "_blank", "noreferrer")
            }
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer ml-2"
          >
            <img
              src={github}
              alt="Github"
              title="Github"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
        </div>
      </div>

      {/* Work Info */}
      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
      </div>

      {/* Work Tag */}
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag, tagIdx) => (
          <p key={`Tag-${tagIdx}`} className={cn(tag.color, "text-[14px]")}>
            #{tag.name}
          </p>
        ))}
      </div>
    </Tilt>
  </motion.div>
);

// Works
export const Works = () => {
  return (
    <SectionWrapper>
      <>
        {/* Title */}
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>FOUNDR ABOUT 🇰🇷┃🇯🇵</p>
          <h2 className={styles.sectionHeadText}>MY ABOUT I AM RUKSHAN.</h2>
        </motion.div>

        {/* About */}
        <div className="w-full flex">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            Hi, I'm D. Rukshan – a passionate creator and a future entrepreneur with big dreams and a bigger heart.
            I specialize in building dynamic websites, developing powerful WhatsApp bots, and bringing ideas to life through creative photo and video editing.
            I also design unique logos that tell a story.But my journey goes beyond just tech. I'm on a mission to build a successful life in Japan, become a renowned businessman,
and most importantly, give my mother the life she truly deserves. Every line of code I write and every design I create is a step toward that dream.
Tech is not just my profession – it’s my way of expressing joy, ambition, and purpose. I don’t just work—I enjoy every bit of what I do,
and that energy flows into everything I create.
Let’s build the future, one pixel and one purpose at a time. 💻🚀

          </motion.p>
        </div>

        {/* Project Card */}
        <div className="mt-20 flex flex-wrap gap-7">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={`project-${i}`} index={i} {...project} />
          ))}
        </div>
      </>
    </SectionWrapper>
  );
};
