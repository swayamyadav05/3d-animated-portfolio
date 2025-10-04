import { useGSAP } from "@gsap/react";
import Button from "../components/Button";
import HeroExperience from "../components/HeroModels/HeroExperience";
import { heroWords } from "../constants";
import gsap from "gsap";
import AnimatedCounter from "../components/AnimatedCounter";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: "power2.inOut",
      }
    );
  });
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="background" />
      </div>

      <div className="hero-layout">
        {/*LEFT: HERO CONTENT */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shipping
                <span className="slide">
                  <span className="wrapper">
                    {heroWords.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2">
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>Full-Stack Solutions</h1>
              <h1>From Concept to Deploy</h1>
            </div>
            <div className="text-white-50 md:text-xl relative z-10 pointer-events-none space-y-2">
              <p>
                Hi, I'm Swayam—a remote-first engineer specializing in
              </p>
              <p>
                AI-integrated backends and secure full-stack
                applications.
              </p>
            </div>

            <Button
              className="md:w-90 md:h-16 w-60 h-12"
              id="button"
              text="See my Work"
            />
            <span className="text-white-50 z-10 text-sm md:text-base">
              🌍 Remote • 🔒 Security-First • 🤖 AI-Integrated
            </span>
          </div>
        </header>
        {/*RIGHT: 3D MODEL */}
        <figure>
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
      </div>
      <AnimatedCounter />
    </section>
  );
};

export default Hero;
