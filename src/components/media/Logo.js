import React from 'react'
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';

import './Logo.css';

const ConditionalWrapper = ({ condition, wrapper, children }) => condition ? wrapper(children) : children;

function removeAccents(text){
    const regexE=/é|è|ê/gi;
    const regexA=/â|à/gi;
    const regexU=/û|ù/gi;
    const regexO=/ô/gi;

    return text
        .replaceAll(regexE,"e")
        .replaceAll(regexA,"a")
        .replaceAll(regexU,"u")
        .replaceAll(regexO,"o");
}

function Logo({org, link}){
    const file = '/img/logo/'+removeAccents(org.toLowerCase()).replaceAll(" ","-");
    try{
        require('@site/static'+file+'-light.svg').default;
        return (<>
            <ConditionalWrapper
                condition={link}
                wrapper={children => <Link to={link}>{children}</Link>}>
                <ThemedImage
                    className="logo"
                    alt={org+' logo'}
                    sources={{
                        light: useBaseUrl(file+'-light.svg'),
                        dark: useBaseUrl(file+'-dark.svg'),
                    }}
                    style={{maxHeight: 200, maxWidth: 350 }}
                />
            </ConditionalWrapper>
        </>);
    }catch(err){
        return "";
    }
}

export default Logo;