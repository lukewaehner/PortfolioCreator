import * as motion from "motion/react-client";
import Image from "next/image";
import content from "@/data/content.json";

// Define types for project data
interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  sourceUrl?: string;
  featured?: boolean;
}

export default function Projects() {
  const { colors } = content.theme;
  const projects: Project[] = content.projects || [];

  // Get featured projects first, then non-featured
  const sortedProjects = [
    ...projects.filter((project) => project.featured),
    ...projects.filter((project) => !project.featured),
  ];

  return (
    <section
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl shadow-md sm:shadow-lg md:shadow-xl"
      style={{
        background: `linear-gradient(135deg, ${colors.background}f5, ${colors.background})`,
        color: colors.text,
      }}
    >
      {/* Header with accent line */}
      <div className="max-w-6xl mx-auto mb-12 sm:mb-16">
        <motion.div
          className="w-12 sm:w-16 h-1 mb-4 sm:mb-6 rounded-full"
          style={{ backgroundColor: colors.accent }}
          initial={{ width: 0 }}
          animate={{ width: 64 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        />

        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          My <span style={{ color: colors.primary }}>Projects</span>
        </motion.h2>

        <motion.p
          className="text-sm sm:text-base md:text-lg max-w-3xl"
          style={{ color: `${colors.text}cc` }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Here are some of the projects I&apos;ve worked on. Each project
          represents challenges I&apos;ve overcome and skills I&apos;ve
          developed.
        </motion.p>
      </div>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {sortedProjects.map((project, index) => (
          <motion.div
            key={project.title}
            className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            {/* Project Image */}
            <div className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              {project.featured && (
                <div
                  className="absolute top-0 right-0 mt-4 mr-4 px-2 py-1 text-xs font-semibold rounded"
                  style={{ backgroundColor: colors.accent, color: "white" }}
                >
                  Featured
                </div>
              )}
            </div>

            {/* Project Content */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p
                className="text-sm mb-4 flex-grow"
                style={{ color: `${colors.text}cc` }}
              >
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mb-4">
                <p
                  className="text-xs mb-2 font-semibold"
                  style={{ color: colors.primary }}
                >
                  Technologies
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs rounded"
                      style={{
                        backgroundColor: `${
                          colors[
                            i % 3 === 0
                              ? "primary"
                              : i % 3 === 1
                              ? "secondary"
                              : "accent"
                          ]
                        }15`,
                        color:
                          colors[
                            i % 3 === 0
                              ? "primary"
                              : i % 3 === 1
                              ? "secondary"
                              : "accent"
                          ],
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex mt-auto gap-3">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm font-medium px-3 py-1.5 rounded-full transition-all"
                    style={{
                      backgroundColor: colors.primary,
                      color: "white",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Live Demo
                  </a>
                )}
                {project.sourceUrl && (
                  <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm font-medium px-3 py-1.5 rounded-full transition-all"
                    style={{
                      backgroundColor: `${colors.primary}15`,
                      color: colors.primary,
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    View Code
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
