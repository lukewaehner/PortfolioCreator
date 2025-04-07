import Image from "next/image";
import * as motion from "motion/react-client";
import content from "@/data/content.json";

export default function HeroSplit() {
  const {
    hero,
    theme: { colors },
  } = content;
  const { name, title, tagline, image, ctas } = hero;

  return (
    <section
      className="min-h-screen grid grid-cols-1 md:grid-cols-2 items-center gap-8 overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${colors.background}f5, ${colors.background})`,
        color: colors.text,
      }}
    >
      {/* Left: Text block with modernized styling */}
      <motion.div
        className="px-6 md:px-16 py-16 flex flex-col justify-center"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Subtle accent line */}
        <motion.div
          className="w-16 h-1 mb-6 rounded-full"
          style={{ backgroundColor: colors.accent }}
          initial={{ width: 0 }}
          animate={{ width: 64 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        />

        {/* Name with modern typography */}
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-3 tracking-tight relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {name}
          <span
            className="absolute -z-10 opacity-10 blur-md"
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
          className="flex items-center gap-2 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: colors.secondary }}
          />
          <p
            className="text-xl md:text-2xl font-medium"
            style={{ color: colors.secondary }}
          >
            {title}
          </p>
        </motion.div>

        {/* Tagline with improved styling */}
        {tagline && (
          <motion.p
            className="text-base md:text-lg max-w-md leading-relaxed"
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
          className="mt-8 flex flex-wrap gap-4"
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
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all"
                style={{
                  backgroundColor: cta.primary
                    ? buttonColor
                    : `${colors.background}`,
                  border: `2px solid ${buttonColor}`,
                  color: cta.primary ? colors.text : buttonColor,
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
                    className="w-4 h-4"
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
            className="absolute w-64 h-64 rounded-full blur-3xl -bottom-32 -left-32"
            style={{
              background: `radial-gradient(circle, ${colors.primary}, transparent 70%)`,
            }}
          />
        </div>
      </motion.div>

      {/* Right: Image block with modern treatment */}
      <motion.div
        className="relative flex justify-center items-center h-full px-6 py-16 md:py-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Background shape */}
        <div className="absolute inset-0 flex justify-center items-center">
          <motion.div
            className="w-[110%] h-[110%] rounded-full blur-xl opacity-10"
            style={{
              background: `radial-gradient(circle, ${colors.primary}, ${colors.secondary})`,
            }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <motion.div
            className="absolute w-full h-full rounded-full opacity-10"
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
        <div className="relative w-64 h-64 md:w-80 md:h-80 z-10">
          {/* Rotating border effect */}
          <motion.div
            className="absolute -inset-3 rounded-full opacity-80"
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
                layout="fill"
                objectFit="cover"
                className="rounded-full"
                priority
              />
            </div>

            {/* Overlay gradient */}
            <div
              className="absolute inset-0 rounded-full opacity-20"
              style={{
                background: `linear-gradient(45deg, ${colors.primary}00, ${colors.primary})`,
              }}
            />
          </motion.div>
        </div>

        {/* Floating elements */}
        <motion.div
          className="absolute top-16 right-16 w-20 h-20 rounded-full"
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
          className="absolute bottom-16 left-16 w-12 h-12 rounded-full"
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
