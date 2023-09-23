import React from 'react';
import { EcoleTechnologieSuperieure, CegepAndreLaurendeau } from './Institution'

import './Logo.css';

const educationList = require('@site/src/data/resume.json').education;

function getCourseCode(course){
    return course.split(" - ")[0];
}

function getCourseName(course){
    return course.split(" - ")[1];
}

function getDiplomaImgLink(education_item){
    const imgName = (education_item.area+"-"+education_item.studyType)
        .replace(" ","-").toLowerCase()+".webp";
    return require('@site/static/img/education/'+imgName).default;
}

function getDiplomaImgAlt(education_item){
    return "Diploma for "+education_item.area+" "+education_item.studyType;
}

function Diploma({education_item}){
    try{
        return (<p>
            <img src={getDiplomaImgLink(education_item)} alt={getDiplomaImgAlt(education_item)}/>
        </p>);
    }catch(err){
        return "";
    }
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

function Institution({education_item}){
    if(education_item.institution.includes("Laurendeau"))
        return <CegepAndreLaurendeau />
    if(education_item.institution.includes("technologie supérieure"))
        return <EcoleTechnologieSuperieure />
    return "";
}

function Education({ area, studyType, Logo }) {
    const education_item = educationList.filter((ei) => {
        return ei.area === area && ei.studyType === studyType
    })[0];
    return (<>
        <p><b>Graduation year: </b>{new Date(education_item.endDate).getFullYear()}</p>
        <Diploma education_item={education_item} />
        <Institution  education_item={education_item} />
        <CourseTable courses={education_item.courses} />
    </>);
}

export default Education;