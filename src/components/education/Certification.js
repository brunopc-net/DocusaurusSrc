import React from 'react';

import CredlyBadge from '@site/src/components/media/CredlyBadge';
import Diploma from '@site/src/components/media/Diploma';

const certifications = require('@site/static/data/resume.json').certificates;

function getStatus(cert){
    return cert.date ? `✅ Completed on ${cert.date}` : `🚧 In progress (${cert.completion})`;
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

function Certification({name}) {
    const cert = certifications.filter((cert) => {return cert.name == name;})[0];
    return cert && (<div>
        {cert.issuer.includes("Amazon") &&
            <CredlyBadge id={cert.id} name={cert.name} />
        }
        <p>
            {cert.url && <>
                <b>About:</b> <a href={cert.url}>{name}</a><br/>
            </>}
            <b>Status:</b> {getStatus(cert)}<br/>
            {cert.id && <>
                <b>Id:</b> {cert.id}<br/>
            </>}
            <b>Issuer:</b> {getIssuer(cert)}<br/>
        </p>
        {"Udemy" === cert.issuer && <Diploma
            id={cert.id}
            desc={cert.name}
            link={"https://www.udemy.com/certificate/"+cert.id}
        />}
    </div>);
}

export default Certification;