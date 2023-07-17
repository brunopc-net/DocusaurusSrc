import React from 'react';

function getCourseCode(course){
    return course.split(" - ")[0];
}

function getCourseName(course){
    return course.split(" - ")[1];
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

export default EducationCourseTable;