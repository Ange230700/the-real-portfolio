// client\src\components\Skills\Backend.jsx

import MySqlIcon from "../../../../server/public/assets/icons/mysql.svg"; // eslint-disable-line
import NodeIcon from "../../../../server/public/assets/icons/nodejs.svg"; // eslint-disable-line
import ExpressIcon from "../../../../server/public/assets/icons/icons8-express-js.svg"; // eslint-disable-line

function Backend() {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Développeur backend</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <img src={MySqlIcon} alt="badge check icon" />

            <div>
              <h3 className="skills__name">MySQL</h3>
              <span className="skills__level">Intermédiaire</span>
            </div>
          </div>

          <div className="skills__data">
            <img src={NodeIcon} alt="badge check icon" />

            <div>
              <h3 className="skills__name">Node</h3>
              <span className="skills__level">Intermédiaire</span>
            </div>
          </div>

          <div className="skills__data">
            <img src={ExpressIcon} alt="badge check icon" />

            <div>
              <h3 className="skills__name">Express</h3>
              <span className="skills__level">Intermédiaire</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Backend;
