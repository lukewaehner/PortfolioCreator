import Image from "next/image";
import * as motion from "motion/react-client";
import content from "@/data/content.json";

export default function HeroBackground() {
  const { name, title, tagline, image, ctas } = content.hero;
  const { colors } = content.theme;

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={image}
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={90}
          priority
        />
        {/* Modern gradient overlay using theme colors */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${colors.primary}99 0%, ${colors.secondary}99 100%)`,
          }}
        ></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-8 py-16 text-center">
        {/* Glass morphism effect container */}
        <motion.div
          className="backdrop-blur-md p-8 md:p-12 rounded-2xl border shadow-2xl"
          style={{
            backgroundColor: `${colors.background}30`,
            borderColor: `${colors.background}30`,
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Hero heading with staggered animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight"
              style={{ color: colors.background }}
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {name}
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl font-medium mb-6"
              style={{ color: `${colors.background}E6` }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            >
              {title}
            </motion.p>

            {tagline && (
              <motion.p
                className="text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed"
                style={{ color: `${colors.background}CC` }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
              >
                {tagline}
              </motion.p>
            )}

            {/* CTA Buttons with improved styling using accent color */}
            <motion.div
              className="flex flex-col sm:flex-row justify-center items-center gap-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
            >
              {ctas?.map((cta, i) => (
                <motion.a
                  key={i}
                  href={cta.href}
                  className="px-8 py-3 rounded-full text-base font-medium transition-all w-full sm:w-auto"
                  style={{
                    backgroundColor: cta.primary
                      ? colors.accent
                      : "transparent",
                    border: `2px solid ${
                      cta.primary ? colors.accent : colors.background
                    }`,
                    color: cta.primary ? colors.text : colors.background,
                    boxShadow: cta.primary
                      ? `0 4px 14px ${colors.accent}50`
                      : "none",
                  }}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: cta.primary
                      ? `0 6px 20px ${colors.accent}80`
                      : `0 6px 20px ${colors.background}40`,
                  }}
                  whileTap={{ scale: 0.97 }}
                >
                  {cta.label}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Decorative elements using theme colors */}
        <motion.div
          className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full"
          style={{
            background: `radial-gradient(circle, ${colors.accent}40 0%, transparent 70%)`,
          }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
        />

        <motion.div
          className="absolute -top-8 -left-8 w-40 h-40 rounded-full"
          style={{
            background: `radial-gradient(circle, ${colors.secondary}30 0%, transparent 70%)`,
          }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
        />
      </div>
    </section>
  );
}
