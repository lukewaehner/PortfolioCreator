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

export default function Skills() {
  const { colors } = content.theme;
  const skills: SkillsData = content.skills || { categories: [] };

  // Use categories from the provided JSON, or fall back to empty array
  const categories = skills.categories || [];

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

      {/* Skills Categories Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category, categoryIndex) => (
          <motion.div
            key={category.name}
            className="bg-white rounded-xl p-5 shadow-sm border"
            style={{
              borderColor: `${
                colors[
                  categoryIndex % 3 === 0
                    ? "primary"
                    : categoryIndex % 3 === 1
                    ? "secondary"
                    : "accent"
                ]
              }30`,
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 * categoryIndex }}
          >
            <h3
              className="text-lg font-semibold mb-3 pb-2 border-b"
              style={{
                color:
                  colors[
                    categoryIndex % 3 === 0
                      ? "primary"
                      : categoryIndex % 3 === 1
                      ? "secondary"
                      : "accent"
                  ],
                borderColor: `${
                  colors[
                    categoryIndex % 3 === 0
                      ? "primary"
                      : categoryIndex % 3 === 1
                      ? "secondary"
                      : "accent"
                  ]
                }20`,
              }}
            >
              {category.name}
            </h3>

            <div className="grid grid-cols-1 gap-2">
              {category.items
                .sort((a, b) => b.level - a.level)
                .map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between"
                  >
                    <span className="text-sm">{skill.name}</span>
                    <div className="w-24 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{
                          backgroundColor:
                            colors[
                              categoryIndex % 3 === 0
                                ? "primary"
                                : categoryIndex % 3 === 1
                                ? "secondary"
                                : "accent"
                            ],
                        }}
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.6, delay: 0.05 * skillIndex }}
                      />
                    </div>
                  </div>
                ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
