import HomeIcon from "../../../../server/public/assets/icons/house-chimney-outline.svg"; // eslint-disable-line
import AboutIcon from "../../../../server/public/assets/icons/info-outline.svg"; // eslint-disable-line
import SkillsIcon from "../../../../server/public/assets/icons/skill-alt-outline.svg"; // eslint-disable-line
import QualificationIcon from "../../../../server/public/assets/icons/journey-outline.svg"; // eslint-disable-line
import PortfolioIcon from "../../../../server/public/assets/icons/briefcase-blank-outline.svg"; // eslint-disable-line
import ContactIcon from "../../../../server/public/assets/icons/phone-guide-outline.svg"; // eslint-disable-line

const navLinks = [
  { id: 1, name: "accueil", sectionId: "home", icon: HomeIcon },
  { id: 2, name: "en savoir plus", sectionId: "about", icon: AboutIcon },
  { id: 3, name: "compétences", sectionId: "skills", icon: SkillsIcon },
  {
    id: 4,
    name: "qualification",
    sectionId: "qualification",
    icon: QualificationIcon,
  },
  { id: 5, name: "portfolio", sectionId: "portfolio", icon: PortfolioIcon },
  { id: 6, name: "contact", sectionId: "contact", icon: ContactIcon },
  // { id: 4, name: "services" },
  // { id: 5, name: "qualification" },
  // { id: 6, name: "testimonials" },
  // { id: 7, name: "portfolio" },
];

export default navLinks;
