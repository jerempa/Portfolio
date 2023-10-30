import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './cards';

import Ravit from './Ravit.jpg';
import RA1 from './Rent_apartment_finder1.png';
import RA2 from './Rent_apartment_finder2.png';
import RA3 from './Rent_apartment_finder3.png';

import { TFunction } from "i18next";


export interface ITranslate {
  translate: TFunction
}

function Showcase({translate}: ITranslate) {


    return (
        <section id="showcase">
        <h1 style={{  position: "relative", "left": "35vw", fontSize: "22px", paddingTop: "10vh"}}>{translate("showcase")}</h1>
        <div className="row">
            <div className="column">
                    <h2 className="header">{translate("articleheader")}</h2>
                        <div className="text">
                            <ul>
                                <li> <a href="https://ruotuvaki.fi/-/arktisen-koulutuksen-karkiosaaja-40-vuotta" target="_blank">Arktisen koulutuksen kärkiosaaja 40 vuotta</a> </li>
                                <li> <a href="https://ruotuvaki.fi/-/1951245/vuoden-2019-ansioituneet-sotilasurheilijat-palkittiin" target="_blank">Vuoden 2019 ansioituneet sotilasurheilijat palkittiin</a> </li>
                                <li> <a href="https://ruotuvaki.fi/-/suomen-ja-ruotsin-ilmavoimat-yhdistavat-jalleen-voimansa" target="_blank">Suomen ja Ruotsin ilmavoimien yhteistoimintaharjoitus</a> </li>
                            </ul>
                        </div>
            </div>
        </div>
        <div className="row">
            <div className="column">
                <h2 className="header"> {translate("prog")} </h2>
                    <p className="text">
                        {translate("prog_text")} <a href="https://github.com/jerempa/Portfolio" target="_blank">Portfolio-repo</a>
                    </p>
            </div>
        </div>
        <Card translate = {translate}/>
        </section>
    );
}

export default Showcase;
