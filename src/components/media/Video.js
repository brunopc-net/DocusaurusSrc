import React from "react"
import './Video.css'

function Video({url, title}){
    return (
        <div class="videoContainer">
            <iframe
                width="100%"
                height="100%"
                src={url}
                title={title}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
                loading="lazy"
                defer
            />
        </div>
    );
}

export default Video;
