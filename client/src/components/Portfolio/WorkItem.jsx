import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function WorkItem({ id, image, title }) {
  return (
    <Link
      to="http://vps-d5babf40.vps.ovh.net:5001"
      className="work__card"
      key={id}
    >
      <img src={image} alt={title} className="work__img" />
      <h3 className="work__title">{title}</h3>
      <div to="/" className="work__button">
        <p>plateforme OTT</p>
      </div>
    </Link>
  );
}

WorkItem.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default WorkItem;
