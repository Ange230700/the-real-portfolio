import Work1 from "../../../../server/public/assets/images/wildtube.png"; // eslint-disable-line
import Work2 from "../../../../server/public/assets/images/radioWorld.png"; // eslint-disable-line
// import Work3 from "../../../../server/public/assets/images/work3.jpg"; // eslint-disable-line
// import Work4 from "../../../../server/public/assets/images/work4.jpg"; // eslint-disable-line
// import Work5 from "../../../../server/public/assets/images/work5.jpg"; // eslint-disable-line

const projectsData = [
  {
    id: 1,
    image: Work1,
    title: "Wildtube",
    link: "http://vps-d5babf40.vps.ovh.net:5001",
    category: "ott",
    description: "plateforme OTT",
  },
  {
    id: 2,
    image: Work2,
    title: "Radio world",
    link: "http://vps-d5babf40.vps.ovh.net:5002",
    category: "music",
    description: "Radio",
  },
  // {
  //   id: 3,
  //   // image: Work3,
  //   image: "",
  //   title: "Brand design",
  //   category: "design",
  // },
  // {
  //   id: 4,
  //   // image: Work4,
  //   image: "",
  //   title: "App movil",
  //   category: "app",
  // },
  // {
  //   id: 5,
  //   // image: Work5,
  //   image: "",
  //   title: "Web design",
  //   category: "web",
  // },
];

export default projectsData;
