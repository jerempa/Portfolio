import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Ravit from './Ravit.jpg';
import RA1 from './Rent_apartment_finder1.png';
import RA2 from './Rent_apartment_finder2.png';
import RA3 from './Rent_apartment_finder3.png';

function Showcase() {


    return (
        <section id="showcase">
        <h1 style={{  position: "relative", "left": "950px", fontSize: "60px", paddingTop: "100px"}}>Showcase</h1>
        <div class="row">
            <div class="column">
                    <h2 class="header">Articles written for Ruotuväki online</h2>
                        <div class="text">
                            <ul>
                                <li> <a href="https://ruotuvaki.fi/-/arktisen-koulutuksen-karkiosaaja-40-vuotta" target="_blank">Arktisen koulutuksen kärkiosaaja 40 vuotta</a> </li>
                                <li> <a href="https://ruotuvaki.fi/-/1951245/vuoden-2019-ansioituneet-sotilasurheilijat-palkittiin" target="_blank">Vuoden 2019 ansioituneet sotilasurheilijat palkittiin</a> </li>
                                <li> <a href="https://ruotuvaki.fi/-/suomen-ja-ruotsin-ilmavoimat-yhdistavat-jalleen-voimansa" target="_blank">Suomen ja Ruotsin ilmavoimien yhteistoimintaharjoitus</a> </li>
                            </ul>
                        </div>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <h2 class="header"> Programming </h2>
                    <p class="text">
                        The project I have done both with Python and JavaScript can be found on my <a href="https://github.com/jerempa" target="_blank">Github</a>.
                        There are projects that are related to course tasks but most of them are hobby projects of different sizes. The Python projects are mostly built from scratch
                        by myself (including help from Stackoverflow and such) and one JS project is based on source code by other people. The source code for this portfolio
                        can be found <a href="https://github.com/jerempa/Portfolio" target="_blank">here</a>.
                    </p>
            </div>
        </div>
        <div class="row">
            <h2 style={{position: "relative", fontSize: "50px", paddingLeft: "40px"}}> Snapshots </h2>
            <div class="column">
                <img src={Ravit} style={{position: "relative", paddingLeft: "30px"}} alt="" />
                <figcaption style={{position: "relative", fontSize: "30px", paddingLeft: "30px" }}>Fig 1. Drinking game "Ravit". Source code can be found <a href="https://github.com/jerempa/Ravit" target="_blank">here</a>.</figcaption>
            </div>
        </div>
        <div class="row">
            <div class="column"> 
                <img src={RA1}  alt="RA1" style={{width: "100%", height: "700px", paddingLeft: "30px"}}/>
            </div>
            <div class="column">  
                <img src={RA2}  alt="RA2" style={{width: "100%", height: "700px", paddingLeft: "30px"}} />
            </div>
            <div class="column"> 
                <img src={RA3}  alt="RA3"  style={{width: "100%", height: "700px", paddingLeft: "30px"}}/>
            </div>
            <figcaption style={{position: "relative", fontSize: "30px", paddingLeft: "40px" }}>Fig 2, 3 and 4. Python program for finding apartments from Oikotie. Source code can be found <a href="https://github.com/jerempa/Rent-apartment-finder" target="_blank">here</a>.</figcaption>
        </div>
        </section>
    );
}

export default Showcase;
