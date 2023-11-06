import React from 'react';

function Diploma({education_item}){
    const diplomaImg = (education_item.area+"-"+education_item.studyType).replace(" ","-").toLowerCase();
    try{
        const src = require('@site/static/img/education/'+diplomaImg+'.webp').default;
        const srcSet = require('@site/static/img/education/'+diplomaImg+'-small.webp').default+" 480w,"+src+" 958w";
        return (
            <img
                alt={education_item.area+" "+education_item.studyType+" diploma"}
                src={src}
                srcSet={srcSet}
                width="958"
                heigth="739"
                sizes="(max-width: 512px) 480px, 958px"
                style={{border:"#755142 outset 6px"}}
                loading="lazy"
            />
        );
    }catch(err){
        return "";
    }
}

export default Diploma