'use client';

import { projects } from '@/data/projects';
import ProjectCard from '@/components/ui/ProjectCard';
import ScrollReveal from '@/components/animations/ScrollReveal';

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 md:px-10">
      <div className="flex flex-col gap-20">
        {projects.map((project, index) => (
          <ScrollReveal key={project.id} delay={index * 0.05}>
            <ProjectCard project={project} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
