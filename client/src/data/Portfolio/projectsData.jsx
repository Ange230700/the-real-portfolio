// client\src\data\Portfolio\projectsData.jsx

import Work1 from "../../../../server/public/assets/images/DAF.png"; // eslint-disable-line
import Work2 from "../../../../server/public/assets/images/quiz.png"; // eslint-disable-line
import Work3 from "../../../../server/public/assets/images/morseTranslator.png"; // eslint-disable-line
// import Work4 from "../../../../server/public/assets/images/Eating-nam-nam.png"; // eslint-disable-line
import Work5 from "../../../../server/public/assets/images/mastermind.png"; // eslint-disable-line

const projectsData = [
  {
    id: 1,
    image: Work1,
    title: "DAF",
    link: "https://ongoing-fbi-investigations.vercel.app/",
    category: "",
    description: "",
  },
  {
    id: 2,
    image: Work2,
    title: "Quiz",
    link: "https://quizz-two-delta.vercel.app/",
    category: "",
    description: "",
  },
  {
    id: 3,
    image: Work3,
    title: "Morse translator",
    link: "https://04-can-you-speak-morse.vercel.app/",
    category: "",
    description: "",
  },
  // {
  //   id: 4,
  //   image: Work4,
  //   title: "Eating-nam-nam",
  //   link: "http://vps-d5babf40.vps.ovh.net:5003",
  //   category: "Food",
  //   description: "Recettes de cuisine",
  // },
  {
    id: 5,
    image: Work5,
    title: "Mastermind",
    link: "https://08-mastermind.vercel.app/",
    category: "",
    description: "",
  },
];

export default projectsData;
