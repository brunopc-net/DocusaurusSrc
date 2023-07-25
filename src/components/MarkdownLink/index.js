import React from 'react';

function MarkdownLink({ to, text}) {
    const link = to.startsWith('files') 
        ? require(`@site/static/${to}`).default
        : to;
    
    return (
        <a
            className='button button--secondary button--lg'
            target="_blank"
            href={link}>
            {text}
        </a>
    );
}

export default MarkdownLink;