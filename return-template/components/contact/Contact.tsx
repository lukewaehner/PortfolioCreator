"use client";
import { useState } from "react";
import * as motion from "motion/react-client";
import content from "@/data/content.json";

export default function Contact() {
  const { colors } = content.theme;
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [focused, setFocused] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleFocus = (name: string) => setFocused(name);
  const handleBlur = () => setFocused(null);

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
      className="h-[45vh] flex flex-col items-center justify-center bg-white rounded-2xl shadow-xl overflow-hidden"
      style={{
        color: colors.text,
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left Side - Contact Info */}
        <div
          className="p-8 md:p-12 lg:p-16 flex flex-col justify-between"
          style={{
            background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
            color: "white",
            minHeight: "500px",
          }}
        >
          <div>
            <motion.h2
              className="text-3xl font-bold mb-6"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Get in Touch
            </motion.h2>

            <motion.p
              className="text-white/90 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Have a question or want to work together? Send me a message and
              I&apos;ll get back to you as soon as possible.
            </motion.p>
          </div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {content.contact && (
              <>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
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
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <p className="text-white/90">{content.contact.email}</p>
                </div>

                {content.contact.phone && (
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
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
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <p className="text-white/90">{content.contact.phone}</p>
                  </div>
                )}
              </>
            )}
          </motion.div>
        </div>

        {/* Right Side - Form */}
        <div className="p-8 md:p-12 lg:p-16" style={{ minHeight: "500px" }}>
          <motion.h3
            className="text-2xl font-semibold mb-8"
            style={{ color: colors.primary }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Send a Message
          </motion.h3>

          <motion.form
            className="space-y-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
          >
            <div className="relative">
              <input
                name="name"
                value={formState.name}
                onChange={handleChange}
                onFocus={() => handleFocus("name")}
                onBlur={handleBlur}
                required
                className="w-full px-4 py-3 rounded-lg border bg-gray-50 transition-all duration-300 focus:outline-none focus:ring-2"
                style={{
                  borderColor:
                    focused === "name"
                      ? colors.secondary
                      : "rgb(229, 231, 235)",
                }}
              />
              <label
                className={`absolute transition-all duration-200 pointer-events-none ${
                  formState.name || focused === "name"
                    ? "-top-2.5 left-3 text-xs px-1 bg-white"
                    : "top-3 left-4 text-gray-500"
                }`}
                style={{
                  color:
                    focused === "name"
                      ? colors.secondary
                      : formState.name
                      ? colors.text
                      : undefined,
                }}
              >
                Name
              </label>
            </div>

            <div className="relative">
              <input
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
                onFocus={() => handleFocus("email")}
                onBlur={handleBlur}
                required
                className="w-full px-4 py-3 rounded-lg border bg-gray-50 transition-all duration-300 focus:outline-none focus:ring-2"
                style={{
                  borderColor:
                    focused === "email"
                      ? colors.secondary
                      : "rgb(229, 231, 235)",
                }}
              />
              <label
                className={`absolute transition-all duration-200 pointer-events-none ${
                  formState.email || focused === "email"
                    ? "-top-2.5 left-3 text-xs px-1 bg-white"
                    : "top-3 left-4 text-gray-500"
                }`}
                style={{
                  color:
                    focused === "email"
                      ? colors.secondary
                      : formState.email
                      ? colors.text
                      : undefined,
                }}
              >
                Email
              </label>
            </div>

            <div className="relative">
              <textarea
                name="message"
                rows={6}
                value={formState.message}
                onChange={handleChange}
                onFocus={() => handleFocus("message")}
                onBlur={handleBlur}
                required
                className="w-full px-4 py-3 rounded-lg border bg-gray-50 transition-all duration-300 focus:outline-none focus:ring-2"
                style={{
                  borderColor:
                    focused === "message"
                      ? colors.secondary
                      : "rgb(229, 231, 235)",
                }}
              />
              <label
                className={`absolute transition-all duration-200 pointer-events-none ${
                  formState.message || focused === "message"
                    ? "-top-2.5 left-3 text-xs px-1 bg-white"
                    : "top-3 left-4 text-gray-500"
                }`}
                style={{
                  color:
                    focused === "message"
                      ? colors.secondary
                      : formState.message
                      ? colors.text
                      : undefined,
                }}
              >
                Your Message
              </label>
            </div>

            <div className="pt-2">
              <motion.button
                type="submit"
                disabled={status === "submitting"}
                className="w-full px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center"
                style={{
                  backgroundColor: colors.accent,
                  color: colors.text,
                  boxShadow: `0 4px 14px ${colors.accent}50`,
                }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: `0 6px 20px ${colors.accent}70`,
                }}
                whileTap={{ scale: 0.98 }}
              >
                {status === "submitting" ? (
                  <svg
                    className="animate-spin h-5 w-5 mr-2"
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
                ) : null}
                {status === "submitting" ? "Sending..." : "Send Message"}
              </motion.button>
            </div>

            {status === "success" && (
              <motion.div
                className="p-4 rounded-lg bg-green-50 border border-green-200 text-green-800 flex items-center gap-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
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
                className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-800 flex items-center gap-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
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
          </motion.form>
        </div>
      </div>
    </section>
  );
}
