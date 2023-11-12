import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import { TFunction } from "i18next";

import Ravit from './images/Ravit.jpg';
import RA2 from './images/Rent_apartment_finder2.png';
import Kide from './images/Kideapp.jpg';

export interface ITranslate {
  translate: TFunction
}

function Card({translate}: ITranslate) {

  return (
    <div className="container">
        <h3 className="text-center">{translate("snapshots")}</h3>
        <div className="row"> 
        <div className="col-lg-4 mt-2">
            <div className="card" style={{"width": "100%", "height": "100%"}}>
                <img className="card-img-top" src={Ravit} alt="Ravit" style={{"width" :" 100%"}}/>
                <div className="card-body">
                    <h4 className="card-title">Ravit</h4>
                    <p className="card-text">{translate("ravit_desc")}</p>
                    <div className="text-center">
                        <a href="https://github.com/jerempa/Ravit" className="btn btn-success" target="_blank">Repository</a>
                    </div>
                </div>
            </div>
            </div>
            <div className="col-lg-4 mt-2">
            <div className="card" style={{"width": "100%", "height": "100%"}}>
                <img className="card-img-top" src={RA2} alt="Rentapartmentfinder" style={{"width" :" 100%"}}/>
                <div className="card-body">
                    <h4 className="card-title">Rent apartment finder</h4>
                    <p className="card-text">{translate("apartmentfinder_desc")}</p>
                    <div className="text-center">
                        <a href="https://github.com/jerempa/Rent-apartment-finder" className="btn btn-success" target="_blank">Repository</a>
                    </div>
                </div>
            </div>
            </div>
            <div className="col-lg-4 mt-2">
            <div className="card" style={{"width": "100%", "height": "100%"}}>
                <img className="card-img-top" src={Kide} alt="Kide" style={{"width" :" 100%"}}/>
                <div className="card-body">
                    <h4 className="card-title">Kide.app helper</h4>
                    <p className="card-text">{translate("kide_desc")}</p>
                    <div className="text-center" style={{"position": "relative"}}>
                        <a href="https://github.com/jerempa/Kideapphelper" className="btn btn-success" target="_blank">Repository</a>
                    </div>
                </div>
            </div>
            </div>
            </div>
    </div>

  );
}

export default Card;
