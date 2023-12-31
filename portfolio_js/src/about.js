import './App.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import myImage from './IMG_20220219_180602 (1).jpg';


function About() {

  return (
    <section id="home">
      <h1 style={{  position: "relative", "left": "1350px", "top": "150px", fontSize: "60px"}}>About Me</h1>
      <div class="row">
        <div class="column" >
          <img src={myImage} class="imgabout" alt="" />
        </div>
        <div class="column">
            <p class="about-font">
                My name is Jere Pankka and I'm a M.Sc. Information and Service Management (ISM) student at Aalto University.
                Completing Information and Service Management as major and Computer Science as a minor
                in my Bachelor's degree has brought me strong expertise in business and data analysis as
                well as intermediate knowledge in web development. The basics have come through the degree
                , however programming as a hobby has brought most of my skillset. I'm eager to learn more about new technologies and being able to work
                with data. 
                Learnt technical skills include but are not limited to:
            </p>
                <table style={{position: "relative", "left": "-400px", "top": "150px"}}>
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
    </section>
  );
}

export default About;
