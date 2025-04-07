import * as motion from "motion/react-client";
import content from "@/data/content.json";

// Define types for the data structure
interface Education {
  title: string;
  institution: string;
  year: string;
}

interface Journey {
  year: string;
  title: string;
  company: string;
}

interface About {
  summary?: string;
  bio?: string | string[];
  experience?: string;
  projects?: string;
  strengths?: string[];
  journey?: Journey[];
  education?: Education[];
  interests?: string;
  resumeUrl?: string;
}

export default function About() {
  const { colors } = content.theme;
  // Use proper typing for the about section
  const about: About = content.about || {};

  return (
    <section
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl shadow-md sm:shadow-lg md:shadow-xl"
      style={{
        background: `linear-gradient(135deg, ${colors.background}f5, ${colors.background})`,
        color: colors.text,
      }}
    >
      {/* Header with accent line */}
      <div className="max-w-6xl mx-auto mb-8 sm:mb-10 md:mb-12">
        <motion.div
          className="w-12 sm:w-16 h-1 mb-4 rounded-full"
          style={{ backgroundColor: colors.accent }}
          initial={{ width: 0 }}
          animate={{ width: 64 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        />

        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          About <span style={{ color: colors.primary }}>Me</span>
        </motion.h2>

        <motion.p
          className="text-sm sm:text-base md:text-lg max-w-3xl"
          style={{ color: `${colors.text}cc` }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {about.summary || "A brief introduction about myself and my journey."}
        </motion.p>
      </div>

      {/* Main content grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        {/* Left side - Career journey */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h3
            className="text-lg sm:text-xl font-semibold mb-4"
            style={{ color: colors.primary }}
          >
            Career Journey
          </h3>
          <div
            className="relative border-l-2 pl-5 pb-2"
            style={{ borderColor: `${colors.primary}40` }}
          >
            {(
              about.journey || [
                {
                  year: "2023",
                  title: "Senior Full Stack Developer",
                  company: "Tech Innovations Inc.",
                },
                {
                  year: "2021",
                  title: "Frontend Lead",
                  company: "Digital Solutions",
                },
                {
                  year: "2019",
                  title: "Web Developer",
                  company: "Creative Web Agency",
                },
                {
                  year: "2017",
                  title: "Junior Developer",
                  company: "Startup Studio",
                },
              ]
            ).map((milestone, i) => (
              <motion.div
                key={i}
                className="mb-6 relative"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
              >
                <div
                  className="absolute -left-[29px] w-6 h-6 rounded-full flex items-center justify-center"
                  style={{
                    background:
                      i === 0
                        ? `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`
                        : colors.background,
                    border: i !== 0 ? `2px solid ${colors.primary}40` : "none",
                  }}
                >
                  {i === 0 && (
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  )}
                </div>
                <div className="flex flex-col">
                  <span
                    className="text-sm font-semibold"
                    style={{
                      color: i === 0 ? colors.primary : `${colors.text}cc`,
                    }}
                  >
                    {milestone.year}
                  </span>
                  <h4
                    className="text-base font-medium mt-1"
                    style={{ color: i === 0 ? colors.secondary : colors.text }}
                  >
                    {milestone.title}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">
                    {milestone.company}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats cards in a row */}
          <div className="grid grid-cols-2 gap-3 mt-2">
            <motion.div
              className="p-4 rounded-lg"
              style={{
                background: `linear-gradient(135deg, ${colors.primary}11, ${colors.secondary}11)`,
                border: `1px solid ${colors.primary}20`,
              }}
              whileHover={{
                y: -3,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h3
                className="text-sm font-medium mb-1"
                style={{ color: colors.primary }}
              >
                Experience
              </h3>
              <p className="text-2xl font-bold">{about.experience || "6+"}</p>
              <p className="text-xs text-gray-500">Years</p>
            </motion.div>

            <motion.div
              className="p-4 rounded-lg"
              style={{
                background: `linear-gradient(135deg, ${colors.secondary}11, ${colors.accent}11)`,
                border: `1px solid ${colors.secondary}20`,
              }}
              whileHover={{
                y: -3,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h3
                className="text-sm font-medium mb-1"
                style={{ color: colors.secondary }}
              >
                Projects
              </h3>
              <p className="text-2xl font-bold">{about.projects || "25+"}</p>
              <p className="text-xs text-gray-500">Completed</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Right side - Bio, education, and beyond work */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Bio */}
          <div>
            <h3
              className="text-lg sm:text-xl font-semibold mb-4"
              style={{ color: colors.primary }}
            >
              My Story
            </h3>
            <div className="space-y-4 text-sm sm:text-base">
              {typeof about.bio === "string" ? (
                <p style={{ color: `${colors.text}cc` }}>{about.bio}</p>
              ) : Array.isArray(about.bio) ? (
                about.bio.map((paragraph: string, i: number) => (
                  <p key={i} style={{ color: `${colors.text}cc` }}>
                    {paragraph}
                  </p>
                ))
              ) : (
                [
                  "I'm a passionate developer with a strong focus on creating intuitive and engaging user experiences.",
                  "With a background in both design and development, I bring a unique perspective to every project, ensuring that both aesthetics and functionality are given equal importance.",
                ].map((paragraph: string, i: number) => (
                  <p key={i} style={{ color: `${colors.text}cc` }}>
                    {paragraph}
                  </p>
                ))
              )}
            </div>
          </div>

          {/* Education and certifications */}
          <div>
            <h3
              className="text-lg sm:text-xl font-semibold mb-4"
              style={{ color: colors.secondary }}
            >
              Education & Certifications
            </h3>
            <div className="space-y-3">
              {(
                about.education || [
                  {
                    title: "Master of Computer Science",
                    institution: "University of Technology",
                    year: "2016-2018",
                  },
                  {
                    title: "Bachelor of Software Engineering",
                    institution: "State University",
                    year: "2012-2016",
                  },
                ]
              ).map((edu, i) => (
                <motion.div
                  key={i}
                  className="rounded-lg p-3 transition-all"
                  style={{
                    border: `1px solid ${colors.secondary}15`,
                    background:
                      i % 2 === 0
                        ? `${colors.secondary}05`
                        : `${colors.primary}05`,
                  }}
                  whileHover={{
                    backgroundColor:
                      i % 2 === 0
                        ? `${colors.secondary}10`
                        : `${colors.primary}10`,
                    y: -2,
                  }}
                >
                  <h4 className="font-medium text-sm">{edu.title}</h4>
                  <p className="text-xs mt-1 text-gray-600">
                    {edu.institution} • {edu.year}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Core strengths */}
          <div>
            <h3
              className="text-lg font-semibold mb-3"
              style={{ color: colors.accent }}
            >
              Core Strengths
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {(
                about.strengths || [
                  "Problem Solving",
                  "Technical Leadership",
                  "User-Centered Design",
                  "System Architecture",
                  "Agile Methodologies",
                  "Performance Optimization",
                ]
              ).map((strength, i) => (
                <motion.div
                  key={i}
                  className="px-3 py-2 rounded-lg flex items-center gap-2"
                  style={{
                    border: `1px solid ${colors.accent}15`,
                    background: `${colors.accent}05`,
                  }}
                  whileHover={{
                    backgroundColor: `${colors.accent}10`,
                    y: -1,
                  }}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 * i }}
                >
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${colors.accent}15` }}
                  >
                    <span
                      className="text-xs font-medium"
                      style={{ color: colors.accent }}
                    >
                      {i + 1}
                    </span>
                  </div>
                  <span className="text-sm">{strength}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Beyond work section */}
          <div>
            <h3
              className="text-lg sm:text-xl font-semibold mb-3"
              style={{ color: colors.accent }}
            >
              Beyond Work
            </h3>
            <p className="text-sm" style={{ color: `${colors.text}cc` }}>
              {about.interests ||
                "When not coding, I enjoy hiking, reading science fiction, and exploring new technologies through side projects. I'm also an active contributor to open source and regularly attend local tech meetups."}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
