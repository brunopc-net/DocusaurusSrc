import React from 'react';
import Image from '@site/src/components/media/Image';
import styles from './Diploma.module.css';

const CERTIFICATES_DIR = 'certificates/'
const WIDTH = 958;
const HEIGHT = 713;

function Diploma({id, desc}){
    return (
        <figure>
            <Image
                path={CERTIFICATES_DIR+id}
                alt={desc+" diploma"}
                width={WIDTH}
                height={HEIGHT}
                className={styles.with_frame}
            />
        </figure>
    );
}

export default Diploma