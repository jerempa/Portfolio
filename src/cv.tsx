import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { TFunction } from "i18next";

export interface ITranslate {
  translate: TFunction
}

function CV({translate}: ITranslate) {

    const it_skills = translate('IT-ski-list', { returnObjects: true });
    const language_skills = translate('lang-ski-list', { returnObjects: true });
    const jobs = translate('jobs', { returnObjects: true });
    const jobDescriptions = translate('jobdesc', { returnObjects: true });

      const [showFullText, setShowFullText] = useState(Array(jobs.length).fill(false));

      const toggleReadMore = (index: number) => {
        const newShowFullText = [...showFullText];
        newShowFullText[index] = !newShowFullText[index];
        setShowFullText(newShowFullText);
      };

    return (
        <section id="cv">
        <h1 style={{  position: "relative", "left": "35vw", fontSize: "22px", "paddingTop": "10vh"}}>Curriculum Vitae</h1>
        <div className="row">
            <div className="column">
                    <h2 className="header">{translate("work-exp")}</h2>
                        <div className="text">
                        <ul>
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
            <div className="column">
                <h2 className="header"> {translate("lang-ski")} </h2>
                    <div className="text">
                        <ul>
                            {language_skills.map((lang: string, index: number) => (
                                <li key={index}> {lang} </li>
                            ))
                            }
                        </ul>
                    </div>
            </div>
            <div className="column">
                <h2 className="header"> {translate("IT-ski")} </h2>
                    <div className="text">
                        <ul>
                            {it_skills.map((it: string, index: number) => (
                                <li key={index}> {it} </li>
                            ))
                            }
                        </ul>
                    </div>
            </div>
        </div>
        </section>
    );
}

export default CV;
