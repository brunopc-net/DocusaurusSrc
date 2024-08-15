import React from 'react';

import Link from '@docusaurus/Link';
import Logo from '@site/src/components/media/Logo';
import References from '@site/src/components/references';
import getXpAmount from  '@site/src/scripts/xp.functions';

import styles from './styles.css';

const resume = require('@site/static/data/resume.json');

function formatDate(date){
    return new Date(date)
        .toISOString()
        .split('T')[0]
        .substring(0, 7);
}

function Employer({experience}){
    const employerName = experience.employer.en || experience.employer.name;
    return experience.employer.url ?
        (<td><Link to={experience.employer.url}>{employerName}</Link></td>):
        (<td>{employerName}</td>);
}

function Client({experience}){
    const clientName = experience.client.en || experience.client.name;
    return experience.client.url ?
        (<td><Link href={experience.client.url}>{clientName}</Link></td>):
        (<td>{clientName}</td>);
}

function ExperienceTable({ experience }) {
    const period = formatDate(experience.startDate)+' to '+formatDate(experience.endDate);
    const xpAmount = experience.amount || getXpAmount(experience.startDate, experience.endDate);
    return (
        <table style={{marginTop: 20}}>
            <thead>
                <tr>
                    <th>Type</th>
                    {'freelance' !== experience.type.en && (<th>Employer</th>)}
                    {experience.client && (<th>Client</th>)}
                    <th>Position</th>
                    <th>Period</th>
                    <th>Effective experience</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{experience.type.en}</td>
                    {experience.employer && <Employer experience={experience} />}
                    {experience.client && (<Client experience={experience} />)}
                    <td>{experience.position.en}</td>
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
        <p>{experience.summary.en}</p>
        {experience.highlights && <>
            <h2>Highlights</h2>
            <ul>
                {experience.highlights.map((hl) =>
                    <li key={hl}>{hl.en}</li>
                )}
            </ul>
        </>}
    </>);
}

function Experience({position, place}) {
    const workItem = resume.work.find(work_item => {
        const itemPosition = work_item.position.en || work_item.position;
        const itemPlace = work_item.client ? (work_item.client.en || work_item.client.name) : (work_item.employer.en || work_item.employer.name);
        return position === itemPosition && itemPlace === place;
    });
    const references = resume.references.filter((ref_item) => {
        const exp_name = ref_item.experience.name;
        return exp_name.includes(position) && exp_name.includes(place)
    })

    if(workItem == null)
        return <div>Loading…</div>;

    return (
        <div id="experience">
            <ExperienceTable experience={workItem}/>
            <Logo org={place} link={workItem.website} />
            <ExperienceDescription experience={workItem}/>
            {references.length > 0 && <div>
                <h2>References</h2>
                <References references={references} />
            </div>}
        </div>
    );
}

export default Experience;