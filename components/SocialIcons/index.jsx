import "./style.css";

const SocialIcons = ({ socialItems }) => {
  return (
    <>
      {socialItems.map((social) => {
        const IconComponent = social.icon;
        return (
          <li key={social.id}>
            <a
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`social-icons ${social.hover}`}
            >
              <IconComponent />
            </a>
          </li>
        );
      })}
    </>
  );
};

export default SocialIcons;
