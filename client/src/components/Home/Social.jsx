import { Link } from "react-router-dom";
import SocialsLinks from "../../data/home/SocialsLinks";

function Social() {
  return (
    <div className="home__social">
      {SocialsLinks.map((socialLink) => (
        <Link
          to={socialLink.url}
          className="home__social-icon"
          target="_blank"
          key={socialLink.id}
        >
          <img src={socialLink.src} alt={socialLink.icon} />
        </Link>
      ))}
    </div>
  );
}

export default Social;
