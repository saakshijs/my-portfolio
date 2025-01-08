import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactFooter from "./components/ContactFooter";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#121212]">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex-grow container mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
      </div>

      {/* Footer */}
      <ContactFooter />
    </main>
  );
}
