import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
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
        <div className="row">
            <h2 style={{position: "relative", fontSize: "22px", paddingLeft: "1.5vw"}}> {translate("snapshots")} </h2>
            <div className="column">
                <img src={Ravit} style={{position: "relative", width: "90%", height: "90%", paddingLeft: "1vw"}} alt="" />
                <figcaption style={{position: "relative", fontSize: "18px", paddingLeft: "1vw" }}>{translate("fig1_desc")} <a href="https://github.com/jerempa/Ravit" target="_blank">Repo</a>.</figcaption>
            </div>
        </div>
        <div className="row" style={{paddingTop: "4vh"}}>
            <div className="column"> 
                <img src={RA1}  alt="RA1" style={{position: "relative", width: "100%", height: "100%", paddingLeft: "1vw"}}/>
            </div>
            <div className="column">  
                <img src={RA2}  alt="RA2" style={{position: "relative", width: "100%", height: "100%", paddingLeft: "1vw"}} />
            </div>
            <div className="column"> 
                <img src={RA3}  alt="RA3"  style={{position: "relative", width: "100%", height: "100%", paddingLeft: "1vw"}}/>
            </div>
            <figcaption style={{position: "relative", fontSize: "18px", paddingLeft: "1.5vw" }}>{translate("fig2_desc")} <a href="https://github.com/jerempa/Rent-apartment-finder" target="_blank">Ravit-repo</a>.</figcaption>
        </div>
        </section>
    );
}

export default Showcase;
