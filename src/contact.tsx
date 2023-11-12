import 'bootstrap/dist/css/bootstrap.min.css';
import { TFunction } from "i18next";

export interface ITranslate {
  translate: TFunction
}

function Contact({translate}: ITranslate) {

  return (
    <section id="contact">
      <div className="container pt-5">
      <div className="row mt-3">
        <h1 className="text-center"> Contact </h1>
        <div className="col-lg-6">
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum </p> 
        </div>
        <div className="col-lg-6">
            <form>
                <input type="text" className="form-control mt-3" placeholder="Name"/>
                <input type="email" className="form-control mt-3" placeholder="Email"/>
                <input type="text" className="form-control mt-3" placeholder="Subject"/>
                <div className="mb-3 mt-3">
                    <textarea className="form-control" id="comment" name="text" placeholder="Project Details"></textarea>
                </div>
            </form>
            <button type="button" className="btn btn-success mt-3" style={{"marginBottom": "3vh"}}>Contact Me</button>        </div>
      </div>
      </div>
    </section>
  );
}

export default Contact;
