import React from 'react';
import Link from '@docusaurus/Link';

//Images over that width are loaded with multiples sizes
//Under that width, small image is loaded;  big image otherwise
const MAX_WIDTH = 512; 
//Default big format size
const BIG_WIDTH = 958;
//Default small format size
const SMALL_WIDTH = 480;

const ConditionalWrapper = ({ condition, wrapper, children }) => condition ? wrapper(children) : children;

function Image({path, alt, link, width, height, className}){
    const src = require('@site/static/img/'+path+'.webp').default;
    var srcSet = false;
    var sizes = false;

    if(width > MAX_WIDTH){ //Setting multiple images sizes for efficient loading
        srcSet = require('@site/static/img/'+path+'-small.webp').default+" "+SMALL_WIDTH+"w,"+src+" "+BIG_WIDTH+"w";
        sizes = "(max-width: "+MAX_WIDTH+"px) "+SMALL_WIDTH+"px, "+BIG_WIDTH+"px"
    }

    return (
        <ConditionalWrapper
            condition={link}
            wrapper={children => <Link to={link}>{children}</Link>}>
            <img
                alt={alt}
                src={src}
                width={width}
                height={height}
                srcSet={srcSet}
                sizes={sizes}
                loading="lazy"
                className={className}
            />
        </ConditionalWrapper>
    )
}

export default Image