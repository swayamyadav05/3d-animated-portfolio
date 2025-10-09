import GlowCard from "../components/GlowCard";
import TitleHeader from "../components/TitleHeader";
import { testimonials } from "../constants";

const Testimonial = () => {
  return (
    <section
      id="testimonials"
      className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="What People Say About Me?"
          sub="⭐ Feedback Highlights"
        />

        <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
          {testimonials.map(
            (
              { id, imgPath, name, mentions, review, linkedIn },
              index
            ) => (
              <GlowCard
                key={id}
                card={{ review, title: name }}
                index={index}>
                <div className="flex items-center gap-3">
                  <div>
                    <img
                      src={imgPath}
                      alt={name}
                      className="testimonial-img"
                    />
                  </div>
                  <div>
                    <p className="font-bold">{name}</p>
                    <a
                      href={linkedIn}
                      className="text-white-50"
                      target="_blank"
                      rel="noopener noreferrer">
                      {mentions}
                    </a>
                  </div>
                </div>
              </GlowCard>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
