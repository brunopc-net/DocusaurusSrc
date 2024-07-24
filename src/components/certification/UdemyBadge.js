import React from 'react';
import Image from '@site/src/components/media/Image';

const CERTIFICATES_DIR = 'certificates/'
const URL = 'https://www.udemy.com/certificate/'
const WIDTH = 958;
const HEIGHT = 713;

function UdemyBadge({id, desc}){
    return (
        <figure>
            <Image
                path={CERTIFICATES_DIR+id}
                alt={desc+" Badge"}
                link={URL+id}
                width={WIDTH}
                height={HEIGHT}
            />
        </figure>
    );
}

export default UdemyBadge