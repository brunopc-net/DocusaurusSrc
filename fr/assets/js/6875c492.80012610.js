"use strict";(self.webpackChunkbrunopc_blog=self.webpackChunkbrunopc_blog||[]).push([[8610],{2568:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),l=a(7325),r=a(3672);function o(e){const{metadata:t}=e,{previousPage:a,nextPage:o}=t;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,l.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&n.createElement(r.Z,{permalink:a,title:n.createElement(l.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),o&&n.createElement(r.Z,{permalink:o,title:n.createElement(l.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},8389:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),l=a(9107),r=a(8146);function o(e){let{items:t,component:a=r.Z}=e;return n.createElement(n.Fragment,null,t.map((e=>{let{content:t}=e;return n.createElement(l.n,{key:t.metadata.permalink,content:t},n.createElement(a,null,n.createElement(t,null)))})))}},4883:(e,t,a)=>{a.r(t),a.d(t,{default:()=>h});var n=a(7294),l=a(6010),r=a(7325),o=a(3777),s=a(5463),i=a(3702),c=a(3699),g=a(2506),m=a(2568),u=a(3647),p=a(8389);function d(e){const t=function(){const{selectMessage:e}=(0,o.c)();return t=>e(t,(0,r.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}();return(0,r.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function b(e){let{tag:t}=e;const a=d(t);return n.createElement(n.Fragment,null,n.createElement(s.d,{title:a}),n.createElement(u.Z,{tag:"blog_tags_posts"}))}function E(e){let{tag:t,items:a,sidebar:l,listMetadata:o}=e;const s=d(t);return n.createElement(g.Z,{sidebar:l},n.createElement("header",{className:"margin-bottom--xl"},n.createElement("h1",null,s),n.createElement(c.Z,{href:t.allTagsPath},n.createElement(r.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),n.createElement(p.Z,{items:a}),n.createElement(m.Z,{metadata:o}))}function h(e){return n.createElement(s.FG,{className:(0,l.Z)(i.k.wrapper.blogPages,i.k.page.blogTagPostListPage)},n.createElement(b,e),n.createElement(E,e))}},8146:(e,t,a)=>{a.d(t,{Z:()=>g});var n=a(7294),l=a(9200),r=a(9107),o=a(1116),s=a(9861),i=a(1048);function c(){const{colorMode:e}=(0,l.I)();return n.createElement("div",{style:{marginTop:"50px"}},n.createElement(s.Z,{repo:"brunopc-net/Giscus-Blog-comments",repoId:"R_kgDOJ-57Gg",category:"General",categoryId:"DIC_kwDOJ-57Gs4CYFWX",mapping:"url",term:"Welcome to @giscus/react component!",strict:"0",reactionsEnabled:"1",emitMetadata:"1",inputPosition:"top",theme:e,lang:"en",loading:"lazy",crossorigin:"anonymous",async:!0}))}function g(e){const{metadata:t,isBlogPostPage:a}=(0,r.C)(),l=(0,i.Z)(),{frontMatter:s,slug:g,title:m}=t,{enableComments:u}=s,p=u&&l&&a;return n.createElement(n.Fragment,null,n.createElement(o.Z,e),p&&n.createElement(c,null))}}}]);