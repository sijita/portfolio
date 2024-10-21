import AboutMe from './components/about-me';
import SectionTitle from './components/ui/section-title';
import Header from './components/header';
import TechSkills from './components/tech-skills';
import ExperienceTimeline from './components/experience-timeline';
import Projects from './components/projects';
import Contact from './components/contact';
import { getTranslations } from 'next-intl/server';

export default async function Home() {
  const t = await getTranslations('Index.navbar');

  return (
    <main className="container lg:p-20 p-5 mx-auto w-11/12">
      <div className="flex flex-col items-center gap-20">
        <Header />
        <SectionTitle title={t('aboutMe')} id="about" />
        <p className="text-2xl font-light tracking-[.15em] text-center">
          <span className="text-primary">(</span>
          SIMÓN JIMÉNEZ TAMAYO
          <span className="text-primary">)</span>
        </p>
      </div>
      <AboutMe />
      <SectionTitle title={t('technologies')} />
      <TechSkills />
      <SectionTitle title={t('experience')} id="experience" />
      <ExperienceTimeline />
      <SectionTitle title={t('projects')} id="projects" />
      <Projects />
      <Contact />
    </main>
  );
}
