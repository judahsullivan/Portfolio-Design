import PageLayout from '@/components/layouts/pageLayout';
import Experience from '@/components/pages/about/exierence';
import AboutHero from '@/components/pages/about/hero';
import Skills from '@/components/pages/about/skills';
import TechStack from '@/components/pages/about/techstack';

export default function Aboout() {
  return (
    <PageLayout title="About" description="" keywords="">
      <AboutHero />
      <Skills />
      <TechStack />
    </PageLayout>
  );
}
