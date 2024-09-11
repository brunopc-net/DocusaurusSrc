import React from 'react';

import Link from '@docusaurus/Link';
import Image from '@site/src/components/media/Image';

const resume = require('@site/static/data/resume.json');

const CERTIFICATES_DIR = 'certificates/'
const BADGE_DIMENSION = {
    Credly: [340, 340],
    Udemy: [958, 718],
    Microsoft: [958, 518]
};

function getWebsiteName(url){
    // Use regex to extract the domain part of the URL
    const pattern = /:\/\/(?:www\.)?([^/]+)/;
    const match = url.match(pattern);
  
    if (match) {
      // Split the domain by "." and capitalize the second part (website name)
      const domainParts = match[1].split('.');
      const websiteName = domainParts[domainParts.length - 2]; // Get second-to-last part
      return websiteName.charAt(0).toUpperCase() + websiteName.slice(1); // Capitalize first letter
    }

    return "Invalid URL";
}

function getId(proof){
    // Split the URL by "/" and return the last part
    const parts = proof.split('/');
    return parts.pop() || parts.pop();  // Handles cases where URL ends with "/"
}

function Status({cert}){
    return (<>
        <b>Status: </b>{cert.date ? 
            `✅ Completed (${cert.date})` :
            `🚧 In progress (${cert.completion})`
        }<br/>
    </>);
}

function Badge({cert}){
    const proofer = getWebsiteName(cert.proof);
    return <Image
        path={CERTIFICATES_DIR+getId(cert.proof)}
        alt={cert.name.en+" Badge"}
        link={cert.proof}
        width={BADGE_DIMENSION[proofer][0]}
        height={BADGE_DIMENSION[proofer][1]}
    />
}

function Certification({name}) {
    const certData = resume.certificates.find(cert => (cert.name.en || cert.name)  === name);
    return certData && (<div>
        <p>
            <Status cert={certData} />
            <b>Issuer: </b>{getWebsiteName(certData.url)}<br/>
            {certData.proof && <>
                <b>Id:</b> <a href={certData.proof}>{getId(certData.proof)}</a><br/>
            </>}
            {certData.url &&
                <Link to={certData.url}>More details about this certification</Link>
            }
        </p>
        {certData.proof && <Badge cert={certData} />}
    </div>);
}

export default Certification;