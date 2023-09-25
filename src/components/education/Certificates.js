import React from 'react';

const certificates = require('@site/src/data/resume.json').certificates;

function getName(cert){
    return cert.url ?
        <a href={cert.url}>{cert.name}</a>:
        cert.name
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
    return cert.completion === 100 ?
        (<><b>100% ✅ </b> - {cert.date}</>):
        (<b>{cert.completion}% 🚧</b>);
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