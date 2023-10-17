import React from 'react';
import { EcoleTechnologieSuperieure, CegepAndreLaurendeau, Institution } from './Institution'

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

function Diploma({education_item}){
    const diplomaImg = (education_item.area+"-"+education_item.studyType).replace(" ","-").toLowerCase();
    try{
        const src = require('@site/static/img/education/'+diplomaImg+'.webp').default;
        const srcSet = require('@site/static/img/education/'+diplomaImg+'-small.webp').default+" 480w,"+src+" 958w";
        return (
            <img
                alt={education_item.area+" "+education_item.studyType+" diploma"}
                src={src}
                width="958"
                heigth="739"
                srcSet={srcSet}
                sizes="(max-width: 512px) 480px, 958px"
                style={{border:"#755142 outset 6px"}}
                loading="lazy"
            />
        );
    }catch(err){
        return "";
    }
}

function Education({ area, studyType}) {
    const education_item = educationList.filter((ei) => {
        return ei.area === area && ei.studyType === studyType
    })[0];
    return (<>
        <Diploma education_item={education_item} />
        <p><b>Graduation year: </b>{new Date(education_item.endDate).getFullYear()}</p>
        <Institute  education_item={education_item} />
        <CourseTable courses={education_item.courses} />
    </>);
}

export default Education;