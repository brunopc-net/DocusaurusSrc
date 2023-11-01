import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

function MarkdownLink({ button, to, text}) {
    const link = to.includes("http") ? to : useBaseUrl(to);
    return (
        <a
            className={`${button && "button button--secondary button--lg"}`}
            target="_blank"
            href={link}>
            {text}
        </a>
    );
}
 

export default MarkdownLink;