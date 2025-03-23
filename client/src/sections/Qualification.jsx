// client\src\sections\Qualification.jsx

// import PropTypes from "prop-types";
import { useState } from "react";

// import ScrollDown from "../components/common/ScrollDown";

import CalendarIcon from "../../../server/public/assets/icons/calendar-days.svg"; // eslint-disable-line
import QualificationIcon from "../../../server/public/assets/icons/graduation-cap.svg"; // eslint-disable-line

function Qualification() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">Parcours</span>

      <div className="qualification__container container grid">
        <div className="qualification__tabs">
          <button
            type="button"
            className={
              toggleState === 1
                ? "qualification__button button--flex qualification__active"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <img
              className="qualification__icon"
              src={QualificationIcon}
              alt="graduation cap"
            />
            Formation
          </button>

          {/* ====== NOT ERASE THIS COMMENT ======
          
          <button
            type="button"
            className={
              toggleState === 1
                ? "qualification__button button--flex qualification__active"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <img className="qualification__icon" src={QualificationIcon} alt="briefcase icon" />
            Experience
          </button> 
          
          */}
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div />

              <div>
                <span className="qualification__rounder" />
                <span className="qualification__line" />
              </div>

              <div>
                <h3 className="qualification__title">
                  Formation Développeur•se Web et Mobile
                </h3>
                <span className="qualification__subtitle">ADA Tech School</span>
                <div className="qualification__calendar">
                  <img src={CalendarIcon} alt="calendar icon" />
                  <p>Depuis 10/2024</p>
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Bootcamp Développement Web
                </h3>
                <span className="qualification__subtitle">
                  Wild Code School
                </span>
                <div className="qualification__calendar">
                  <img src={CalendarIcon} alt="calendar icon" />
                  <p>10/2023 - 02/2024</p>
                </div>
              </div>

              <div>
                <span className="qualification__rounder" />
                <span className="qualification__line" />
              </div>
            </div>

            <div className="qualification__data">
              <div />

              <div>
                <span className="qualification__rounder" />
                <span className="qualification__line" />
              </div>

              <div>
                <h3 className="qualification__title">Bachelor informatique</h3>
                <span className="qualification__subtitle">
                  Ynov Campus de Nantes
                </span>
                <div className="qualification__calendar">
                  <img src={CalendarIcon} alt="calendar icon" />
                  <p>09/2022 - 05/2023</p>
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Prépa informatique intégrée - année 2
                </h3>
                <span className="qualification__subtitle">CESI Toulouse</span>
                <div className="qualification__calendar">
                  <img src={CalendarIcon} alt="calendar icon" />
                  <p>09/2021 - 05/2022</p>
                </div>
              </div>

              <div>
                <span className="qualification__rounder" />
                <span className="qualification__line" />
              </div>
            </div>

            <div className="qualification__data">
              <div />

              <div>
                <span className="qualification__rounder" />
                <span className="qualification__line" />
              </div>

              <div>
                <h3 className="qualification__title">
                  Formation ingénieur électronique embarqué - année 1
                </h3>
                <span className="qualification__subtitle">CESI Toulouse</span>
                <div className="qualification__calendar">
                  <img src={CalendarIcon} alt="calendar icon" />
                  <p>09/2020 - 05/2021</p>
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Prépa technologique intégrée - année 2
                </h3>
                <span className="qualification__subtitle">
                  CESI Saint-Nazaire
                </span>
                <div className="qualification__calendar">
                  <img src={CalendarIcon} alt="calendar icon" />
                  <p>09/2019 - 05/2020</p>
                </div>
              </div>

              <div>
                <span className="qualification__rounder" />
                <span className="qualification__line" />
              </div>
            </div>

            <div className="qualification__data">
              <div />

              <div>
                <span className="qualification__rounder" />
                <span className="qualification__line" />
              </div>

              <div>
                <h3 className="qualification__title">
                  Cycle Préparatoire Scientifique - 2 ans
                </h3>
                <span className="qualification__subtitle">
                  LFBP Abidjan, Côte d'Ivoire
                </span>
                <div className="qualification__calendar">
                  <img src={CalendarIcon} alt="calendar icon" />
                  <p>09/2017 - 07/2019</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <ScrollDown navLinks={navLinks} currentId="qualification" /> */}
    </section>
  );
}

// Qualification.propTypes = {
  // navLinks: PropTypes.arrayOf(
    // PropTypes.shape({
      // name: PropTypes.string,
    // })
  // ).isRequired,
// };

export default Qualification;
