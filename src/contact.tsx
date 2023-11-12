import 'bootstrap/dist/css/bootstrap.min.css';
import { TFunction } from "i18next";
import React from 'react';
import {useState} from 'react';
import { Alert } from 'react-bootstrap'

export interface ITranslate {
    translate: TFunction
  }

  interface ContactProps extends ITranslate {
    onSubmit: (data: UserData) => void;
  }


export interface UserData {
    name: string;
    email: string;
    subject: string;
    details: string;
}

export const Contact = ({ translate, onSubmit }: ContactProps) => {
    const [formData, setFormData] = React.useState<UserData>({ name: '', email: '', subject: '', details: '' });
    const [message, setMessage] = useState("");

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
      }
    
      function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        onSubmit(formData);
        setFormData({ ...formData, 'name': '', 'email': '', 'subject': '', 'details': '' });
        setMessage(translate('success_msg'))
        setTimeout(() => {
          setMessage('')
        }, 5000)
      }


  return (
    <section id="contact">
      <div className="container pt-5">
      <div className="row mt-3">
        <h1 className="text-center"> {translate("contact")} </h1>
        <div className="col-lg-6">
            <p> {translate('form_desc')}</p>
            {(message &&
                <Alert variant="success">
                {message}
                </Alert>
                )}   
        </div>
        <div className="col-lg-6">
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" className="form-control" placeholder={translate('form_name')} value={formData.name} onChange={handleInputChange}/>
                <input type="email" name="email" className="form-control mt-3" placeholder="Email" value={formData.email} onChange={handleInputChange} />
                <input type="text" name="subject" className="form-control mt-3" placeholder={translate('form_subject')} value={formData.subject} onChange={handleInputChange} />
                <input type="text" name="details" className="form-control mt-3" placeholder={translate('form_details')} value={formData.details} onChange={handleInputChange} />
                <button type="submit" className="btn btn-success mt-3" style={{"marginBottom": "3vh"}}>{translate("contact")}</button>     
            </form>
            </div>
      </div>
      </div>
    </section>
  );
}

