import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import { useBlogPost } from '@docusaurus/theme-common/internal'
import BlogPostItem from '@theme-original/BlogPostItem';
import Giscus from "@giscus/react";
import useIsBrowser from '@docusaurus/useIsBrowser';

function GiscusComments() {
  const { colorMode } = useColorMode();

  return (
    <Giscus    
      repo="brunopc-net/Giscus-Blog-comments"
      repoId="R_kgDOJ-57Gg"
      category="General"
      categoryId="DIC_kwDOJ-57Gs4CYFWX" // E.g. id of "General"
      mapping="url" // Important! To map comments to URL
      term="Welcome to @giscus/react component!"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="1"
      inputPosition="top"
      theme={colorMode}
      lang="en"
      loading="lazy"
      crossorigin="anonymous"
      async
    />
  );
}

export default function BlogPostItemWrapper(props) {
  const { metadata, isBlogPostPage } = useBlogPost()
  const isBrowser = useIsBrowser();

  const { frontMatter, slug, title } = metadata
  const { enableComments } = frontMatter

  return (
    <>
      <BlogPostItem {...props} />
      {(enableComments && isBrowser) && (
        <GiscusComments />
      )}
    </>
  );
}
