import * as motion from "motion/react-client";
import content from "@/data/content.json";

// Define types for skills data
interface SkillItem {
  name: string;
  level: number;
}

interface SkillCategory {
  name: string;
  items: SkillItem[];
}

interface SkillsData {
  categories?: SkillCategory[];
}

export default function SkillsAlternative() {
  const { colors } = content.theme;
  const skills: SkillsData = content.skills || { categories: [] };

  // Use categories from the provided JSON, or fall back to empty array
  const categories = skills.categories || [];

  // Helper function to get the right colors
  const getCategoryColor = (index: number) => {
    switch (index) {
      case 0:
        return colors.primary;
      case 1:
        return colors.secondary;
      case 2:
        return colors.accent;
      default:
        return index % 3 === 0
          ? colors.primary
          : index % 3 === 1
          ? colors.secondary
          : colors.accent;
    }
  };

  return (
    <section
      className="py-10 sm:py-12 px-4 sm:px-6 md:px-8 overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl shadow-md sm:shadow-lg md:shadow-xl"
      style={{
        background: `linear-gradient(135deg, ${colors.background}f5, ${colors.background})`,
        color: colors.text,
      }}
    >
      {/* Header with accent line */}
      <div className="max-w-6xl mx-auto mb-8">
        <motion.div
          className="w-12 h-1 mb-3"
          style={{ backgroundColor: colors.accent }}
          initial={{ width: 0 }}
          animate={{ width: 48 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />

        <motion.h2
          className="text-2xl sm:text-3xl font-bold mb-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills & <span style={{ color: colors.primary }}>Expertise</span>
        </motion.h2>
      </div>

      {/* Skills Lists */}
      <div className="max-w-6xl mx-auto">
        {categories.map((category, categoryIndex) => {
          const categoryColor = getCategoryColor(categoryIndex);

          return (
            <motion.div
              key={category.name}
              className="mb-8 last:mb-0"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * categoryIndex }}
            >
              <div className="flex items-center mb-3">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mr-3 text-white font-bold text-lg"
                  style={{ backgroundColor: categoryColor }}
                >
                  {category.name.charAt(0)}
                </div>
                <h3
                  className="text-xl font-semibold"
                  style={{ color: categoryColor }}
                >
                  {category.name}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2 ml-1">
                {category.items
                  .sort((a, b) => b.level - a.level)
                  .map((skill, skillIndex) => {
                    // Determine if this is a high-level skill (for potential styling differences)
                    const isHighLevel = skill.level >= 85;

                    return (
                      <motion.div
                        key={skill.name}
                        className="px-4 py-2 rounded-full text-sm border"
                        style={{
                          backgroundColor: isHighLevel
                            ? `${categoryColor}15`
                            : "transparent",
                          color: colors.text,
                          borderColor: `${categoryColor}30`,
                        }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.3,
                          delay: 0.03 * skillIndex + 0.1 * categoryIndex,
                        }}
                        whileHover={{
                          scale: 1.05,
                          backgroundColor: `${categoryColor}20`,
                        }}
                      >
                        {skill.name}
                      </motion.div>
                    );
                  })}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
