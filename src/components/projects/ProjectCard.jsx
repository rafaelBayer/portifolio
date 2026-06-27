import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiArrowRight, FiExternalLink } from "react-icons/fi";

const hasUrl = (url) => typeof url === "string" && url.trim().length > 0;

const ProjectCard = ({ project, onSelect }) => {
  const featuredTechnologies = project.technologies.slice(0, 3);

  return (
    <article className="group glass flex h-full flex-col overflow-hidden rounded-lg transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:bg-card-hover">
      <button
        type="button"
        onClick={() => onSelect(project)}
        className="flex flex-1 flex-col text-left focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
        aria-label={`Ver detalhes do projeto ${project.title}`}
      >
        <div className="aspect-video w-full overflow-hidden bg-background/70">
          <img
            src={project.image}
            alt={`Imagem do projeto ${project.title}`}
            className="h-full w-full object-contain transition-opacity duration-300 group-hover:opacity-95"
          />
        </div>

        <div className="flex flex-1 flex-col justify-between space-y-4 p-5 pb-4">
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-white mobile:text-lg">
                {project.title}
              </h3>
              <p className="text-sm leading-relaxed text-foreground/70">
                {project.shortDescription}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {featuredTechnologies.map((technology) => (
                <span
                  key={`${project.id}-${technology}`}
                  className="rounded-full bg-card-hover px-3 py-1 text-xs text-foreground/70"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          <span className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors group-hover:text-accent-hover">
            Ver detalhes
            <FiArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </span>
        </div>
      </button>

      {(hasUrl(project.githubUrl) || hasUrl(project.liveUrl)) && (
        <div className="flex items-center gap-3 border-t border-white/10 px-5 py-4">
          {hasUrl(project.githubUrl) && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-foreground/80 transition-colors hover:border-accent hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
              aria-label={`Abrir reposit\u00f3rio GitHub do projeto ${project.title}`}
              title="GitHub"
            >
              <FaGithub size={18} aria-hidden="true" />
            </a>
          )}

          {hasUrl(project.liveUrl) && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-foreground/80 transition-colors hover:border-accent hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
              aria-label={`Abrir site do projeto ${project.title}`}
              title="Acessar site"
            >
              <FiExternalLink size={18} aria-hidden="true" />
            </a>
          )}
        </div>
      )}
    </article>
  );
};

export default ProjectCard;
