import React from 'react';
import { getTotalXp } from  './experience.functions';

const totalXp = getTotalXp(require('@site/static/data/resume.json').work);

function TotalXpComponent(){
    return (<>{totalXp}</>);
}

export {totalXp, TotalXpComponent};