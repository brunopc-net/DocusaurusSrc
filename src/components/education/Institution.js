import React from 'react';

function Institution({name, url, Logo}){
    return (<>
        <p>
            <b>Institution: </b>
            <a href={url}>{name}</a>
        </p>
        <p>
            <a href={url} target="_blank">
                <Logo width={600} />
            </a>
        </p>
    </>);
}

function EcoleTechnologieSuperieure(){
    return (
        <Institution
            name="École de technologie supérieure"
            url="https://www.etsmtl.ca/"
            Logo={require('@site/static/img/education/logo_ets.svg').default}
        />
    );
}

function CegepAndreLaurendeau(){
    return (
        <Institution
            name="Cégep André-Laurendeau"
            url="https://claurendeau.qc.ca/"
            Logo={require('@site/static/img/education/logo_al.svg').default}
        />
    );
}

export { EcoleTechnologieSuperieure, CegepAndreLaurendeau };