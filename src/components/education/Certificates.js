import React from 'react';
import './Certificates.css';

const certificates = require('@site/src/data/resume.json').certificates;

function getName(cert){
    if(cert.url)
        return (<a href={cert.url}>{cert.name}</a>)
    // No url
        return cert.name;
}

function getIssuer(cert){
    if(cert.issuer === "OpenClassroom")
        return (<a href="https://openclassrooms.com/">OpenClassroom</a>)
    if(cert.issuer === "Udemy")
        return (<a href="https://www.udemy.com/">Udemy</a>)
    // Other
        return cert.issuer;
}

function getCompletion(cert){
    if(cert.completion === 100)
        return (<><span className="completion">100% ✅ </span> - {cert.date}</>);
    if(cert.completion > 75)
        return (<><span className="completion soon">{cert.completion}% 🚧</span></>);
    if(cert.completion > 40)
        return (<><span className="completion inprogress">{cert.completion}% 🚧</span></>);
    //cert.completion <= 40
        return (<><span className="completion started">{cert.completion}% 🚧</span></>);
}

function getCertificate(cert){
    const img = require('@site/static/img/education/'+cert.certificate+'.webp').default;
    const imgSmall = require('@site/static/img/education/'+cert.certificate+'-480.webp').default;
    const imgAlt = cert.name+" certificate";

    if(cert.issuer === "Udemy")
        return (<p><a href={"https://www.udemy.com/certificate/"+cert.certificate}>
            <picture>
                <source media="(max-width: 510px)" srcset={imgSmall} />
                <img src={img} alt={imgAlt} width="958" height="auto"/>
            </picture>
        </a></p>)
}

function Certificates() {
    return (<>
        {certificates.map((cert, i) => (<div key={i}>
            <h2>{getName(cert)}</h2>
            <p>Issuer: {getIssuer(cert)}</p>
            <p>Completion: {getCompletion(cert)}</p>
            {cert.certificate && (getCertificate(cert))}
        </div>))}
    </>);
}

export default Certificates;