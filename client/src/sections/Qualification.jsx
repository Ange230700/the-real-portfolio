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
            {/* <img className="qualification__icon" src="" alt="graduation cap" /> */}
            <svg
              className="qualification__icon"
              xmlns="http://www.w3.org/2000/svg"
              id="Layer_1"
              data-name="Layer 1"
              viewBox="0 0 24 24"
              width="20"
              height="20"
            >
              <path d="m24,7.99c0-1.136-.631-2.177-1.729-2.807l-7.756-3.542c-1.527-.879-3.502-.878-4.99-.021L1.729,5.184c-.014.007-.028.014-.041.021-1.057.608-1.687,1.649-1.687,2.785s.631,2.177,1.729,2.807l2.271,1.037v6.183c0,1.93,1.195,3.631,2.974,4.233,1.471.498,3.162.75,5.026.75s3.556-.252,5.026-.75c1.778-.603,2.974-2.304,2.974-4.233v-6.184l2.312-1.057c.255-.147.485-.321.688-.513v10.238c0,.276.224.5.5.5s.5-.224.5-.5v-12.5s0-.002,0-.003c0-.002,0-.005,0-.007Zm-5,10.026c0,1.501-.922,2.821-2.294,3.286-1.367.463-2.951.697-4.706.697s-3.339-.234-4.706-.697c-1.372-.465-2.294-1.785-2.294-3.286v-5.726l4.484,2.047c.769.442,1.65.662,2.526.662.865,0,1.725-.215,2.464-.641l4.525-2.069v5.727Zm2.855-8.13l-7.838,3.584c-1.227.706-2.811.706-4.076-.021l-7.756-3.541c-.753-.434-1.186-1.133-1.186-1.918,0-.778.425-1.473,1.167-1.907l7.815-3.574c1.227-.707,2.811-.705,4.076.021l7.756,3.542c.753.434,1.186,1.133,1.186,1.918s-.433,1.484-1.145,1.896Z" />
            </svg>
            Education
          </button>

          {/* <button
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
          </button> */}
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
                  {/* <img src="" alt="calendar alt" /> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="Layer_1"
                    data-name="Layer 1"
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                  >
                    <path d="M19.5,2h-1.5V.5c0-.28-.22-.5-.5-.5s-.5,.22-.5,.5v1.5H7V.5c0-.28-.22-.5-.5-.5s-.5,.22-.5,.5v1.5h-1.5C2.02,2,0,4.02,0,6.5v13c0,2.48,2.02,4.5,4.5,4.5h15c2.48,0,4.5-2.02,4.5-4.5V6.5c0-2.48-2.02-4.5-4.5-4.5Zm-8,7v4H7v-4h4.5Zm5.5,0v4h-4.5v-4h4.5Zm6,0v4h-5v-4h5ZM6,13H1v-4H6v4Zm-5,1H6v4H1v-4Zm6,0h4.5v4H7v-4Zm4.5,5v4H7v-4h4.5Zm1,0h4.5v4h-4.5v-4Zm0-1v-4h4.5v4h-4.5Zm5.5-4h5v4h-5v-4ZM4.5,3h15c1.93,0,3.5,1.57,3.5,3.5v1.5H1v-1.5c0-1.93,1.57-3.5,3.5-3.5ZM1,19.5v-.5H6v4h-1.5c-1.93,0-3.5-1.57-3.5-3.5Zm18.5,3.5h-1.5v-4h5v.5c0,1.93-1.57,3.5-3.5,3.5Z" />
                  </svg>
                  <p>2012 - Present</p>
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
                  {/* <img src="" alt="calendar alt" /> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="Layer_1"
                    data-name="Layer 1"
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                  >
                    <path d="M19.5,2h-1.5V.5c0-.28-.22-.5-.5-.5s-.5,.22-.5,.5v1.5H7V.5c0-.28-.22-.5-.5-.5s-.5,.22-.5,.5v1.5h-1.5C2.02,2,0,4.02,0,6.5v13c0,2.48,2.02,4.5,4.5,4.5h15c2.48,0,4.5-2.02,4.5-4.5V6.5c0-2.48-2.02-4.5-4.5-4.5Zm-8,7v4H7v-4h4.5Zm5.5,0v4h-4.5v-4h4.5Zm6,0v4h-5v-4h5ZM6,13H1v-4H6v4Zm-5,1H6v4H1v-4Zm6,0h4.5v4H7v-4Zm4.5,5v4H7v-4h4.5Zm1,0h4.5v4h-4.5v-4Zm0-1v-4h4.5v4h-4.5Zm5.5-4h5v4h-5v-4ZM4.5,3h15c1.93,0,3.5,1.57,3.5,3.5v1.5H1v-1.5c0-1.93,1.57-3.5,3.5-3.5ZM1,19.5v-.5H6v4h-1.5c-1.93,0-3.5-1.57-3.5-3.5Zm18.5,3.5h-1.5v-4h5v.5c0,1.93-1.57,3.5-3.5,3.5Z" />
                  </svg>
                  <p>2018 - 2020</p>
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
                  {/* <img src="" alt="calendar alt" /> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="Layer_1"
                    data-name="Layer 1"
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                  >
                    <path d="M19.5,2h-1.5V.5c0-.28-.22-.5-.5-.5s-.5,.22-.5,.5v1.5H7V.5c0-.28-.22-.5-.5-.5s-.5,.22-.5,.5v1.5h-1.5C2.02,2,0,4.02,0,6.5v13c0,2.48,2.02,4.5,4.5,4.5h15c2.48,0,4.5-2.02,4.5-4.5V6.5c0-2.48-2.02-4.5-4.5-4.5Zm-8,7v4H7v-4h4.5Zm5.5,0v4h-4.5v-4h4.5Zm6,0v4h-5v-4h5ZM6,13H1v-4H6v4Zm-5,1H6v4H1v-4Zm6,0h4.5v4H7v-4Zm4.5,5v4H7v-4h4.5Zm1,0h4.5v4h-4.5v-4Zm0-1v-4h4.5v4h-4.5Zm5.5-4h5v4h-5v-4ZM4.5,3h15c1.93,0,3.5,1.57,3.5,3.5v1.5H1v-1.5c0-1.93,1.57-3.5,3.5-3.5ZM1,19.5v-.5H6v4h-1.5c-1.93,0-3.5-1.57-3.5-3.5Zm18.5,3.5h-1.5v-4h5v.5c0,1.93-1.57,3.5-3.5,3.5Z" />
                  </svg>
                  <p>2020 - 2021</p>
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
                  {/* <img src="" alt="calendar alt" /> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="Layer_1"
                    data-name="Layer 1"
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                  >
                    <path d="M19.5,2h-1.5V.5c0-.28-.22-.5-.5-.5s-.5,.22-.5,.5v1.5H7V.5c0-.28-.22-.5-.5-.5s-.5,.22-.5,.5v1.5h-1.5C2.02,2,0,4.02,0,6.5v13c0,2.48,2.02,4.5,4.5,4.5h15c2.48,0,4.5-2.02,4.5-4.5V6.5c0-2.48-2.02-4.5-4.5-4.5Zm-8,7v4H7v-4h4.5Zm5.5,0v4h-4.5v-4h4.5Zm6,0v4h-5v-4h5ZM6,13H1v-4H6v4Zm-5,1H6v4H1v-4Zm6,0h4.5v4H7v-4Zm4.5,5v4H7v-4h4.5Zm1,0h4.5v4h-4.5v-4Zm0-1v-4h4.5v4h-4.5Zm5.5-4h5v4h-5v-4ZM4.5,3h15c1.93,0,3.5,1.57,3.5,3.5v1.5H1v-1.5c0-1.93,1.57-3.5,3.5-3.5ZM1,19.5v-.5H6v4h-1.5c-1.93,0-3.5-1.57-3.5-3.5Zm18.5,3.5h-1.5v-4h5v.5c0,1.93-1.57,3.5-3.5,3.5Z" />
                  </svg>
                  <p>2017 - 2018</p>
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
