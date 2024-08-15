import React from 'react';

import Link from '@docusaurus/Link';
import UdemyBadge from './UdemyBadge';
import CredlyBadge from './CredlyBadge';
import MicrosoftBadge from './MicrosoftBadge';

const resume = require('@site/static/data/resume.json');

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
        <b>Id:</b> <a href={cert.url}>{cert.id}</a><br/>
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
            return (<UdemyBadge id={cert.id} desc={cert.name.en} />);
        case "Amazon":
            return (<CredlyBadge id={cert.id} desc={cert.name.en} />);
        case "Microsoft":
            return (<MicrosoftBadge id={cert.id} url={cert.url} desc={cert.name.en} />);
    }
}

function Certification({name}) {
    const certData = resume.certificates.find(cert => (cert.name.en || cert.name)  === name);
    return certData && (<div>
        <p>
            <Status cert={certData} />
            <Issuer cert={certData} />
            <Id cert={certData} />
            {certData.url &&
                <Link to={certData.url}>More details about this certification</Link>
            }
        </p>
        {certData.id && <Badge cert={certData} />}
    </div>);
}

export default Certification;