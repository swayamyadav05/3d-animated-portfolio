import { certifications } from "../constants";
import TitleHeader from "../components/TitleHeader";
import { ExternalLink, Calendar, Building } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const getIconComponent = (icon: string) => {
  const iconMap: Record<string, string> = {
    python: "/images/logos/python.svg",
    google: "/images/google-logo.png",
    terminal: "/images/code.svg",
    redhat: "/images/redhat.svg",
    briefcase: "/images/paloalto-logo.png",
    training: "/images/skillrank_sr.svg",
    internship: "/images/skillrank_sr.svg",
  };

  return iconMap[icon] || "/images/star.png";
};

const Certifications = () => {
  useGSAP(() => {
    gsap.utils.toArray(".cert-card").forEach((card, index) => {
      gsap.from(card as HTMLElement, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: index * 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card as HTMLElement,
          start: "top 85%",
        },
      });
    });
  }, []);

  return (
    <section
      id="certifications"
      className="w-full md:mt-40 mt-20 section-padding xl:px-0">
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title="Professional Certifications"
          sub="🏆 Achievements & Credentials"
        />

        <div className="w-full  mt-20">
          <div className="mx-auto grid lg:grid-cols-2 grid-cols-1 gap-8">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="cert-card feature-card card-border rounded-xl p-8 flex flex-col gap-6 h-full">
                {/* Icon and Title */}
                <div className="flex items-start gap-4">
                  <div className="size-16 flex items-center justify-center rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex-shrink-0">
                    <img
                      src={getIconComponent(cert.icon)}
                      alt={cert.title}
                      className={`object-contain ${
                        cert.icon === "redhat"
                          ? "w-12 h-12"
                          : "w-10 h-10"
                      }`}
                      style={{
                        filter:
                          cert.icon === "python" ||
                          cert.icon === "terminal" ||
                          cert.icon === "redhat" ||
                          cert.icon === "training" ||
                          cert.icon === "internship"
                            ? "brightness(0) saturate(100%) invert(93%) sepia(7%) saturate(378%) hue-rotate(202deg) brightness(99%) contrast(86%)"
                            : undefined,
                      }}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white text-xl font-semibold leading-tight">
                      {cert.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-2">
                      <Building className="w-4 h-4 text-white/60" />
                      <p className="text-white/70 text-sm font-medium">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-white-50 text-base leading-relaxed flex-1">
                  {cert.description}
                </p>

                {/* Date and Credential Link */}
                <div className="flex items-center justify-between gap-4 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-white/60" />
                    <span className="text-white/70 text-sm font-medium">
                      {cert.date}
                    </span>
                  </div>

                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-white/10 to-white/5 border border-white/20 rounded-lg text-white text-sm font-medium hover:from-white/20 hover:to-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105">
                    <span>View Credential</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
