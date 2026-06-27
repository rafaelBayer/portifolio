import React, { useState } from "react";

import { projects } from "../../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="section-container text-white">
      <div className="mb-12 max-w-3xl space-y-3 mobile:mb-8">
        <h2 className="text-2xl font-bold mobile:text-xl">Projetos</h2>
        <p className="text-foreground/70">
          Alguns projetos que desenvolvi para praticar, resolver problemas reais
          e explorar tecnologias modernas.
        </p>
      </div>

      <div className="grid gap-6 tablet:grid-cols-2 laptop:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onSelect={setSelectedProject}
          />
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default ProjectsSection;
