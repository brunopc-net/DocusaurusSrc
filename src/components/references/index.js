import React from 'react';
import Link from '@docusaurus/Link';
import {useLocation} from '@docusaurus/router';
import styles from './styles.css';

function getId(name){
    return name
        .replaceAll(".","")
        .replaceAll(",","")
        .replaceAll(" ","-")
        .toLowerCase();
}

function Author({ reference }){
    const linkId = getId(reference.name);
    const location = useLocation();
    const authorDetails = ", "+reference.position+", "+reference.place
    return (
        <h2
            id={linkId}
            className='anchor anchorWithStickyNavbar_node_modules-@docusaurus-theme-classic-lib-theme-Heading-styles-module'>
            {location.pathname.includes('/docs/references') ? <></> : <span>Reference: </span>}
            {reference.link ? <>
                <Link to={reference.link}>{reference.name}</Link>{authorDetails}</>:
                reference.name+authorDetails
            }
            <Link to={'#'+linkId} className='hash-link' />
        </h2>
    );
}

function Experience({ reference }){
    const experience = reference.experience;
    return (
        <p
            className='from_experience'>
            From my experience {experience.link ?
                <Link href={experience.link}>{experience.name}</Link>:
                experience.name
            }
        </p>
    );
}

function Reference({reference, xp_link}){
    return(<div className='reference'>
        <Author reference={reference} />
        <blockquote>
            <p>{reference.reference}</p>
        </blockquote>
        {xp_link && <Experience reference={reference} />}
    </div>);
}

export default Reference;