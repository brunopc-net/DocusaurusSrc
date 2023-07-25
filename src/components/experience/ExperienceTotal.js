import React from 'react';

import { getExperienceAmount } from  './dates.functions';

const resume = require('@site/src/data/resume.json');

function ExperienceTotal() {
    const totalMonths = resume.work.reduce((totalXp, workItem) => 
        totalXp += getExperienceAmount(workItem.startDate, workItem.endDate), 0
    );
    const totalYears = Math.round(totalMonths/12);

    return (
        <span>{totalYears}</span>
    );
}

export default ExperienceTotal;