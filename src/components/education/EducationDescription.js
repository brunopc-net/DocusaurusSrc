import React from 'react';

function EducationDescription({ education_item, Logo }) {
    return (<>
        <p>
            <b>Institution: </b>
            <a href={education_item.url}>{education_item.institution}</a>
        </p>
        <p>
            <b>Graduation year: </b>{new Date(education_item.endDate).getFullYear()}
        </p>
        <p>
            <a href={education_item.url} target="_blank">
                <Logo width={600} />
            </a>
        </p>
    </>);
}

export default EducationDescription;