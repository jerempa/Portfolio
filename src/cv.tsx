import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';


function CV() {

    const jobs = [
      'Alma Talent Oy (18.2.2022-)',
      'Fazer Leipomot Oy (14.4.2020-5.8.2022)',
      'Finnish Defence Forces (4.9.2020-11.3.2020)',
      "Mediatalo ESA (22.5.2019-20.5.2019)",
      "Vierumäki Golf Club Oy (4.6.2018-12.8.2018)"
    ];

    const jobDescriptions = [
        'Spent the first 14 months processing and making adjustments to financial statements. Since 5/2023 I have been working on a PBI project. The current work assignment has brought me a lot of responsibilities as I have been in charge of it: project management, scheduling interviews with customers and conducting them with my colleagues, the development of the Power BI environment, collecting feedback of the environment etc.',
        'Full-time employee: 4/2020-8/2020 and 6/2021-8/2021 & Part-time employee: 8/2020-5/2021 and 8/2021-8/2022',
        'Doing my military service in Ruotuväki, the official newspaper of the Finnish Defence Forces. Working as a customer servant and representing Ruotuväki in different events, such as Studia. Furthermore, I wrote articles, news and columns for the website and print.',
        'Worked as a paperboy doing night shifts.',
        'Golf related tasks such as collecting golf balls from the driving range.'
      ];

      const [showFullText, setShowFullText] = useState(Array(jobs.length).fill(false));

      const toggleReadMore = (index: number) => {
        const newShowFullText = [...showFullText];
        newShowFullText[index] = !newShowFullText[index];
        setShowFullText(newShowFullText);
      };

    return (
        <section id="cv">
        <h1 style={{  position: "relative", "left": "950px", fontSize: "60px"}}>Curriculum Vitae</h1>
        <div className="row">
            <div className="column">
                    <h2 className="experience">Work experience</h2>
                        <div className="cv-font">
                        <ul>
                            {jobs.map((job, index) => (
                            <li key={index}>
                                {showFullText[index] ? (
                                <span><strong>{job}</strong><br />{jobDescriptions[index]}</span>
                                ) : `${job.slice(0, job.length)}`}
                                <button onClick={() => toggleReadMore(index)}>
                                {showFullText[index] ? 'Read Less' : 'Read More'}
                            </button>
                            </li>
                            ))}
                            </ul>
                        </div>
            </div>
            <div className="column">
                <h2 className="language"> Language skills </h2>
                    <div className="language-font">
                        <ul>
                            <li> Finnish (Mother tongue) </li>
                            <li> English (Excellent) </li>
                            <li> Swedish (Satisfactory) </li>
                            <li> French (Basics) </li>
                        </ul>
                    </div>
            </div>
            <div className="column">
                <h2 className="it"> IT skills </h2>
                    <div className="it-font">
                        <ul>
                            <li> Microsoft Office (Excellent) </li>
                            <li> Power BI (Excellent) </li>
                            <li> SQL (Proficient) </li>
                            <li> Python (Proficient) </li>
                            <li> JavaScript (Competent) </li>
                        </ul>
                    </div>
            </div>
        </div>
        </section>
    );
}

export default CV;
