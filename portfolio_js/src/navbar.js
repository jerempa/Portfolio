import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function NavBar() {
    return (
    <nav class="navbar navbar-expand-lg fixed-top navbarScroll">
    <div class="container">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#home">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#cv">CV</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#showcase">Showcase</a>
                </li>
                <li class="nav-item">
                    <a href="https://github.com/jerempa" target="_blank">
                    <FontAwesomeIcon icon={faGithub} style={{position: "relative", paddingLeft: "20px", fontSize: "80px", color:"#070709"}}/>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="https://www.linkedin.com/in/jere-pankka-806003289/" target="_blank"> 
                        <FontAwesomeIcon icon={faLinkedin} style={{position: "relative", paddingLeft: "20px", fontSize: "80px", color: "#0085AE"}}/>
                    </a>
                </li>
            </ul>
            
        </div>
    </div>
</nav>
);
}

export default NavBar;