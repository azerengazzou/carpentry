import { useState } from 'react';
import HeroSection from './Sections/HeroSection';
import FilterSection from './Sections/FilterSection';
import GallerySection from './Sections/GallerySection';
import { projects } from './Sections/projectList';
import CTASection from './Sections/CTASection';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { id: 'all', label: 'Tous nos projets' },
    { id: 'villas', label: 'Villas de luxe' },
    { id: 'apartments', label: 'Appartements' },
    { id: 'furniture', label: 'Mobilier sur mesure' },
    { id: 'accessories', label: 'Accessoires décoratifs' }
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="pt-20">
      <HeroSection />
      <FilterSection categories={categories} activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      <GallerySection filteredProjects={filteredProjects} />
      <CTASection />
    </div>
  );
};

export default Portfolio;