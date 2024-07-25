import React from 'react';

import Link from '@docusaurus/Link';
import UdemyBadge from './UdemyBadge';
import CredlyBadge from './CredlyBadge';

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
    return (<>
        <b>Issuer:</b> {issuer ? 
            <Link href={issuer.link}>{issuer.name}</Link>:
            cert.issuer
        }<br/>
    </>
    );
}

function Badge({cert}){
    switch(cert.issuer) {
        case "Udemy":
            return (<UdemyBadge id={cert.id} desc={cert.name} />);
        case "Amazon":
            return (<CredlyBadge id={cert.id} desc={cert.name} />);
    }
}

function Certification({name}) {
    const cert = certifications.find(cert => cert.name === name);
    return cert && (<div>
        <p>
            <Status cert={cert} />
            <Issuer cert={cert} />
            <Id cert={cert} />
            {cert.url &&
                <Link to={cert.url}>More details about this certification</Link>
            }
        </p>
        {cert.id && <Badge cert={cert} />}
    </div>);
}

export default Certification;