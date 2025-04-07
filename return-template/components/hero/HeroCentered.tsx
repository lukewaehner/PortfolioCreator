import Image from "next/image";
import * as motion from "motion/react-client";
import content from "@/data/content.json";

export default function HeroCentered() {
  const { name, title, tagline, image, ctas } = content.hero;
  const { colors } = content.theme;

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center text-center px-4 md:px-8 py-16"
      style={{
        background: `linear-gradient(to bottom, ${colors.background}, ${colors.background}ee)`,
        color: colors.text,
      }}
    >
      {/* Profile Image with modern styling using theme colors */}
      <motion.div
        className="relative size-80 md:size-85  mb-8"
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
              layout="fill"
              objectFit="cover"
              className="rounded-full"
              priority
            />
          </div>
        </div>
      </motion.div>

      {/* Name with gradient text effect using theme colors */}
      <motion.h1
        className="text-4xl md:text-8xl font-bold mb-3 tracking-tight"
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

      {/* Title with subtle animation using secondary color */}
      <motion.div
        className="inline-block mb-4 px-4 py-1 rounded-full"
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
          className="text-lg md:text-2xl font-medium"
          style={{ color: colors.secondary }}
        >
          {title}
        </p>
      </motion.div>

      {/* Tagline with improved styling using text color */}
      {tagline && (
        <motion.p
          className="mt-2 mb-8 text-base md:text-lg max-w-xl mx-auto leading-relaxed"
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
        className="mt-6 flex flex-col sm:flex-row justify-center gap-4 w-full max-w-md mx-auto"
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
              className="px-8 py-3 rounded-full text-base font-medium transition-all w-full flex items-center justify-center gap-2"
              style={{
                backgroundColor: cta.primary
                  ? buttonColor
                  : "rgba(255, 255, 255, 0.03)",
                border: `2px solid ${
                  cta.primary ? "transparent" : buttonColor
                }`,
                color: cta.primary ? colors.text : buttonColor,
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
                  : "rgba(255, 255, 255, 0.07)",
              }}
              whileTap={{ scale: 0.97 }}
            >
              {cta.label}
              {cta.primary && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
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
          className="absolute top-16 left-16 w-64 h-64 rounded-full opacity-10"
          style={{
            background: `radial-gradient(circle, ${colors.primary}, transparent 70%)`,
          }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        <motion.div
          className="absolute bottom-16 right-16 w-96 h-96 rounded-full opacity-10"
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
