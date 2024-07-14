import React from 'react';

const work = require('@site/static/data/resume.json').work;

const getTotalXp = (work) => {
    const totalMonths = work.reduce((totalXp, workItem) => 
        totalXp += getExperienceAmount(workItem.startDate, workItem.endDate), 0
    );
    return Math.round(totalMonths/12);
}

const getExperienceAmount = (sd, ed) => {
    const startDate = new Date(sd);
    const endDate = new Date(ed);

    var months = 1 +
        (endDate.getFullYear() - startDate.getFullYear()) * 12
        + endDate.getMonth() - startDate.getMonth()
        
    return months <= 0 ? 0 : months;
}

function TotalXp(){
    return (<>{getTotalXp(work)}</>);
}

export default TotalXp;