import React from 'react';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

function getTagLink(tag){
    return "/docs/tags/"+tag
        .replace('c++', 'c')
        .replace(/unit/gi, '-unit')
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .replace(/([a-zA-Z])([0-9])/g, '$1-$2')
        .replace(/[ .\/]/g, '-').toLowerCase();
}

function SkillTable({skills}) {
    return (
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