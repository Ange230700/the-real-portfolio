import HomeIconOutline from "../../../../server/public/assets/icons/house-chimney-outline.svg"; // eslint-disable-line
import HomeIconSolid from "../../../../server/public/assets/icons/house-chimney-solid.svg"; // eslint-disable-line
import AboutIconOutline from "../../../../server/public/assets/icons/info-outline.svg"; // eslint-disable-line
import AboutIconSolid from "../../../../server/public/assets/icons/info-solid.svg"; // eslint-disable-line
import SkillsIconOutline from "../../../../server/public/assets/icons/skill-alt-outline.svg"; // eslint-disable-line
import SkillsIconSolid from "../../../../server/public/assets/icons/skill-alt-solid.svg"; // eslint-disable-line
import QualificationIconOutline from "../../../../server/public/assets/icons/journey-outline.svg"; // eslint-disable-line
import QualificationIconSolid from "../../../../server/public/assets/icons/journey-solid.svg"; // eslint-disable-line
import PortfolioIconOutline from "../../../../server/public/assets/icons/briefcase-blank-outline.svg"; // eslint-disable-line
import PortfolioIconSolid from "../../../../server/public/assets/icons/briefcase-blank-solid.svg"; // eslint-disable-line
import ContactIconOutline from "../../../../server/public/assets/icons/phone-guide-outline.svg"; // eslint-disable-line
import ContactIconSolid from "../../../../server/public/assets/icons/phone-guide-solid.svg"; // eslint-disable-line

const navLinks = [
  {
    id: 1,
    name: "accueil",
    sectionId: "home",
    iconOutline: HomeIconOutline,
    iconSolid: HomeIconSolid,
  },
  {
    id: 2,
    name: "en savoir plus",
    sectionId: "about",
    iconOutline: AboutIconOutline,
    iconSolid: AboutIconSolid,
  },
  {
    id: 3,
    name: "compétences",
    sectionId: "skills",
    iconOutline: SkillsIconOutline,
    iconSolid: SkillsIconSolid,
  },
  {
    id: 4,
    name: "qualification",
    sectionId: "qualification",
    iconOutline: QualificationIconOutline,
    iconSolid: QualificationIconSolid,
  },
  {
    id: 5,
    name: "portfolio",
    sectionId: "portfolio",
    iconOutline: PortfolioIconOutline,
    iconSolid: PortfolioIconSolid,
  },
  {
    id: 6,
    name: "contact",
    sectionId: "contact",
    iconOutline: ContactIconOutline,
    iconSolid: ContactIconSolid,
  },
  // { id: 4, name: "services" },
  // { id: 5, name: "qualification" },
  // { id: 6, name: "testimonials" },
  // { id: 7, name: "portfolio" },
];

export default navLinks;
