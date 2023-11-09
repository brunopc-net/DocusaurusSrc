import React from 'react';

const ConditionalWrapper = ({ condition, wrapper, children }) => condition ? wrapper(children) : children;

function Diploma({id, desc, link, wFrame}){
    try{
        const src = require('@site/static/img/certificates/'+id+'.webp').default;
        const srcSet = require('@site/static/img/certificates/'+id+'-small.webp').default+" 480w,"+src+" 958w";
        return (<p>
            <ConditionalWrapper
                condition={link}
                wrapper={children => <a href={link} target="_blank">{children}</a>}>
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
            </ConditionalWrapper>
        </p>);
    }catch(err){
        return "";
    }
}

export default Diploma