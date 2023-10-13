import React from 'react';
import { getExperienceAmount } from  './experience.functions';

const work = require('@site/src/data/resume.json').work;

function getTotalXp() {
    const totalMonths = work.reduce((totalXp, workItem) => 
        totalXp += getExperienceAmount(workItem.startDate, workItem.endDate), 0
    );
    return Math.round(totalMonths/12);
}

const totalXp = getTotalXp();

function TotalXpComponent(){
    return (<>{totalXp}</>);
}

export {totalXp, TotalXpComponent};