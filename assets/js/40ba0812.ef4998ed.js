"use strict";(self.webpackChunkbrunopc_blog=self.webpackChunkbrunopc_blog||[]).push([[8101],{481:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var o=n(5893),r=n(1151),s=n(2903);const i={project:"Cerberus",title:"Cerberus",sidebar_position:5,tags:["Python","Docker","Jenkins"]},a=void 0,l={id:"projects/cerberus",title:"Cerberus",description:"A Python file backup application.",source:"@site/docs/projects/cerberus.md",sourceDirName:"projects",slug:"/projects/cerberus",permalink:"/docs/projects/cerberus",draft:!1,unlisted:!1,tags:[{inline:!0,label:"Python",permalink:"/docs/tags/python"},{inline:!0,label:"Docker",permalink:"/docs/tags/docker"},{inline:!0,label:"Jenkins",permalink:"/docs/tags/jenkins"}],version:"current",sidebarPosition:5,frontMatter:{project:"Cerberus",title:"Cerberus",sidebar_position:5,tags:["Python","Docker","Jenkins"]},sidebar:"tutorialSidebar",previous:{title:"Cher Ami",permalink:"/docs/projects/cher_ami"},next:{title:"Questrade Bot",permalink:"/docs/projects/questrade_bot"}},c={},d=[{value:"Why not syncing my documents to the same pCloud drive with something like Rclone?",id:"why-not-syncing-my-documents-to-the-same-pcloud-drive-with-something-like-rclone",level:2},{value:"Why not syncing documents with something like a free Google Drive then?",id:"why-not-syncing-documents-with-something-like-a-free-google-drive-then",level:2},{value:"Risks covered",id:"risks-covered",level:2},{value:"Risks still remaining",id:"risks-still-remaining",level:2}];function h(e){const t={a:"a",admonition:"admonition",h2:"h2",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"A Python file backup application."}),"\n",(0,o.jsxs)(t.p,{children:["Named after ",(0,o.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Cerberus",children:"the Greek hound of Hades, a multi-headed dog that guards the gates of the Underworld"}),"."]}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsxs)(t.p,{children:["I stopped this project when Proton released a got enough desktop app for ",(0,o.jsx)(t.a,{href:"https://proton.me/drive",children:"ProtonDrive"}),". I was already paying for an account for their great email service ; hence it was a free addition to my acccount."]})}),"\n",(0,o.jsx)(s.Z,{button:!0,to:"https://github.com/brunopc-net/Cerberus",text:"Repository"}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(t.p,{children:"This project was built to consolidate my knowledge after watching these courses:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://www.udemy.com/course/jenkins-from-zero-to-hero/",children:"Jenkins, From Zero To Hero: Become a DevOps Jenkins Master"})}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"https://www.udemy.com/course/docker-mastery/",children:"Docker Mastery: with Kubernetes +Swarm from a Docker Captain"})," (part 1)"]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"I also wanted to sharpen my Python skills."}),"\n",(0,o.jsxs)(t.p,{children:["I wanted to create something useful and I needed something to automatically backing up my documents from my Raspberry cloud server at home to my ",(0,o.jsx)(t.a,{href:"https://www.pcloud.com/",children:"pCloud"})," family drive."]}),"\n",(0,o.jsxs)(t.h2,{id:"why-not-syncing-my-documents-to-the-same-pcloud-drive-with-something-like-rclone",children:["Why not syncing my documents to the same pCloud drive with something like ",(0,o.jsx)(t.a,{href:"https://rclone.org/",children:"Rclone"}),"?"]}),"\n",(0,o.jsx)(t.p,{children:"The pCloud drive is shared with my family. Sharing a readable copy of my documents poses two main risks:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Privacy concerns. Some of my documents are very sensitive (like tax reports, critical business work). The privacy risks apply to my family as well as to pCloud entities"}),"\n",(0,o.jsx)(t.li,{children:"Loss of data, if another family member makes a mistake and delete some of my data, I would potentially lose essential documents"}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["The privacy concern can be worked around as I encrypt my documents with ",(0,o.jsx)(t.a,{href:"https://cryptomator.org/",children:"Cryptomator"}),". However, the data loss risk is still a factor."]}),"\n",(0,o.jsx)(t.h2,{id:"why-not-syncing-documents-with-something-like-a-free-google-drive-then",children:"Why not syncing documents with something like a free Google Drive then?"}),"\n",(0,o.jsx)(t.p,{children:"True, if I use a personal Google Drive to sync encrypted version of my documents, I would tackle all the privacy risks mentioned above."}),"\n",(0,o.jsx)(t.p,{children:"However, there's this other thing. I hate being locked in gradually with one company. Even my financial accounts are all separated (checking account, mortgage, investments...). I always refused to buy Apple products to avoid getting locked in their ecosystem. Then I bought my first Android phone and started using Google apps. Ironically, I started to be locked in as much as I would with Apple. The only difference was it was more on the software side."}),"\n",(0,o.jsxs)(t.p,{children:["I decided years ago to free myself of any big tech giant. They represent a risk to my individual freedom as well as the risk they pose on our digital collective freedom. ",(0,o.jsx)(t.a,{href:"https://twitter.com/dhh/status/1212769409451864064",children:"#Heal the web"})]}),"\n",(0,o.jsx)(t.p,{children:"There is also another risk: the risk of myself deleting a document that shouldn't have been deleted. If I use something like Rclone to sync with pCloud or Google Drive, I still need regular backups to cover the risk of my personal human error."}),"\n",(0,o.jsx)(t.h2,{id:"risks-covered",children:"Risks covered"}),"\n",(0,o.jsxs)(t.p,{children:["Hence this project. My documents are covered from:",(0,o.jsx)("br",{}),"\n\u2714\ufe0f Hardware destruction (fire, flooding)",(0,o.jsx)("br",{}),"\n\u2714\ufe0f Property theft",(0,o.jsx)("br",{}),"\n\u2714\ufe0f Human manipulation error (from me of a member of my family)",(0,o.jsx)("br",{}),"\n\u2714\ufe0f pCloud failure that would compromise the integrity of my data",(0,o.jsx)("br",{}),"\n\u2714\ufe0f pCloud data hacking that would pose a risk on my privacy",(0,o.jsx)("br",{})]}),"\n",(0,o.jsx)(t.p,{children:"I also have a third copy of my data that I update yearly. It covers the risk of human error even further if I delete some document I shouldn't and I don't realize it in the following 24h window."}),"\n",(0,o.jsx)(t.p,{children:"Also, that third copy covers off the -very slim- probability of a Cryptomator bug that corrupts my encrypted data. That third copy is encrypted with another software (7zip)."}),"\n",(0,o.jsx)(t.h2,{id:"risks-still-remaining",children:"Risks still remaining"}),"\n",(0,o.jsx)(t.p,{children:"\u274c If I delete an important document, it's been >24h, and that document wasn't part of the last yearly backup"}),"\n",(0,o.jsx)(t.p,{children:"That's why I'm thinking adding last week/last month/last quarter backup capabilities to Cerberus."})]})}function m(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},2903:(e,t,n)=>{n.d(t,{Z:()=>s});n(7294);var o=n(4996),r=n(5893);const s=function(e){let{button:t,to:n,text:s}=e;const i=n.includes("http")?n:(0,o.ZP)(n);return(0,r.jsx)("a",{className:`${t&&"button button--secondary button--lg"}`,target:"_blank",href:i,children:s})}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>i});var o=n(7294);const r={},s=o.createContext(r);function i(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);