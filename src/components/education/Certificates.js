import React from 'react';

import CredlyBadge from '@site/src/components/media/CredlyBadge';
import Diploma from '@site/src/components/media/Diploma';

const certificates = require('@site/static/data/resume.json').certificates;

function getName(cert){
    const emoji = cert.date ? "✅" : "🚧";
    const name = emoji+" "+cert.name;
    return cert.url ? <a href={cert.url}>{name}</a>: {name}
}

function getIssuer(cert){
    if(cert.issuer === "OpenClassroom")
        return (<a href="https://openclassrooms.com/">OpenClassroom</a>)
    if(cert.issuer === "Udemy")
        return (<a href="https://www.udemy.com/">Udemy</a>)
    if(cert.issuer.includes("Amazon"))
        return (<a href="https://aws.amazon.com/certification/exams/">Amazon Web Services Training and Certification</a>)
    // Other
        return cert.issuer;
}

function Certificates() {
    return (<>
        {certificates.map((cert, i) => (<div key={i} style={{marginTop: 60}}>
            <h2>{getName(cert)}</h2>
            {cert.id && cert.issuer.includes("Amazon") && <CredlyBadge id={cert.id} name={cert.name} />}
            <p>
                <b>Issuer:</b> {getIssuer(cert)}<br/>
                <b>Completion:</b> {cert.date || cert.completion}
            </p>
            {cert.id && cert.issuer === "Udemy" && <Diploma id={cert.id} desc={cert.name} link={"https://www.udemy.com/certificate/"+cert.id} />}
        </div>))}
    </>);
}

export default Certificates;