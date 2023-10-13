import React from "react";

function getImgSmallSrc(src){
    const filenameSplit = src.split(".");
    return filenameSplit[0]+"-small."+filenameSplit[1];
}

function ElasticImg({src, alt, url, style}){
    const img = require("@site/static/img/"+src).default;
    const imgSmall = require("@site/static/img/"+getImgSmallSrc(src)).default;

    const elasticImg = (
        <picture>
            <source media="(max-width: 510px)" srcSet={imgSmall} />
            <img src={img} alt={alt} style={style}/>
        </picture>
    );

    return url ? 
        <a href={url}>{elasticImg}</a>:
        elasticImg;
}

export default ElasticImg;