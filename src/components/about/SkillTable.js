import React from 'react';
import TagList from '../common/TagList';

import '../../css/components/SkillTable.css'

const skillGroups = require('../../data/resume.json').skills;

function SkillTableRow({skillGroupName}){
    const tags = skillGroups.find(sg =>
        sg.name === skillGroupName
    ).keywords;

    return (<tr>
        <td>{skillGroupName}</td>
        <td><TagList tags={tags} className={'skillList'}/></td>
    </tr>);
}

function SkillTable() {
    return (
        <table className='skillTable'>
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