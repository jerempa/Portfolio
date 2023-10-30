import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TFunction } from "i18next";

import Ravit from './Ravit.jpg';
import RA2 from './Rent_apartment_finder2.png';
import Kide from './Kideapp.jpg';

export interface ITranslate {
  translate: TFunction
}

function Card({translate}: ITranslate) {

  return (
    <div className="container mt-3">
        <div className="row"> 
        <div className="col-lg-4 mt-4">
            <div className="card" style={{"width": "100%", "height": "100%"}}>
                <img className="card-img-top" src={Ravit} alt="Ravit" style={{"width" :" 100%"}}/>
                <div className="card-body">
                    <h4 className="card-title">Ravit</h4>
                    <p className="card-text">Program made with React and TypeScript that is an electronic version of the drinking game called Ravit.</p>
                    <div className="text-center">
                        <a href="https://github.com/jerempa/Ravit" className="btn btn-success" target="_blank">Repository</a>
                    </div>
                </div>
            </div>
            </div>
            <div className="col-lg-4 mt-4">
            <div className="card" style={{"width": "100%", "height": "100%"}}>
                <img className="card-img-top" src={RA2} alt="Rentapartmentfinder" style={{"width" :" 100%"}}/>
                <div className="card-body">
                    <h4 className="card-title">Rent apartment finder</h4>
                    <p className="card-text">Python program that searches apartments from Oikotie based on criteria given.</p>
                    <div className="text-center">
                        <a href="https://github.com/jerempa/Rent-apartment-finder" className="btn btn-success" target="_blank">Repository</a>
                    </div>
                </div>
            </div>
            </div>
            <div className="col-lg-4 mt-4">
            <div className="card" style={{"width": "100%", "height": "100%"}}>
                <img className="card-img-top" src={Kide} alt="Kide" style={{"width" :" 100%"}}/>
                <div className="card-body">
                    <h4 className="card-title">Kide.app helper</h4>
                    <p className="card-text">Python program for buying tickets from Kide.app. Has both auto-clicker version done with Selenium as well as API version done with requests and bs4.</p>
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
