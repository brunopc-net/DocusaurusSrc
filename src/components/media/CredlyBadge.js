import React from 'react';

function CredlyBadge({id, name}){
    const src = require('@site/static/img/certificates/'+id+'.webp').default;
    return (<p>
        <a href={"https://www.credly.com/badges/"+id+"/public_url"}>
            <img
                alt={"Badge for "+name}
                src={src}
                loading="lazy"
                className='certification'
            />
        </a>
    </p>);
}

export default CredlyBadge;