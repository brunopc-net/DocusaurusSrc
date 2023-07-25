import React from 'react';

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

export default ExperienceDescription;