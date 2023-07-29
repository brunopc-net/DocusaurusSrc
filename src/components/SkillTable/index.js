import React from 'react';

import styles from './styles.module.css';

const skillGroups = require('@site/src/data/resume.json').skills;

function TagLink(){
    return (
        <a 
            href={"/docs/tags/"+tag.replace(' ', '-')}>
            {tag}
        </a>
    )
}

function TagList({ title, tags}) {
    return (<>
        {title && (<b>{title}</b>)}
        <ul className={styles.skillList}>
            {tags.map((tag) => (
                <li key={tag}>
                    <a 
                        href={"/docs/tags/"+tag.replace(' ', '-')}>
                        {tag}
                    </a>
                </li>
            ))}
        </ul>
    </>);
}

function SkillTableRow({skillGroupName}){
    const tags = skillGroups.find(sg =>
        sg.name === skillGroupName
    ).keywords;

    return (<tr>
        <td>{skillGroupName}</td>
        <td><TagList tags={tags} /></td>
    </tr>);
}

function SkillTable() {
    return (
        <table className={styles.skillTable}>
            <tbody>
                <SkillTableRow skillGroupName="Backend" />
                <SkillTableRow skillGroupName="Frontend" />
                <SkillTableRow skillGroupName="DevOps" />
                <SkillTableRow skillGroupName="Databases" />
                <SkillTableRow skillGroupName="Scripting" />
                <SkillTableRow skillGroupName="SDET/QA" />
                <SkillTableRow skillGroupName="Tools" />
            </tbody>
        </table>
    );
}

export default SkillTable;