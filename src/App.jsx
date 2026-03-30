import { useMemo } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/profile/Hero";
import AboutSection from "./components/sections/AboutSection";
import SkillsSection from "./components/sections/SkillsSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import EducationSection from "./components/sections/EducationSection";
import ActivitiesSection from "./components/sections/ActivitiesSection";
import ContactSection from "./components/sections/ContactSection";
import { profile } from "./data/profile";
import { skills } from "./data/skills";
import {
  professionalExperience,
  teachingExperience,
} from "./data/experience";
import { education } from "./data/education";
import { activities } from "./data/activities";
import { useReveal } from "./hooks/useReveal";
import { useActiveSection } from "./hooks/useActiveSection";

function App() {
  useReveal();

  const sectionIds = useMemo(
    () => [
      "home",
      "about",
      "skills",
      "experience",
      "teaching",
      "education",
      "activities",
      "contact",
    ],
    []
  );

  const activeSection = useActiveSection(sectionIds);

  return (
    <>
      <Header activeSection={activeSection} name={profile.name} />

      <Hero profile={profile} />

      <main className="container">
        <AboutSection about={profile.about} />
        <SkillsSection skills={skills} />

        <ExperienceSection
          id="experience"
          title="Experience"
          description="Professional roles across data operations, analytics, design, and instruction."
          items={professionalExperience}
        />

        <ExperienceSection
          id="teaching"
          title="Teaching Experience"
          description="Teaching roles through my education period."
          items={teachingExperience}
        />

        <EducationSection education={education} />
        <ActivitiesSection activities={activities} />
        <ContactSection
          email={profile.email}
          linkedin={profile.linkedin}
        />
      </main>

      <Footer name={profile.name} />
    </>
  );
}

export default App;