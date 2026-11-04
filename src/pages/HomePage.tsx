import React from 'react';
import { HeroSection } from '../sections/HeroSection';
import { PortfolioExploreCards } from '../sections/PortfolioExploreCards';
import { FeaturedProjectsSection } from '../sections/FeaturedProjectsSection';
import { SkillsSection } from '../sections/SkillsSection';
import { ExperienceSection } from '../sections/ExperienceSection';
import { EducationSection } from '../sections/EducationSection';
import { AchievementsSection } from '../sections/AchievementsSection';
import { ContactSection } from '../sections/ContactSection';

export const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <PortfolioExploreCards />
      <FeaturedProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <AchievementsSection />
      <ContactSection />
    </div>
  );
};
