import React from 'react';
import MarkdownLink from '@site/src/components/MarkdownLink';

const AUTHOR_SPLITTER = "@";

function getAuthorName(author){
    return author.split(AUTHOR_SPLITTER)[0];
}

function getAuthorLink(author){
    return author.split(AUTHOR_SPLITTER)[1];
}

function Authors({authors}){
    return (<>
        {authors.map((author, index) => (
            author && (<span key={index}>
                {author.includes(AUTHOR_SPLITTER) ? (
                    <a href={getAuthorLink(author)}>{getAuthorName(author)}</a>
                ) : (
                    getAuthorName(author)
                )}
                {index < 5 && ", "}
            </span>)
        ))}
    </>)
}

function Reference({id, author1, author2, author3, author4, author5, author6, to, text}){
    const authors = [author1, author2, author3, author4, author5, author6];
    return (<>
        <span id={"reference-"+id} class="anchor"></span>
        <span>
            <sup>{id}</sup>
            <Authors authors={authors} />
            <MarkdownLink
                to={to}
                text={text}
            />
            <br/>
        </span>
    </>)
}
 

export default Reference;