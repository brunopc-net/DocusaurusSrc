import React from 'react';

import EducationDescription from './EducationDescription'
import EducationCourseTable from './EducationCourseTable'

const educationList = require('@site/src/data/resume.json').education;

function Education({ area, studyType, Logo }) {

    const educationItem = educationList.filter((ei) => {
        return ei.area === area && ei.studyType === studyType
    })[0];

    return (<>
        <EducationDescription education_item={educationItem} Logo={Logo} />
        <EducationCourseTable courses={educationItem.courses} />
    </>);
}

export default Education;