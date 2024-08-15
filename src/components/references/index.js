import React from 'react';
import Link from '@docusaurus/Link';
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
    const authorDetails = ", "+reference.position.en+", "+reference.place
    return (
        <h3
            id={linkId}
            className='anchor anchorWithStickyNavbar_node_modules-@docusaurus-theme-classic-lib-theme-Heading-styles-module'>
            {reference.link ? <>
                <Link to={reference.link}>{reference.name}</Link>{authorDetails}</>:
                reference.name+authorDetails
            }
            <Link to={'#'+linkId} className='hash-link' />
        </h3>
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

function Reference({reference, withXpLink}){
    return(<div className='reference'>
        <Author reference={reference} />
        <blockquote>
            <p>{reference.value.en}</p>
        </blockquote>
        {withXpLink && <Experience reference={reference} />}
    </div>);
}

function References({references, withXpLink}){
    return(
        <ul id="references">
            {references.map(item => <li>
                <Reference key={item.name} reference={item} withXpLink={withXpLink} />
            </li>)}
        </ul>
    );
}

export default References;