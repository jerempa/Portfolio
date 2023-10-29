import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function NavBar() {
    return (
    <nav className="navbar navbar-expand-lg fixed-top navbarScroll">
    <div className="container">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#home">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#cv">CV</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#showcase">Showcase</a>
                </li>
                <li className="nav-item">
                    <a href="https://github.com/jerempa" target="_blank">
                    <FontAwesomeIcon icon={faGithub} style={{position: "relative", paddingLeft: "1vw", fontSize: "40px", color:"#070709"}}/>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="https://www.linkedin.com/in/jere-pankka-806003289/" target="_blank"> 
                        <FontAwesomeIcon icon={faLinkedin} style={{position: "relative", paddingLeft: "1vw", fontSize: "40px", color: "#0085AE"}}/>
                    </a>
                </li>
            </ul>
            
        </div>
    </div>
</nav>
);
}

export default NavBar;