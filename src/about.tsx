import './styles/about.css';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import myImage from './images/IMG_20220219_180602 (1).jpg';
import presentationPdf from './images/presentation.pdf';
import { TFunction } from "i18next";
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

export interface ITranslate {
  translate: TFunction
}

function About({translate}: ITranslate) {
  const [showAaltoModal, setShowAaltoModal] = useState(false);
  const [showTampereModal, setShowTampereModal] = useState(false);
  
  // Obfuscated URLs (Base64)
  const baseId = "aHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xa2pNY2RrWF96OEZsTW8zMF81UUs2dm9WS2N3cnZ5ZzEvcHJldmlldw==";
  const decodeUrl = (str: string) => atob(str);

  const [videoSrc, setVideoSrc] = useState(decodeUrl(baseId));

  const handleJump = (timestamp: string) => {
    setVideoSrc(`${decodeUrl(baseId)}?t=${timestamp}&start=1`);
  };

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

        <div className="row mt-4">
          <div className="col-lg-12">
            <h4 className="mb-3">{translate("behavioral-pres-header")}</h4>
            <p className="about-font mb-4">
              {translate("behavioral-pres-intro")}
              <a href={presentationPdf} download="presentation.pdf" className="text-primary text-decoration-underline">
                {translate("here")}
              </a>. {translate("powerbi-embed-link")} <a href="#portfolio" className="text-primary text-decoration-underline">{translate("here")}</a>.
            </p>
            
            <div className="row">
              {/* Left Column: Shortcuts */}
              <div className="col-lg-4 mb-4">
                <p className="fw-bold mb-3">{translate("pres-skip-text")}</p>
                
                <div className="pe-lg-3">
                  <div className="mb-4">
                    <h6 className="fw-bold text-primary">{translate("pres-pull-header")}</h6>
                    <div className="d-grid gap-2">
                      <Button variant="outline-primary" size="sm" className="text-start" onClick={() => handleJump("5m33s")}>
                        {translate("pres-pull-btn1")}
                      </Button>
                      <Button variant="outline-primary" size="sm" className="text-start" onClick={() => handleJump("10m44s")}>
                        {translate("pres-pull-btn2")}
                      </Button>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h6 className="fw-bold text-primary">{translate("pres-be-header")}</h6>
                    <div className="d-grid gap-2">
                      <Button variant="outline-primary" size="sm" className="text-start" onClick={() => handleJump("15m07s")}>
                        {translate("pres-be-btn1")}
                      </Button>
                      <Button variant="outline-primary" size="sm" className="text-start" onClick={() => handleJump("21m26s")}>
                        {translate("pres-be-btn2")}
                      </Button>
                      <Button variant="outline-primary" size="sm" className="text-start" onClick={() => handleJump("29m15s")}>
                        {translate("pres-be-btn3")}
                      </Button>
                      <Button variant="outline-primary" size="sm" className="text-start" onClick={() => handleJump("33m34s")}>
                        {translate("pres-be-btn4")}
                      </Button>
                      <Button variant="outline-primary" size="sm" className="text-start" onClick={() => handleJump("35m10s")}>
                        {translate("pres-be-btn5")}
                      </Button>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h6 className="fw-bold text-primary">{translate("pres-kpi-header")}</h6>
                    <div className="d-grid gap-2">
                      <Button variant="outline-primary" size="sm" className="text-start" onClick={() => handleJump("39m52s")}>
                        {translate("pres-kpi-btn1")}
                      </Button>
                      <Button variant="outline-primary" size="sm" className="text-start" onClick={() => handleJump("41m57s")}>
                        {translate("pres-kpi-btn2")}
                      </Button>
                      <Button variant="outline-primary" size="sm" className="text-start" onClick={() => handleJump("47m01s")}>
                        {translate("pres-kpi-btn3")}
                      </Button>
                      <Button variant="outline-primary" size="sm" className="text-start" onClick={() => handleJump("49m06s")}>
                        {translate("pres-kpi-btn4")}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Video */}
              <div className="col-lg-8 mb-4">
                <div className="ratio ratio-4x3 shadow-sm rounded overflow-hidden h-100" style={{ backgroundColor: '#000', border: '1px solid #dee2e6', position: 'relative' }}>
                  <iframe 
                    src={videoSrc} 
                    style={{ border: 'none' }}
                    title="Behavioral Economics Presentation"
                    allowFullScreen
                    sandbox="allow-scripts allow-same-origin allow-forms"
                    allow="autoplay"
                  ></iframe>
                  {/* Visual mask to hide the Google Drive top bar and its 'Open in window' button */}
                  <div style={{ 
                    position: 'absolute', 
                    top: 0, 
                    right: 0, 
                    width: '100%', 
                    height: '52px', 
                    backgroundColor: '#000', 
                    zIndex: 10,
                    pointerEvents: 'auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <span style={{ color: '#fff', fontSize: '13px', fontWeight: 'bold', opacity: 0.8 }}>
                      {translate("behavioral-pres-header")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="portfolio" className="row mt-5">
          <div className="col-lg-12">
            <h3 className="text-center mb-4">{translate("portfolio-header")}</h3>
            <p className="about-font mb-4">
              {translate("portfolio-intro")} <strong>{translate("portfolio-wip")}</strong> {translate("portfolio-fullscreen-tip")}
            </p>
            <div className="d-flex justify-content-center mb-4">
              <div style={{ 
                backgroundColor: '#ffffff', 
                padding: '10px', 
                borderRadius: '6px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}>
                <iframe 
                  title="portfolio_file" 
                  width="1280" 
                  height="808" 
                  src="https://app.powerbi.com/view?r=eyJrIjoiNzRjNjE4ODEtNWY0OC00MzgzLTg3OWEtN2EyODJkMzU3MzVhIiwidCI6ImZhNjk0NGFmLWNjN2MtNGNkOC05MTU0LWMwMTEzMjc5ODkxMCIsImMiOjl9" 
                  frameBorder="0"
                ></iframe>
              </div>
            </div>
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
