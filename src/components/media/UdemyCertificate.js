import React from 'react';

function UdemyCertificate({id, name}){
    const src = require('@site/static/img/certificates/'+id+'.webp').default;
    const srcSet = require('@site/static/img/certificates/'+id+'-small.webp').default+" 480w,"+src+" 958w";
    return (<p>
        <a href={"https://www.udemy.com/certificate/"+id}>
            <img
                alt={"Certificate for "+name}
                src={src}
                srcSet={srcSet}
                width="958"
                heigth="713"
                sizes="(max-width: 512px) 480px, 958px"
                loading="lazy"
                className='certification'
            />
        </a>
    </p>);
}

export default UdemyCertificate;
