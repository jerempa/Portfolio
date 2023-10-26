import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function Showcase() {


    return (
        <section id="showcase">
        <div className="container mt-5 pt-5">
            <div className="row">
                <div className="col-lg-10">
                    <h1 className="text-left">Showcase</h1>
                        <h2 className="experience">Articles written for Ruotuväki online</h2>
                            <div className="cv-font">
                                <ul>
                                    <li> <a href="https://ruotuvaki.fi/-/arktisen-koulutuksen-karkiosaaja-40-vuotta" target="_blank">Arktisen koulutuksen kärkiosaaja 40 vuotta</a> </li>
                                    <li> <a href="https://ruotuvaki.fi/-/1951245/vuoden-2019-ansioituneet-sotilasurheilijat-palkittiin" target="_blank">Vuoden 2019 ansioituneet sotilasurheilijat palkittiin</a> </li>
                                    <li> <a href="https://ruotuvaki.fi/-/suomen-ja-ruotsin-ilmavoimat-yhdistavat-jalleen-voimansa" target="_blank">Suomen ja Ruotsin ilmavoimien yhteistoimintaharjoitus</a> </li>
                                </ul>
                            </div>
                </div>
                <div className="col-lg-10">
                    <h2 className="programming"> Programming </h2>
                    <p className="programming-font">
                        The project I have done both with Python and JavaScript can be found on my <a href="https://github.com/jerempa" target="_blank">Github</a>.
                        There are projects that are related to course tasks but most of them are hobby projects of different sizes. The Python projects are mostly built from scratch
                        by myself (including help from Stackoverflow and such) and one JS project is based on source code by other people. The source code for this portfolio
                        can be found <a href="https://github.com/jerempa/Portfolio" target="_blank">here</a>.
                    </p>
                </div>
                <div className="col-lg-12">
                    <h2 style={{ position: "relative", left: "375px", top: "-220px", fontSize: "50px" }}> Snapshots </h2>
                </div>
            </div>
        </div>
        </section>
    );
}

export default Showcase;
