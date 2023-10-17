import React from "react"

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

function Youtube({id, title, start, end}){
    let params="";
    if (start) 
        params += "start="+start;
    if (end)
        params += "&end="+end;

    return (<>
        <LiteYouTubeEmbed
            id={id}
            title={title}
            noCookie={true}
            params={params}
            webp={true}
        /><br/>
    </>);
}


export default Youtube;
