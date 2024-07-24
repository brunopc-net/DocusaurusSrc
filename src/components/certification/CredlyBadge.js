import React from 'react';
import Image from '@site/src/components/media/Image';

const CERTIFICATES_DIR = 'certificates/'
const URL = 'https://www.credly.com/badges/'
const WIDTH = '245';
const HEIGHT = '245';


function CredlyBadge({id, desc}){
    return (<figure>
        <Image
            path={CERTIFICATES_DIR+id}
            alt={desc+" Badge"}
            link={URL+id}
            width={WIDTH}
            height={HEIGHT}
            className='certification'
        />
    </figure>);
}

export default CredlyBadge;