import "./style.css";
import { socialList } from "@/data/SocialIcons";

const Contact = () => {
  // gmail & wa
  const filteredSocialList = socialList.filter((item) =>
    ["gmail", "whatsapp"].includes(item.name)
  );

  return (
    <div id="contact" className="contact-container">
      <div className="contact-content">
        <h1 className="contact-heading">
          <span className="contact-gradient-text">Get in touch</span>
        </h1>
        <p className="contact-paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, qui?
        </p>

        <div className="contact-social-container">
          {filteredSocialList.map((social) => {
            const SocialIcon = social.icon;
            return (
              <a
                key={social.id}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`contact-social-icon ${social.hover}`}
              >
                <SocialIcon />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Contact;
