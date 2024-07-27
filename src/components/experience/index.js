import React from 'react';
import Link from '@docusaurus/Link';
import Logo from '@site/src/components/media/Logo';
import Reference from '@site/src/components/references';
import { getXpAmount } from  '@site/src/scripts/xp.functions';

const resume = require('@site/static/data/resume.json');

function getWorkType(type){
    switch(type){
        case "permanent": 
            return "Permanent position";
        case "mandate":
            return "Consulting mandate";
        case "internship":
            return "Internship";
        case "freelance":
            return "Freelance contract"; 
    }
    return "";
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
        return experience.employerUrl ?
            (<td><Link to={experience.employerUrl}>{experience.employer}</Link></td>):
            (<td>{experience.employer}</td>);
    }

    return <Client experience={experience} />
}

function Client({experience}){
    return experience.website ?
        (<td><Link href={experience.website}>{experience.name}</Link></td>):
        (<td>{experience.name}</td>);
}

function hasClient(experience){
    return 'contract|mandate|freelance'.includes(experience.type);
}

function ExperienceTable({ experience }) {
    const period = formatDate(experience.startDate)+' to '+formatDate(experience.endDate);
    const xpAmount = experience.amount || getXpAmount(experience.startDate, experience.endDate);
    return (
        <table style={{marginTop: 20}}>
            <thead>
                <tr>
                    {'freelance' !== experience.type && (<th>Employer</th>)}
                    {hasClient(experience) && (<th>Client</th>)}
                    <th>Position</th>
                    <th>Period</th>
                    <th>Effective experience</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <Employer experience={experience} />
                    {hasClient(experience) && (<Client experience={experience} />)}
                    <td>{experience.position}</td>
                    <td>{period}</td>
                    <td>{xpAmount} {xpAmount > 1 ? 'months' : 'month'}</td>
                </tr>
            </tbody>
        </table>
    );
}

function ExperienceDescription({ experience }) {
    return (<>
        <h2>Summary</h2>
        <p>{experience.summary}</p>
        {experience.highlights && <>
            <h2>Highlights</h2>
            <ul>
                {experience.highlights.map((task) =>
                    <li key={task}>{task}</li>
                )}
            </ul>
        </>}
        {experience.cover && 
            <img src={experience.cover} alt={`${experience.name} cover`} />
        }
    </>);
}

function Experience({position, place}) {
    const workItem = resume.work.find((work_item) => 
        work_item.position === position && work_item.name === place
    );
    const references = resume.references.filter((ref_item) => {
        const exp_name = ref_item.experience.name;
        return exp_name.includes(position) && exp_name.includes(place)
    });
    return (
        <div>
            <h2>{getWorkType(workItem.type)}</h2>
            <ExperienceTable experience={workItem}/>
            <Logo org={workItem.name} link={workItem.website} />
            <ExperienceDescription experience={workItem}/>
            {references.length > 0 && <>
                {references.map(item => <Reference reference={item}/>)}
            </>}
        </div>
    );
}

export default Experience;