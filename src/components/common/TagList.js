import React from 'react';

function TagList({ title, tags, className}) {
    return (
        <div>
            {title && (<b>{title}</b>)}
            <ul className={className}>
                {tags.map((tag) => (
                    <li key={tag}>
                        <a 
                            href={"/docs/tags/"+tag}>
                            {tag}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TagList;