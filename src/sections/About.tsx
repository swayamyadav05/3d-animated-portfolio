import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TitleHeader from "../components/TitleHeader";
import { aboutInfo } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleMouseMove =
    (index: number) => (e: React.MouseEvent<HTMLDivElement>) => {
      const card = cardRefs.current[index];
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const mouseX = e.clientX - rect.left - rect.width / 2;
      const mouseY = e.clientY - rect.top - rect.height / 2;
      let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
      angle = (angle + 360) % 360;
      card.style.setProperty("--start", String(angle + 60));
    };

  useGSAP(() => {
    // Fade in section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 },
    );

    // Intro card
    gsap.fromTo(
      ".about-intro-card",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ".about-intro-card",
          start: "top 80%",
        },
      },
    );

    // Story cards stagger
    gsap.utils
      .toArray(".about-journey-card")
      .forEach((card, index) => {
        gsap.fromTo(
          card as HTMLElement,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: 0.2 * (index + 1),
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: card as HTMLElement,
              start: "top bottom-=100",
            },
          },
        );
      });

    // Highlight badges
    gsap.fromTo(
      ".about-highlight-badge",
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".about-highlights-section",
          start: "top 80%",
        },
      },
    );

    // Philosophy items
    gsap.fromTo(
      ".about-philosophy-entry",
      { xPercent: -50, opacity: 0 },
      {
        xPercent: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.15,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ".about-philosophy-wrapper",
          start: "top 80%",
        },
      },
    );

    // CTA
    gsap.fromTo(
      ".about-cta-card",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ".about-cta-card",
          start: "top bottom-=50",
        },
      },
    );
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="w-full md:mt-40 mt-20 section-padding xl:px-0">
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader title="Who I Am" sub="👋 Get to Know Me" />

        {/* Intro — GlowCard style with mouse-tracking border */}
        <div className="mt-16">
          <div
            ref={(el) => {
              cardRefs.current[0] = el;
            }}
            onMouseMove={handleMouseMove(0)}
            className="about-intro-card card card-border rounded-xl p-10">
            <div className="glow" />
            <p className="text-white-50 text-lg md:text-xl leading-relaxed">
              {aboutInfo.intro}
            </p>
          </div>
        </div>

        {/* Journey — 3-column feature cards */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <div className="hero-badge mx-auto">
              <p>🗺️ My Journey</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {aboutInfo.story.map((step, index) => (
              <div
                key={step.heading}
                ref={(el) => {
                  cardRefs.current[index + 1] = el;
                }}
                onMouseMove={handleMouseMove(index + 1)}
                className="about-journey-card card card-border rounded-xl p-8 flex flex-col gap-5 group">
                <div className="glow" />
                {/* Step number */}
                <div className="about-step-number select-none">
                  {String(index + 1).padStart(2, "0")}
                </div>
                {/* Heading */}
                <h4 className="text-white text-2xl font-semibold">
                  {step.heading}
                </h4>
                {/* Divider */}
                <div className="w-12 h-0.5 bg-gradient-to-r from-[#62e0ff] to-[#6d45ce] rounded-full" />
                {/* Text */}
                <p className="text-white-50 text-base leading-relaxed">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Facts — badge grid */}
        <div className="about-highlights-section mt-20">
          <div className="text-center mb-12">
            <div className="hero-badge mx-auto">
              <p>⚡ Quick Facts</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {aboutInfo.highlights.map((item) => (
              <div
                key={item.label}
                className="about-highlight-badge feature-card card-border rounded-xl p-5 flex items-center gap-3">
                <span className="text-2xl flex-shrink-0">
                  {item.icon}
                </span>
                <span className="text-white-50 text-sm md:text-base font-medium">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy — timeline-style list */}
        <div className="about-philosophy-wrapper mt-20">
          <div className="text-center mb-12">
            <div className="hero-badge mx-auto">
              <p>🧠 My Philosophy</p>
            </div>
          </div>

          <div className="relative">
            {/* Vertical gradient line */}
            <div className="absolute left-[19px] md:left-[23px] top-0 bottom-0 w-[2px]">
              <div className="gradient-line w-full h-full" />
            </div>

            <div className="flex flex-col gap-6">
              {aboutInfo.philosophy.map((item, index) => (
                <div
                  key={item}
                  className="about-philosophy-entry flex items-start gap-5 md:gap-6 relative">
                  {/* Dot on the line */}
                  <div className="relative z-10 flex-shrink-0 mt-1">
                    <div className="size-10 md:size-12 rounded-full card-border bg-black-100 flex items-center justify-center">
                      <span className="about-step-number text-base md:text-lg">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                  {/* Text card */}
                  <div className="feature-card card-border rounded-xl p-5 md:p-6 flex-1">
                    <p className="text-white-50 text-base md:text-lg">
                      {item}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20">
          <div
            ref={(el) => {
              cardRefs.current[5] = el;
            }}
            onMouseMove={handleMouseMove(5)}
            className="about-cta-card card card-border rounded-xl p-10 text-center">
            <div className="glow" />
            <p className="text-white-50 text-lg md:text-xl leading-relaxed mb-8">
              {aboutInfo.cta}
            </p>
            <a href="#contact" className="cta-wrapper inline-block">
              <div className="cta-button group">
                <div className="bg-circle" />
                <p className="text">Let's Connect</p>
                <div className="arrow-wrapper">
                  <img src="/images/arrow-down.svg" alt="arrow" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
