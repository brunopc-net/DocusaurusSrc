import React from 'react';
import { getXpTotal } from  './xp.functions';

const totalXp = getXpTotal(require('@site/static/data/resume.json').work);

function TotalXp(){
    return (<>{totalXp}</>);
}

export {totalXp, TotalXp};