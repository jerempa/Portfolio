import './styles/navbar.css';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer({}) {

    return (
        <footer id="footer" style={{textAlign: "center"}}>
            <div className="container-fluid">
                <div className="social-icons mt-4">
                <a href="https://github.com/jerempa" target="_blank"><FontAwesomeIcon icon={faGithub} style={{fontSize: "2.5em", color: "#070709", marginRight: "5px"}}/></a>
                    <a href="https://www.linkedin.com/in/jere-pankka-806003289/" target="_blank"><FontAwesomeIcon icon={faLinkedin} style={{fontSize: "2.5em", color: "#0085AE", marginRight: "5px"}}/></a>
                </div>
            </div>
        </footer>
);
}

export default Footer;