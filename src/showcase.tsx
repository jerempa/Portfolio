import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Ravit from './Ravit.jpg';
import RA1 from './Rent_apartment_finder1.png';
import RA2 from './Rent_apartment_finder2.png';
import RA3 from './Rent_apartment_finder3.png';

function Showcase() {


    return (
        <section id="showcase">
        <h1 style={{  position: "relative", "left": "35vw", fontSize: "22px", paddingTop: "10vh"}}>Showcase</h1>
        <div className="row">
            <div className="column">
                    <h2 className="header">Articles written for Ruotuväki online</h2>
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
                <h2 className="header"> Programming </h2>
                    <p className="text">
                        The project I have done both with Python and JavaScript can be found on my <a href="https://github.com/jerempa" target="_blank">Github</a>.
                        There are projects that are related to course tasks but most of them are hobby projects of different sizes. The Python projects are mostly built from scratch
                        by myself (including help from Stackoverflow and such) and one JS project is based on source code by other people. The source code for this portfolio
                        can be found <a href="https://github.com/jerempa/Portfolio" target="_blank">here</a>.
                    </p>
            </div>
        </div>
        <div className="row">
            <h2 style={{position: "relative", fontSize: "22px", paddingLeft: "1.5vw"}}> Snapshots </h2>
            <div className="column">
                <img src={Ravit} style={{position: "relative", width: "90%", height: "90%", paddingLeft: "1vw"}} alt="" />
                <figcaption style={{position: "relative", fontSize: "18px", paddingLeft: "1vw" }}>Fig 1. Drinking game "Ravit". Source code can be found <a href="https://github.com/jerempa/Ravit" target="_blank">here</a>.</figcaption>
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
            <figcaption style={{position: "relative", fontSize: "18px", paddingLeft: "1.5vw" }}>Fig 2, 3 and 4. Python program for finding apartments from Oikotie. Source code can be found <a href="https://github.com/jerempa/Rent-apartment-finder" target="_blank">here</a>.</figcaption>
        </div>
        </section>
    );
}

export default Showcase;
