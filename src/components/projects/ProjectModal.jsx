import React, { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink, FiX } from "react-icons/fi";

const hasUrl = (url) => typeof url === "string" && url.trim().length > 0;

const ProjectModal = ({ project, onClose }) => {
  const closeButtonRef = useRef(null);
  const [activeImage, setActiveImage] = useState(project.image);

  const images = useMemo(
    () => [project.image, ...(project.screenshots || [])],
    [project.image, project.screenshots],
  );

  useEffect(() => {
    setActiveImage(project.image);
  }, [project]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [onClose]);

  const modal = (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 mobile:p-3"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <article
        className="glass scrollbar-hidden relative max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-lg text-white shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby={`project-modal-title-${project.id}`}
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full bg-background/80 p-2 text-foreground/80 transition-colors hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent"
          aria-label="Fechar modal"
        >
          <FiX size={22} aria-hidden="true" />
        </button>

        <div className="space-y-8 p-6 mobile:p-4">
          <div className="space-y-4">
            <div className="aspect-video overflow-hidden rounded-lg bg-background/70">
              <img
                src={activeImage}
                alt={`Imagem do projeto ${project.title}`}
                className="h-full w-full object-contain"
              />
            </div>

            {images.length > 1 && (
              <div className="grid grid-cols-3 gap-3">
                {images.map((image, index) => (
                  <button
                    key={image}
                    type="button"
                    onClick={() => setActiveImage(image)}
                    className={`aspect-video overflow-hidden rounded-md border bg-background/70 transition-colors focus:outline-none focus:ring-2 focus:ring-accent ${
                      activeImage === image
                        ? "border-accent"
                        : "border-white/10 hover:border-accent/70"
                    }`}
                    aria-label={`Selecionar imagem ${index + 1}`}
                  >
                    <img
                      src={image}
                      alt=""
                      className="h-full w-full object-contain"
                      aria-hidden="true"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div className="space-y-3 pr-10 mobile:pr-8">
              <h2
                id={`project-modal-title-${project.id}`}
                className="text-2xl font-bold text-white mobile:text-xl"
              >
                {project.title}
              </h2>
              <p className="text-sm leading-relaxed text-foreground/70">
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={`${project.id}-modal-${technology}`}
                  className="rounded-full bg-card-hover px-3 py-1 text-xs text-foreground/70"
                >
                  {technology}
                </span>
              ))}
            </div>

            {(hasUrl(project.liveUrl) || hasUrl(project.githubUrl)) && (
              <div className="flex flex-wrap gap-3">
                {hasUrl(project.liveUrl) && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-semibold text-background transition-colors hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
                  >
                    Acessar projeto
                    <FiExternalLink size={16} aria-hidden="true" />
                  </a>
                )}

                {hasUrl(project.githubUrl) && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border border-white/15 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-accent hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
                  >
                    <FaGithub size={16} aria-hidden="true" />
                    GitHub
                  </a>
                )}
              </div>
            )}

            <div className="grid gap-6 tablet:grid-cols-2">
              <ProjectList title="Funcionalidades" items={project.features} />
              <ProjectList title="Destaques t\u00e9cnicos" items={project.highlights} />
            </div>
          </div>
        </div>
      </article>
    </div>
  );

  return createPortal(modal, document.body);
};

const ProjectList = ({ title, items }) => (
  <div className="space-y-3">
    <h3 className="text-base font-semibold text-white">{title}</h3>
    <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-foreground/70">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </div>
);

export default ProjectModal;
