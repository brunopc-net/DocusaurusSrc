import React from 'react';
import Image from '@site/src/components/media/Image';

const CERTIFICATES_DIR = 'certificates/'
const WIDTH = 958;
const HEIGHT = 518;

function MicrosoftBadge({id, url, desc}){
    return (
        <figure>
            <Image
                path={CERTIFICATES_DIR+id}
                alt={desc+" Badge"}
                link={url}
                width={WIDTH}
                height={HEIGHT}
            />
        </figure>
    );
}

export default MicrosoftBadge