import React from 'react';
import styles from './styles.module.css';

function getTagLink(tag){
    return "/docs/tags/"+tag.toLowerCase()
        .replaceAll(' ', '-')
        .replaceAll('.', '-')
        .replaceAll('/',"-")
        //Special cases
        .replace('h2', 'h-2')
        .replace('phpunit', 'php-unit')
        .replace('github', 'git-hub')
        .replace('mysql', 'my-sql')
        .replace('mariadb', 'maria-db');
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
                                <li key={tag}><a href={getTagLink(tag)}>{tag}</a></li>
                            ))}
                        </ul>
                    </td>
                </tr>)}
            </tbody>
        </table>
    );
}

export default SkillTable;