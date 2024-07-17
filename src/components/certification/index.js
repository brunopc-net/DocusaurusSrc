import React from 'react';

import CredlyBadge from '@site/src/components/media/CredlyBadge';
import Diploma from '@site/src/components/media/Diploma';

const certifications = require('@site/static/data/resume.json').certificates;
const issuers = [
    {
        name: "OpenClassroom",
        link: "https://openclassrooms.com/"
    },
    {
        name: "Udemy",
        link: "https://www.udemy.com/"
    },
    {
        name: "Amazon",
        link: "https://aws.amazon.com/certification/exams/"
    }
];

function About({cert}){
    return cert.url && (<>
        <b>About:</b> <a href={cert.url}>{cert.name}</a><br/>
    </>);
}

function Status({cert}){
    return (<>
        <b>Status: </b>{cert.date ? 
            `✅ Completed on ${cert.date}` :
            `🚧 In progress (${cert.completion})`
        }<br/>
    </>);
}

function Id({cert}){
    return cert.id && (<>
        <b>Id:</b> {cert.id}<br/>
    </>);
}

function Issuer({cert}){
    const issuer = issuers.find(i => i.name === cert.issuer);
    const name = issuer ? <a href={issuer.link}>{issuer.name}</a> : cert.issuer;
    return (<>
        <b>Issuer:</b> {name}<br/></>
    );
}

function Badge({cert}){
    if("Udemy" === cert.issuer) 
        return (<Diploma
            id={cert.id}
            desc={cert.name}
            link={"https://www.udemy.com/certificate/"+cert.id}
        />);
    if("Amazon" === cert.issuer)
        return (<CredlyBadge
            id={cert.id}
            name={cert.name}
        />);
}

function Certification({name}) {
    const cert = certifications.find(cert => cert.name === name);
    return cert && (<div>
        <p>
            <About cert={cert} />
            <Status cert={cert} />
            <Issuer cert={cert} />
            <Id cert={cert} />
        </p>
        <p>
            <Badge cert={cert} /> 
        </p>
    </div>);
}

export default Certification;