import React from 'react';

function getLink(to){
    return to.startsWith('files') 
        ? require(`@site/static/${to}`).default
        : to;
}

function MarkdownLink({ button, to, text}) {
    return (
        <a
            className={`${button && "button button--secondary button--lg"}`}
            target="_blank"
            href={getLink(to)}>
            {text}
        </a>
    );
}
 

export default MarkdownLink;