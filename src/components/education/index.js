import React from 'react';
import { EcoleTechnologieSuperieure, CegepAndreLaurendeau, Institution } from './Institution'
import ElasticImg from '@site/src/components/media/ElasticImg';

import './Logo.css';

const educationList = require('@site/src/data/resume.json').education;

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

function Institute({education_item}){
    if(education_item.institution.includes("Laurendeau"))
        return <CegepAndreLaurendeau />
    if(education_item.institution.includes("technologie supérieure"))
        return <EcoleTechnologieSuperieure />
    //Other
        return <Institution  name={education_item.institution} url={education_item.url} />;
}

function Education({ area, studyType}) {
    const education_item = educationList.filter((ei) => {
        return ei.area === area && ei.studyType === studyType
    })[0];
    const diplomaImg = (education_item.area+"-"+education_item.studyType).replace(" ","-").toLowerCase();

    return (<>
        <ElasticImg
            src={"education/"+diplomaImg+".webp"}
            alt={education_item.area+" "+education_item.studyType+" diploma"}
            style={{border:"#755142 outset 6px"}}
        />
        <p><b>Graduation year: </b>{new Date(education_item.endDate).getFullYear()}</p>
        <Institute  education_item={education_item} />
        <CourseTable courses={education_item.courses} />
    </>);
}

export default Education;