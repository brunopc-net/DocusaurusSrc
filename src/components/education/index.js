import React from 'react';
import './Logo.css';

const educationList = require('@site/src/data/resume.json').education;

function getCourseCode(course){
    return course.split(" - ")[0];
}

function getCourseName(course){
    return course.split(" - ")[1];
}

function EducationDescription({ education_item, Logo }) {
    return (<>
        <p>
            <b>Institution: </b>
            <a href={education_item.url}>{education_item.institution}</a>
        </p>
        <p>
            <b>Graduation year: </b>{new Date(education_item.endDate).getFullYear()}
        </p>
        <p>
            <a href={education_item.url} target="_blank">
                <Logo width={600} />
            </a>
        </p>
    </>);
}

function EducationCourseTable({ courses }) {
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