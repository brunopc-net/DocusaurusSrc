import React from 'react';
import ElasticImg from '@site/src/components/media/ElasticImg';

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
    if(cert.issuer === "Udemy")
        return (<p>
            <ElasticImg
                src={'education/'+cert.certificate+'.webp'}
                alt={cert.name+" certificate"}
                url={"https://www.udemy.com/certificate/"+cert.certificate}
            />
        </p>)
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