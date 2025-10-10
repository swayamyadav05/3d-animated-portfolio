import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center items-center md:items-start">
          <a
            href="https://swayam-pirate-portfolio.vercel.app/"
            target="_blank">
            We have to live a life of no regrets.
          </a>
        </div>
        <div className="socials">
          {socialImgs.map((img) => (
            <a
              className="icon"
              target="_blank"
              href={img.url}
              key={img.url}>
              <img src={img.imgPath} />
            </a>
          ))}
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-center md:text-md">
            © {new Date().getFullYear()} Swayam Yadav | All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
