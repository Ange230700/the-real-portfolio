import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function WorkItem({
  id,
  // image,
  title,
}) {
  return (
    <div className="work__card" key={id}>
      <img
        // src={image}
        src=""
        alt={title}
        className="work__img"
      />
      <h3 className="work__title">{title}</h3>
      <Link to="/" className="work__button">
        Demo <img src="" alt="work button icon" className="work__button-icon" />
      </Link>
    </div>
  );
}

WorkItem.propTypes = {
  id: PropTypes.number.isRequired,
  // image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default WorkItem;
