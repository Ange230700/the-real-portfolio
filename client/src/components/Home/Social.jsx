import { Link } from "react-router-dom";

function Social() {
  return (
    <div className="home__social">
      <Link to="/" className="home__social-icon" target="_blank">
        <img src="" alt="instagram" />
      </Link>
      <Link to="/" className="home__social-icon" target="_blank">
        <img src="" alt="facebook" />
      </Link>
      <Link to="/" className="home__social-icon" target="_blank">
        <img src="" alt="twitter" />
      </Link>
    </div>
  );
}

export default Social;
