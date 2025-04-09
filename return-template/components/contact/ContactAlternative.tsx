"use client";
import { useState } from "react";
import * as motion from "motion/react-client";
import content from "@/data/content.json";

export default function ContactAlternative() {
  const { colors } = content.theme;
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (!response.ok) throw new Error("Submission failed");

      setFormState({ name: "", email: "", message: "" });
      setStatus("success");

      // Reset status after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section
      className="min-h-[40vh] bg-white rounded-lg sm:rounded-xl md:rounded-2xl shadow-md sm:shadow-lg md:shadow-xl overflow-hidden"
      style={{ color: colors.text }}
    >
      {/* Top header bar */}
      <div
        className="h-2 sm:h-2.5 md:h-3"
        style={{
          background: `linear-gradient(to right, ${colors.primary}, ${colors.secondary}, ${colors.accent})`,
        }}
      />

      <div className="p-4 sm:p-6 md:p-8 lg:p-12">
        {/* Two-column header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 sm:mb-8 md:mb-12">
          <div>
            <motion.h2
              className="text-xl sm:text-2xl md:text-3xl font-bold"
              style={{ color: colors.primary }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Get in Touch
            </motion.h2>
            <motion.p
              className="text-gray-600 mt-1 sm:mt-2 text-xs sm:text-sm md:text-base"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Have a question? Send me a message.
            </motion.p>
          </div>

          {/* Contact info with icons */}
          <motion.div
            className="flex flex-col gap-1 mt-3 sm:mt-4 md:mt-0"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {content.contact && (
              <>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={colors.secondary}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <a
                    href={`mailto:${content.contact.email}`}
                    className="text-xs sm:text-sm hover:underline truncate max-w-[150px] sm:max-w-[200px] md:max-w-none"
                    style={{ color: colors.text }}
                  >
                    {content.contact.email}
                  </a>
                </div>

                {content.contact.phone && (
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={colors.secondary}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <a
                      href={`tel:${content.contact.phone}`}
                      className="text-xs sm:text-sm hover:underline"
                      style={{ color: colors.text }}
                    >
                      {content.contact.phone}
                    </a>
                  </div>
                )}
              </>
            )}
          </motion.div>
        </div>

        {/* Form and card grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-5 md:gap-6">
          {/* Form takes 3/5 of the space */}
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <form className="space-y-3 sm:space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs sm:text-sm font-medium mb-1"
                    style={{ color: colors.primary }}
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-1.5 sm:py-2 rounded-md sm:rounded-lg border border-gray-200 focus:outline-none focus:ring-2 transition-all duration-200 text-xs sm:text-sm"
                    style={{
                      backgroundColor: "#F9FAFB",
                    }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs sm:text-sm font-medium mb-1"
                    style={{ color: colors.primary }}
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-1.5 sm:py-2 rounded-md sm:rounded-lg border border-gray-200 focus:outline-none focus:ring-2 transition-all duration-200 text-xs sm:text-sm"
                    style={{
                      backgroundColor: "#F9FAFB",
                    }}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs sm:text-sm font-medium mb-1"
                  style={{ color: colors.primary }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={formState.message}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-1.5 sm:py-2 rounded-md sm:rounded-lg border border-gray-200 focus:outline-none focus:ring-2 transition-all duration-200 text-xs sm:text-sm"
                  style={{
                    backgroundColor: "#F9FAFB",
                  }}
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === "submitting"}
                className="px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 md:py-2.5 rounded-md sm:rounded-lg font-medium transition-all duration-200 flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm"
                style={{
                  backgroundColor: colors.accent,
                  color: "#ffffff",
                  boxShadow: `0 2px 8px ${colors.accent}50`,
                }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: `0 4px 12px ${colors.accent}60`,
                }}
                whileTap={{ scale: 0.98 }}
              >
                {status === "submitting" && (
                  <svg
                    className="animate-spin h-3 w-3 sm:h-4 sm:w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                )}
                {status === "submitting" ? "Sending..." : "Send Message"}
              </motion.button>
            </form>

            {/* Status messages */}
            {status === "success" && (
              <motion.div
                className="mt-3 sm:mt-4 p-2 sm:p-3 rounded-md sm:rounded-lg bg-green-50 border border-green-100 text-green-700 flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 sm:h-5 sm:w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Message sent successfully!</span>
              </motion.div>
            )}

            {status === "error" && (
              <motion.div
                className="mt-3 sm:mt-4 p-2 sm:p-3 rounded-md sm:rounded-lg bg-red-50 border border-red-100 text-red-700 flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 sm:h-5 sm:w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Something went wrong. Please try again.</span>
              </motion.div>
            )}
          </motion.div>

          {/* Card on the right 2/5 */}
          <motion.div
            className="md:col-span-2 rounded-md sm:rounded-lg md:rounded-xl p-4 sm:p-5 md:p-6 flex flex-col justify-between"
            style={{
              background: `linear-gradient(135deg, ${colors.primary}11, ${colors.secondary}11)`,
              border: `1px solid ${colors.primary}20`,
            }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div>
              <div
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mb-3 sm:mb-4"
                style={{ backgroundColor: `${colors.primary}15` }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={colors.primary}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                </svg>
              </div>
              <h3
                className="text-base sm:text-lg font-semibold mb-1.5 sm:mb-2"
                style={{ color: colors.primary }}
              >
                Fast Response
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-5 md:mb-6">
                I typically respond to all inquiries within 24 hours. Your
                message is important to me.
              </p>
            </div>

            {/* Skills tags */}
            {content.skills && content.skills.categories
              ? content.skills.categories
                  .flatMap((category) =>
                    category.items.slice(0, 2).map((skill, i) => (
                      <span
                        key={`${category.name}-${i}`}
                        className="text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full"
                        style={{
                          backgroundColor: `${colors.primary}10`,
                          color: colors.text,
                          border: `1px solid ${colors.primary}20`,
                        }}
                      >
                        {skill.name}
                      </span>
                    ))
                  )
                  .slice(0, 5)
              : null}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
