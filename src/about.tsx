import './styles/about.css';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import myImage from './images/IMG_20220219_180602 (1).jpg';
import { TFunction } from "i18next";

export interface ITranslate {
  translate: TFunction
}

function About({translate}: ITranslate) {

  return (
    <section id="home">
      <div className="container mt-4 pt-4">
      <div className="row mt-4">
        <div className="col-lg-4">
          <img src={myImage} className="imgabout" alt="" style={{"zIndex": -1}} />
        </div>
        <div className="col-lg-8">
        <h3 className="text-center">{translate("about-header")}</h3>
            <p className="about-font">
              {translate("about")}
            </p>
                <table className="styled-table">
                  <thead>
                    <tr>
                        <th>Python</th>
                        <th>Full stack development</th>
                        <th>Other</th>
                    </tr>
                  </thead>
                  <tbody> 
                    <tr>
                        <td>Pandas, Numpy,</td>
                        <td>React.js, HTML, CSS</td>
                        <td>SQL,</td>
                    </tr>
                    <tr>
                        <td>Scikit-learn, Matplotlib,</td>
                        <td>Node.js,</td>
                        <td>Power BI,</td>
                    </tr>
                    <tr>
                        <td>Requests, Beautiful Soup etc.</td>
                        <td>MongoDB etc.</td>
                        <td>Project management etc.</td>
                    </tr>
                  </tbody>
                </table>
                <p style={{"fontSize": "1.125em"}}>
                {translate("about1")}
              </p>
        </div>
      </div>
      </div>
    </section>
  );
}

export default About;
