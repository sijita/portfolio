import AboutMe from '@/modules/home/components/about-me/about-me';
import ProjectsSection from '@/modules/home/components/projects/projects-section';
import Header from '@/modules/core/components/ui/header';
import TechSkills from '@/modules/home/components/skills/tech-skills';
import SectionTitle from '@/modules/core/components/ui/section-title';
import { getTranslations } from 'next-intl/server';
import Contact from '@/modules/home/components/contact/contact';
import ExperienceTimeline from '@/modules/home/components/experience/experience-timeline';

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
      <ProjectsSection />
      <Contact />
    </main>
  );
}
