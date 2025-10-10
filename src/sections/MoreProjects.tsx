import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "../constants";

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: number;
  title: string;
  category: string;
  featured: boolean;
  description: string;
  longDescription: string;
  imgPath: string;
  liveLink: string | null;
  githubLink: string | null;
  technologies: string[];
  highlights: string[];
  impact: string;
}

const MoreProjects: React.FC = () => {
  // Get projects 4 onwards (skip the first 3 featured projects)
  const remainingProjects = projects.slice(3);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    // Animate section header
    gsap.fromTo(
      ".more-projects-header",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ".more-projects-header",
          start: "top bottom-=100",
        },
      }
    );

    // Animate project cards
    gsap.utils
      .toArray(".more-project-card")
      .forEach((card, index) => {
        gsap.fromTo(
          card as HTMLElement,
          {
            y: 50,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: 0.2 * (index + 1),
            scrollTrigger: {
              trigger: card as HTMLElement,
              start: "top bottom-=100",
            },
          }
        );
      });

    // Animate GitHub CTA
    gsap.fromTo(
      ".github-cta",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.5,
        scrollTrigger: {
          trigger: ".github-cta",
          start: "top bottom-=50",
        },
      }
    );

    // Animate entire section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );
  }, []);

  const handleLiveClick = (project: Project) => {
    if (project.liveLink) {
      window.open(project.liveLink, "_blank", "noopener,noreferrer");
    }
  };

  const handleGithubClick = (project: Project) => {
    if (project.githubLink) {
      window.open(
        project.githubLink,
        "_blank",
        "noopener,noreferrer"
      );
    }
  };

  if (remainingProjects.length === 0) {
    return null;
  }

  return (
    <section
      id="more-projects"
      ref={sectionRef}
      className="w-full padding-x-lg md:mt-40 mt-20">
      <div className="mx-auto">
        {/* Section Header */}
        <div className="more-projects-header text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            More Projects
          </h2>
          <p className="text-white-50 text-lg max-w-2xl mx-auto">
            Explore additional projects showcasing different
            technologies and problem-solving approaches
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid-3-cols">
          {remainingProjects.map((project) => (
            <div
              key={project.id}
              className="more-project-card card-border rounded-xl p-6 group hover:transform hover:-translate-y-2 transition-all duration-300">
              {/* Project Image */}
              <div className="w-full h-48 rounded-lg overflow-hidden mb-6 bg-black-200 flex items-center justify-center">
                {project.imgPath ? (
                  <img
                    src={project.imgPath}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                ) : (
                  <div className="text-white-50 text-center">
                    <div className="text-4xl mb-2">📁</div>
                    <div className="text-sm">{project.category}</div>
                  </div>
                )}
              </div>

              {/* Project Info */}
              <div className="space-y-4">
                {/* Category Badge */}
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-white/10 text-white-50 text-sm rounded-full">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="px-3 py-1 bg-blue-100 text-white text-sm rounded-full">
                      Featured
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white group-hover:text-white-50 transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-white-50 text-sm line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-black-200 text-white-50 text-xs rounded border border-black-50">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-black-200 text-white-50 text-xs rounded border border-black-50">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  {project.liveLink && (
                    <button
                      onClick={() => handleLiveClick(project)}
                      className="flex-1 px-4 py-2 bg-white text-black font-medium rounded-lg transition-all duration-300 hover:bg-white-50 hover:text-white flex items-center justify-center gap-2">
                      <img
                        src="/images/arrow-right.svg"
                        alt="Live"
                        className="w-4 h-4"
                      />
                      Live Demo
                    </button>
                  )}
                  {project.githubLink && (
                    <button
                      onClick={() => handleGithubClick(project)}
                      className={`${
                        project.liveLink ? "flex-1" : "w-full"
                      } px-4 py-2 border border-white-50 text-white-50 font-medium rounded-lg transition-all duration-300 hover:bg-white-50 hover:text-black flex items-center justify-center gap-2`}>
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      GitHub
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="github-cta text-center mt-8">
          <a
            href="https://github.com/swayamyadav05/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 text-white-50 hover:text-white transition-all duration-300 group">
            <span className="text-lg font-medium">
              Explore more projects on GitHub
            </span>
            <div className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1">
              <svg
                className="w-full h-full fill-current"
                viewBox="0 0 24 24">
                <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z" />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default MoreProjects;
