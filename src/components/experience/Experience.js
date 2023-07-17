import React from 'react';

import ExperienceTable from './ExperienceTable'
import ExperienceDescription from './ExperienceDescription'

const resume = require('../../data/resume.json');

function getWorkType(type){
    switch(type){
        case "permanent": 
            return "Permanent position";
        case "mandate":
            return "Consulting mandate";
        case "internship":
            return "Internship";
        case "freelance":
            return "Freelance mandate"; 
    }
    return "";
}

function Experience({ title, cover }) {
    
    const workItem = resume.work.filter((wi) => {
        const position = title.split(' for ')[0];
        const name = title.split(' for ')[1];
        return wi.position === position && wi.name === name
    })[0];

    const work_type = getWorkType(workItem.type);

    return (
        <div>
            <h2>{work_type}</h2>
            <ExperienceTable experience={workItem}/>
            <ExperienceDescription experience={workItem}/>
            {cover && <img src={cover} alt={title+' cover'}/>}
        </div>
    );
}

export default Experience;