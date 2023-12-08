import './styles/cv.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { TFunction } from "i18next";
import './styles/App.css';


export interface ITranslate {
  translate: TFunction
}

function CV({translate}: ITranslate) {

    const it_skills = translate('IT-ski-list', { returnObjects: true }) as string[];
    const language_skills = translate('lang-ski-list', { returnObjects: true }) as string[];
    const jobs = translate('jobs', { returnObjects: true }) as string[];
    const jobDescriptions = translate('jobdesc', { returnObjects: true }) as string[];

    const [showFullText, setShowFullText] = useState(Array(jobs.length).fill(false));

    const toggleReadMore = (index: number) => {
    const newShowFullText = [...showFullText];
    newShowFullText[index] = !newShowFullText[index];
    setShowFullText(newShowFullText);
    };

    return (
        <section id="cv">
        <div className="container pt-5">
        <div className="row mt-3">
        <h1 className="text-center">Curriculum Vitae</h1>
            <div className="col-lg-4">
                    <h2 className="text-center">{translate("work-exp")}</h2>
                        <div className="text">
                        <ul className="styled-list">
                            {jobs.map((job: string, index: number) => (
                            <li key={index}>
                                {showFullText[index] ? (
                                <span><strong>{job}</strong><br />{jobDescriptions[index]}</span>
                                ) : `${job.slice(0, job.length)}`}
                                <button onClick={() => toggleReadMore(index)}>
                                {showFullText[index] ? translate("read_less") : translate("read_more")}
                            </button>
                            </li>
                            ))}
                            </ul>
                        </div>
            </div>
            <div className="col-lg-4">
                <h2 className="text-center"> {translate("lang-ski")} </h2>
                    <div className="text">
                        <ul className="styled-list">
                            {language_skills.map((lang: string, index: number) => (
                                <li key={index}> {lang} </li>
                            ))
                            }
                        </ul>
                    </div>
            </div>
            <div className="col-lg-4">
                <h2 className="text-center"> {translate("IT-ski")} </h2>
                    <div className="text">
                        <ul className="styled-list">
                            {it_skills.map((it: string, index: number) => (
                                <li key={index}> {it} </li>
                            ))
                            }
                        </ul>
                    </div>
            </div>
            <div className="col lg-12"> 
            <h2 className="text-center"> {translate("cv_other_header")} </h2>
            <p className="about-font">
                {translate("cv_other")}
            </p>
            </div>
        </div>
        </div>
        </section>
    );
}

export default CV;
