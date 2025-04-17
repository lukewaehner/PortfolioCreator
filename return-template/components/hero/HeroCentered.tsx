"use client";

import Image from "next/image";
import * as motion from "motion/react-client";
import content from "@/data/content.json";
import { useTheme } from "@/components/Themes/ThemeProvider";

export default function HeroCentered() {
  const { name, title, tagline, image, ctas } = content.hero;

  // Get theme from ThemeProvider context
  const { theme, isDarkMode } = useTheme();
  const colors = theme;

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center text-center px-4 md:px-8 py-10 sm:py-16 rounded-2xl shadow-xl theme-transition"
      style={{
        background: `linear-gradient(to bottom, ${colors.background}, ${colors.background}ee)`,
        color: colors.text,
      }}
    >
      {/* Profile Image with modern styling using theme colors */}
      <motion.div
        className="relative w-40 h-40 sm:w-64 sm:h-64 md:w-80 md:h-80 mb-4 sm:mb-6 md:mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div
          className="absolute inset-0 rounded-full opacity-30 blur-xl"
          style={{
            background: `radial-gradient(circle, ${colors.secondary}, ${colors.primary})`,
          }}
        />
        <div
          className="absolute -inset-1 rounded-full opacity-70 blur-md animate-spin-slow"
          style={{
            background: `linear-gradient(to right, ${colors.primary}, ${colors.secondary}, ${colors.accent})`,
            animationDuration: "15s",
            animationTimingFunction: "linear",
          }}
        />
        <div
          className="relative w-full h-full rounded-full p-1 shadow-xl"
          style={{
            background: `linear-gradient(to right, ${colors.primary}, ${colors.secondary})`,
          }}
        >
          <div className="w-full h-full rounded-full overflow-hidden border-2 border-white">
            <Image
              src={image}
              alt={`${name}'s profile picture`}
              fill
              sizes="(max-width: 640px) 10rem, (max-width: 768px) 16rem, 20rem"
              className="rounded-full object-cover"
              priority
            />
          </div>
        </div>
      </motion.div>

      {/* Optional gradient bar - only show in light mode */}
      <motion.div
        className="w-full h-0.5 sm:h-1 md:h-2 rounded-lg mb-8 sm:mb-10 md:mb-12 mt-2"
        style={{
          background: `linear-gradient(to right, ${colors.primary}, ${colors.secondary})`,
          maxWidth: "250px",
          margin: "0 auto",
        }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      />

      {/* Name with completely different approaches between light and dark mode */}
      {isDarkMode ? (
        // Dark mode: Plain text with glow effect
        <motion.h1
          className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold mb-2 sm:mb-3 tracking-tight px-2"
          style={{
            color: colors.text,
            textShadow: `0 0 15px ${colors.primary}60, 0 0 30px ${colors.secondary}40`,
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          {name}
        </motion.h1>
      ) : (
        // Light mode: Gradient text
        <motion.h1
          className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold mb-2 sm:mb-3 tracking-tight px-2"
          style={{
            background: `linear-gradient(to right, ${colors.primary}, ${colors.secondary})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          {name}
        </motion.h1>
      )}

      {/* Title with subtle animation using secondary color */}
      <motion.div
        className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1 rounded-full"
        style={{
          backgroundColor: `${colors.secondary}15`,
          backdropFilter: "blur(4px)",
          border: `1px solid ${colors.secondary}30`,
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
      >
        <p
          className="text-base sm:text-lg md:text-2xl font-medium"
          style={{ color: colors.secondary }}
        >
          {title}
        </p>
      </motion.div>

      {/* Tagline with improved styling using text color */}
      {tagline && (
        <motion.p
          className="mt-2 mb-6 sm:mb-8 text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed px-2"
          style={{ color: `${colors.text}cc` }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
        >
          {tagline}
        </motion.p>
      )}

      {/* Call-to-Actions with modern design using accent and primary colors */}
      <motion.div
        className="mt-4 sm:mt-6 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 w-full max-w-xs sm:max-w-md mx-auto px-4 sm:px-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
      >
        {ctas?.map((cta, i) => {
          // Use accent color for primary CTA, primary color for secondary CTA
          const buttonColor = cta.primary ? colors.accent : colors.primary;

          return (
            <motion.a
              key={i}
              href={cta.href}
              className="px-5 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all w-full flex items-center justify-center gap-2"
              style={{
                backgroundColor: cta.primary
                  ? buttonColor
                  : isDarkMode
                  ? `${buttonColor}15`
                  : "rgba(255, 255, 255, 0.03)",
                border: `2px solid ${
                  cta.primary ? "transparent" : buttonColor
                }`,
                color: cta.primary
                  ? isDarkMode
                    ? colors.background
                    : colors.text
                  : buttonColor,
                boxShadow: cta.primary
                  ? `0 10px 20px -10px ${buttonColor}80`
                  : "0 4px 6px rgba(0, 0, 0, 0.05)",
                backdropFilter: !cta.primary ? "blur(5px)" : "none",
              }}
              whileHover={{
                scale: 1.03,
                boxShadow: cta.primary
                  ? `0 14px 28px -10px ${buttonColor}90`
                  : "0 10px 25px rgba(0, 0, 0, 0.1)",
                backgroundColor: cta.primary
                  ? buttonColor
                  : isDarkMode
                  ? `${buttonColor}25`
                  : "rgba(255, 255, 255, 0.07)",
              }}
              whileTap={{ scale: 0.97 }}
            >
              {cta.label}
              {cta.primary && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 sm:w-5 sm:h-5"
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

      {/* Decorative elements using theme colors */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-8 sm:top-16 left-4 sm:left-16 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 rounded-full opacity-10"
          style={{
            background: `radial-gradient(circle, ${colors.primary}, transparent 70%)`,
          }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        <motion.div
          className="absolute bottom-8 sm:bottom-16 right-4 sm:right-16 w-40 sm:w-64 md:w-96 h-40 sm:h-64 md:h-96 rounded-full opacity-10"
          style={{
            background: `radial-gradient(circle, ${colors.accent}, transparent 70%)`,
          }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
        />
      </div>
    </section>
  );
}
