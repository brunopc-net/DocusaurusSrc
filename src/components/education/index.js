import React from 'react';

import Logo from '@site/src/components/media/Logo';
import Link from '@docusaurus/Link';
import Diploma from './Diploma';

const resume = require('@site/static/data/resume.json');

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
    const educationItem = resume.education.find(item => 
        (item.area.en || item.area) === area &&
        (item.studyType.en || item.studyType) === studyType
    );

    if(educationItem == null)
        return <div>Loading…</div>

    const diplomaId = (area+"-"+studyType).replaceAll(" ","-").toLowerCase();
    return (<>
        <p>
            <b>Graduation year: </b>{new Date(educationItem.endDate).getFullYear()}<br/>
            <b>Institution: </b><Link to={educationItem.url}>{educationItem.institution}</Link>
        </p>
        <Logo org={educationItem.institution} link={educationItem.url} />
        <Diploma id={diplomaId} desc={studyType+', '+area} />
        <CourseTable courses={educationItem.course_list} />
    </>);
}

export default Education;