import React from 'react';

import { getExperienceAmount } from  './dates.functions';

const work = require('@site/src/data/resume.json').work;

function ExperienceTotal() {
    const totalMonths = work.reduce((totalXp, workItem) => 
        totalXp += getExperienceAmount(workItem.startDate, workItem.endDate), 0
    );
    const totalYears = Math.round(totalMonths/12);

    return (
        <span>
            {totalYears}
        </span>
    );
}

export default ExperienceTotal;