// client\src\components\Skills\Frontend.jsx

import ReactIcon from "../../../../server/public/assets/icons/molecule.svg"; // eslint-disable-line
import SassIcon from "../../../../server/public/assets/icons/process.svg"; // eslint-disable-line

function Frontend() {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Développeur frontend</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <img src={ReactIcon} alt="badge check icon" />

            <div>
              <h3 className="skills__name">React</h3>
              <span className="skills__level">Intermédiaire</span>
            </div>
          </div>

          <div className="skills__data">
            <img src={SassIcon} alt="badge check icon" />

            <div>
              <h3 className="skills__name">SASS</h3>
              <span className="skills__level">Intermédiaire</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Frontend;
