import React from 'react';
import Reference from '.';

const references = require('@site/static/data/resume.json').references;

function ReferenceList(){
    return(<>
        {references.map((item) => (<Reference key={item.name} reference={item} xp_link={true} />))}
    </>);
}

export default ReferenceList;