import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = () => {
  return (
    <div className="footer">
      Created By
      <i className="fa-solid fa-heart"></i>
      <a
        href="https://www.linkedin.com/in/rishabh-khera/"
        target="_blank"
        title="Rishabh's Linkedin Profile"
      >
        Rishabh Khera
      </a>
      <i className="fa-solid fa-heart">
        <FontAwesomeIcon icon={faCopyright} />
      </i>
      <span>2023</span>
      <strong>
        Food<span>Zone</span>
      </strong>
    </div>
  );
};

export default Footer;
