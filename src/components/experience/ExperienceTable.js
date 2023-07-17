import React from 'react';

import { getExperienceAmount, formatDate } from  '../../js/dates.functions';

function hasClient(experience){
    return 'mandate|freelance'.includes(experience.type);
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

export default ExperienceTable;