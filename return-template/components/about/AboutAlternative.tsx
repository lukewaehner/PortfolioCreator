"use client";

import { useRef } from "react";
import * as motion from "motion/react-client";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import content from "@/data/content.json";
import { useInView, useScroll } from "motion/react";
import { useTheme } from "@/components/Themes/ThemeProvider";

/**
 * TypeScript interfaces for the About page data structure
 */
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

/**
 * About Component
 *
 * This component renders the About section of the portfolio with:
 * - Header with summary info and key stats
 * - Tabbed layout for personal story, professional journey and education
 * - Full-width core strengths section at the bottom
 * - Dark mode support with smooth transitions
 * - Enhanced reveal animations when elements come into view
 */
export default function AboutAlternative() {
  // Extract about section data from content
  const about: About = content.about || {};

  // Get theme from ThemeProvider context
  const { theme, isDarkMode } = useTheme();
  const colors = theme;

  // Refs for scroll animations
  const headerRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const strengthsRef = useRef<HTMLDivElement>(null);

  // Check if elements are in view
  const headerInView = useInView(headerRef, { once: true, amount: 0.3 });
  const tabsInView = useInView(tabsRef, { once: true, amount: 0.2 });
  const strengthsInView = useInView(strengthsRef, { once: true, amount: 0.2 });

  // Get scroll progress (might be used for other effects)
  const { scrollYProgress } = useScroll();

  // Enhanced animation variants
  const journeyItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  const educationItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  const strengthItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * i,
        duration: 0.6,
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    }),
  };

  return (
    <section
      className="py-20 md:py-32 px-4 md:px-8 overflow-hidden rounded-xl relative theme-transition"
      style={{
        backgroundColor: colors.background,
        color: colors.text,
        backgroundImage: `
          radial-gradient(circle at 20% 30%, ${colors.primary}05 0%, transparent 20%),
          radial-gradient(circle at 80% 70%, ${colors.secondary}05 0%, transparent 20%)
        `,
      }}
    >
      {/* Decorative elements */}
      <div
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r theme-transition"
        style={{
          backgroundImage: `linear-gradient(to right, ${colors.primary}, ${colors.secondary}, ${colors.accent})`,
        }}
      />

      <div className="max-w-7xl mx-auto">
        {/*
         * Header Section - Horizontal layout with intro and summary
         * Includes title, accent line, summary text and statistics
         */}
        <motion.div
          ref={headerRef}
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-col md:flex-row md:items-start gap-12">
            {/* Title and stats */}
            <motion.div
              className="md:w-1/3"
              initial={{ opacity: 0, x: -30 }}
              animate={headerInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2
                className="text-5xl md:text-6xl font-bold mb-4 tracking-tight theme-transition"
                style={{ color: colors.text }}
              >
                About{" "}
                <span
                  className="theme-transition"
                  style={{ color: colors.primary }}
                >
                  Me
                </span>
              </h2>
              <div
                className="w-24 h-1.5 rounded-full mb-8 theme-transition"
                style={{
                  background: `linear-gradient(to right, ${colors.primary}, ${colors.accent})`,
                }}
              />
              <div className="flex gap-6 mt-8">
                {/* Experience statistic */}
                <motion.div
                  className="rounded-xl p-4 text-center w-28 backdrop-blur-sm border theme-transition"
                  style={{
                    background: `${colors.primary}10`,
                    borderColor: `${colors.primary}30`,
                    boxShadow: `0 8px 32px ${colors.primary}10`,
                  }}
                  whileHover={{
                    y: -5,
                    boxShadow: `0 15px 30px ${colors.primary}20`,
                    background: `${colors.primary}15`,
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <p
                    className="text-3xl font-bold theme-transition"
                    style={{ color: colors.text }}
                  >
                    {about.experience}
                  </p>
                  <p
                    className="text-xs font-medium mt-1 theme-transition"
                    style={{ color: colors.primary }}
                  >
                    Years Exp
                  </p>
                </motion.div>

                {/* Projects statistic */}
                <motion.div
                  className="rounded-xl p-4 text-center w-28 backdrop-blur-sm border theme-transition"
                  style={{
                    background: `${colors.secondary}10`,
                    borderColor: `${colors.secondary}30`,
                    boxShadow: `0 8px 32px ${colors.secondary}10`,
                  }}
                  whileHover={{
                    y: -5,
                    boxShadow: `0 15px 30px ${colors.secondary}20`,
                    background: `${colors.secondary}15`,
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <p
                    className="text-3xl font-bold theme-transition"
                    style={{ color: colors.text }}
                  >
                    {about.projects}
                  </p>
                  <p
                    className="text-xs font-medium mt-1 theme-transition"
                    style={{ color: colors.secondary }}
                  >
                    Projects
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Summary text and resume button */}
            <motion.div
              className="md:w-2/3 md:pl-12 md:border-l space-y-6 theme-transition"
              style={{ borderColor: colors.border || `${colors.text}20` }}
              initial={{ opacity: 0, x: 30 }}
              animate={headerInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p
                className="text-xl leading-relaxed font-light theme-transition"
                style={{ color: colors.textSecondary || `${colors.text}99` }}
              >
                {about.summary}
              </p>

              {/* Conditional resume button */}
              {about.resumeUrl && (
                <motion.a
                  href={about.resumeUrl}
                  className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium theme-transition"
                  style={{
                    background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                    color: "#fff",
                    boxShadow: `0 10px 25px -5px ${colors.primary}40`,
                  }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: `0 15px 30px -5px ${colors.primary}60`,
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  View Resume
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M7 17l9.2-9.2M17 17V7H7" />
                  </svg>
                </motion.a>
              )}
            </motion.div>
          </div>
        </motion.div>

        {/*
         * Main Content - Tabbed layout for better mobile experience
         * Displays personal story, professional journey, and education
         */}
        <motion.div
          ref={tabsRef}
          className="mb-24"
          initial={{ opacity: 0, y: 50 }}
          animate={tabsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <Tabs
            defaultValue="story"
            className="w-full p-3 rounded-xl border-1"
            style={{
              background: `${colors.surface}10`,
              borderColor: `${colors.primary}30`,
              boxShadow: `0 8px 32px ${colors.primary}10`,
            }}
          >
            <TabsList className="grid w-full grid-cols-3 mb-12 gap-2">
              <TabsTrigger
                value="story"
                className="text-base px-4 py-3 font-medium border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:bg-primary/10 data-[state=active]:font-semibold transition-all theme-transition"
                style={{
                  background: colors.primary,
                  boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
                }}
              >
                My Story
              </TabsTrigger>
              <TabsTrigger
                value="journey"
                className="text-base px-4 py-3 font-medium border-b-2 border-transparent data-[state=active]:border-secondary data-[state=active]:text-secondary data-[state=active]:bg-secondary/10 data-[state=active]:font-semibold transition-all theme-transition"
                style={{
                  background: colors.primary,
                  boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
                }}
              >
                Professional Journey
              </TabsTrigger>
              <TabsTrigger
                value="education"
                className="text-base px-4 py-3 font-medium border-b-2 border-transparent data-[state=active]:border-accent data-[state=active]:text-accent data-[state=active]:bg-accent/10 data-[state=active]:font-semibold transition-all theme-transition"
                style={{
                  background: colors.primary,
                  boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
                }}
              >
                Education
              </TabsTrigger>
            </TabsList>

            {/* My Story Tab */}
            <TabsContent value="story" className="mt-0">
              <Card className="border-0 shadow-none bg-transparent">
                <CardContent className="p-0 space-y-8">
                  {/* Bio paragraphs - handles both string and array formats */}
                  <div className="space-y-6 text-lg">
                    {typeof about.bio === "string" ? (
                      <p
                        className="theme-transition"
                        style={{
                          color: colors.textSecondary || `${colors.text}99`,
                        }}
                      >
                        {about.bio}
                      </p>
                    ) : Array.isArray(about.bio) ? (
                      about.bio.map((paragraph: string, i: number) => (
                        <p
                          key={i}
                          className="theme-transition"
                          style={{
                            color: colors.textSecondary || `${colors.text}99`,
                          }}
                        >
                          {paragraph}
                        </p>
                      ))
                    ) : null}
                  </div>

                  {/* Beyond work section */}
                  <div
                    className="pt-6 border-t theme-transition"
                    style={{ borderColor: colors.border || `${colors.text}20` }}
                  >
                    <h3
                      className="text-2xl font-semibold mb-4 theme-transition"
                      style={{ color: colors.accent }}
                    >
                      Beyond Work
                    </h3>
                    <p
                      className="text-lg theme-transition"
                      style={{
                        color: colors.textSecondary || `${colors.text}99`,
                      }}
                    >
                      {about.interests}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Professional Journey Tab */}
            <TabsContent value="journey" className="mt-0">
              <Card className="border-0 shadow-none bg-transparent">
                <CardContent className="p-0">
                  {/* Journey timeline cards */}
                  <div className="space-y-6">
                    {about.journey?.map((milestone, i) => (
                      <motion.div
                        key={i}
                        custom={i}
                        variants={journeyItemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="rounded-xl p-6 backdrop-blur-sm transition-all relative overflow-hidden border theme-transition"
                        style={{
                          background: `${colors.secondary}08`,
                          borderColor: `${colors.secondary}30`,
                          boxShadow: `0 4px 20px ${colors.secondary}10`,
                        }}
                        whileHover={{
                          backgroundColor: `${colors.secondary}12`,
                          boxShadow: `0 8px 30px ${colors.secondary}15`,
                          x: 5,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* Card with year, title and company */}
                        <div className="flex flex-col md:flex-row md:items-center gap-4">
                          {/* Year badge */}
                          <div
                            className="px-4 py-2 rounded-full text-sm font-semibold inline-flex theme-transition"
                            style={{
                              background: `${colors.secondary}15`,
                              color: colors.secondary,
                            }}
                          >
                            {milestone.year}
                          </div>

                          {/* Job details */}
                          <div className="flex-1">
                            <h4
                              className="text-xl font-medium theme-transition"
                              style={{ color: colors.text }}
                            >
                              {milestone.title}
                            </h4>
                            <p
                              className="text-sm mt-1 theme-transition"
                              style={{
                                color:
                                  colors.textSecondary || `${colors.text}99`,
                              }}
                            >
                              {milestone.company}
                            </p>
                          </div>
                        </div>

                        {/* Decorative element */}
                        <div
                          className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full opacity-10 theme-transition"
                          style={{ background: colors.secondary }}
                        />
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Education Tab */}
            <TabsContent value="education" className="mt-0">
              <Card className="border-0 shadow-none bg-transparent">
                <CardContent className="p-0">
                  {/* Education Cards */}
                  <div className="space-y-6">
                    {about.education?.map((edu, i) => (
                      <motion.div
                        key={i}
                        custom={i}
                        variants={educationItemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="rounded-xl p-6 backdrop-blur-sm transition-all relative overflow-hidden border theme-transition"
                        style={{
                          background: `${colors.accent}08`,
                          borderColor: `${colors.accent}30`,
                          boxShadow: `0 4px 20px ${colors.accent}10`,
                        }}
                        whileHover={{
                          backgroundColor: `${colors.accent}12`,
                          boxShadow: `0 8px 30px ${colors.accent}15`,
                          x: 5,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div>
                            <h4
                              className="font-semibold text-xl theme-transition"
                              style={{ color: colors.text }}
                            >
                              {edu.title}
                            </h4>
                            <p
                              className="text-base mt-1 theme-transition"
                              style={{
                                color:
                                  colors.textSecondary || `${colors.text}99`,
                              }}
                            >
                              {edu.institution}
                            </p>
                          </div>
                          <Badge
                            className="text-sm px-4 py-1.5 rounded-full self-start md:self-auto theme-transition"
                            style={{
                              backgroundColor: `${colors.accent}15`,
                              color: colors.accent,
                            }}
                          >
                            {edu.year}
                          </Badge>
                        </div>

                        {/* Decorative element */}
                        <div
                          className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full opacity-10 theme-transition"
                          style={{ background: colors.accent }}
                        />
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>

        {/*
         * Core Strengths Section - Full Width
         * Displayed as a grid of cards at the bottom of the page
         */}
        <motion.div
          ref={strengthsRef}
          className="pt-12 border-t theme-transition"
          style={{ borderColor: colors.border || `${colors.text}20` }}
          initial={{ opacity: 0, y: 50 }}
          animate={strengthsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Section heading */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={strengthsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3
              className="text-3xl font-bold theme-transition"
              style={{ color: colors.primary }}
            >
              Core Strengths
            </h3>
            <p
              className="text-lg mt-3 max-w-2xl mx-auto theme-transition"
              style={{ color: colors.textSecondary || `${colors.text}99` }}
            >
              Key skills and capabilities that define my professional expertise
            </p>
          </motion.div>

          {/* Responsive grid layout for strengths */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {about.strengths?.map((strength, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={strengthItemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="px-4 py-6 rounded-xl flex flex-col items-center text-center backdrop-blur-sm border theme-transition"
                style={{
                  background: `${colors.primary}08`,
                  borderColor: `${colors.primary}20`,
                  boxShadow: `0 4px 20px ${colors.primary}10`,
                }}
                whileHover={{
                  y: -8,
                  backgroundColor: `${colors.primary}15`,
                  boxShadow: `0 15px 30px ${colors.primary}20`,
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Numbered icon */}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-4 theme-transition"
                  style={{
                    background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                    boxShadow: `0 8px 20px ${colors.primary}30`,
                  }}
                >
                  <span className="text-base font-medium text-white">
                    {i + 1}
                  </span>
                </div>
                {/* Strength text */}
                <span
                  className="text-base font-medium theme-transition"
                  style={{ color: colors.text }}
                >
                  {strength}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
