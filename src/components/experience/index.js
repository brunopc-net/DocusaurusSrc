import React from 'react';

import { getExperienceAmount } from  './dates.functions';

const work = require('@site/static/data/resume.json').work;

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

function hasClient(experience){
    return 'mandate|freelance'.includes(experience.type);
}

function formatDate(date){
    return new Date(date)
        .toISOString()
        .split('T')[0]
        .substring(0, 7);
}

function Employer({experience}){
    if ('freelance' === experience.type) 
        return null;
    if (experience.employer){
        if(experience.employerUrl) 
            return (<td><a href={experience.employerUrl}>{experience.employer}</a></td>);
        else
            return (<td>{experience.employer}</td>);
    }
    if (experience.url)
        return (<td><a href={experience.url}>{experience.name}</a></td>);
    else
        return <td>{experience.name}</td>
}

function Client({experience}){
    return (
        hasClient(experience) && (experience.url ?
            (<td><a href={experience.url}>{experience.name}</a></td>):
            (<td>{experience.name}</td>)
        )
    );
}

function ExperienceTable({ experience }) {
    const period = formatDate(experience.startDate)+' to '+formatDate(experience.endDate);
    const expAmt = getExperienceAmount(experience.startDate, experience.endDate);

    return (
        <table style={{marginTop: 20}}>
            <thead>
                <tr>
                    {'freelance' !== experience.type && (<th>Employer</th>)}
                    {hasClient(experience) && (<th>Client</th>)}
                    <th>Position</th>
                    <th>Period</th>
                    <th>Total experience</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <Employer experience={experience} />
                    <Client experience={experience} />
                    <td>{experience.position}</td>
                    <td>{period}</td>
                    <td>{expAmt} {expAmt > 1 ? 'months' : 'month'}</td>
                </tr>
            </tbody>
        </table>
    );
}

function ExperienceDescription({ experience }) {
    return (<>
        <h2>Summary</h2>
        <p>{experience.summary}</p>

        <h2>Highlights</h2>
        <ul>
            {experience.highlights.map((task) => (
                <li key={task}>
                    {task}
                </li>
            ))}
        </ul>
        {experience.cover && (
            <img src={experience.cover} alt={`${experience.name} cover`} />
        )}
    </>);
}

function Experience({ title, cover }) {
    const workItem = work.filter((work_item) => {
        const position = title.split(' for ')[0];
        const name = title.split(' for ')[1];
        return work_item.position === position && work_item.name === name
    })[0];

    return (
        <div>
            <h2>{getWorkType(workItem.type)}</h2>
            <ExperienceTable experience={workItem}/>
            <ExperienceDescription experience={workItem}/>
        </div>
    );
}

export default Experience;