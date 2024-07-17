import React from 'react';
import { getXpTotal } from  './xp.functions';

function TotalXp({work}){
    return (<>{getXpTotal(work)}</>);
}

export {TotalXp};