import React from 'react';

import styles from './styles.module.css';
import Link from '@docusaurus/Link';

function getAllSkills(resume){
    var skills = [ //Basic skills structure for display ordering
        { name: "Backend", keywords: [] },
        { name: "Backend QA", keywords: [] },
        { name: "DevOps", keywords: [] },
        { name: "Frontend", keywords: [] },
        { name: "Frontend QA", keywords: [] },
        { name: "Databases", keywords: [] },
        { name: "Scripting", keywords: [] }
    ];

    const addSkills = function (item){
        item.skills && item.skills.forEach(itemSkill => {
            const category = skills.find(category => category.name === itemSkill.name);
            if(category){
                itemSkill.keywords.forEach(kword => {
                    if(!category.keywords.includes(kword)){
                        category.keywords.push(kword);
                    }
                });
            } else {
                skills.push({ name: itemSkill.name, keywords: [] })
            }
        });
    }

    resume.work.forEach(item => addSkills(item));
    resume.education.forEach(item => addSkills(item));
    resume.certificates.forEach(item => addSkills(item));
    resume.projects.forEach(item => addSkills(item));

    return skills;
}

function getTagLink(tag){
    return "/docs/tags/"+tag
        .replace('C++', 'C')
        .replace(/frog/gi, '-frog')
        .replace(/unit/gi, '-unit')
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .replace(/([a-zA-Z])([0-9])/g, '$1-$2')
        .replace(/[ .\/]/g, '-')
        .toLowerCase();
}

function SkillTable({resume}) {
    const skills = getAllSkills(resume);
    return skills && (
        <table className={styles.skillTable}>
            <tbody>
                {skills.map(skill_category => <tr>
                    <td>{skill_category.name}</td>
                    <td>
                        <ul className={styles.skillList}>
                            {skill_category.keywords.map((tag) => (
                                <li key={tag}><Link to={getTagLink(tag)}>{tag}</Link></li>
                            ))}
                        </ul>
                    </td>
                </tr>)}
            </tbody>
        </table>
    );
}

export default SkillTable;