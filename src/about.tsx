import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import myImage from './IMG_20220219_180602 (1).jpg';

function About() {

  return (
    <section id="home">
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-lg-10">
            <img src={myImage} className="img" alt="" />
          </div>
          <div className="col-lg-12">
            <h1 className="text-left">About Me</h1>
            <p className="about-font">
                My name is Jere Pankka and I'm a M.Sc. Information and Service Management (ISM) student at Aalto University.
                Completing Information and Service Management as major and Computer Science as a minor
                in my Bachelor's degree has brought me strong expertise in business and data analysis as
                well as intermediate knowledge in software development. The basics have come through the degree
                , however programming as a hobby has brought most of my skillset. 
                Learnt technical skills include but are not limited to: 
            </p>
            <div className="row mt-3">
              <div className="col-md-12">
                <table>
                    <tr>
                        <th>Python</th>
                        <th>Full stack development</th>
                        <th>Other</th>
                    </tr>
                    <tr>
                        <td>Pandas, Numpy</td>
                        <td>React, Redux</td>
                        <td>SQL</td>
                    </tr>
                    <tr>
                        <td>Scikit-learn, Matplotlib</td>
                        <td>Node.js</td>
                        <td>Power BI</td>
                    </tr>
                    <tr>
                        <td>Requests, Beautiful Soup etc.</td>
                        <td>MongoDB etc.</td>
                        <td>Project management etc.</td>
                    </tr>
                </table>
              </div>
            </div>
            <div className="row mt-3">
              <p className="about-font">
                I'm eager to learn more about new technologies and being able to work
                with data. Therefore, I'm hoping I can pursue a career as a data analyst or 
                a software developer. I'm at the right track as I'm working as
                a Power BI analyst and hopefully I'm able to gain more responsibility and diversify
                my work tasks as my studies are coming to an end in a couple of years.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
