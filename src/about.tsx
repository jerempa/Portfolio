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
      <div className="container">
      <div className="row mt-4">
        <div className="col-lg-4">
          <img src={myImage} className="imgabout" alt="" style={{"zIndex": -2}} />
        </div>
        <div className="col-lg-8">
        <h1 style={{  position: "relative", "left": "25vw", "top": "7vh", fontSize: "1.375em"}}>{translate("about-header")}</h1>
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
                        <td>React.js, Redux,</td>
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
                <p style={{"position": "relative", "top": "2vh", "fontSize": "1.125em"}}>
                {translate("about1")}
              </p>
        </div>
      </div>
      </div>
    </section>
  );
}

export default About;
