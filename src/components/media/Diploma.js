import React from 'react';

function Diploma({id, desc, link, wFrame}){
    try{
        const src = require('@site/static/img/certificates/'+id+'.webp').default;
        const srcSet = require('@site/static/img/certificates/'+id+'-small.webp').default+" 480w,"+src+" 958w";
        return (<p>
            <a href={link}>
                <img
                    alt={desc+" diploma"}
                    src={src}
                    srcSet={srcSet}
                    width="958"
                    heigth="713"
                    sizes="(max-width: 512px) 480px, 958px"
                    loading="lazy"
                    style={{border: wFrame ? "#755142 outset 6px" : "none"}}
                />
            </a>
        </p>);
    }catch(err){
        return "";
    }
}

export default Diploma