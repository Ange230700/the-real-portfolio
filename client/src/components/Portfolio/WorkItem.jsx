import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function WorkItem({ id, image, title, link, description }) {
  return (
    <Link to={link} className="work__card" key={id} target="_blank">
      <img src={image} alt={title} className="work__img" />
      <h3 className="work__title">{title}</h3>
      <div to="/" className="work__button">
        <p>{description}</p>
      </div>
    </Link>
  );
}

WorkItem.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default WorkItem;
