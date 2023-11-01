import React from 'react';

const certificates = require('@site/static/data/resume.json').certificates;

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

function Certificate({cert}){
    const src = require('@site/static/img/education/'+cert.certificate+'.webp').default;
    const srcSet = require('@site/static/img/education/'+cert.certificate+'-small.webp').default+" 480w,"+src+" 958w";
    if(cert.issuer === "Udemy"){
        return (<p>
            <a href={"https://www.udemy.com/certificate/"+cert.certificate}>
                <img
                    alt={"Certificate for "+cert.name}
                    src={require('@site/static/img/education/'+cert.certificate+'.webp').default}
                    width="958"
                    heigth="713"
                    srcSet={srcSet}
                    sizes="(max-width: 512px) 480px, 958px"
                    loading="lazy"
                />
            </a>
        </p>);
    }
    return "";
}

function Certificates() {
    return (<>
        {certificates.map((cert, i) => (<div key={i}>
            <h2>{getName(cert)}</h2>
            <p>Issuer: {getIssuer(cert)}</p>
            <p>Completion: {getCompletion(cert)}</p>
            {cert.certificate && <Certificate cert={cert} />}
        </div>))}
    </>);
}

export default Certificates;