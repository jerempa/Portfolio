import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import Card from './cards';
import Carousel from './carousel';

import Pikis_jp from './images/Pikis_jp.jpg';
import Pikis_urheilu from './images/Pikis_urheilu.jpg';
import Pikis_hornet from './images/Pikis_hornet.jpg';


import { TFunction } from "i18next";


export interface ITranslate {
  translate: TFunction
}

function Showcase({translate}: ITranslate) {


    return (
        <section id="showcase">
        <div className="container pt-5"> 
        <div className="row mt-3"> 

                <h1 className="text-center">Portfolio</h1>
                <h2 className="text-center">{translate("articleheader")}</h2>
        </div>
             <div className="container" style= {{"paddingBottom": "3vh"}}>
        <div className="row"> 
        <div className="col-lg-4 mt-2">
            <div className="card" style={{"width": "100%", "height": "100%"}}>
                <img className="card-img-top" src={Pikis_jp} alt="Pikis_jp" style={{"width" :" 100%"}}/>
                <div className="card-body">
                    <h4 className="card-title">Arktisen koulutuksen kärkiosaaja 40 vuotta</h4>
                    <p className="card-text">Lapin jääkäripataljoonasta ja Rovaniemen ilmatorjuntapatteristosta muodostuva Jääkäriprikaati perustettiin 1.10.1979.</p>
                    <div className="text-center" style={{"position": "relative"}}>
                        <a href="https://ruotuvaki.fi/-/arktisen-koulutuksen-karkiosaaja-40-vuotta" className="btn btn-success" target="_blank">Link</a>
                    </div>
                </div>
            </div>
            </div>
            <div className="col-lg-4 mt-2">
            <div className="card" style={{"width": "100%", "height": "100%"}}>
                <img className="card-img-top" src={Pikis_urheilu} alt="Pikis_urheilu" style={{"width" :" 100%"}}/>
                <div className="card-body">
                    <h4 className="card-title">Vuoden 2019 ansioituneet sotilasurheilijat palkittiin</h4>
                    <p className="card-text">Puolustusvoimat palkitsi Säätytalolla vuoden 2019 sotilasurheilijoita ja muita sotilasurheilun toimijoita. Painijat nappasivat yksilöpalkinnot; Kainuun prikaati puolestaan loisti joukko-osastojen välisten palkintojen jaossa.</p>
                    <div className="text-center" style={{"position": "relative"}}>
                    <a href="https://ruotuvaki.fi/-/1951245/vuoden-2019-ansioituneet-sotilasurheilijat-palkittiin" className="btn btn-success" target="_blank"> Link</a>
                    </div>
                </div>
            </div>
            </div>
            <div className="col-lg-4 mt-2">
            <div className="card" style={{"width": "100%", "height": "100%"}}>
                <img className="card-img-top" src={Pikis_hornet} alt="Pikis_hornet" style={{"width" :" 100%"}}/>
                <div className="card-body">
                    <h4 className="card-title">Suomen ja Ruotsin ilmavoimien yhteistoimintaharjoitus</h4>
                    <p className="card-text">Yhteistyö länsinaapurin puolustusvoimien kanssa jatkaa konkretisoitumistaan ilmavoimien yhteisen harjoituksen myötä.</p>
                    <div className="text-center" style={{"position": "relative"}}>
                    <a href="https://ruotuvaki.fi/-/suomen-ja-ruotsin-ilmavoimat-yhdistavat-jalleen-voimansa" className="btn btn-success" target="_blank">Link</a>
                    </div>
                </div>
            </div>
            </div>
            </div>
    </div>
    <div className="container"> 
        <div className="row">
            <div className="col-lg-12">
                <h2 className="text-center"> {translate("prog")} </h2>
                    <p>
                        {translate("prog_text")} <a href="https://github.com/jerempa/Portfolio" target="_blank">Portfolio-repo</a>
                    </p>
            </div>
        </div>
    </div>
        <Card translate = {translate}/>
        <Carousel />
        </div>
        </section>
    );
}

export default Showcase;
