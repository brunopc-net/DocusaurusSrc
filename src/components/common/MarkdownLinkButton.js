import React from 'react';

function MarkdownLinkButton({ to, text, className }) {

    const link = to.startsWith('files') 
        ? require(`@site/static/${to}`).default
        : to;

    const classNames = `button button--secondary button--lg ${className}`
    
    return (
        <a
            className={classNames}
            target="_blank"
            href={link}>
            {text}
        </a>
    );
}

export default MarkdownLinkButton;