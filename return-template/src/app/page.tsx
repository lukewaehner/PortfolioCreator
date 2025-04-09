import HeroCentered from "@/components/hero/HeroCentered";
import HeroSplit from "@/components/hero/HeroSplit";
import HeroBackground from "@/components/hero/HeroBackground";
import Contact from "@/components/contact/Contact";
import ContactAlternative from "@/components/contact/ContactAlternative";
import About from "@/components/about/About";
import Skills from "@/components/skills/Skills";
import SkillsAlternative from "@/components/skills/SkillsAlternative";
import Projects from "@/components/projects/Projects";
import ProjectsAlternative from "@/components/projects/ProjectsAlternative";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-black p-8 space-y-12">
      <HeroCentered />
      {/* <HeroSplit /> */}
      {/* <HeroBackground /> */}

      <About />

      <Skills />
      {/* <SkillsAlternative /> */}

      {/* Experience Section */}

      {/* <Projects /> */}
      <ProjectsAlternative />

      <Contact />
      {/* <ContactAlternative /> */}
      {/* Footer Section */}
    </main>
  );
}
