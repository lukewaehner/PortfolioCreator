"use client";

import Image from "next/image";
import * as motion from "motion/react-client";
import content from "@/data/content.json";
import { useTheme } from "@/components/Themes/ThemeProvider";

export default function HeroSplit() {
  // Get hero content from content.json
  const { name, title, tagline, image, ctas } = content.hero;

  // Get theme from ThemeProvider context
  const { theme, isDarkMode } = useTheme();
  const colors = theme;

  return (
    <section
      className="min-h-screen grid grid-cols-1 md:grid-cols-2 items-center overflow-hidden shadow-xl rounded-xl sm:rounded-2xl theme-transition relative"
      style={{
        background: `linear-gradient(135deg, ${colors.background}f5, ${colors.background})`,
        color: colors.text,
      }}
    >
      {/* Divider line between the two sections - only visible on medium screens and up */}
      <div
        className="hidden md:block absolute h-[80%] w-px left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 theme-transition"
        style={{
          background: isDarkMode
            ? `linear-gradient(to bottom, ${colors.primary}00, ${colors.primary}40, ${colors.secondary}40, ${colors.primary}00)`
            : `linear-gradient(to bottom, ${colors.primary}00, ${colors.primary}20, ${colors.secondary}20, ${colors.primary}00)`,
        }}
      />

      {/* Left: Text block with modernized styling */}
      <motion.div
        className="px-4 sm:px-6 md:px-10 lg:px-16 py-8 sm:py-12 md:py-16 flex flex-col justify-center md:border-r md:border-opacity-0"
        style={{ borderColor: colors.text + "10" }}
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Subtle accent line */}
        <motion.div
          className="w-12 sm:w-16 h-1 mb-4 sm:mb-6 rounded-full theme-transition"
          style={{ backgroundColor: colors.accent }}
          initial={{ width: 0 }}
          animate={{ width: 64 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        />

        {/* Name with modern typography - different styling for dark/light */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-3 tracking-tight relative theme-transition"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {name}
          <span
            className="absolute -z-10 opacity-10 blur-md theme-transition"
            style={{
              content: name,
              left: "-0.1em",
              top: "-0.1em",
              color: colors.primary,
            }}
          >
            {name}
          </span>
        </motion.h1>

        {/* Title with accent color */}
        <motion.div
          className="flex items-center gap-2 mb-3 sm:mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div
            className="w-2 h-2 sm:w-3 sm:h-3 rounded-full theme-transition"
            style={{ backgroundColor: colors.secondary }}
          />
          <p
            className="text-lg sm:text-xl md:text-2xl font-medium theme-transition"
            style={{ color: colors.secondary }}
          >
            {title}
          </p>
        </motion.div>

        {/* Tagline with improved styling */}
        {tagline && (
          <motion.p
            className="text-sm sm:text-base md:text-lg max-w-md leading-relaxed theme-transition"
            style={{ color: `${colors.text}cc` }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {tagline}
          </motion.p>
        )}

        {/* CTAs with modern styling */}
        <motion.div
          className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {ctas?.map((cta, i) => {
            // Use accent for primary CTA, primary color for secondary CTA
            const buttonColor = cta.primary ? colors.accent : colors.primary;

            return (
              <motion.a
                key={i}
                href={cta.href}
                className="inline-flex items-center gap-1 sm:gap-2 px-4 sm:px-5 md:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all theme-transition"
                style={{
                  backgroundColor: cta.primary
                    ? buttonColor
                    : isDarkMode
                    ? `${buttonColor}15`
                    : colors.background,
                  border: `2px solid ${buttonColor}`,
                  color: cta.primary
                    ? isDarkMode
                      ? colors.background
                      : colors.text
                    : buttonColor,
                  boxShadow: cta.primary
                    ? `0 4px 12px ${buttonColor}40`
                    : `0 2px 6px rgba(0,0,0,0.05)`,
                }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: cta.primary
                    ? `0 6px 16px ${buttonColor}60`
                    : `0 4px 12px rgba(0,0,0,0.1)`,
                }}
                whileTap={{ scale: 0.97 }}
              >
                {cta.label}
                {cta.primary && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 h-3 sm:w-4 sm:h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14m-7-7l7 7-7 7" />
                  </svg>
                )}
              </motion.a>
            );
          })}
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-1/3 pointer-events-none opacity-20">
          <div
            className="absolute w-40 sm:w-64 h-40 sm:h-64 rounded-full blur-3xl -bottom-20 sm:-bottom-32 -left-20 sm:-left-32 theme-transition"
            style={{
              background: `radial-gradient(circle, ${colors.primary}, transparent 70%)`,
            }}
          />
        </div>
      </motion.div>

      {/* Right: Image block with modern treatment */}
      <motion.div
        className="relative flex justify-center items-center h-full px-4 sm:px-6 py-8 sm:py-12 md:py-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Background shape */}
        <div className="absolute inset-0 flex justify-center items-center">
          <motion.div
            className="w-[110%] h-[110%] rounded-full blur-xl opacity-10 theme-transition"
            style={{
              background: `radial-gradient(circle, ${colors.primary}, ${colors.secondary})`,
            }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <motion.div
            className="absolute w-full h-full rounded-full opacity-10 theme-transition"
            style={{
              background: `conic-gradient(from 90deg, ${colors.primary}, ${colors.secondary}, ${colors.accent}, ${colors.primary})`,
              filter: "blur(60px)",
            }}
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
            }}
          />
        </div>

        {/* Profile Image Container */}
        <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 z-10">
          {/* Rotating border effect */}
          <motion.div
            className="absolute -inset-2 sm:-inset-3 rounded-full opacity-80 theme-transition"
            style={{
              background: `conic-gradient(from 0deg, ${colors.primary}, ${colors.secondary}, ${colors.accent}, ${colors.primary})`,
            }}
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 10,
              ease: "linear",
              repeat: Infinity,
            }}
          />

          {/* Image container with border */}
          <motion.div
            className="relative w-full h-full rounded-full overflow-hidden p-1"
            initial={{ scale: 0.85 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="w-full h-full rounded-full overflow-hidden border-2 border-white">
              <Image
                src={image}
                alt={name}
                fill
                sizes="(max-width: 640px) 13rem, (max-width: 768px) 16rem, (max-width: 1024px) 18rem, 20rem"
                className="rounded-full object-cover"
                priority
              />
            </div>

            {/* Overlay gradient */}
            <div
              className="absolute inset-0 rounded-full opacity-20 theme-transition"
              style={{
                background: `linear-gradient(45deg, ${colors.primary}00, ${colors.primary})`,
              }}
            />
          </motion.div>
        </div>

        {/* Floating elements */}
        <motion.div
          className="absolute top-8 sm:top-16 right-8 sm:right-16 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 rounded-full theme-transition"
          style={{
            background: `linear-gradient(to right, ${colors.primary}, ${colors.secondary})`,
            opacity: 0.1,
          }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 5,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />

        <motion.div
          className="absolute bottom-8 sm:bottom-16 left-8 sm:left-16 w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 rounded-full theme-transition"
          style={{
            background: `linear-gradient(to right, ${colors.secondary}, ${colors.accent})`,
            opacity: 0.1,
          }}
          animate={{
            y: [0, 10, 0],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
            delay: 1,
          }}
        />
      </motion.div>
    </section>
  );
}
