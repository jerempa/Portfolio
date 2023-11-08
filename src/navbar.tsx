import './styles/navbar.css';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { TFunction } from "i18next";

import LanguageSwitcher from './languageswitch';

import React, { useState } from 'react';


export interface ITranslate {
  translate: TFunction
}

function NavBar({translate}: ITranslate) {

    const [isNavOpen, setIsNavOpen] = useState(false);

    const closeNavMenu = () => {
      setIsNavOpen(false);
    };
    return (
        <nav className="navbar navbar-expand-lg fixed-top navbarScroll" >
            <LanguageSwitcher />
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" style={{"position": "relative", "right": "13vw"}}>
                <span className="navbar-toggler-icon"></span>
            </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#home">{translate("homenav")}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#cv">CV</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#showcase">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a href="https://github.com/jerempa" target="_blank">
                                <FontAwesomeIcon icon={faGithub} style={{ position: "relative",  paddingTop: "1vh", fontSize: "40px", color: "#070709" }} />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="https://www.linkedin.com/in/jere-pankka-806003289/" target="_blank">
                                <FontAwesomeIcon icon={faLinkedin} style={{ position: "relative", paddingTop: "1vh", fontSize: "40px", color: "#0085AE" }} />
                            </a>
                        </li>
                    </ul>
                </div>
        </nav>
);
}

export default NavBar;