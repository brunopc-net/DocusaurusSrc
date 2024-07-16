import React from 'react';
import styles from './styles.module.css';

var resume_skills;

function TagLink(tag){
    const tagLink = "/docs/tags/"+tag
        .replace(' ', '-')
        .replace('/',"-");
        
    return (
        <a 
            href={tagLink}>
            {tag}
        </a>
    )
}

function TagList({ title, tags}) {
    return (<>
        {title && (<b>{title}</b>)}
        <ul className={styles.skillList}>
            {tags.map((tag) => (
                <li key={tag}>{TagLink(tag)}</li>
            ))}
        </ul>
    </>);
}

function SkillRow({category}){
    const tags = resume_skills.find(sc => sc.name === category).keywords;
    return (<tr>
        <td>{category}</td>
        <td><TagList tags={tags} /></td>
    </tr>);
}

function SkillTable({skills}) {
    resume_skills = skills;
    return (
        <table className={styles.skillTable}>
            <tbody>
                <SkillRow category="Backend" />
                <SkillRow category="Frontend" />
                <SkillRow category="DevOps" />
                <SkillRow category="Databases" />
                <SkillRow category="Scripting" />
                <SkillRow category="SDET/QA" />
                <SkillRow category="Tools" />
            </tbody>
        </table>
    );
}

export default SkillTable;