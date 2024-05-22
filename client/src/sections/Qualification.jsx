import PropTypes from "prop-types";
import { useState } from "react";
import ScrollDown from "../components/common/ScrollDown";

function Qualification({ navLinks }) {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

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
            <img className="qualification__icon" src="" alt="graduation cap" />
            Education
          </button>

          <button
            type="button"
            className={
              toggleState === 1
                ? "qualification__button button--flex qualification__active"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <img className="qualification__icon" src="" alt="briefcase icon" />
            Experience
          </button>
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
              <div>
                <h3 className="qualification__title">Web Design</h3>
                <span className="qualification__subtitle">
                  Spain - Institute
                </span>
                <div className="qualification__calendar">
                  <img src="" alt="calendar alt" /> 2012 - Present
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
                <h3 className="qualification__title">Web development</h3>
                <span className="qualification__subtitle">
                  Spain - Institute
                </span>
                <div className="qualification__calendar">
                  <img src="" alt="calendar alt" /> 2018 - 2020
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Art Director</h3>
                <span className="qualification__subtitle">
                  Spain - Institute
                </span>
                <div className="qualification__calendar">
                  <img src="" alt="calendar alt" /> 2020 - 2021
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
                <h3 className="qualification__title">UX Expert</h3>
                <span className="qualification__subtitle">
                  Spain - Institute
                </span>
                <div className="qualification__calendar">
                  <img src="" alt="calendar alt" /> 2017 - 2018
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
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
                <h3 className="qualification__title">Product Designer</h3>
                <span className="qualification__subtitle">
                  Microsoft - Spain
                </span>
                <div className="qualification__calendar">
                  <img src="" alt="calendar alt" /> 2020 - 2021
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">UX Designer</h3>
                <span className="qualification__subtitle">
                  Apple Inc - Spain
                </span>
                <div className="qualification__calendar">
                  <img src="" alt="calendar alt" /> 2012 - Present
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
                <h3 className="qualification__title">Web Designer</h3>
                <span className="qualification__subtitle">Figma - Spain</span>
                <div className="qualification__calendar">
                  <img src="" alt="calendar alt" /> 2018 - 2020
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">UX Designer</h3>
                <span className="qualification__subtitle">
                  Apple Inc - Spain
                </span>
                <div className="qualification__calendar">
                  <img src="" alt="calendar alt" /> 2012 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder" />
                <span className="qualification__line" />
              </div>
            </div>
          </div>
        </div>

        <ScrollDown navLinks={navLinks} currentId="qualification" />
      </div>
    </section>
  );
}

Qualification.propTypes = {
  navLinks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    })
  ).isRequired,
};

export default Qualification;
