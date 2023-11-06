import React from 'react';

import Diploma from '@site/src/components/media/Diploma';
import Logo from '@site/src/components/media/Logo';

const educationList = require('@site/static/data/resume.json').education;

function getCourseCode(course){
    return course.split(" - ")[0];
}

function getCourseName(course){
    return course.split(" - ")[1];
}

function CourseTable({ courses }) {
    return (<>
        <h2>Curriculum</h2>
        <table>
            <thead>
                <tr>
                    <th>Course</th>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                {courses.map((course) => (
                    <tr key={getCourseCode(course)}>
                        <td>{getCourseCode(course)}</td>
                        <td>{getCourseName(course)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>);
}

function Education({ area, studyType}) {
    const education_item = educationList.filter((ei) => {
        return ei.area === area && ei.studyType === studyType
    })[0];
    return (<>
        <Diploma education_item={education_item} />
        <p>
            <b>Graduation year: </b>{new Date(education_item.endDate).getFullYear()}<br/>
            <b>Institution: </b><a href={education_item.url}>{education_item.institution}</a>
        </p>
        <Logo org={education_item.institution} link={education_item.url} />
        <CourseTable courses={education_item.courses} />
    </>);
}

export default Education;