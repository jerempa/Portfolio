import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import myImage from './IMG_20220219_180602 (1).jpg';

function About() {

  return (
    <section id="home">
      <h1 style={{  position: "relative", "left": "1350px", "top": "200px", fontSize: "60px"}}>About Me</h1>
      <div className="row">
        <div className="column" >
          <img src={myImage} className="imgabout" alt="" />
        </div>
        <div className="column">
            <p className="about-font">
                My name is Jere Pankka and I'm a M.Sc. Information and Service Management (ISM) student at Aalto University.
                Completing Information and Service Management as major and Computer Science as a minor
                in my Bachelor's degree has brought me strong expertise in business and data analysis as
                well as intermediate knowledge in software development. The basics have come through the degree
                , however programming as a hobby has brought most of my skillset. 
                Learnt technical skills include but are not limited to: 
            </p>
        </div>
      </div>
    </section>
  );
}

export default About;
