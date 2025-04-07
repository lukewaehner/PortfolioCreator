import React from "react";
import Image from "next/image";
import content from "@/data/content.json";

const About: React.FC = () => {
  // Destructure the 'about' section from content.json
  const { heading, image, description } = content?.about || {};

  return (
    <section className="min-h-[50vh] flex flex-col items-center justify-center text-center p-8 rounded-2xl border border-dashed border-gray-300">
      <h2 className="text-3xl font-bold mb-4">{heading ?? "About Section"}</h2>

      {/* Image Wrapper */}
      <div className="relative w-40 h-40 mb-4">
        <Image
          src={image ?? "/placeholder.jpg"}
          alt="About section image"
          fill
          className="rounded-full object-cover"
        />
      </div>

      {/* Description */}
      <p className="max-w-prose text-gray-700">
        {description ??
          "Here’s a fun placeholder message about me. You can replace this with real info about your background, achievements, or quirky facts about yourself!"}
      </p>
    </section>
  );
};

export default About;
