import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { projects } from "../constants";
import ProjectCard from "../components/ProjectCard";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const project1Ref = useRef<HTMLDivElement | null>(null);
  const project2Ref = useRef<HTMLDivElement | null>(null);
  const project3Ref = useRef<HTMLDivElement | null>(null);
  useGSAP(() => {
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];

    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        },
      );
    });

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 },
    );
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* LEFT - Main Featured Project */}
          <ProjectCard
            project={projects[0]}
            variant="main"
            ref={project1Ref}
          />

          {/* RIGHT - Side Projects */}
          <div className="project-list-wrapper overflow-hidden">
            <ProjectCard
              project={projects[1]}
              variant="side"
              ref={project2Ref}
            />

            <ProjectCard
              project={projects[2]}
              variant="side"
              ref={project3Ref}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
