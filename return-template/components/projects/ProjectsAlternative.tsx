"use client";
import * as motion from "motion/react-client";
import Image from "next/image";
import { useState } from "react";
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

export default function ProjectsAlternative() {
  const { colors } = content.theme;
  const projects: Project[] = content.projects || [];

  // State for active project (for mobile)
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  return (
    <section
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl shadow-md sm:shadow-lg md:shadow-xl"
      style={{
        background: `linear-gradient(135deg, ${colors.background}f5, ${colors.background})`,
        color: colors.text,
      }}
    >
      {/* Header with accent line */}
      <div className="max-w-6xl mx-auto mb-8 sm:mb-12">
        <motion.div
          className="w-12 sm:w-16 h-1 mb-4 rounded-full"
          style={{ backgroundColor: colors.accent }}
          initial={{ width: 0 }}
          animate={{ width: 64 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        />

        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Featured <span style={{ color: colors.primary }}>Work</span>
        </motion.h2>
      </div>

      {/* Desktop Layout - Timeline Style */}
      <div className="hidden md:block max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className={`flex items-center gap-8 mb-16 last:mb-0 ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {/* Project Image */}
            <div className="w-1/2 relative">
              <div className="relative rounded-xl overflow-hidden shadow-lg aspect-video">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {project.featured && (
                  <div
                    className="absolute top-0 right-0 mt-4 mr-4 px-3 py-1 text-xs font-semibold rounded"
                    style={{ backgroundColor: colors.accent, color: "white" }}
                  >
                    Featured
                  </div>
                )}
              </div>
            </div>

            {/* Project Description */}
            <div className="w-1/2 p-6">
              <h3
                className="text-2xl font-bold mb-2"
                style={{
                  color: index % 2 === 0 ? colors.primary : colors.secondary,
                }}
              >
                {project.title}
              </h3>

              <p className="text-sm mb-4" style={{ color: `${colors.text}cc` }}>
                {project.description}
              </p>

              <div className="mb-4">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs rounded-full"
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

              <div className="flex gap-3">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium px-4 py-2 rounded-lg transition-all"
                    style={{
                      backgroundColor:
                        index % 2 === 0 ? colors.primary : colors.secondary,
                      color: "white",
                    }}
                  >
                    View Project
                  </a>
                )}
                {project.sourceUrl && (
                  <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium px-4 py-2 rounded-lg transition-all"
                    style={{
                      backgroundColor: "transparent",
                      color:
                        index % 2 === 0 ? colors.primary : colors.secondary,
                      border: `1px solid ${
                        index % 2 === 0 ? colors.primary : colors.secondary
                      }`,
                    }}
                  >
                    Source Code
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile Layout - Carousel Style */}
      <div className="md:hidden max-w-6xl mx-auto">
        <div className="relative">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className={`transition-all duration-500 ${
                index === activeProjectIndex
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95 absolute inset-0"
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: index === activeProjectIndex ? 1 : 0 }}
            >
              <div className="rounded-xl overflow-hidden shadow-lg mb-4">
                <div className="relative aspect-video">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                  {project.featured && (
                    <div
                      className="absolute top-0 right-0 mt-3 mr-3 px-2 py-1 text-xs font-semibold rounded"
                      style={{ backgroundColor: colors.accent, color: "white" }}
                    >
                      Featured
                    </div>
                  )}
                </div>

                <div className="p-4">
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ color: colors.primary }}
                  >
                    {project.title}
                  </h3>

                  <p
                    className="text-sm mb-3"
                    style={{ color: `${colors.text}cc` }}
                  >
                    {project.description}
                  </p>

                  <div className="mb-3">
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 text-xs rounded-full"
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

                  <div className="flex gap-2">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-medium px-3 py-1.5 rounded-lg transition-all"
                        style={{
                          backgroundColor: colors.primary,
                          color: "white",
                        }}
                      >
                        View Project
                      </a>
                    )}
                    {project.sourceUrl && (
                      <a
                        href={project.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-medium px-3 py-1.5 rounded-lg transition-all"
                        style={{
                          backgroundColor: "transparent",
                          color: colors.primary,
                          border: `1px solid ${colors.primary}`,
                        }}
                      >
                        Source Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveProjectIndex(index)}
                className="w-2.5 h-2.5 rounded-full transition-all"
                style={{
                  backgroundColor:
                    index === activeProjectIndex
                      ? colors.primary
                      : `${colors.primary}40`,
                  transform:
                    index === activeProjectIndex ? "scale(1.2)" : "scale(1)",
                }}
                aria-label={`View project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
