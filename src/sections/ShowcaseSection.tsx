import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

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
        }
      );
    });

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* LEFT */}
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
              <img
                src="/images/projectSecretDrop.png"
                alt="SecretDrop"
              />
            </div>
            <div className="text-content">
              <h2>
                Created a safe channel for unfiltered feedback for
                creators, educators, and teams without compromising
                sender anonymity.
              </h2>
              <p className="text-white-50 md:text-xl">
                Built a radically simple platform where users share a
                public link to receive anonymous messages.
              </p>
            </div>
          </div>
          {/* RIGHT */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#2f5c65]">
                <img
                  src="/images/projectCivicSightWorkflow3.png"
                  alt="Civic Sight AI Platform"
                />
              </div>
              <h2>CivicSight Agentic Workflow</h2>
            </div>

            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#5c657b]">
                <img
                  src="/images/projectEmplyeeManagement4.png"
                  alt="Employee Management System"
                />
              </div>
              <h2>
                Employee Management System | Production-Grade REST API
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
