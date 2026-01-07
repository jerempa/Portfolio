import './styles/about.css';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import myImage from './images/IMG_20220219_180602 (1).jpg';
import { TFunction } from "i18next";
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

export interface ITranslate {
  translate: TFunction
}

function About({translate}: ITranslate) {
  const [showAaltoModal, setShowAaltoModal] = useState(false);
  const [showTampereModal, setShowTampereModal] = useState(false);

  const handleCloseAalto = () => setShowAaltoModal(false);
  const handleShowAalto = () => setShowAaltoModal(true);

  const handleCloseTampere = () => setShowTampereModal(false);
  const handleShowTampere = () => setShowTampereModal(true);

  return (
    <section id="home">
      <div className="container mt-4 pt-5">
        <div className="row mt-3">
          <div className="col-lg-12">
            <h3 className="text-center mb-4">{translate("about-header")}</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 mb-4">
            <img src={myImage} className="imgabout mb-3" alt="myself" />
            <div className="d-flex gap-2">
              <Button variant="outline-primary" size="sm" onClick={handleShowAalto} className="flex-grow-1">
                {translate("read_abstract")} (Aalto)
              </Button>
              <Button variant="outline-primary" size="sm" onClick={handleShowTampere} className="flex-grow-1">
                {translate("read_abstract")} (Tampere)
              </Button>
            </div>
          </div>
          <div className="col-lg-8 mb-4">
            <p className="about-font">
              {translate("about")}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <p className="about-font">
              {translate("about1")}
            </p>
          </div>
        </div>
        
        <div className="row mt-5">
          <div className="col-lg-12">
            <h3 className="text-center mb-4">Skills</h3>
          </div>
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="skill-section">
              <h4>Power BI</h4>
              <ul className="skill-list">
                <li>Data modeling (star/snowflake)</li>
                <li>Advanced DAX & optimization</li>
                <li>Formula & storage engine</li>
                <li>DAX Studio & Tabular Editor</li>
                <li>Development pipelines</li>
                <li>GitHub integration</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="skill-section">
              <h4>Data Engineering</h4>
              <ul className="skill-list">
                <li>Python (Pandas, NumPy, etc.)</li>
                <li>Apache Airflow</li>
                <li>AWS services</li>
                <li>SQL & NoSQL databases</li>
                <li>GitHub Actions</li>
                <li>CI/CD pipelines</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="skill-section">
              <h4>Development</h4>
              <ul className="skill-list">
                <li>Full stack (Django, Vue, React)</li>
                <li>Node.js & MongoDB</li>
                <li>React Native + Expo</li>
                <li>Bootstrap & CSS</li>
                <li>Iterative development</li>
                <li>QA & testing</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="skill-section">
              <h4>Core Knowledge</h4>
              <ul className="skill-list">
                <li>Machine learning & MLOps</li>
                <li>Project management</li>
                <li>Sustainable software engineering</li>
                <li>HCI & IoT</li>
                <li>Requirements engineering</li>
                <li>Git version control</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Modal show={showAaltoModal} onHide={handleCloseAalto} size="lg">
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body style={{ whiteSpace: 'pre-line' }}>
          {translate("aalto-abstract")}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAalto}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showTampereModal} onHide={handleCloseTampere} size="lg">
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body style={{ whiteSpace: 'pre-line' }}>
          {translate("tampere-abstract")}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseTampere}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
}

export default About;
