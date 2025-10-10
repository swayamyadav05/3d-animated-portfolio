import { abilities } from "../constants";

const FeatureCards = () => {
  return (
    <div className="w-full padding-x-lg">
      <div className="mx-auto grid-3-cols">
        {abilities.map(({ imgPath, title, desc }) => (
          <div
            key={title}
            className="feature-card card-border rounded-xl p-8 flex flex-col gap-4">
            <div className="size-14 flex items-center justify-center rounded-full">
              <img
                src={imgPath}
                alt={title}
                className="w-12 h-12 brightness-0 saturate-100"
                style={{
                  filter:
                    "brightness(0) saturate(100%) invert(93%) sepia(7%) saturate(378%) hue-rotate(202deg) brightness(99%) contrast(86%)",
                }}
              />
            </div>
            <h3 className="text-white text-2xl font-semibold mt-2">
              {title}
            </h3>
            <p className="text-white-50 text-lg">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;
