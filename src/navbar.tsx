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

    const [expanded, setExpanded] = useState(false);

    const closeNavMenu = () => {
        setExpanded(false);
      };
    return (
        <nav className="navbar navbar-expand-lg fixed-top navbarScroll">
            <LanguageSwitcher />
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" style={{"marginRight": "3vw"}} onClick={() => setExpanded(!expanded)}>
                <span className="navbar-toggler-icon"></span>
            </button>
                <div className={`collapse navbar-collapse ${expanded ? 'show' : ''}`} id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#home" onClick={() => closeNavMenu()}>{translate("homenav")}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#cv" onClick={() => closeNavMenu()}>CV</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#showcase" onClick={() => closeNavMenu()}>Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact" onClick={() => closeNavMenu()}>{translate("contact")}</a>
                        </li>
                        <li className="nav-item">
                            <a href="https://github.com/jerempa" target="_blank" onClick={() => closeNavMenu()}>
                                <FontAwesomeIcon icon={faGithub} style={{ position: "relative",  paddingTop: "0.5vh", fontSize: "40px", color: "#070709" }} />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="https://www.linkedin.com/in/jere-pankka-806003289/" target="_blank" onClick={() => closeNavMenu()}>
                                <FontAwesomeIcon icon={faLinkedin} style={{ position: "relative", paddingTop: "0.5vh", fontSize: "40px", color: "#0085AE" }} />
                            </a>
                        </li>
                    </ul>
                </div>
        </nav>
);
}

export default NavBar;