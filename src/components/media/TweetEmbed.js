import React from 'react';
import { Tweet } from 'react-twitter-widgets'
import { useColorMode } from '@docusaurus/theme-common';

function TweetEmbed({id}) {
    const { colorMode } = useColorMode();
    return (
        <Tweet
            tweetId={id}
            options={{
                theme: colorMode,
                align: 'center'
            }}
        />
    );
};

export default TweetEmbed;