import HeroCentered from "@/components/hero/HeroCentered";
import HeroSplit from "@/components/hero/HeroSplit";
import HeroBackground from "@/components/hero/HeroBackground";
import Contact from "@/components/contact/Contact";
import ContactAlternative from "@/components/contact/ContactAlternative";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-black p-8 space-y-12">
      {/* <HeroCentered /> */}
      <HeroSplit />
      {/* <HeroBackground /> */}
      {/* About Section */}
      <section className="rounded-2xl border border-dashed border-gray-300 p-8 min-h-[40vh]">
        <h2 className="text-2xl font-semibold mb-4">About</h2>
        <p>This is a placeholder for the About component.</p>
      </section>
      {/* Skills Section */}
      <section className="rounded-2xl border border-dashed border-gray-300 p-8 min-h-[45vh]">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <p>This is a placeholder for the Skills component.</p>
      </section>
      {/* Projects Section */}
      <section className="rounded-2xl border border-dashed border-gray-300 p-8 min-h-[90vh]">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <p>This is a placeholder for the Projects component.</p>
      </section>
      {/* Contact Section */}
      <Contact />
      {/* <ContactAlternative /> */}
      {/* Footer Section */}
    </main>
  );
}
